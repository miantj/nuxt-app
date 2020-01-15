<template>
  <div class="manage_page fillcontain">
    <sidebar :isCollapse="isCollapse"></sidebar>

    <!-- 页面主体 -->
    <section class="mianBody" :class="{ paddingLeft: isCollapse }">
      <div>
        <headTop :isCollapse="isCollapse" @Collapse="Collapse"></headTop>
      </div>

      <transition name="fade-transform" mode="out-in">
        <keep-alive :exclude="cashViews">
          <nuxt-child />
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script>
import headTop from '../components/headTop'
import sidebar from '../components/sidebar'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      // 不缓存的组件
      cashViews: ['editDataor'],
      isCollapse: false,  //展开还是关闭
    }
  },
  head () {
    return {
      title: '首页',
    }
  },
  created () {
    if (!this.user) {
      this.$router.push('login')
    }
  },
  methods: {
    computed: {
      ...mapState([
        'user'
      ]),
    },
    Collapse () {
      this.isCollapse = !this.isCollapse
    },
  },
  components: {
    headTop,
    sidebar,
  },
}
</script>


<style lang="less" scoped>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.4s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.mianBody {
  padding-left: 200px;
  transition: padding-left 0.44s;
}
.paddingLeft {
  padding-left: 65px;
}
</style>
