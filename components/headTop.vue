<template>
  <div class="header_container">
    <i
      class="icon"
      :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="
        () => {
          this.$emit('Collapse', isCollapse);
        }
      "
    ></i>

    <el-breadcrumb
      class="breadcrumb-container"
      separator-class="el-icon-arrow-right"
    >
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
          <!-- 监听title是否指定标题  如有指定标题则覆盖原有标题 -->
          {{ item.name }}
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>

    <div class="right">
      <div class="avator">
        <div class="img">
          <img src="../assets/img/avator.jpg" />
          管理员：{{ user }}
        </div>
        <el-button class="exit" plain size="mini" @click="exit">退出</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import { signout } from '@/api/getData'
// import { baseImgPath } from '@/config/env'
// import { removeStore, getSessStore } from '@/config/mUtils'


export default {
  props: {
    isCollapse: null,
  },

  data () {
    return {
      // baseImgPath,
      // name,
      breadList: []
    }
  },
  mounted () {
    // this.name = getSessStore('username')
    this.getBreadcrumb();
  },
  computed: {
    ...mapState([
      'user'
    ]),
  },
  methods: {
    async exit () {
      // const res = await signout()
      // if (res) {
      // removeStore('token')
      // removeStore('permission')
      // this.$message({
      //   type: 'success',
      //   message: '退出成功'
      // });
      this.$router.push('/');
      // }
    },
    isHome (route) {
      return route.name === "home";
    },
    getBreadcrumb () {
      let matched = this.$route.matched;
      // console.warn(this.$route)
      this.breadList = matched;
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb();
    },
  },
}
</script>

<style lang="less">
.header_container {
  background-color: #eff2f7;
  height: 50px;
  line-height: 50px;
  padding-left: 15px;
  .icon {
    font-size: 20px;
    padding: 5px;
    color: #666;
    margin-right: 20px;
    vertical-align: middle;
    &:hover {
      cursor: pointer;
      color: #409eff;
    }
  }
  .breadcrumb-container {
    display: inline-block;
    font-size: 16px;
    vertical-align: middle;
  }
  .avator {
    margin-right: 37px;
    font-size: 14px;
    display: flex;
    .img {
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .exit {
      margin: 10px 10px;
    }
  }
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
