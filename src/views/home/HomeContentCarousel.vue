<script setup lang='ts'>
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import { carouselFun, timer, changeImg } from '../../utils/carouselFuns'
// data
let data = [
    {
        title: '标题一',
        url: 'https://www.baidu.com',
        imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.df4462fabf18edd07195679a5f8a37e5?rik=FnNvr9jWWjHCVQ&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50059%2f8720.jpg_wh1200.jpg&ehk=ofb4q76uCls2S07aIlc8%2bab3H5zwrmj%2bhqiZ%2fyw3Ghw%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        title: '标题二',
        url: 'https://',
        imgUrl: 'https://ts1.cn.mm.bing.net/th/id/R-C.2ce48cd4a70b48403a56e9ea8c710355?rik=tU9CL%2fR0TMLEYA&riu=http%3a%2f%2fwww.kutoo8.com%2fupload%2fimage%2f63051471%2f4_1920x1080.jpg&ehk=wZm6BwD%2b8TIDXmqxTntxftDP8IzjD8g3hhI6bEwdb54%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        title: '标题三',
        url: 'https://',
        imgUrl: 'https://pic.3gbizhi.com/2019/0928/20190928012439343.jpg'
    },
    {
        title: '标题四',
        url: 'https://',
        imgUrl: 'https://pic.3gbizhi.com/2019/0928/20190928012439343.jpg'
    }
]
// DOM节点加载完成
onMounted(() => {
    carouselFun()
})
// 组件销毁时销毁定时器
onUnmounted(() => {
    clearInterval(timer)
})
</script>

<template>
    <div class="carousel-body">
        <div class="postion-div">
            <ul class="carousel-list">
                <li v-for="item in data">
                    <a :href="item.url">
                        <img :src="item.imgUrl" />
                    </a>
                </li>
            </ul>
            <div class="titles" ref="titlesRef">
                <a v-for="item in data" :href="item.url">{{ item.title }}</a>
            </div>
            <ul class="indicator">
                <li v-for="(item, index) in data">
                    <div class="indicator-item" @click="changeImg(index)"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.carousel-body {
    width: 680px;
    height: 212px;
    margin-top: 20px;
    margin-bottom: 25px;
}
.postion-div {
    width: 680px;
    height: 212px;
    border-radius: 8px;
    position: absolute;
    overflow: hidden;
}
.carousel-list {
    position: absolute;
    transition: 0.2s;
    display: flex;
}
.carousel-list, .indicator {
    list-style: none;
    margin: 0;
    padding: 0;
}
.carousel-list img {
    width: 680px;
    height: 212px;
}
.titles {
    width: 100%;
    height: 76px;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(-180deg,transparent 42%,rgba(0,0,0,.5));
}
.titles a {
    position: absolute;
    bottom: 0;
    padding: 40px 10px 5px 10px;
    text-decoration: none;
    color: #fff;
    visibility: hidden;
}
/* 动态样式 */
.titles .on {
    visibility: visible;
}
.indicator {
    position: absolute;
    bottom: 8px;
    right: 15px;
    display: flex;
}
.indicator li {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    display: flex;
}
/* 动态样式 */
.indicator li .indicator-item {
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    margin: auto;
}
.indicator li .indicator-item:hover {
    border: 1px solid #fff;
    background-color: #00AEEC;
    cursor: pointer;
}
/* 动态样式 */
.indicator li .on {
    width: 20px;
    height: 20px;
    background-image: url(../../assets/bg-01.png);
}
.indicator li .on:hover {
    cursor: pointer;
}
</style>