<template>
  <v-app>
    <v-content>
    <NavBar />
    </v-content>
    <v-content>
    <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name:'navbar',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
.no-under {
  text-decoration: none;
}
</style>