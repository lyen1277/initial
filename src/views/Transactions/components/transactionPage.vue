<template>
  <div class="about">
      <div @click="orderDetailId" class="charge">
          <div class="chagrLeft">
              <div>代充到用户ID&nbsp;:&nbsp;<span>123456</span></div>
              <span class="time">2019-10-24&nbsp;14:09</span>
          </div>
          <span class="chargeRight">-200.00元</span>
      </div>
      <div @click="rechargeDetail" class="charge">
          <div class="chagrLeft">
              <div>充值</div>
              <span class="time">2019-10-24&nbsp;14:09</span>
          </div>
          <div class="chargeRightNext">
              <p>已完成</p>
              <span>+200.00元</span>
          </div>
      </div>
      <div @click="artificialDetail" class="charge">
          <div class="chagrLeft">
              <div>人工提出</div>
              <span class="time">2019-10-24&nbsp;14:09</span>
          </div>
          <span class="chargeRight">-200.00元</span>
      </div>
      <div @click="depositDetail" class="charge">
          <div class="chagrLeft">
              <div>人工存入</div>
              <span class="time">2019-10-24&nbsp;14:09</span>
          </div>
          <span style="color: #000" class="chargeRight">+200.00元</span>
      </div>
      <div @click="rechargeCancelDetail" class="charge">
          <div class="chagrLeft">
              <div>充值</div>
              <span class="time">2019-10-24&nbsp;14:09</span>
          </div>
          <div class="chargeRightNext">
              <p style="color: #999">已取消</p>
              <span>+200.00元</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'transactionPage',
    methods: {
        orderDetailId () {
            this.$router.push({
                path: '/orderDetailId'
            })
        },
        rechargeDetail () {
            this.$router.push({
                path: '/rechargeDetail'
            })
        },
        artificialDetail () {
            this.$router.push({
                path: '/artificialDetail'
            })
        },
        depositDetail () {
            this.$router.push({
                path: '/depositDetail'
            })
        },
        rechargeCancelDetail () {
            this.$router.push({
                path: '/rechargeCancelDetail'
            })
        }
    }
}
</script>

<style lang="less" scoped>
.charge {
    display: flex;
    justify-content: space-between;
    padding: 6px 16px;
    font-size: 0;
    height: 50px;
    .chagrLeft {
        div {
           padding: 8px 0;
           font-size: 16px;
        }
        .time {
            font-size: 12px;
            color: #999;
        }
    }
    .chargeRight {
        font-size: 14px;
        line-height: 50px;
        color: #00b57e;
    }
    .chargeRightNext {
        p {
            font-size: 12px;
            text-align: right;
            color: #f96d46;
            padding: 8px 0;
        }
        span {
            font-size: 14px;
        }
    }
}
</style>
