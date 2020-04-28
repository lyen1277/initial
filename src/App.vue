<template>
  <div id="app">
    <keep-alive>
        <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
    name: 'app',
    components: {},
    created () {}
}
</script>

<style lang="less">
#app {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
