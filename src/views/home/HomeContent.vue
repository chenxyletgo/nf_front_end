<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter, useRoute} from 'vue-router'
import HomeContentCarousel from './HomeContentCarousel.vue'

</script>

<template>
    <div class="content-body">
        <div>
            <HomeContentCarousel />
        </div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped>
</style>