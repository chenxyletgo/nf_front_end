<script setup lang="ts">
import Menu from './components/Menu.vue'
</script>

<template>
    <Menu></Menu>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" />             
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    <div class="test"></div>
</template>

<style scoped>
.test {
    width: 20px;
    height: 1000px;
}
</style>
