<template>
  <div>
    <div class="test"></div>
    <div class="text">
      <div>An item may represent a "story" -- much like a story in a newspaper or magazine; if so its description is a synopsis of the story, and the link points to the full story. An item may also be complete in itself, if so, the description contains the text (entity-encoded HTML is allowed; see examples), and the link and title may be omitted. All elements of an item are optional, however at least one of title or description must be present.</div>
      <el-button @click="handleToHome">To home</el-button>
      <el-button @click="handleToIndex">To inner</el-button>
      <el-button @click="handleToUserDetail">To User detail</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
    }
  },
  methods: {
    handleToHome() {
      this.$router.push('/')
    },
    handleToIndex() {
      this.$router.push('/film')
    },
    handleToUserDetail() {
      this.$router.push('/user/detail/1357')
    }
  }
}
</script>
<style lang="less">
.test {
  background-image: url("../../static/images/empty-basketball-court.jpg");
  opacity: 0.3;
  background-size: cover;
  // background-repeat: repeat;
  // height: calc(100vh - 1px);
  // width: calc(100vw -10px);
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  opacity: 0.6;
}
.text {
  font-family: "Average";
  font-size: 24px;
  line-height: 230%;
  padding: 15%;
  display: table-cell;
  vertical-align: middle;
  text-align: left;
}
</style>
