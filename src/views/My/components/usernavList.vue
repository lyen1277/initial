<template>
  <div class="usernavList">
    <van-grid :border="false" :column-num="2">
        <van-grid-item v-for="(item, index) of imgUrl" :key='index'>
            <div class="wrap" @click="handelCilck(item.title)">
                <van-image :src="item.img" />
                <div class="title">{{item.title}}</div>
            </div>
        </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
    name: 'usernavList',
    data () {
        return {
            imgUrl: [
                {
                    img: require('@/assets/img/user/btn_1.png'),
                    title: '账号充值'
                },
                {
                    img: require('@/assets/img/user/btn_2.png'),
                    title: '账号代充'
                },
                {
                    img: require('@/assets/img/user/btn_3.png'),
                    title: '店铺信息'
                },
                {
                    img: require('@/assets/img/user/btn_4.png'),
                    title: '交易记录'
                }
            ]
        }
    },
    methods: {
        handelCilck (title) {
            // console.log(title)
            if (title === '账号充值') {
                this.$router.push({ path: '/rechargeAccount' })
            }
            if (title === '账号代充') {
                this.$router.push({ path: '/chargingAccount' })
            }
            if (title === '店铺信息') {
                this.$router.push({ path: '/shopMessage' })
            }
            if (title === '交易记录') {
                this.$router.push({ path: '/Transactions' })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.usernavList {
    margin-top: 50px;
    .wrap {
        position: relative;
        .title {
            font-size: 14px;
            color: white;
            position: absolute;
            top: 45%;
            left: 35%;
            transform: translateY(-50%);
        }
    }
}
</style>
