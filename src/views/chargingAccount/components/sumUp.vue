<template>
  <div class="about">
    <div class="deatilMess">
      <div class="rechange">充值方式&nbsp;:&nbsp;<span>银行卡转账</span></div>
      <van-cell-group>
        <van-field maxlength='16' label="充值金额 :" value=" 123400.00" readonly />
        <van-field maxlength='16' label="实际到账金额 :" value=" 123400.00" readonly />
        <van-field label="汇款姓名 :" value=" 钱多多" readonly />
        <van-field label="汇款银行 :" value=" 中国银行" readonly />
        <van-field label="汇款备注 :" value=" 钱多多" readonly />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
    name: 'sumUp'
}
</script>

<style lang="less" scoped>
/deep/.van-field__label {
    width: auto;
}
/deep/.van-cell-group {
    display: flex;
    flex-wrap: wrap;
}
/deep/.van-cell {
    width: 50%;
    padding: 6px 10px;
    font-size: 14px;
}
/deep/[data-v-696cf55a] .van-field__label {
    color: #999;
}
/deep/[data-v-696cf55a] .van-cell:nth-last-child(1) {
    padding-bottom: 16px;
}
.deatilMess {
    border-bottom: 1px solid #eee;
    .rechange {
        font-size: 14px;
        padding: 16px 0 10px 10px;
        color: #999;
        span {
            color: #000;
        }
    }
}
</style>
