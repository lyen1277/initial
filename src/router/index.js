import Vue from 'vue'
import VueRouter from 'vue-router'
import My from '@/views/My'
import othes from './route/othes'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
    return routerPush.call(this, location).catch((error) => error)
}
Vue.use(VueRouter)

// requireAuth   是否需要token,需要则设 requireAuth: true
const routes = [
    {
        path: '/',
        redirect: '/login'
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
