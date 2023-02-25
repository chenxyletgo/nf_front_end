import { createRouter, createWebHistory} from 'vue-router'

export default createRouter({
    routes: [
        {
            name: '登录',
            path: '/login',
            component: import('../views/Login.vue')
        }
    ],
    history: createWebHistory()
})