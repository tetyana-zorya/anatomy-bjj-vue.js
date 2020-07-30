<template>
<div>
    <v-container>
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="4"
        class="item-cols"
      >
        <v-card
          class="pa-2"
          tile
          elevation="0"
        >
         <router-link :to="{ name: 'product', params: { id: product.id}}">
            <img class="prod-img" :src="imagePath(product)" alt="">
            <p>{{ product.name }}</p>
            <p><em>${{ product.price }}</em></p>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'itemcard',
  computed: {
    products: function() {
      return this.$store.state.products
    },
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    }
  }
};
</script>

<style>
.prod-img {
  max-height: 300px;
}
.item-cols {
    text-align:center;
}
</style>