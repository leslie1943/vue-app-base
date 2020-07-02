<template>
  <div>
    <!-- <img alt="Vue logo" :src="logo" /> -->
    <home-carousel></home-carousel>
    <!-- <hello-world msg="Welcome to Your Vue.js App" /> -->
    <!-- <home-list></home-list> -->
    <div>
      <el-button type="primary" @click="handleTestLoader">Test custom loader</el-button>
      <el-button type="primary" @click="handleToOther">随便看看</el-button>
    </div>
  </div>
</template>

<script>
// 使用 webpack => resolve=> alias 配置的 别名
// import HelloWorld from 'components/hello-world.vue'
import HomeCarousel from 'components/home-carousel.vue'
// import HomeList from 'components/home-list.vue'
// import logo from 'static/images/logo.png'
import eproContent from 'static/epro/demo.epro'
export default {
  name: 'App',
  data() {
    return {
      // logo: logo,
      tableData: [],
      loading: false
    }
  },
  components: {
    // HelloWorld,
    HomeCarousel
    //  HomeList
  },
  computed: {
  },
  methods: {
    handleTestLoader() {
      this.$notify({
        title: '自定义loader测试',
        message: eproContent,
        duration: 1000
      })
    },
    handleToOther() {
      this.$router.push('/test')
    }
  },
  mounted() {
  }
}
</script>
