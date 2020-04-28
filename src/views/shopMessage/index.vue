<template>
  <div class="about">
    <div class="headMess">
      <van-nav-bar
        title="店铺信息"
        left-arrow
        @click-left="$router.go(-1)"
      />
    </div>
    <div class="deatilMess">
      <van-cell-group>
        <van-field maxlength='16' label="微信号" placeholder="请输入微信号" value="1234321" input-align="right" />
        <van-field maxlength='16' label="QQ号" placeholder="请输入QQ号" input-align="right" />
        <van-field maxlength='16' label="支付宝号" placeholder="请输入支付宝账号" input-align="right" />
        <van-field maxlength='11' label="手机号" placeholder="请输入手机号" input-align="right" />
        <div style="position: relative">
          <van-field
            style="padding-right: 25px;"
            label="设置开店时间"
            placeholder="20:00"
            v-model="changeTime"
            input-align="right"
            @click="timerShowFn(1)"
            readonly
          />
          <van-icon name="arrow" />
        </div>
        <div style="position: relative">
          <van-field
            style="padding-right: 25px;"
            label="设置关店时间"
            placeholder="08:00"
            v-model="changeTimes"
            input-align="right"
            @click="timerShowFn(2)"
            readonly
          />
          <van-icon name="arrow" />
        </div>
      </van-cell-group>
    </div>
    <div class="notes">*注意：开店期间修改支付账号信息可能导致无法收到代充请求</div>
    <van-button type="primary" color='#f84918' text='保存' block></van-button>
    <div class="timer" v-if="timerShow">
      <van-datetime-picker
        v-model="currentTime"
        @confirm="finishFn"
        @cancel="cancelFn"
        type="time"
        :min-hour="10"
        :max-hour="23"
      />
    </div>
  </div>
</template>

<script>
export default {
    name: 'shopMessage',
    data () {
        return {
            currentTime: '12:00',
            timerShow: false,
            changeTime: '20:00',
            changeTimes: '08:00',
            state: 1
        }
    },
    methods: {
        timerShowFn (num) {
            this.state = num
            this.timerShow = !this.timerShow
        },
        // timerShowFnss () {
        //     this.timerShow = !this.timerShow
        // },
        finishFn () {
            this.timerShow = false
            console.log(this.currentTime)
            if (this.state == 1) {
                console.log(1)
                this.changeTime = this.currentTime
            } else {
                console.log(2)
                this.changeTimes = this.currentTime
            }
        },
        cancelFn () {
            this.timerShow = false
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
/deep/.van-button {
  width: 75%;
  border-radius: 50px;
  height: 40px;
  margin: 0 auto;
}
/deep/.van-field__label {
  width: 35%;
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
      color: #aaa;
    }
}
.notes {
    font-size: 12px;
    color: #999;
    text-align: center;
    margin: 15px auto 40px;
}
</style>
