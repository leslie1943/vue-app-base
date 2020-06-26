<template>
  <div id="app">
    <!-- <img alt="Vue logo" :src="logo" /> -->
    <home-carousel></home-carousel>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <home-list></home-list>
    <div>
      <el-button type="primary" @click="handleTestLoader">Test custom loader</el-button>
    </div>
  </div>
</template>

<script>
// 使用 webpack => resolve=> alias 配置的 别名
import HelloWorld from 'conponents/HelloWorld.vue'
import HomeCarousel from 'conponents/home-carousel.vue'
import HomeList from 'conponents/home-list.vue'
import logo from 'static/images/logo.png'
import eproContent from 'static/epro/demo.epro'
export default {
  name: 'App',
  data() {
    return {
      logo: logo,
      tableData: [],
      loading: false
    }
  },
  components: {
    HelloWorld, HomeCarousel, HomeList
  },
  computed: {
  },
  methods: {
    handleTestLoader() {
      this.$message.warning(eproContent)
    }
  },
  mounted() {
    $vue.$message.success('在 eslintrc.js 里配置了 globals: $vue')
    this.loading = true
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        this.tableData = data
        this.loading = false
      })
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
  margin-top: 60px;
}
</style>
