<template>
  <div id="app">
    <!-- <img :src="logo" /> -->
    <router-view key="key"></router-view>
  </div>
</template>

<script>

import logo from 'static/images/logo.png'
export default {
  name: 'App',
  data() {
    return {
      logo: logo
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 20px; */
  /* margin-top: 2px; */
  margin-top: 0px;
}
</style>
