<script setup lang='ts'>
import { ref, reactive } from 'vue'
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
    <div class="reply-body">
        <div class="postion-div">
            <div class="user-face">
                <img :src="data.userImg" />
            </div>
            <div class="text-div">
                <textarea class="text-area" cols="80" rows="5" placeholder="发一条评论"></textarea>
                <div class="button-div">
                    <button type="submit">发表评论</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.postion-div {
    position: relative;
}
.user-face {
    width: 82px;
    height: 65px;
    text-align: center;
    position: absolute;
}
.user-face img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-top: 8px;
}
.text-area {
    width: 85%;
    height: 60px;
    font-size: 12px;
    border: 1px solid #e5e9ef;
    color: #555;
    resize: none;
    border-radius: 4px;
    background-color: #f4f5f7;
    font-family: inherit;
    outline: #00a1d6;
    padding: 5px 10px;
    position: relative;
}
.text-area:hover {
    background-color: #fff;
    border: 1px solid #00a1d6;
}
.text-div .button-div {
    position: absolute;
    top: 0;
    right: 0;
}
.text-div button {
    width: 70px;
    height: 70px;
    padding: 4px 15px;
    background-color: #00a1d6;
    color: #fff;
    font-size: 14px;
    border: 1px solid #00a1d6;
    transition: 0.2s;
    border-radius: 4px;
    cursor: pointer;
}
.text-div button:hover {
    background-color: #00AEEC;
    border: 1px solid #00AEEC;

}
.text-div {
    margin-left: 85px;
}
</style>