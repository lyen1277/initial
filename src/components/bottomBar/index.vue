<template>
  <div class="bottomBar">
    <van-grid>
      <van-grid-item :to='item.href'
        v-for="(item) of navList"
        :key='item.title'
        :class="{ active: $route.name === item.href }"
        @click="handelClick"
        >
        <i class="iconfont iconsize" :class="item.icon"></i>
        <span class="title">{{item.title}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
const nav = [
    {
        title: '首页',
        href: 'home',
        icon: 'icon-shouye1-copy'
    },
    {
        title: '客服',
        href: 'about',
        icon: 'icon-kefu'
    },
    {
        title: '活动',
        href: 'activity',
        icon: 'icon-huodong'
    },
    {
        title: 'vip',
        href: 'vip',
        icon: 'icon-VIP'
    },
    {
        title: '我的',
        href: 'my',
        icon: 'icon-wodedangxuan'
    }
]
export default {
    name: 'bottomBar',
    data () {
        return {
            navList: Object.freeze(nav)
        }
    },
    methods: {
        handelClick () {
            console.log(this.$route)
        }
    }
}
</script>

<style lang="less" scoped>
.bottomBar {
  display: flex;
  background-color: #22292c;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  .iconsize {
    font-size: 25px;
    margin-bottom: 3px;
  }
  .title {
    font-size: 12px;
  }
  .active {
    /deep/ .van-grid-item__content {
      color: red;
    }
  }
  .van-grid {
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
  }
  /deep/ .van-grid-item__content {
    color: white;
  }
  /deep/ .van-grid-item__text  {
    margin-top: 2px;
    color: white;
  }
  /deep/ .van-grid-item__content::after {
    border: none;
  }
}
</style>
