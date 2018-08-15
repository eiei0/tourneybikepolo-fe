<template>
  <div class="home">
    <img
      class="background_image"
      src="../assets/background-image.png">
    <v-jumbotron>
      <v-container>
        <v-layout>
          <v-flex>
            <h1 class="heading">Bike Polo the <em>right</em> way.</h1>
            <h2 class="subheading">Free as long as your tournament is.</h2>
            <v-btn
              class="home-page-btns"
              dark
              color="azure"
              @click="signUp">
              Sign Up
            </v-btn>
            <v-btn
              outline
              class="home-page-btns"
              color="azure"
              @click="login">
              Login
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
export default {
  name: "Home",
  // props: {
  //   authenticated: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  methods: {
    login() {
      console.log("log me in");
      this.$router.push({ path: "dashboard" });
    },
    signUp() {
      console.log("sign me up");
      this.$router.push({ path: "signup" });
    }
  }
};
</script>

<style>
img {
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0px;
  right: 0px;
}
.home h1 {
  font-family: "Open Sans", sans-serif;
  font-size: 40px;
  line-height: normal;
  color: #000000;
}
.home h2 {
  font-family: "Open Sans", sans-serif;
  font-size: 32px;
  line-height: normal;
  letter-spacing: normal;
  color: #5e5d5d;
}
.home-page-btns {
  width: 111px;
}
button .btn:not(.btn--depressed) {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12) !important;
}
button .btn-content {
  width: 111px !important;
}
</style>
