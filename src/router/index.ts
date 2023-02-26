import { createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
    routes: [
        {
            name: 'error',
            path: '/error',
            component: {}
        },
        {
            name: '首页',
            path: '/index',
            component: {}
        },
        {
            name: '搜索',
            path: '/search',
            component: {}
        },
        {
            name: '登录',
            path: '/login',
            component: Login
        },
        {
            name: '注册',
            path: '/register',
            component: Register
        },
        {
            name: '用户',
            path: '/user',
            component: {},
            children: [
                {
                    name: '个人中心',
                    path: 'userInfo',
                    component: {}
                },
                {
                    name: '发帖',
                    path: 'post',
                    component: {}
                },
                {
                    name: '登出',
                    path: 'signOut',
                    component: {}
                },
            ]
        }
    ],
    history: createWebHistory()
})
// 路由拦截器
router.beforeEach((to, from, next) => {
    // console.log('to', to)
    // console.log('from', from)
    // console.log('next', next)
    if (to.matched.length === 0) {
        next({ name: 'error', path: '/error'})
    } else {
        next()
    }
})

export default router