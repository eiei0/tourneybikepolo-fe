import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard";
import SignUp from "./views/AuthProviders";
import Tournaments from "./views/Tournaments";
// import Callback from "./views/Callback";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/signup",
      name: "signUp",
      component: SignUp
    },
    {
      path: "/tournaments",
      name: "tournaments",
      component: Tournaments
    }
    // {
    //   path: "/users/callback",
    //   name: "callback",
    //   component: Callback
    // }
  ]
});
