<script setup lang='ts'>
import { da } from 'element-plus/es/locale';
import { ref, reactive } from 'vue'
let data = {
    title: '【影视杂谈】如何看待美国影视中的“政治正确”？【影视杂谈】如何看待美国影视中的“政治正确”？',
    desc : '前段时间我写了美剧《最后生还者》（The Last of Us）S1E3的剧评，阅读量颇高，在各个平台收到了许多留言回复，除了表示这集“拍得好”的大量肯定外，剩下最集中的一种声音，便是吐槽、反感乃至抨击该集主角比尔和弗兰克的男同设定了。过了两周，我又写了《最后生还者》E3的剧评，这次反馈量倒是“正常”多了，却依然收到了粗暴认定“都是政治正确”的留言——仅仅因为这集里戏份吃重的配角亨利和山姆两兄弟是黑人',
    coverImgUrl: 'https://pic.3gbizhi.com/2019/0928/20190928012439343.jpg',
    avatar: 'https://pic.3gbizhi.com/2019/0928/20190928012439343.jpg',
    username: '王小名',
    tag: '日常',
    view: 0,
    like: 0,
    talk: 0,
    articleId: 'jfkashiufehajsfj234'
}
</script>

<template>
    <div class="article-body">
        <div class="postion-div">
            <div class="article-left">
                <a href="" class="title">{{ data.title }}</a>
                <div class="article-desc-div">
                    <a href="" class="article-desc min-font">
                        {{ data.desc }}
                    </a>
                </div>
                <div class="article-info">
                    <a class="avatar-name min-font" href="">
                            <img :src="data.avatar" />
                            {{ data.username }}
                    </a>
                    <a class="ido min-font tag" href="">{{ data.tag }}</a>
                    <a class="ido min-font">观看：{{ data.view }}</a>
                    <a class="ido min-font like" href="">喜欢：{{ data.like }}</a>
                    <a class="ido min-font">评论：{{ data.talk }}</a>
                </div>
            </div>
            <div class="cover-img">
                <a href="">
                    <img :src="data.coverImgUrl" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.min-font {
    font-size: 12px;
    color: #99a2aa;
}
.article-body {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f4f5f7;
}
.postion-div {
    display: flex;
}
.article-left {
    position: relative;
    width: 543px;
    margin-right: 20px;
}
.title {
    display: block;
    text-decoration: none;
    color: #000;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 0.2s;
}
.title:hover {
    color: #00AEEC;
}
.article-desc-div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 4px;
}
.article-desc {
    text-decoration: none;
}
.article-info {
    height: 24px;
    position: absolute;
    bottom: 0;
}

.avatar-name {
    text-decoration: none;
    margin-right: 22px;
}
.avatar-name:hover {
    color: #00AEEC;
}
.avatar-name img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align:middle
}
.ido {
    padding-right: 30px;
    text-decoration: none;
}
.tag:hover, .like:hover {
    color: #00AEEC;
}
.cover-img img {
    width: 117px;
    height: 88px;
    border-radius: 8px;
}
</style>