<template>
  <div class="block">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in carouselList" :key="item">
        <img style="height:400px;" :src="item" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import c1 from '../../static/images/1.jpg'
import c2 from '../../static/images/2.jpg'
import c3 from '../../static/images/3.jpg'
import c4 from '../../static/images/4.jpg'
import c5 from '../../static/images/5.jpg'
export default {
  name: 'home-carousel',
  data() {
    return {
      carouselList: [c1, c2, c3, c4, c5]
    }
  }

}
</script>
