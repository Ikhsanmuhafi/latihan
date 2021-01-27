<template>
  <div class="card shadow card-product">
    <img :src=" 'assets/images2/' + drink.gambar " class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ drink.nama }}</h5>
      <p
        class="card-text"
      >Harga : Rp. {{ drink.harga }}</p>
      <router-link class="btn badge-warning" :to="'/drinks/'+drink.id"><b-icon-cart></b-icon-cart> Pesan</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDrink",
  props: ["drink"],
};
</script>

<style>
</style>