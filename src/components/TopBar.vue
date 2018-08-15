<template>
  <div id="top-bar">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      dark
      temporary
      absolute
      app>
      <v-list class="pa-1">
        <v-list-tile
          v-if="mini"
          @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile
          v-if="authenticated"
          avatar
          tag="div">
          <v-list-tile-avatar>
            <img src="`${user.picture}`">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ user.name }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile @click="login">
          <v-list-tile-action>
            <v-icon>input</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list
        class="pt-0"
        dense>
        <v-divider light/>
        <v-list-tile
          v-for="item in items"
          :to="item.link"
          :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      color="transparent elevation-0">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "TopBar",
  props: {
    authenticated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawer: false,
      mini: false,
      items: [
        { title: "Home", icon: "home", link: "/" },
        { title: "Tournaments", icon: "directions_bike", link: "/tournaments" }
      ]
    };
  },
  // computed: {
  //   user() {
  //     return this.auth.userProfile;
  //   }
  // },
  methods: {
    login() {
      console.log("log me in");
      this.$router.push({ path: "dashboard" });
    }
  }
};
</script>
