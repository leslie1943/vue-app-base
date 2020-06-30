<template>
  <div>
    <div>User detail</div>
    <div>The param is {{userid}}</div>
    <el-button @click="handleToPushWithName">Push with Name</el-button>
    <el-button @click="handleToReplaceWithName">Replace with Name</el-button>
  </div>
</template>
<script>
export default {
  name: 'user-detail',
  props: ['userid'],
  methods: {
    handleToPushWithName() {
      this.$router.push({ name: 'Films' })
    },
    handleToReplaceWithName() {
      this.$router.replace({ name: 'Films' })
    }
  }
}
</script>
