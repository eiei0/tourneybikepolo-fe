<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <router-view 
      :auth="auth" 
      :authenticated="authenticated">
    </router-view>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </div>
</template>
<script>
import AuthService from "./services/AuthService";
const auth = new AuthService();
const { login, logout, authenticated, authNotifier } = auth;

export default {
  name: "home",
  data() {
    authNotifier.$on("authChange", authState => {
      console.log("Auth changed");
      this.authenticated = authState.authenticated;
    });
    return {
      auth,
      authenticated
    };
  },
  methods: {
    login,
    logout
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
