import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: [
            {
                path: '',
                component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/Dashboard')
            },
            {
                path: '/dashboard',
                component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/Dashboard')
            },
            {
                path: 'bills',
                component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/Bill')
            },
            {
                path: 'branches',
                component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/Branch'),
                children: [
                    {
                        path: 'products',
                        component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/statistic/BranchProduct')
                    },
                    {
                        path: 'bills',
                        component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/statistic/BranchBill')
                    },
                    {
                        path: 'customers',
                        component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/statistic/BranchCustomer')
                    },
                    {
                        path: 'revenue',
                        component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/statistic/Revenue')
                    },
                    {
                        path: 'inventory',
                        component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/statistic/Inventory')
                    },
                ],
            },
            {
                path: 'settings',
                component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/Setting')
            },
            {
                path: 'statistics',
                component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/Statistic'),
            },
            {
                path: 'products',
                component: () => import(/* webpackChunkName: "about" */ '../components/Buoi5/admin/Product')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Buoi5/auth/Login')
    },
    {
        path: '/forgot-password',
        name: 'Forgot',
        component: () => import('../components/Buoi5/auth/ForgotPassword')
    },
    {
        path: '/logout',
        redirect: 'login'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
