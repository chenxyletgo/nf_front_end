import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HomeContent from '../views/home/HomeContent.vue'

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
            component: Home,
            children: [
                {
                    name: '推荐',
                    path: 'home',
                    component: HomeContent,
                    meta: {
                        father: '/index'
                    }
                },
                {
                    name: '动画',
                    path: 'douga',
                    component: HomeContent,
                    meta: {
                        father: '/index'
                    }
                },
                {
                    name: '游戏',
                    path: 'game',
                    component: HomeContent,
                    meta: {
                        father: '/index'
                    }
                },
                {
                    name: '推荐',
                    path: 'home',
                    component: HomeContent,
                    meta: {
                        father: '/index'
                    }
                }
            ]
        },
        {
            name: '搜索',
            path: '/search',
            component: {}
        },
        {
            name: '登录',
            path: '/login',
            component: Login,
            meta: {
                keepAlive: false
            }
        },
        {
            name: '注册',
            path: '/register',
            component: Register,
            meta: {
                keepAlive: true
            }
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
    // TODO 拦截登录后不能访问登录和注册页面
})

export default router