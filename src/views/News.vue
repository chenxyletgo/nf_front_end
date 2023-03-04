<script setup lang='ts'>
import { ref, reactive } from 'vue'
let data = {
    tag: '专栏',
    title: '原创TV动画《THE MARGINAL SERVICE》4月11日首播',
    time: '',
    comment: 123,
    userImg: '',
    articleId: ''
}
</script>

<template>
    <div class="news-body">
        <div class="header min-font">
            <a href="">{{ data.tag }}</a>
            <span class="dividers">/</span>
            <span>{{ data.title }}</span>
        </div>
        <div class="content"></div>
        <div class="comment">
            <div class="comment-count">
                {{ data.comment }} 评论
            </div>
            <div class="comment-content">
                <div class="sort">
                    <ul>
                        <li class="on">按热度排序</li>
                        <li>按时间排序</li>
                    </ul>
                </div>
                <div class="reply">
                    <div class="img"></div>
                    <div class="input">
                        <textarea class="text" cols="80" rows="5"></textarea>
                        <button class="btn" type="submit">发表评论</button>
                    </div>
                </div>
                <div class="coments"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.min-font {
    font-size: 12px;
}
.news-body {
    width: 900px;
    margin: 0 auto;
}
.header {
    margin: 10px 0 12px 0;
}
.dividers {
    margin: 0 8px;    
}
.content {
    width: 820px;
    padding: 30px 40px 40px 40px;
    margin-bottom: 12px;
    background-color: #fff;
}
.comment {
    width: 820px;
    padding: 20px 40px 20px 40px;
    background-color: #fff;
}
.comment-count {
    font-size: 18px;
}
.sort {
    border-bottom: 1px solid #e5e9ef;
}
.sort ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    display: flex;
    font-weight: bold;
}
.sort ul li {
    padding: 8px 0;
    margin-right: 16px;
}
.comment-content {
    margin-top: 35px;
}
.sort .on {
    border-bottom: 1px solid #00a1d6;
}
.reply {
    margin: 10px 0;
    padding-top: 15px;
    position: relative;
}
.reply .img {
    position: absolute;
    width: 82px;
    height: 65px;
}
.input {
    margin: 0 85px;
}
.text {
    resize: none;
    font-size: 12px;
    background-color: #f4f5f7;
    color: #555;
    font-family: inherit
}
.btn {
    position: absolute;
    right: 0;
    width: 70px;
    height: 64px;
    padding: 4px 15px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    background-color: #00a1d6;
    transition: 0.1s;
}
</style>