<template>
  <div id="app">
    <v-app>
      <TopBar />
      <v-content>
        <v-container fluid>
          <v-layout
            row
            wrap>
            <v-flex xs12>
              <router-view />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import TopBar from "./components/TopBar";

export default {
  name: "Home",
  components: {
    TopBar
  }
};
</script>

<style>
.application--wrap {
  background-color: #ffffff;
}
</style>
