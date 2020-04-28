import './styles/index.less' // 初始样式
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import storage from './utils/storage' // 本地缓存
import md5 from 'js-md5' // md5加密
// import dragBall from 'vue-drag-ball' // 悬浮球
// import { iphoneSpringback } from './utils/iphoneSpringback'
import fastclick from 'fastclick'
import Clipboard from 'clipboard' // 复制
import './components/VantComponents' // vant配置文件
import 'amfe-flexible'
import './intercept'

if ('addEventListener' in document) {
    document.addEventListener(
        'DOMContentLoaded',
        function () {
            fastclick.attach(document.body)
            // iphone 回弹时防止点击穿透
            // iphoneSpringback()
        },
        false
    )
}

Vue.config.productionTip = false
// 注入vue原型
Vue.prototype.$storage = storage
Vue.prototype.$md5 = md5
Vue.prototype.Clipboard = Clipboard

// Vue.use(dragBall)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
