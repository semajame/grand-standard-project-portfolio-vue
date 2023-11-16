<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  data() {
    return {};
  },

  components: {
    Header,
  },
};
</script>

<style></style>
