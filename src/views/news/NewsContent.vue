<script setup lang='ts'>
import { ref, reactive } from 'vue'
let data = {
    title: '美国氯乙烯泄露事件后，我才知道有这么多“通情达理”的网友',
    time: '2023-02-15 12:02',
    read: 456,
    like: 210,
    comment: 34,
    imgurl: 'https://p.qqan.com/up/2021-6/16239805423883054.jpg',
    userame: '小红',
    fan: 20093,
    works: 563    
}
</script>

<template>
    <div class="content-body">
        <div class="title">
            <h1>{{ data.title }}</h1>
            <div class="info min-font">
                <span>{{ data.time }}</span>
                <span>{{ data.read }} 阅读</span>
                <span>{{ data.like }} 喜欢</span>
                <span>{{ data.comment }} 评论</span>
            </div>
        </div>

        <div class="author">
            <div class="left">
                <div class="img-div">
                    <a href="">
                        <img :src="data.imgurl" />
                    </a>
                </div>
                <div class="author-info">
                    <div class="name"><a href="">{{ data.userame }}</a></div>
                    <div class="info-info min-font">
                        <span>粉丝：{{ data.fan }}</span>
                        <span>文章：{{ data.works }}</span>
                    </div>
                </div>
            </div>
            <!-- TODO 关注按钮 -->
            <div class="right"></div>
        </div>
        <div class="div-line"></div>
        <div class="content"></div>
    </div>
</template>

<style scoped>
.min-font {
    font-size: 13px;
    color: #999;
}
.title {
    margin: 0 80px 20px 80px;
}
.info span {
    margin-right: 20px;
}
.author {
    margin: 0 80px 20px 80px;
}
.author .left {
    display: flex;
}
.img-div img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 10px;
}
.author-info .name a {
    vertical-align: middle;
    text-decoration: none;
    color: #212121;
    font-size: 14px;
}
.author-info .info-info span {
    margin-right: 20px;
}
.div-line {
    height: 1px;
    width: 100%;
    background: hsla(0,0%,59.2%,.21);
    margin-bottom: 40px;
}
</style>