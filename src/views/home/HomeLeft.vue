<script setup lang='ts'>
import { ref, reactive } from 'vue'
let FatherData = defineProps<{
    list: {
        home: string,
        douga: string,
        game: string,
        cinephile: string,
        life: string,
        interest: string
    } 
 }>()
</script>

<template>
    <div class="left-body">
        <el-affix :offset="70">
            <div class="left-list">
                <router-link
                    :to="'/index/' + key"
                    v-for="(item, key) in list"
                >
                    <span>
                        {{ item }}
                    </span>
                </router-link>
            </div>
        </el-affix>
    </div>
</template>

<style scoped>
.left-list {
    background-color: white;
    border: 1px solid white;
    padding-bottom: 20px;
    border-radius: 8px;
    margin-right: 10px;
}
.left-list a {
    display: block;
    width: 110px;
    height: 30px;
    line-height: 30px;
    margin: 20px auto auto auto;
    text-align: center;
    text-decoration: none;
    color: black;
}
.left-list a:hover {
    color: #00AEEC;
}
.router-link-active span {
    color: #00AEEC;
}
</style>