<template>
  <div>
    <v-container style="padding:4em;">
    <section class="wrapper">
      <div class="flex-col">
        <img  style="padding-right:2em;" class="flex-col--2" :src="makeImagePath(product)" alt="">
        <div class="flex-col--2" >
          <h2 style="padding-bottom:.5em;">{{ product.name }}</h2>
          <p>Price: ${{ product.price }}</p>
          <p>Size: {{ product.size }}</p>
          <p>Color: {{ product.color }}</p>
          <p><em>{{ product.quantity }} left in stock</em></p>
           <button @click="addToCart" class="btn btn--grey">Add to Cart</button>
          <h3 style="padding-bottom:.5em; padding-top:.5em;">Details</h3>
          <ul>
            <li>Material: {{ product.details.material }}</li>
            <li>Fit: {{ product.details.fit }}</li>
            <li>Maintenance: {{ product.details.maintenance }}</li>
            <li v-if="product.details.additional">Additional: {{ product.details.additional }}</li>
          </ul>
        </div>
      </div>
    </section>
    </v-container>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'
export default {
  name: 'product',
  mixins: [imagePath],
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.$route.params.id)
      console.log("Added to cart")
    }
  }
};
</script>

<style lang="scss">
.flex-col {
  display: flex;
  align-items: flex-start;
}
.flex-col--2 {
  width: 50%;
}
.flex-justify-right {
  text-align: right;
}
.flex-col--align-center {
  align-items: center;
}
.btn {
  padding: .5rem .75rem;
  border-radius: 3px;
  border: none;
  background-color: transparent;
  font-size: .9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .15s ease;
}
.btn--grey {
  background-color: #2c3e50;
  color: #FFF;
  &:hover, &:focus {
    background-color: #D4E157;
  }
}
</style>