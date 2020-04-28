export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login'),
        meta: {
            needBar: true
        }
    },
    {
        path: '/shopMessage',
        name: 'shopMessage',
        component: () => import('@/views/shopMessage'),
        meta: {
            needBar: true
        }
    },
    {
        path: '/rechargeAccount',
        name: 'rechargeAccount',
        component: () => import('@/views/rechargeAccount'),
        meta: {
            needBar: true
        }
    },
    {
        path: '/chargingAccount',
        name: 'chargingAccount',
        component: () => import('@/views/chargingAccount'),
        meta: {
            needBar: true
        }
    },
    {
        path: '/Transactions',
        name: 'Transactions',
        component: () => import('@/views/Transactions'),
        meta: {
            needBar: true
        }
    },
    {
        path: '/submission',
        name: 'submission',
        component: () => import('@/views/chargingAccount/submission'),
        meta: {
            needBar: true
        }
    },
    {
        path: '/orderDetailId',
        name: 'orderDetailId',
        component: () => import('@/views/Transactions/orderDetailId'),
        meta: {
            needBar: true
        }
    },
    {
        path: '/rechargeDetail',
        name: 'rechargeDetail',
        component: () => import('@/views/Transactions/rechargeDetail'),
        meta: {
            needBar: true
        }
    },
    {
        path: '/artificialDetail',
        name: 'artificialDetail',
        component: () => import('@/views/Transactions/artificialDetail'),
        meta: {
            needBar: true
        }
    }
]
