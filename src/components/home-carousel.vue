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
      <div class="middle">
        <span>MATCHS</span>
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
            <el-button class="main-button-red">Keep Red..</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <el-row>
            <h2 style="color:#f56c6c">官方夺冠视频</h2>
          </el-row>

          <!-- <div style="height:1px;border-top:1px solid #f56c6c;"></div> -->
          <div style="padding:10px;background-color:#000">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :options="playerOptions"
            ></video-player>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- hillsborough -->
    <div class="never-forgotten">
      <div style="font-size:48px;color:#f56c6c">
        <i>
          <strong>
            <span>Never</span>
            <span>
              <span style="color:teal;font-size:40px;">96</span>
            </span>
            <span>Forgotten...</span>
          </strong>
        </i>
      </div>
      <div class="hillsborough">
        <div
          style="font-size:16px;"
        >1989年4月15日,在英国谢菲尔德市希尔斯堡体育场举行的利物浦队对阵诺丁汉森林队的足总杯半决赛中,由于球场结构问题和组织秩序混乱,在比赛开始后尚有5000名利物浦球迷未能入场,警官开启了大门却没有给予必要的引导,致使5000人涌向同一看台,拥挤造成了严重的踩踏伤亡,96人丧生,200多人受伤。因在场警官的谎言、媒体的恶意报道与政府的失公处理,迄今还没有人为希尔斯堡惨案负起应有的责任。2011年10月17日,英政府表示公开此事的全部绝密文件,继续调查。北京时间2012年9月12日,调查结果正式出炉,惨案真相大白,球迷冤情得雪。2016年4月26日,英国高等法院陪审团裁定,踩踏事故发生的原因是南约克郡警方玩忽职守,现场的组织、管理和控制不力,最终导致人群失控,相互踩踏酿成惨剧,当年遇难的96名球迷是被“非法致死”</div>
        <div style="text-align:right;">
          <el-button class="main-button-teal" @click="handleViewVictims">Memorize the victims</el-button>
        </div>
      </div>
    </div>
    <dialog-vicims :visible.sync="visible"></dialog-vicims>
  </div>
</template>

<script>
import badge from 'static/images/badge.svg'
import poster from 'static/images/poster.jpg'
import video from 'static/videos/liverpool-champion.mp4'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import { videoPlayer } from 'vue-video-player'
import DialogVicims from './dialog-victims'
export default {
  name: 'home-carousel',
  components: { videoPlayer, DialogVicims },
  data() {
    return {
      visible: false,
      badge: badge,
      scrollHeight: 0,
      playerOptions: {
        muted: false,
        height: 300,
        width: 800,
        language: 'en',
        autoplay: true,
        controls: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: video
          // src:'http://mpvideo.qpic.cn/0bf2laaacaaae4al67huh5pfawgdafmaaaia.f10002.mp4?dis_k=7331bce00744285b3f9df143c55688f0&dis_t=1593702032'
        }],
        poster: poster
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    handleScroll() {
      this.scrollHeight = document.documentElement.scrollTop
    },
    handleViewVictims() {
      this.visible = true
    }
  }
}
</script>

<style lang="scss">
.home-main-content {
  .main-button-red {
    width: 240px;
    background-color: #f56c6c;
    color: #fff;
  }
  .main-button-teal {
    width: 240px;
    background-color: teal;
    color: #fff;
  }
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
      width: 20%;
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
      width: 20%;
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
      width: 20%;
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
        margin-top: 50px;
        height: 300px;
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

  .never-forgotten {
    margin: 10px;
    border: teal 1px solid;
    margin-top: 10px;
    text-align: center;
    padding: 10px;
    background-color: #303133;
  }
  .hillsborough {
    font-size: 14px;
    color: #fff;
    padding: 10px;
    text-align: left;
    line-height: 24px;
  }
}
</style>
