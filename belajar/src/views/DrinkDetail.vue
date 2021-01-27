<template>
  <div class="food-detail">
    <!-- <Navbar /> -->
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/drinks" class="text-dark">Drinks</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Drink Order</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src=" '../assets/images2/' + drink.gambar " class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ drink.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga :
            <strong>Rp. {{ drink.harga }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input type="number" class="form-control" v-model="pesan.jumlah_pemesanan" />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan"
              ></textarea>
            </div>

            <button type="submit" class="btn badge-success" @click="pemesanan">
              <b-icon-cart></b-icon-cart>Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "DrinkDetail",
  components: {
    // Navbar,
  },
  data() {
    return {
      drink: {},
      pesan: {},
    };
  },
  methods: {
    setDrink(data) {
      this.drink = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.drinks = this.drink;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang"})
            this.$toast.success("Sukses Masuk Keranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Jumlah Pesanan Harus diisi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/drinks/" + this.$route.params.id)
      .then((response) => this.setDrink(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>