<script setup lang='ts'>
import { ref, reactive } from 'vue'
let categories = reactive({
    home: '推荐',
    douga: '动画',
    game: '游戏',
    cinephile: '影视',
    life: '生活',
    interest: '兴趣'
})
</script>

<template>
    <div class="home-body">
        <div class="home-content">
            <div class="left">
            </div>
            <div class="content">
                
            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>

<style scoped>
.home-content {
    width: 1160px;
    margin: 0 auto;
    display: flex;
}
.left {
    width: 180px;
}
.content {
    width: 680px;
}
.right {
    width: 260px;
}

</style>