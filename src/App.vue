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
  color: #2c3e50;
  margin-bottom: 10px;
  overflow-x: hidden;
}
</style>
