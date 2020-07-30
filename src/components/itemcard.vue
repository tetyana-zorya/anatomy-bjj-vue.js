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
         <router-link :to="{ name: 'product', params: { id: product.id}}" style="text-decoration:none;">
            <img class="prod-img" :src="imagePath(product)" alt="">
            <v-btn elevation="0" style="background-color:transparent; padding-top:1em;" class="item-btn" width="210px">
            <p style="padding-top:1em;">{{ product.name }} <br>${{ product.price }}</p>
            </v-btn>
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