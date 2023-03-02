<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter, useRoute} from 'vue-router'
import HomeContentCarousel from './HomeContentCarousel.vue'
import HomeContentArticle from './HomeContentArticle.vue'

</script>

<template>
    <div class="content-body">
        <div>
            <HomeContentCarousel />
        </div>
        <div class="partitio-name">
            <label>推荐文章</label>
        </div>
        <div>
            <HomeContentArticle />
            <HomeContentArticle />
        </div>
    </div>
</template>

<style scoped>
.partitio-name {
    height: 25px;
    font-size: 18px;
}
</style>