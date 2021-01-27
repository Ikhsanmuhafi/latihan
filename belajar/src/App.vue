<template>
  <div id="app">
    <div>
      <Navbar />
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
