import Vue from 'vue';
import VueRouter from 'vue-router';
import Shop from '@/views/Shop.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';
import GenderOverview from '@/views/GenderOverview.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/products/:id',
    name: 'product',
    component: Product,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart/',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/:gender/',
    name: 'gender-overview',
    component: GenderOverview,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
