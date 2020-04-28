import router from '@/router'
// import Cookies from 'js-cookie'
// import store from './store'
// 在有token的情况下, 进入这些页面, 重定向到home
// const HASTOKENNOENTER = ['login', 'register', 'testPlay']
router.beforeEach((to, from, next) => {
    // if (to.meta.keepAlive) {
    //     store.commit('SET_KEEPALIVECOMPONENTS', to.name)
    // }
    if (to.meta.requireAuth) {
        // console.log('yes')
        // console.log(to.meta.requireAuth, Cookies.get('token'))
        // if (Cookies.get('token')) {
        //     console.log(1)
        //     next()
        // } else {
        //     console.log(2)
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        })
        // }
    } else {
        next()
        // console.log('no')
    }
})
