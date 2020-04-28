<template>
  <div class="about">
    <div class="headMess">
      <van-nav-bar
        title="充值"
        left-arrow
        @click-left="$router.go(-1)"
      />
    </div>
    <sumUp></sumUp>
    <sumDown></sumDown>
    <van-button type="primary" color='#f84918' text='提交' block></van-button>
  </div>
</template>

<script>
import sumUp from './components/sumUp'
import sumDown from './components/sumDown'
export default {
    name: 'submission',
    components: {
        sumUp,
        sumDown
    },
    data () {
        return {
        }
    },
    methods: {}
}
</script>

<style lang="less" scoped>
/deep/.van-nav-bar__left {
    left: 10px;
}
/deep/.van-nav-bar .van-icon {
    font-size: 18px;
    color: #ccc;
}
/deep/.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #000;
    font-weight: 600;
}
/deep/.van-button {
  width: 75%;
  border-radius: 50px;
  height: 40px;
  margin: 175px auto 0;
}
.headMess {
    border-bottom: 1px solid #eee;
}
</style>
