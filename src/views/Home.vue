<template>
  <div class="home">
    <img src="../assets/logo.png">
    <span v-if="authenticated">Logged in</span>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["authenticated"]
};
</script>
