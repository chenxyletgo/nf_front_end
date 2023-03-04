<script setup lang='ts'>
import { ref, reactive } from 'vue'
import NewsReply from './NewsReply.vue'
import NewsComment from './NewsComment.vue'
import NewsContent from './NewsContent.vue'
let data = {
    title: '原创TV动画《THE MARGINAL SERVICE》4月11日首播',
    tag: '动画',
    time: '2022-01-05',
    comment: 155,
    userImg: 'https://p.qqan.com/up/2021-6/16239805423883054.jpg',
    articleId: 'dsfbajdsf'
}
</script>

<template>
    <div class="news-body">
        <div class="header">
            <a href="">{{ data.tag }}</a>
            <span class="dividers">/</span>
            <span>{{ data.title }}</span>
        </div>
        <div class="content">
            <NewsContent />
        </div>
        <div class="comment">
            <div class="comment-head">{{ data.comment }} 评论</div>
            <div class="comment-content">
                <div class="sort">
                    <ul>
                        <li class="on">按热度排序</li>
                        <li>按时间排序</li>
                    </ul>
                </div>
                <div class="reply">
                    <NewsReply />
                </div>
                <div class="comment-list">
                    <NewsComment />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content, .comment {
    background-color: #fff;
    border-radius: 4px;
}
.news-body {
    width: 900px;
    margin: 0 auto;
}
.header {
    font-size: 12px;
    margin: 10px 0 12px 0;
}
.header a {
    color: rgba(0,0,0,.45);
    text-decoration: none;
}
.dividers {
    margin: 8px;
}
.content {
    width: 820px;
    padding: 30px 40px 40px 40px;
    margin-bottom: 12px;
}
.comment {
    width: 820px;
    padding: 20px 40px;
}
.comment-head {
    font-size: 18px;
    margin-bottom: 20px;
}
.sort {
    margin-bottom: 24px;
}
.sort ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    border-bottom: 1px solid #e5e9ef;
}
.sort ul li {
    font-size: 14px;
    font-weight: bold;
    padding: 8px 0;
    margin-right: 16px;
    cursor: pointer;
    transition: 0.2s;
}
.sort ul li:hover {
    color: #00a1d6;
}
.sort .on {
    border-bottom: 1px solid #00a1d6;
    color: #00a1d6;
}
.reply {
    margin: 10px 0;
    padding-top: 15px;
}

</style>