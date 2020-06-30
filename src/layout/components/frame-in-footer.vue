<template>
  <div class="frame-in-footer">
    <el-row>
      <el-col :span="24" class="bottom-row"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'frame-in-footer',
  data() {
    return {
    }
  },
  components: {
  },
  computed: {
  }
}
</script>

<style lang="scss">
.frame-in-footer {
  .bottom-row {
    height: 40px;
    background-color: #909399;
  }
}
</style>
