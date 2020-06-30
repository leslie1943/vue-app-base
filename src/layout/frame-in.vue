<template>
  <div class="frame-in-layout">
    <!-- header -->
    <frame-in-header></frame-in-header>
    <el-container>
      <!-- menu -->
      <frame-in-aside></frame-in-aside>
      <el-container>
        <!-- inner header -->
        <el-header style="text-align:right; font-size:12px">sss</el-header>
        <!-- body -->
        <el-main style="min-height:80vh">
          <transition name="fade" mode="out-in">
            <router-view key="key" />
          </transition>
        </el-main>
      </el-container>
    </el-container>
    <!-- footer -->
    <frame-in-footer></frame-in-footer>
  </div>
</template>

<script>
import frameInHeader from './components/frame-in-header'
import frameInFooter from './components/frame-in-footer'
import frameInAside from './components/frame-in-aside'
export default {
  name: 'frame-in',
  components: { frameInHeader, frameInAside, frameInFooter },
  data() {
    return {
    }
  },

  computed: {
  }
}
</script>

<style lang="scss">
.frame-in-layout {
  .aside {
    text-align: left;
    background-color: rgb(238, 241, 246);
  }
  .top-operation {
    float: right;
    line-height: 40px;
    margin-right: 40px;
    color: #fff;
  }
  .top-row-left {
    height: 40px;
    background-color: #409eff;
  }
  .top-row-right {
    height: 40px;
    background-color: #409eff;
  }
}
</style>
