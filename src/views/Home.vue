<template>
  <div class="home">
    <img
      class="background_image"
      src="../assets/background-image.png">
    <v-jumbotron>
      <v-container>
        <v-layout>
          <v-flex>
            <h1>Bike polo tournaments the right way.</h1>
            <h2 class="subheading">Free as long as your tournament is.</h2>
            <v-btn
              v-if="!authenticated"
              class="home-page-btns"
              dark
              color="azure"
              @click="login">
              Login
            </v-btn>
            <v-btn
              v-if="!authenticated"
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
<<<<<<< HEAD
    <img
      class="background_image"
      src="../assets/background-image.png">
=======
>>>>>>> c6517c8f8c489b03dc19c88e769dac6384909881
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    authenticated: {
<<<<<<< HEAD
      type: Boolean,
      default: false
=======
      type: String,
      default: ""
    }
  },
  methods: {
    login() {
      this.$emit("loginAttempt");
>>>>>>> c6517c8f8c489b03dc19c88e769dac6384909881
    }
  }
};
</script>

<style>
img {
<<<<<<< HEAD
  width: 758px;
  height: 1024px;
  object-fit: contain;
=======
  height: 100%;
  object-fit: cover;
>>>>>>> c6517c8f8c489b03dc19c88e769dac6384909881
  position: absolute;
  top: 0px;
  right: 0px;
}
.home h1 {
<<<<<<< HEAD
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
=======
  font-family: "Open Sans", sans-serif;
  font-size: 40px;
  line-height: normal;
  color: #000000;
}
.home h2 {
  font-family: "Open Sans", sans-serif;
  font-size: 32px;
>>>>>>> c6517c8f8c489b03dc19c88e769dac6384909881
  line-height: normal;
  letter-spacing: normal;
  color: #a7a7a7;
}
<<<<<<< HEAD
=======
.home-page-btns {
  width: 111px;
}
button .btn:not(.btn--depressed) {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12) !important;
}
button .btn-content {
  width: 111px !important;
}
>>>>>>> c6517c8f8c489b03dc19c88e769dac6384909881
</style>
