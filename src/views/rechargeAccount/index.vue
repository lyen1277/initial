<template>
  <div class="about">
    <div class="headMess">
      <van-nav-bar
        title="充值"
        left-arrow
        @click-left="$router.go(-1)"
      />
    </div>
    <div class="deatilMess">
      <van-cell-group>
        <van-field label="充值方式" value="银行卡转账" input-align="right" readonly />
        <van-field maxlength='16' label="充值金额" placeholder="请输入金额" input-align="right" />
        <van-field maxlength='16' label="实际到账金额" placeholder="0.00" input-align="right" />
        <div style="position: relative">
          <van-field style="padding-right: 25px;" label="汇款银行" value="中国银行" input-align="right" readonly />
          <van-icon name="arrow" />
        </div>
        <van-field maxlength='16' label="汇款姓名" placeholder="请输入姓名" input-align="right" />
        <van-field maxlength='16' label="汇款备注" placeholder="请输入备注信息" input-align="right" />
      </van-cell-group>
    </div>
    <van-button @click="nextOne" type="primary" color='#f84918' text='下一步' block></van-button>
  </div>
</template>

<script>
export default {
    name: 'rechargeAccount',
    methods: {
        nextOne () {
            console.log(123)
            this.$router.push({
                path: '/submission'
            })
        }
    }
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
/deep/.van-cell {
    padding-bottom: 15px;
    font-size: 16px;
}
/deep/.van-field__label {
  width: 35%;
}
/deep/.van-button {
  width: 75%;
  border-radius: 50px;
  height: 40px;
  margin: 80px auto 0;
}
.headMess {
    border-bottom: 1px solid #eee;
}
.deatilMess {
    margin-top: 8px;
    /deep/.van-icon {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-62%);
      font-size: 14px;
    }
}
</style>
