<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
let input3 = ''
</script>

<template>
    <div class="right-body">
        <div class="search-div">
            <el-input
                v-model="input3"
                placeholder="请输入要搜索的文章"
                class="input-with-select"
            >
                <template #append>
                    <el-button :icon="Search" />
                </template>
            </el-input>
        </div>
        <div class="rank-div">
            
        </div>
    </div>
</template>

<style scoped>
.right-body {
    margin-top: 30px;
}
.search-div {
    margin-bottom: 30px;
}
</style>