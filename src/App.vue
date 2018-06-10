<template>
  <div id="app">
    <v-app>
      <TopBar
        :auth="auth"
        :authenticated="authenticated"/>
      <v-content>
        <v-container fluid>
          <v-layout
            row
            wrap>
            <v-flex xs12>
              <router-view
                :auth="auth"
                :authenticated="authenticated"/>
            </v-flex>
            <button @click="login">Login</button>
            <button @click="logout">Logout</button>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import AuthService from "./services/AuthService";
import TopBar from "./components/TopBar";

const auth = new AuthService();
const { login, logout, authenticated, authNotifier } = auth;

export default {
  name: "Home",
  components: {
    TopBar
  },
  data() {
    authNotifier.$on("authChange", authState => {
      console.log("Auth changed");
      this.authenticated = authState.authenticated;
    });
    return {
      auth,
      authenticated,
    };
  },
  methods: {
    login,
    logout
  }
};
</script>

<style>
.application--wrap {
  background-color: #ffffff;
}
</style>
