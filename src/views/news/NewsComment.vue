<script setup lang='ts'>
import { ref, reactive } from 'vue'
import NewsCommentEr from './NewsCommentEr.vue'
import NewsReply from './NewsReply.vue'
let data = {
    repalyId: 'fjksdf',
    username: 'TylerDurdenJ',
    userImg: 'https://p.qqan.com/up/2021-6/16239805423883054.jpg',
    content: '如果我对游戏业界发展脉络的印象没有错的话——自《生化奇兵》开始，使用“录音带片段”介绍剧情的手法逐渐流行开来，这一叙事模式的问题被掩盖在《生化奇兵》的光芒中（同时《生化奇兵》的剧情设计也有“介绍过去之事”的刚需）。但在它之后，使用录音带越来越成为一种极为敷衍的、套路化的叙事模式，甚至称得上某种程度的“3A八股文”（即游戏开局的矛盾来自倒叙，中间用录音补完剧情，最后再次利用该矛盾实现某种复仇/发泄/升华），点名批评的就是《光环无限》。',
    time: '2023-02-02 14:27',
    zan: 10,
    cai: 15
}
</script>

<template>
    <div class="comment-body">
        <div class="avatar">
            <a href="">
                <img :src="data.userImg" />
            </a>
        </div>
        <div class="content">
            <div class="content-postion"></div>
            <div class="user-name">
                <a href="">{{ data.username }}</a>
            </div>
            <div class="comment-item">{{ data.content }}</div>
            <div class="comment-info">
                <span>{{ data.time }}</span>
                <span class="liek on">赞：{{ data.zan }}</span>
                <span class="like">踩：{{ data.cai }}</span>
                <span class="replay-btn">回复</span>
            </div>
        </div>
        <div class="replay-body">
            <NewsCommentEr />
            <NewsCommentEr />
            <NewsCommentEr />
            <NewsReply />
        </div>
    </div>
</template>

<style scoped>
.comment-body {
    position: relative;
    border-top: 1px solid #e5e9ef;
}
.avatar {
    width: 82px;
    height: 48px;
    position: absolute;
    margin-top: 24px;
    text-align: center;
}
.avatar img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}
.content {
    margin-left: 85px;
    margin-top: 24px;
}
.user-name a {
    font-size: 14px;
    font-weight: bold;
    color: #6d757a;
    text-decoration: none;
    transition: 0.1s;
}
.user-name a:hover {
    color: #00a1d6;
}
.comment-item {
    font-size: 14px;
    color: #000;
    margin: 5px 0;
}
.comment-info {
    font-size: 12px;
    color: #99a2aa;
    margin-top: 6px;
}
.comment-info span {
    margin-right: 50px;
}
.like {
    cursor: pointer;
}
.comment-info .on {
    color: #00a1d6;
}
.replay-btn:hover {
    color: #00a1d6;
    cursor: pointer;
}
.replay-body {
    margin-left: 85px;
}
</style>