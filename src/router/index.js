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
    }, {
        path: '/products',
        name: 'Product',
        component: () => import('../components/Buoi7/Bai7.1/Product')
    },
    {
        path: '/exercise',
        name: 'Exercise',
        component: () => import('../components/Buoi7/Bai7.2/Exercise')
    },
    {
        path: '/todo',
        name: 'Todo',
        component: () => import('../components/Buoi3/Bai3.1/Todo')
    },
    {
        path: '/product/bai1',
        name: 'Todo',
        component: () => import('../components/Buoi9/Bai9.1/Product')
    },
    {
        path: '/product/bai2',
        name: 'Todo',
        component: () => import('../components/Buoi9/Bai9.2/Product')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../components/HelloWorld')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
