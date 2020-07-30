
<template>
  <div>
    <!--v-container style="background-color:#D4E157; margin-top:3em;">
    <section class="wrapper" style="padding-bottom:2em;">
      <h2 style="padding-top:2em; padding-bottom:1em; color:black;">Featured Items</h2>
      <ul class="featured-items">
        <li v-for="product in featuredProducts" :key="product.id" class="featured-items__item">
          <router-link :to="{ name: 'product', params: { id: product.id}}" style="text-decoration:none;">
            <img class="product-image" :src="imagePath(product)" alt="">
            <v-btn elevation="0" style="background-color:transparent; padding-top:1em;" class="item-btn" width="210px">
            <p style="padding-top:1em;">{{ product.name }} <br>${{ product.price }}</p>
            </v-btn>
          </router-link>
        </li>
      </ul>
    </section>
    </v-container-->

    <v-container height="60vh" class="shop-banner">
    </v-container>

    <v-card title elevation="0" style="padding-top:4em;">
      <itemcard />
    </v-card>
  
    
  </div>
</template>
 
<script>
import itemcard from '@/components/itemcard';
export default {
  name: 'shop',
  components: {
    itemcard,
  },
  computed: {
    products: function() {
      return this.$store.state.products
    },
    featuredProducts: function() {
      return this.$store.getters.featuredProducts
    },
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`);
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items__item {
  width: 33%;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 250px;
}
.item-btn {
  font-weight: bold;
  color:black;
}
.item-btn:hover {
  color:#82B1FF;
}
.shop-banner {
  background-image: url('assets/img/site-img/footlock.png')
}
</style>