<template>
  <div class="about">
    <div class="headMess">
      <van-nav-bar
        title="充值"
        left-arrow
        @click-left="$router.go(-1)"
      />
    </div>
    <div class="imgMoney">
      <img src="../../assets/img/user/money.png" alt="">
    </div>
    <div class="chargeBox">
      <van-cell-group>
        <van-field :left-icon="imgOne" v-model="username" maxlength='16' placeholder="请输入代充账号" />
        <van-field :left-icon="imgTwo" v-model="password" maxlength='16' placeholder="代充金额" />
        <van-button type="primary" color='#f84918' text='确认代充' block></van-button>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
    name: 'chargingAccount',
    data () {
        return {
            username: '',
            password: '',
            imgOne: require('../../assets/img/user/user.png'),
            imgTwo: require('../../assets/img/user/account.png')

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
  margin: 0 auto;
}
/deep/.van-cell {
  width: 85%;
  height: 45px;
  border-radius: 50px;
  background-color: #f0f0f0;
  margin: 0 auto 30px;
}
/deep/.van-field__body {
  font-size: 16px;
}
/deep/.van-image {
  font-size: 20px;
}
.headMess {
    border-bottom: 1px solid #eee;
}
.imgMoney {
  text-align: center;
  padding: 30px 0;
}
</style>
