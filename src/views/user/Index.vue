<script setup lang='ts'>
import { round } from 'lodash';
import { ref, reactive } from 'vue'
import {
  Document,
  Menu as IconMenu,
  ChatDotRound,
  Lock,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
    <div class="index-body">
        <div class="menu">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-menu-item index="userinfo">
                    <el-icon><document /></el-icon>
                    <span>个人信息</span>
                </el-menu-item>
                <el-menu-item index="account">
                    <el-icon><chat-dot-round /></el-icon>
                    <span>消息中心</span>
                </el-menu-item>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><icon-menu /></el-icon>
                        <span>管理模块</span>
                    </template>
                        <el-menu-item index="works" >文章管理</el-menu-item>

                        <el-menu-item index="comment">评论管理</el-menu-item>

                </el-sub-menu>
                <el-menu-item index="account">
                    <el-icon><lock /></el-icon>
                    <span>账号中心</span>
                </el-menu-item>
                <el-menu-item index="setting">
                    <el-icon><setting /></el-icon>
                    <span>设置</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="display-div">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.index-body {
    width: 1000px;
    margin: 0 auto;
    display: flex;
}
.menu {
    width: 150px;
}
.display-div {
    width: 770px;
    margin: 40px 40px;
}
</style>