<template >
  <div class="dialog-victims-container">
    <el-dialog
      center
      title="The victims in Hillsborough"
      :show-close="true"
      width="75%"
      top="1vh"
      :visible="xVisible"
      @close="handleClose"
    >
      <div style="background-color:#303133;line-height:24px;">
        <el-row style="padding:10px;border:1px solid #f56c6c;border-bottom:0px;">
          <el-col :span="6" v-for="(item,index) in victimFirstHalfList" :key="index">
            <span class="victim-name-red">{{item.name + '(' + item.age + ')'}}</span>
          </el-col>
        </el-row>
        <el-row style="padding:10px;border:1px solid teal;border-top:0px;">
          <el-col :span="6" v-for="(item,index) in victimSecondHalfList" :key="index">
            <span class="victim-name-teal">{{item.name + '(' + item.age + ')'}}</span>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { victimFirstHalf, victimSecondHalf } from '../data/hillsborough-victims'

export default {
  name: 'dialog-victims',
  props: {
    visible: {
      type: Boolean
    }
  },
  data() {
    return {
      victimFirstHalfList: victimFirstHalf,
      victimSecondHalfList: victimSecondHalf,
      xVisible: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    }
  },
  watch: {
    visible(newVal, oldVal) {
      this.xVisible = newVal
    }
  }
}
</script>
<style lang="scss">
.dialog-victims-container {
  .victim-name-red {
    color: #f56c6c;
  }
  .victim-name-teal {
    color: teal;
  }
  .victim-name-red:hover {
    color: #fff;
  }
  .victim-name-teal:hover {
    color: #fff;
  }
}
</style>
