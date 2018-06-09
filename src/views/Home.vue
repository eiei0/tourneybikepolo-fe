<template>
  <div class="home">
    <v-jumbotron>
      <v-container>
        <v-layout>
          <v-flex>
            <h1>Bike polo tournaments the right way.</h1>
            <h2 class="subheading">Free as long as your tournament is.</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <img
      class="background_image"
      src="../assets/background-image.png">
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    authenticated: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
img {
  width: 758px;
  height: 1024px;
  object-fit: contain;
  position: absolute;
  top: 0px;
  right: 0px;
}
.home h1 {
  width: 781px;
  height: 55px;
  font-family: "Open Sans", sans-serif;
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  color: var(--black);
}
.home h2 {
  width: 742px;
  height: 43px;
  font-family: "Open Sans", sans-serif;
  font-size: 32px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #a7a7a7;
}
</style>
