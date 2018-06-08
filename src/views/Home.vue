<template>
  <div class="home">
    <span v-if="authenticated">Logged in</span>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["authenticated"]
};
</script>
