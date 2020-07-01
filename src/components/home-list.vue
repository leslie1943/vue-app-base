<template>
  <div style="padding:10px;">
    <el-button type="success" style="margin:10px;" @click="getData">Get Data from Github</el-button>
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
  methods: {
    getData() {
      // $vue.$message.success('在 eslintrc.js 里配置了 globals: $vue')
      this.loading = true
      this.$http({
        method: 'get',
        url: `${this.baseURL}/users`
      }).then(res => {
        this.tableData = res.data ? res.data.slice(0, 20) : []
        this.loading = false
      })
    }
  },
  mounted() {
  }
}
</script>

<style>
