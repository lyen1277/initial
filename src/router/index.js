import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Activity from '@/views/Activity'
import Vip from '@/views/Vip'
import My from '@/views/My'
import othes from './route/othes'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
    return routerPush.call(this, location).catch((error) => error)
}
Vue.use(VueRouter)

// requireAuth   是否需要token,需要则设 requireAuth: true
// needBar   是否需要底部导航栏,不需要则设 needBar: true
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/activity',
        name: 'activity',
        component: Activity
    },
    {
        path: '/vip',
        name: 'vip',
        component: Vip
    },
    {
        path: '/my',
        name: 'my',
        component: My
        // meta: {
        //     requireAuth: true
        // }
    }
]

export default new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 20)
    },
    routes: [...routes, ...othes]
})
