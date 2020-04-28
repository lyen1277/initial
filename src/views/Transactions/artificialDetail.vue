<template>
  <div class="about">
    <div class="headMess">
      <van-nav-bar
        title="订单详情"
        left-arrow
        @click-left="$router.go(-1)"
      />
    </div>
    <div class="deatilMess">
      <van-cell-group v-for="(item, index) of detail" :key='index'>
        <van-field :label="item.detailLeft" :value="item.detailRight" input-align="right" readonly />
        <div class="fz" v-if="item.detailLeft == '订单号'" @click="copy(item.detailRight)">复制</div>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
    name: 'orderDetailId',
    data () {
        return {
            detail: [
                {
                    detailLeft: '订单号',
                    detailRight: '12344321'
                },
                {
                    detailLeft: '类型',
                    detailRight: '人工提出'
                },
                {
                    detailLeft: '充值金额',
                    detailRight: '123.00'
                },
                {
                    detailLeft: '操作时间',
                    detailRight: '2020-09-09 12:00:00'
                }
            ]
        }
    },
    methods: {
        copy (v) {
            const clipboard = new Clipboard('.fz', {
                text: () => v
            })
            clipboard.on('success', (e) => {
                e.clearSelection()
                this.$toast({
                    message: '复制成功！',
                    duration: 1000
                })
                clipboard.destroy()
            })
            clipboard.on('error', () => {
                this.$toast({
                    message: '复制失败！',
                    duration: 1000
                })
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
/deep/.van-cell-group {
    position: relative;
    .fz {
        font-size: 12px;
        position: absolute;
        top: 50%;
        left: 62%;
        transform: translateY(-50%);
        color: #fff;
        background-color: #ffad79;
        padding: 4px 12px;
        border-radius: 4px;
    }
}
.headMess {
    border-bottom: 1px solid #eee;
}
.deatilMess {
    margin-top: 8px;
}
</style>
