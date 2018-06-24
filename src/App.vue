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
                :authenticated="authenticated"/>
            </v-flex>
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
  ready() {
    this.$on("loginAttempt", () => {
      this.login;
    });
  },
  data() {
    authNotifier.$on("authChange", authState => {
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
.application--wrap {
  background-color: #ffffff;
}
</style>
