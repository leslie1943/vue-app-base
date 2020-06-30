<template>
  <div class="frame-in-header">
    <el-row>
      <el-col :span="12" class="top-row-left"></el-col>
      <el-col :span="12" class="top-row-right">
        <div class="top-operation">
          <el-dropdown style="cursor:pointer;">
            <i style="color:#fff;" class="el-icon-arrow-down"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <span>Leslie</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'frame-in-header',
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
.frame-in-header {
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
