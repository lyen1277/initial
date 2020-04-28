<template>
  <div class="about">
    <div class="deatilMess">
      <div class="mess">收款信息</div>
      <div class="bank">中国银行</div>
      <div class="receBox">
        <div class="rechange">收款人&nbsp;:&nbsp;<span id="code">钱多多多</span></div>
        <span class="copy" data-clipboard-target="#code" @click="copy()">复制</span>
      </div>
      <div class="receBox">
        <div class="rechange">银行账号&nbsp;:&nbsp;<span id="codes">123456789</span></div>
        <span class="copy" data-clipboard-target="#codes" @click="copy()">复制</span>
      </div>
      <div class="receBox">
        <div class="rechange">开户行&nbsp;:&nbsp;<span id="codess">钱多多多</span></div>
        <span class="copy" data-clipboard-target="#codess" @click="copy()">复制</span>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
    name: 'sumDown',
    methods: {
        // copy () {
        //     var clipboard = new this.Clipboard('.copy')
        //     clipboard.on('success', (e) => {
        //         e.clearSelection()
        //         alert('复制成功')
        //     })
        //     clipboard.on('error', () => {
        //         alert('复制失败')
        //     })
        // }
        copy (v) {
            const clipboard = new Clipboard('.copy', {
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
.deatilMess {
    width: 90%;
    height: 205px;
    margin: 16px auto 0;
    border-radius: 6px;
    box-shadow: 0px 4px 0px 0px #eee, 2px 0px 0px 0px #eee, -2px 0px 0px 0px #eee;
    .mess {
        width: 100%;
        height: 36px;
        line-height: 36px;
        background-color: #f77928;
        text-align: center;
        color: #fff;
        font-size: 14px;
        border-radius: 6px 6px 0 0;
    }
    .bank {
        font-size: 16px;
        font-weight: 600;
        padding: 15px 0 6px 12px;
    }
    .receBox {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        padding: 12px;
        .rechange {
            color: #999;
            span {
                color: #000;
            }
        }
        .copy {
            color: #fff;
            background-color: #ffad79;
            text-align: center;
            padding: 4px 14px;
            font-size: 12px;
            border-radius: 4px;
        }
    }
}
</style>
