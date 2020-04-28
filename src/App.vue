<template>
  <div id="app">
    <keep-alive>
        <router-view />
    </keep-alive>
    <!-- <bottomBar v-show="!needBar"></bottomBar> -->
  </div>
</template>

<script>
// import bottomBar from './components/bottomBar'
export default {
    name: 'app',
    components: {
        // bottomBar
    },
    // computed: {
    //     needBar () {
    //         return this.$route.meta.needBar
    //     }
    // },
    created () {
        // console.log(this.$route)
    }
}
</script>

<style lang="less">
#app {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
