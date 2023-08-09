<template>
  <div class="app">
    <header-component></header-component>

    <div class="app__wrapper">
      <router-view></router-view>
    </div>

    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: { HeaderComponent, FooterComponent },
  name: "App",
  computed: {
    pageTitle() {
      return this.$route.name;
    },
  },
  watch: {
    pageTitle(val) {
      document.title = val;
    },
  },
  created() {
    document.title = this.$route.name;
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-Regular.woff") format("woff");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", serif;
}

.app {
  max-width: 1240px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
}

.app__wrapper {
  width: 100%;
  margin: 0 auto;
  padding: 30px 0;
}
</style>
