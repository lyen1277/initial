<template>
  <div class="login">
    <div class="title">帳戶登陆</div>
    <div class="loginBox">
      <van-cell-group>
        <van-field v-model="username" label="账号" maxlength='16' placeholder="请输入账号" />
        <van-field v-model="password" type="password" maxlength='16' label="密碼" placeholder="请输入密码" />
        <van-button type="primary" color='#f84918' text='登录' block></van-button>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            username: '',
            password: ''
        }
    }
}
</script>

<style lang="less" scoped>
/deep/.van-cell-group {
  height: 100%;
  padding: 0 10px;
}
/deep/.van-cell {
  font-size: 16px;
  padding: 15px 15px;
}
/deep/.van-cell:nth-child(1) {
  padding-top: 70px;
}
/deep/.van-cell__title {
  width: 50px;
}
/deep/.van-button {
  width: 85%;
  border-radius: 50px;
  height: 40px;
  margin: 60px auto;
}
/deep/.van-cell:not(:last-child)::after {
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  right: 0;
  bottom: 0;
  left: 0.42667rem;
  border-bottom: 0.02667rem solid gray;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/index_bg.png') no-repeat;
  background-size: cover;
  .title {
    font-size: 24px;
    text-align: center;
    color: white;
    padding-top: 100px;
  }
  .loginBox {
    position: absolute;
    width: 90%;
    height: 335px;
    top: 23%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
    overflow: hidden;
  }
}
</style>
