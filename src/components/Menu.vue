<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { clientStatus } from '../conf'
// data
let router = useRouter()
let route = useRoute()
let activeIndex = ref('/index') // 默认Menu的聚焦位置
let userInfo = reactive({
    userName: '小红',
    avatarUrl: 'https://p.qqan.com/up/2021-6/16239805423883054.jpg'
})
// Menu选择事件
function handleSelect(key: string, keyPath: string[]) {
    // console.log(key, keyPath)
}
// 监听路由 Menu的聚焦根据路由而变化
watch(route, (newVal, oldVal) => {
    activeIndex.value = route.path
})
// 测试代码
// function testFun() {
//     clientStatus.isLogin = clientStatus.isLogin ? false : true
//     if (clientStatus.isLogin) {
//         userInfo.userName = (userInfo.userName === '小红') ? '小龙' : '小红'
//     }
// }
</script>

<template>
    <div class="menu-body">
        <el-affix>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="handleSelect"
                router
            >
                <el-menu-item index="/index">首页</el-menu-item>
                <el-menu-item index="/search">搜索</el-menu-item>
                <el-menu-item index="/login" v-if="!clientStatus.isLogin">登录</el-menu-item>
                <el-menu-item index="/register" v-if="!clientStatus.isLogin">注册</el-menu-item>
                <el-sub-menu index="/user" class="user-info" v-if="clientStatus.isLogin">
                    <template #title>
                        <img class="avatar" :src="userInfo.avatarUrl" />
                        {{ userInfo.userName }}
                    </template>
                    <el-menu-item index="/user/userInfo">个人中心</el-menu-item>
                    <el-menu-item index="/user/post">发帖</el-menu-item>
                    <el-menu-item index="/user/signOut">登出</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-affix>
        <!-- 测试代码 -->
        <!-- <div class="test">
            <el-button @click="testFun">登录/登出</el-button>
        </div> -->
    </div>
</template>

<style scoped>
.el-menu-demo {
    padding-left: calc(50% - 600px);
}
.user-info {
    margin-left: 900px;
}
.avatar {
    width: 45px;
    border-radius: 50%;
    padding-right: 20px;
}
</style>