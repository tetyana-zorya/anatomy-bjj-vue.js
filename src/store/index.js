import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [ ],
    products: [
      {
        name: "Kyosai Demons Rash Guard",
        id: 53362,
        featured: false,
        apparel: false,
        gear: true,
        price: 49.99,
        color: "grey",
        sizes: ['xs-small','small','medium','large','x-large'],
        gender:'women',
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash",
          additional: "Some colors feature different-colored yarns for a heathered effect."
        },
        images: [
          '53362-1.jpg',
          '53362-2.jpg',
          '53362-3.jpg',
        ]
      },
      {
        name: "Cardigan Sweater",
        id: 53363,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        women: true,
        men: false,
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Sweaters",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53363-1.jpg',
          '53363-2.jpg',
          '53363-3.jpg',
          '53363-4.jpg',
          '53363-5.jpg',
        ]
      },
      {
        name: "Slim Fit Jeans",
        id: 53364,
        featured: true,
        price: 29.5,
        color: "navy",
        size: {
          waist: 32,
          length: 32,
        },
        gender:'women',
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Pants",
        details: {
          material: "denim",
          fit: "slim",
          maintenance: "machine wash cold with like colors, air dry",
          additional: ""
        },
        images: [
          '53364-1.jpg',
          '53364-2.jpg',
          '53364-3.jpg',
        ]
      },
      {
        name: "Floral Ruffle Wrap Dress",
        id: 53365,
        featured: false,
        price: 129,
        color: "navy",
        size: 6,
        gender:'women',
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Dresses",
        details: {
          material: "nylon",
          fit: "Fitted through the chest and waist, flare skirt.",
          maintenance: "machine wash cold with like colors, air dry",
          additional: "Wrap waist with internal button closure for an extra secure fit."
        },
        images: [
          '53365-1.jpg',
          '53365-2.jpg',
          '53365-3.jpg',
        ]
      },
      {
        name: "SUPIMA® Cotton T-Shirt",
        id: 53366,
        featured: false,
        gender:'women',
        price: 20.7,
        color: "white",
        size: "small",
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "Fitted shoulders and chest, straight through the waist and hip.",
          maintenance: "machine wash warm with like colors, tumble dry low",
          additional: "Crew neck. Short sleeves with fixed, rolled cuffs."
        },
        images: [
          '53366-1.jpg',
          '53366-2.jpg',
        ]
      },
      {
        name: "Squareneck Tank Top",
        id: 53367,
        featured: false,
        price: 49.5,
        color: "navy",
        size: "medium",
        gender:'women',
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "A little room through the chest, arms and waist.",
          maintenance: "machine wash warm with like colors, tumble dry low",
          additional: "Rib-knit polo collar. Short sleeves with rib-knit trim."
        },
        images: [
          '53367-1.jpg',
        ]
      },
      {
        name: "Utility Jumpsuit",
        id: 53368,
        featured: false,
        price: 69.5,
        color: "green",
        size: {
          waist: 32
        },
        gender:'women',
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shorts",
        details: {
          material: "cotton",
          fit: "Sits at the waist, slim through the thigh.",
          maintenance: "machine wash warm with like colors, tumble dry low",
          additional: "9-inch inseam"
        },
        images: [
          '53368-1.jpg',
          '53368-2.jpg',
        ]
      },
      {
        name: "Short Sleeve Wrap-Front Top",
        id: 53369,
        featured: true,
        price: 128.5,
        color: "black",
        size: 8,
        gender:'women',
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shoes",
        details: {
          material: "leather",
          fit: "Breathable synthetic lining. Insole with added stability in the heel.",
          maintenance: "",
          additional: "3.3-inch heel height"
        },
        images: [
          '53369-1.jpg',
        ]
      },
      {
        name: "Squareneck Short Sleeve Bodysuit",
        id: 53370,
        featured: false,
        price: 114.99,
        color: "navy",
        size: 10,
        gender:'women',
        quantity: 10,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shoes",
        details: {
          material: "suede",
          fit: "Our Advanced Comfort Technology insoles include shock absorption in the heel, arch support and breathable flex on the toe pads.",
          maintenance: "",
          additional: "Flat laces"
        },
        images: [
          '53370-1.jpg',
          '53370-2.jpg',
        ]
      },
    ]
  },
  mutations: {
    addToCart (state, payload) {
      state.cart.push( Number(payload) )
    },
    removeFromCart (state, payload) {
      let indexToDelete = state.cart.indexOf( Number(payload) );
      state.cart.splice(indexToDelete, 1)
    },
    decrementProductInventory(state, payload) {
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity--;
    },
    incrementProductInventory(state, payload) {
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity++;
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload),
      commit('decrementProductInventory', payload)
    },
    removeFromCart({ commit }, payload) {
      commit('removeFromCart', payload)
      commit('incrementProductInventory', payload)
    }
  },
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0]
    },
    cartItems: (state) => {
      return state.cart.map(
        itemId => state.products.find(
          product => product.id === itemId
        )
      )
    },
    featuredProducts: (state) => {
      return state.products.filter(p => p.featured)
    }
    },
    apparelProducts: (state) => {
      return state.products.filter(p => p.apparel)
    },
    gearProducts: (state) => {
      return state.products.filter(p => p.gear)
    },
  productsByCategory: (category) => {
      return this.state.products.filter(p => p.category === category)
  }
});