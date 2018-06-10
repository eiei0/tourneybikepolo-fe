<template>
  <v-toolbar
    app
    color="transparent elevation-0">
    <v-toolbar-items>
      <v-btn flat><router-link to="/">Home</router-link></v-btn>
      <v-avatar
        v-if="authenticated"
        tile="tile">
        <img
          :src="`${user.picture}`"
          :alt="`${user.name}`">
      </v-avatar>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: "TopBar",
  props: {
    authenticated: {
      type: Boolean,
      default: false
    },
    auth: {
      type: Object,
      required: true
    }
  },
  computed: {
    user() {
      return this.auth.userProfile;
    }
  }
};
</script>
