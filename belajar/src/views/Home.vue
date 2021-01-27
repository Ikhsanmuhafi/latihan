<template>
  <div class="home">
    <!-- <Navbar /> -->
    <div class="container">
      <Hero />

      <div class="row mt-3">
        <div class="col">
          <h2>
            Best
            <strong>Foods & Drinks</strong>
          </h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn badge-warning float-left">
            Menu Makanan
          </router-link>
          <router-link to="/drinks" class="btn badge-warning float-right">
            Menu Minuman
          </router-link>
          <!-- <router-link to="/snake" class="btn badge-warning float-center ml-5">
            Menu Minuman
          </router-link> -->
        </div>
      </div>

      <div class="row mb-2">
        <div
          class="col-md-3 mt-3"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
          <!-- <CardDrink :product="drink" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
// import CardDrink from "@/components/CardDrink.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    // Navbar,
    Hero,
    CardProduct,
    // CardDrink
  },
  data() {
    return {
      products: [],
      // Drinks:[]
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>