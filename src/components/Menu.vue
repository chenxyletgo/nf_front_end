<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { clientStatus } from '../status'
// 默认 clientStatus.isLogin = false
// data
let user = reactive({
    name: '小红',
    avatarUrl: 'https://p.qqan.com/up/2021-6/16239805423883054.jpg'
})
// function
function activeIndex() {}
function handleSelect() {}
// test
function testFun() {
    clientStatus.isLogin = clientStatus.isLogin ? false : true
    if (clientStatus.isLogin) {
        user.name = (user.name === '小红') ? '小龙' : '小红'
    }
}
</script>

<template>
    <div>
        <el-affix>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="handleSelect"
                router="true"
            >
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">搜索</el-menu-item>
                <el-menu-item index="3" v-if="!clientStatus.isLogin">登录</el-menu-item>
                <el-menu-item index="4" v-if="!clientStatus.isLogin">注册</el-menu-item>
                <el-sub-menu index="5" class="user" v-if="clientStatus.isLogin">
                    <template #title>
                        <img class="avatar" :src="user.avatarUrl" />
                        {{ user.name }}
                    </template>
                    <el-menu-item index="5-1">个人中心</el-menu-item>
                    <el-menu-item index="5-2">发帖</el-menu-item>
                    <el-menu-item index="5-3">登出</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-affix>
        <div class="test">
            <el-button @click="testFun">登录/登出</el-button>
        </div>
    </div>
</template>

<style scoped>
.el-menu-demo {
    padding-left: calc(50% - 600px);
}
.user {
    margin-left: 900px;
}
.avatar {
    width: 45px;
    border-radius: 50%;
    padding-right: 20px;
}
</style>