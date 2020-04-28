<template>
  <div class="about">
    <div class="headMess">
      <van-nav-bar
        title="店铺信息"
        left-arrow
      />
    </div>
    <div class="deatilMess">
      <van-cell-group>
        <van-field label="微信号" maxlength='16' value="1234321" input-align="right" />
        <van-field type="password" maxlength='16' label="QQ号" placeholder="请输入QQ号" input-align="right" />
        <van-field maxlength='16' label="支付宝号" placeholder="请输入支付宝账号" input-align="right" />
        <van-field maxlength='11' label="手机号" placeholder="请输入手机号" input-align="right" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
    name: 'vip'
}
</script>

<style lang="less" scoped></style>
