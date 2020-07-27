<template>
    <div>
    <v-app-bar dark prominent width="100%" height="200px;" style="background-color:black;">
      <v-layout row d-flex class="navbar-text">

        <v-flex xs12 sm12 lg12 md12 d-flex justify-content-center>
          <router-link to="/" class="center no-under"><p class="title-nav">ANATOMY JIU JITSU</p></router-link>
        </v-flex>

        <v-flex xs12 sm12 lg12 md12 d-flex justify-content-center>
          <span class="center"> 
              <router-link to="/shop" class="no-under"><v-btn depressed text class="shop-nav">Shop</v-btn></router-link>
              <router-link to="/cart" class="no-under"><v-btn depressed text class="cart-nav">Cart<counter-badge :count="cartCount"></counter-badge></v-btn></router-link>
              </span>
        </v-flex>
    
     </v-layout>
    </v-app-bar>
</div>
</template>
<script>
import CounterBadge from '@/components/CounterBadge';
export default {
  name: 'app',
  components: { CounterBadge },
  computed: {
    cartCount() {
      return this.$store.state.cart.length
    }
  }
}
</script>
<style>
.navbar-text {
    padding-top:1em;
}
.title-nav {
    padding-bottom:0em;
    color:white;
    font-family: 'Monoton', cursive;
    font-size:2em!important;
}
.shop-nav {
    padding-right:.5em;
    
}
.cart-nav {
    padding-left:.5em;
}
.v-btn:hover:before {
      background-color: transparent;
      display: none; 
    }
.v-ripple__animation{ display: none; }
</style>