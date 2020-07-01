<template>
  <div class="home-main-content">
    <!-- Header -->
    <div
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
    </div>
    <!-- main section -->
    <div class="slogan-outter-container">
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
    </div>
    <!-- team-intro -->
    <div class="team-intro">
      <el-row :gutter="10">
        <el-col :span="12">
          <el-row>
            <h2 style="color:#f56c6c">球队历史及主要荣誉</h2>
          </el-row>
          <div style="height:1px;border-top:1px solid #f56c6c;"></div>
          <el-row>
            <ul>
              <li class="message">利物浦是英格兰足球历史上最成功的俱乐部之一,也是欧洲乃至世界最成功的足球俱乐部之一.</li>
              <li
                class="message"
              >利物浦一共夺取过19次英格兰顶级联赛冠军、7次英格兰足总杯冠军、8次英格兰联赛杯冠军、15次英格兰社区盾杯冠军、6次欧洲冠军联赛冠军、3次欧洲联盟杯冠军、4次欧洲超级杯冠军以及1次国际足联俱乐部世界杯冠军,也曾为已解散的G14创立成员.</li>
              <li class="message">2018/19赛季,利物浦2比0战胜热刺,历史上第六次捧起欧洲冠军联赛冠军奖杯,这也是红军时隔十四年在这项赛事中的王者归来.</li>
              <li class="message">2019年12月,利物浦1比0击败弗拉门戈首夺世俱杯冠军.</li>
              <li class="message">2020年6月26日,在2019-2020赛季英格兰足球超级联赛中,利物浦队获得冠军.</li>
            </ul>
          </el-row>
          <div style="text-align:left;">
            <el-button style="width:240px;background-color:#f56c6c;color:#FFF">Keep Red..</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <el-row>
            <h2 style="color:#f56c6c">夺冠视频</h2>
          </el-row>
          <div style="height:1px;border-top:1px solid #f56c6c;"></div>
          <el-row>
            <ul>
              <li class="message">利物浦是英格兰足球历史上最成功的俱乐部之一,也是欧洲乃至世界最成功的足球俱乐部之一.</li>
              <li
                class="message"
              >利物浦一共夺取过19次英格兰顶级联赛冠军、7次英格兰足总杯冠军、8次英格兰联赛杯冠军、15次英格兰社区盾杯冠军、6次欧洲冠军联赛冠军、3次欧洲联盟杯冠军、4次欧洲超级杯冠军以及1次国际足联俱乐部世界杯冠军,也曾为已解散的G14创立成员.</li>
              <li class="message">2018/19赛季,利物浦2比0战胜热刺,历史上第六次捧起欧洲冠军联赛冠军奖杯,这也是红军时隔十四年在这项赛事中的王者归来.</li>
              <li class="message">2019年12月,利物浦1比0击败弗拉门戈首夺世俱杯冠军.</li>
              <li class="message">2020年6月26日,在2019-2020赛季英格兰足球超级联赛中,利物浦队获得冠军.</li>
            </ul>
          </el-row>
          <div style="text-align:right;">
            <el-button style="width:240px;background-color:#f56c6c;color:#FFF">前往官方网站</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
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
