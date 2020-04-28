<template>
  <div class="about">
    <div class="headMess">
      <van-nav-bar
        title="交易记录"
        left-arrow
        @click-left="$router.go(-1)"
      />
    </div>
    <div class="timeSel">
      <div @click="timeShowFn(1)" @v-model="changeTime">
        <span style="padding-right: 5px">{{changeTime}}</span><van-icon name="arrow-down" />
      </div>
      <span style="padding: 0 12px">至</span>
      <div @click="timeShowFn(2)" @v-model="changeTimes">
        <span style="padding-right: 5px">{{changeTimes}}</span><van-icon name="arrow-down" />
      </div>
    </div>
    <div class="timeDown" v-if="timeShow">
      <van-datetime-picker
        v-model="currentDate"
        @confirm="finishFn"
        @cancel="cancelFn"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </div>
    <transactionPage></transactionPage>
  </div>
</template>

<script>
import { monent } from '@/utils/tools'
import transactionPage from './components/transactionPage'
export default {
    name: 'Transactions',
    components: {
        transactionPage
    },
    data () {
        return {
            minDate: new Date(1900, 0, 1),
            maxDate: new Date(2099, 10, 1),
            currentDate: new Date(),
            timeShow: false,
            changeTime: '2020-02-20',
            changeTimes: '2020-04-02',
            state: 1
        }
    },
    methods: {
        timeShowFn (num) {
            this.state = num
            this.timeShow = !this.timeShow
        },
        finishFn () {
            this.timeShow = false
            console.log(this.currentDate)
            if (this.state == 1) {
                const ng = this.currentDate.getTime()
                this.changeTime = monent(new Date(Number(ng))).format('YYYY-MM-DD')
            } else {
                const ng = this.currentDate.getTime()
                this.changeTimes = monent(new Date(Number(ng))).format('YYYY-MM-DD')
            }
        },
        cancelFn () {
            this.timeShow = false
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
/deep/[data-v-2accc752] .van-icon {
  font-size: 14px;
  font-weight: 600;
}
.headMess {
    border-bottom: 1px solid #eee;
}
.timeSel {
  width: 100%;
  height: 32px;
  line-height: 32px;
  background-color: #ebebeb;
  font-size: 12px;
  padding-left: 16px;
  display: flex;
}
.timeDown {
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: 9;
}
</style>
