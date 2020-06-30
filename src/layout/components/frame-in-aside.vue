<template>
  <div class="frame-in-layout-aside">
    <el-aside width="200px" class="aside">
      <el-menu>
        <el-submenu v-for="(menu,index) in menuRoutes" :key="index" :index="menu.name">
          <template slot="title">
            <i class="el-icon-message"></i>
            {{menu.name}}
          </template>
          <div v-if="menu.hasChildren">
            <el-menu-item
              v-for="(menuItem,id)
            in
            menu.children"
              :key="id"
              :index="menuItem.name"
            >{{menuItem.name}}</el-menu-item>
          </div>
        </el-submenu>
      </el-menu>
      <!-- <el-menu :default-openeds="['1','2','3']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>导航一
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>导航二
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
          <el-menu-item index="1-4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>导航三
          </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
          <el-menu-item index="3-4">选项4</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>导航四
          </template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>
          <el-menu-item index="4-4">选项4</el-menu-item>
          <el-menu-item index="4-5">选项5</el-menu-item>
        </el-submenu>
      </el-menu>-->
    </el-aside>
  </div>
</template>

<script>

export default {
  name: 'frame-in-aside',
  data() {
    return {
    }
  },
  mounted() {
    console.info($vue)
  },
  computed: {
    menuRoutes() {
      const asideMenus = []
      $vue.$router.options.routes.forEach(item => {
        if (!item.hidden) {
          asideMenus.push({ path: item.path, name: item.name, hasChildren: Reflect.has(item, 'children'), children: item.children || [] })
        }
      })
      return asideMenus
    }
  }
}
</script>

<style lang="scss">
.frame-in-layout-aside {
  .aside {
    text-align: left;
    background-color: rgb(238, 241, 246);
  }
}
</style>
