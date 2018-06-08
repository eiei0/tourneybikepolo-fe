<template>
  <div class="topbar">
    <span>{{ user }}</span>
  </div>
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
