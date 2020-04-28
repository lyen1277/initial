export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login')
    },
    {
        path: '/shopMessage',
        name: 'shopMessage',
        component: () => import('@/views/shopMessage')
    },
    {
        path: '/rechargeAccount',
        name: 'rechargeAccount',
        component: () => import('@/views/rechargeAccount')
    },
    {
        path: '/chargingAccount',
        name: 'chargingAccount',
        component: () => import('@/views/chargingAccount')
    },
    {
        path: '/Transactions',
        name: 'Transactions',
        component: () => import('@/views/Transactions')
    },
    {
        path: '/submission',
        name: 'submission',
        component: () => import('@/views/chargingAccount/submission')
    },
    {
        path: '/orderDetailId',
        name: 'orderDetailId',
        component: () => import('@/views/Transactions/orderDetailId')
    },
    {
        path: '/rechargeDetail',
        name: 'rechargeDetail',
        component: () => import('@/views/Transactions/rechargeDetail')
    },
    {
        path: '/artificialDetail',
        name: 'artificialDetail',
        component: () => import('@/views/Transactions/artificialDetail')
    },
    {
        path: '/depositDetail',
        name: 'depositDetail',
        component: () => import('@/views/Transactions/depositDetail')
    },
    {
        path: '/rechargeCancelDetail',
        name: 'rechargeCancelDetail',
        component: () => import('@/views/Transactions/rechargeCancelDetail')
    }
]
