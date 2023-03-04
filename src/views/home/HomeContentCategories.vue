<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
let data = ['全部', '单机游戏', '手机游戏', '网络游戏', '']
let cur = '全部'
function ListenerSortLabel() {
    let div = document.getElementsByClassName('sort-list')[0] as HTMLElement
    let btn = document.getElementsByClassName('sort-btn-label')[0] as HTMLElement
    btn.addEventListener('click', (event) => {
        div.style.display = 'block'
        event.stopPropagation()
    })
    document.addEventListener('click', () => {
        div.style.display = 'none'
    })
    div.addEventListener('click', (event) => {
        event.stopPropagation();
    })
}
onMounted(() => {
    ListenerSortLabel()
})
</script>

<template>
    <div class="categories-body">
        <a v-for="item in data" :class="cur === item ? 'on' : ''" href="">
            <span>{{ item }}</span>
        </a>
    </div>
    <div class="sort-body">
        <div class="sort-btn min-font">
            <label class="sort-btn-label">
                当前排序方式
                <img src="../../assets/bg-02.png" />
            </label>
            <ul class="sort-list">
                <li>默认排序当前排序方式</li>
                <li>排序方式一</li>
                <li>排序方式2</li>
                <li>排序方式3</li>
                <li>排序方式4</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.min-font {
    font-size: 14px;
}
.sort-btn {
    position: relative;
}
.sort-btn-label:hover {
    cursor: pointer;
}
.sort-list {
    position: absolute;
    background-color: #fff;
    list-style: none;
    margin: 0;
    padding: 0;
    z-index: 1;
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
    margin-top: 10px;
    margin-left: -15px;
    display: none;
}
.sort-list li {
    height: 36px;
    line-height: 36px;
    padding-left: 15px;
    padding-right: 15px;
    transition: 0.2s;
}
.sort-list li:hover {
    color: #00AEEC;
    cursor: pointer;
}



.categories-body {
    margin-bottom: 22px;
    border-bottom: 1px solid #f4f5f7;
}
.categories-body a {
    display: inline-block;
    padding: 5px 10px 10px;
    margin-right: 20px;
    text-decoration: none;
    color: #000;
    font-size: 12px;
    transition: 0.2s;
}
.categories-body a:hover {
    color: #00AEEC;
}
.on {
    border-bottom: 1px solid #00AEEC;
}
.on span {
    color: #00AEEC;
}
</style>