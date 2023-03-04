<script setup lang='ts'>
import { ref, reactive } from 'vue'
let to = {
    userImg: 'https://p.qqan.com/up/2021-6/16239805423883054.jpg',
    userName: '小红',
    toName: '小明',
    content: '如果我对游戏业界发展脉络的印象没有错的话——自《生化奇兵》开始',
    time: '2023-02-02 14:27',
    zan: 10,
    cai: 13
}
</script>

<template>
    <div>
        <div class="postion-div">
            <a href="">
                <img class="avatar" :src="to.userImg" />
            </a>
            <div class="content">
                <a href="">{{ to.userName }}</a>
                <span>{{ to.content }}</span>
            </div>
            <div class="info">
                <span>{{ to.time }}</span>
                <span class="like">赞：{{ to.zan }}</span>
                <span class="like on">踩：{{ to.cai }}</span>
                <span class="replay-btn">回复</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.postion-div {
    padding: 10px 0;
}
.avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
}
.content {
    margin-left: 30px;
}
.content a {
    text-decoration: none;
    color: #6d757a;
    font-size: 12px;
    font-weight: bold;
    margin-right: 10px;
}
.content a:hover {
    color: #00a1d6;
}
.content span {
    font-size: 14px;
}
.info {
    margin-left: 30px;
    font-size: 12px;
    color: #99a2aa;
    margin-top: 6px;
}
.info span {
    margin-right: 50px;
}
.like {
    cursor: pointer;
}
.info .on {
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