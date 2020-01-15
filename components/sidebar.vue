<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#304156"
    text-color="#f4f4f5"
    active-text-color="#409EFF"
  >
    <nuxt-link to="/">
      <el-menu-item index="/">
        <i class="el-icon-house"></i>
        <span class="elHome" slot="title">首页</span>
      </el-menu-item>
    </nuxt-link>

    <nuxt-link to="/commentsList">
      <el-menu-item index="commentsList">
        <i class="el-icon-notebook-1"></i>
        <span slot="title">评论列表</span>
      </el-menu-item>
    </nuxt-link>

    <nuxt-link to="/addComment">
      <el-menu-item index="addComment">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">添加评论</span>
      </el-menu-item>
    </nuxt-link>
  </el-menu>
</template>


<script>
import { mapState } from 'vuex'

export default {
  props: {
    isCollapse: null,
  },

  computed: {
    ...mapState([
      'title', 'newOrder'
    ]),
    activeMenu () {
      const route = this.$route
      console.warn(route)
      const { meta, name } = route
      console.warn(meta.activeMenu)
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return name
    },
    defaultActive: function () {
      return this.$route.path.replace('/', '');
    }
  },
  methods: {


  },

}
</script>


<style lang="less" scoped>
.el-menu {
  float: left;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 1000;
  height: 100vh;
  // overflow: scroll;
  min-height: 400px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

& .nest-menu .el-submenu > .el-submenu__title,
& .el-submenu .el-menu-item {
  background-color: #1f2d3d !important;

  &:hover {
    background-color: #001528 !important;
  }
}
</style>
