<template>
  <div class="home-main-content">
    <!-- Header -->
    <!-- <div
      class="top-header"
      :style="{'box-shadow': scrollHeight > 0 ? '0 0 5px #888':'0 0 5px #888'}"
    >
      <div class="left">
        <span style="font-size:24px;">This Is Anfield</span>
      </div>
      <div class="middle">
        <span>HONORS</span>
      </div>
      <div class="middle">
        <span>ALBUMS</span>
      </div>
      <div class="right">
        <span>ABOUT US</span>
      </div>
    </div>-->
    <!-- main section -->
    <!-- <div class="slogan-outter-container">
      <el-row>
        <el-col :span="6">
          <div class="slogan-container">
            <img class="slogan-badge" :src="badge" />
          </div>
        </el-col>
        <el-col :span="18">
          <div class="slogan-words">
            <div class="slogan-words-block">
              <div>
                <i>This Is Anfield</i>
                <span style="font-size:32px;">⚽</span>
              </div>
              <div>
                <i>This Means More</i>
              </div>
              <div style="font-size:32px;">
                <i>#YNWA @Kops</i>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>-->
    <!-- team-intro -->
    <div class="team-intro"></div>
  </div>
</template>

<script>
import badge from '../../static/images/badge.svg'
export default {
  name: 'home-carousel',
  data() {
    return {
      badge: badge,
      scrollHeight: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll() {
      this.scrollHeight = document.documentElement.scrollTop
    }
  }
}
</script>

<style lang="scss">
.home-main-content {
  .top-header {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    text-align: center;
    z-index: 1000;
    .left {
      width: 25%;
      height: 50px;
      background-color: #f56c6c;
      line-height: 50px;
      color: #fff;
    }
    .left:hover {
      cursor: pointer;
      background-color: #303133;
      color: #f56c6c;
      font-weight: 600;
    }
    .middle {
      width: 25%;
      height: 50px;
      background-color: #f56c6c;
      line-height: 50px;
      color: #fff;
      cursor: pointer;
    }
    .middle:hover {
      background-color: #303133;
      color: #f56c6c;
      font-weight: 600;
    }
    .right {
      cursor: pointer;
      width: 25%;
      height: 50px;
      background-color: #f56c6c;
      line-height: 50px;
      color: #fff;
    }
    .right:hover {
      background-color: #303133;
      color: #f56c6c;
      font-weight: 600;
    }
  }
  .top-text {
    color: #fff;
  }
  .slogan-outter-container {
    background: #303133;
    height: 400px;
    width: 100%;
    padding: 20px;
    .slogan-container {
      display: flex;
      align-items: center;
      justify-content: center;
      .slogan-badge {
        width: 80%;
      }
    }
    .slogan-words {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 400px;
      width: 100%;
      background: #303133;
      color: #f56c6c;
      font-size: 64px;
      .slogan-words-block {
        display: inline;
        text-align: left;
      }
    }
  }

  .team-intro {
    margin: 10px;
    border: #e4e7ed 1px solid;
    margin-top: 10px;
    text-align: left;
    padding: 10px;
    .message {
      font-size: 18px;
      line-height: 24px;
    }
  }
  .team-intro:hover {
    border: #f56c6c 1px solid;
    background-color: #ebeef5;
  }
}
</style>
