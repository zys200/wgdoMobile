import Vue from 'vue'
import vueRouter from 'vue-router'
import Layout from '@/pages/Layout/index.vue'

Vue.use(vueRouter)

const router = new vueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Layout",
            component: Layout
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/pages/Login/index.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/pages/About/index.vue')
        }
    ]
})

export default router