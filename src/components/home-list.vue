<template>
  <div style="padding:20px;">
    <el-table :data="tableData" v-loading="loading">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="avatar_url" label="avatar">
        <template slot-scope="props">
          <img style="width:40px;height:40px;" :src="props.row.avatar_url" />
        </template>
      </el-table-column>
      <el-table-column prop="login" label="Name"></el-table-column>
      <el-table-column prop="type" label="Type"></el-table-column>
      <el-table-column prop="followers_url" label="Followers url"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'home-list',
  data() {
    return {
      tableData: [],
      loading: false
    }
  },
  mounted() {
    $vue.$message.success('在 eslintrc.js 里配置了 globals: $vue')
    this.loading = true
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        this.tableData = data ? data.slice(0, 5) : []
        this.loading = false
      })
  }
}
</script>

<style>
