<script setup lang='ts'>
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
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
    }
]
let curCarouselIndex = 0 // 当前位置
let timer: number
// 点击小圆点切换图片
onMounted(() => {
    test()
})
interface DOMs {
    list: HTMLElement,
    titles: HTMLElement,
    indicator: HTMLElement
}
/**
 * title 向下 向上 移动
 * @param cur 当前的位置
 * @param sufIndex carousel数组最后元素的下标
 * @param doms carousel的DOM元素
 * @param pre false表示向下，true表示向上
 */
function titleNext(cur: number, sufIndex: number, doms: DOMs, pre: boolean) {
    let temp = doms.titles.children
    temp[cur].classList.remove('on') // 移除当前元素样式
    if (pre) { // 向上
        if (cur === 0) { // 到头部
            temp[sufIndex].classList.add('on') // 给尾元素加样式
        } else { // 非头部
            temp[cur - 1].classList.add('on') // 给上一个元素加样式
        }
    } else { // 向下
        if (cur === sufIndex) { // 到末尾
            temp[0].classList.add('on') // 给头元素加样式
        } else { // 非末尾
            temp[cur + 1].classList.add('on') // 给下一个元素加样式
        }
    }


}
/**
 * indicator 向下 向上 移动
 * @param cur 当前的位置
 * @param sufIndex carousel数组最后元素的下标
 * @param doms carousel的DOM元素
 * @param pre false表示向下，true表示向上
 */
function indicatorNext(cur: number, sufIndex: number, doms: DOMs, pre: boolean) {
    let temp = doms.indicator.children
    temp[cur].children[0].classList.remove('on') // 移除当前样式
    temp[cur].children[0].classList.add('indicator-item')
    if (pre) { // 向上
        if (cur === 0) { // 到头部
            temp[sufIndex].children[0].classList.remove('indicator-item') // 给尾元素加样式
            temp[sufIndex].children[0].classList.add('on')
        } else { // 非头部
            temp[cur - 1].children[0].classList.remove('indicator-item') // 给上一个元素加样式
            temp[cur - 1].children[0].classList.add('on')
        }
    } else { // 向下
        if (cur === sufIndex) { // 到尾部
            temp[0].children[0].classList.remove('indicator-item') // 给头元素加样式
            temp[0].children[0].classList.add('on')
        } else { // 非尾部
            temp[cur + 1].children[0].classList.remove('indicator-item') // 给下一个元素加样式
            temp[cur + 1].children[0].classList.add('on')
        }
    }
}
function test(){
    let doms = getDoms() // 获取dom元素
    let conf = carouselConf(doms) // 获取carousel信息
    initCarousel(doms) // 初始化carousel
    let count = 0
    let sufIndex = doms.titles.children.length - 1
    timer = setInterval(() => {
        doms.list.style.left = '-' + (count + conf.imgWidth) + 'px' // 向左移动
        titleNext(curCarouselIndex, sufIndex, doms, false)
        indicatorNext(curCarouselIndex, sufIndex, doms, false)
        count += conf.imgWidth
        curCarouselIndex++
        if (count === conf.imgWidth * conf.imgCount) {
            doms.list.style.left = '0px'
            curCarouselIndex = 0
            count = 0
        }
    }, 2000)

}

function changeImg(index: number) {
    if (index === curCarouselIndex) {
        return
    } else {
        clearInterval(timer)
        // let count = Math.abs(index - curCarouselIndex)
        let count = index * 680
        let doms = getDoms()
        doms.list.style.left = '-' + (index * 680) + 'px'
        doms.titles.children[curCarouselIndex].classList.remove('on')
        doms.titles.children[index].classList.add('on')
        doms.indicator.children[curCarouselIndex].children[0].classList.remove('on')
        doms.indicator.children[curCarouselIndex].children[0].classList.add('indicator-item')
        doms.indicator.children[index].children[0].classList.remove('indicator-item')
        doms.indicator.children[index].children[0].classList.add('on')
        curCarouselIndex = index
        let sufIndex = doms.titles.children.length - 1
        let conf = carouselConf(doms)
        timer = setInterval(() => {
            doms.list.style.left = '-' + (count + conf.imgWidth) + 'px' // 向左移动
            titleNext(curCarouselIndex, sufIndex, doms, false)
            indicatorNext(curCarouselIndex, sufIndex, doms, false)
            count += conf.imgWidth
            curCarouselIndex++
            if (count === conf.imgWidth * conf.imgCount) {
                doms.list.style.left = '0px'
                curCarouselIndex = 0
                count = 0
            }
        }, 2000)
    }

}

// 获取dom元素
function getDoms() {
    return {
        list: document.getElementsByClassName('carousel-list')[0] as HTMLElement,
        titles: document.getElementsByClassName('titles')[0] as HTMLElement,
        indicator: document.getElementsByClassName('indicator')[0] as HTMLElement
    }
}
// 获取carouselConf信息
function carouselConf(doms: DOMs) {
    return {
        imgCount: doms.titles.children.length,
        imgWidth: doms.list.children[0].children[0].children[0].clientWidth
    }
}
// 初始化carousel
function initCarousel(doms: DOMs) {
    doms.list.style.left = '0px'
    doms.titles.children[0].classList.add('on')
    doms.indicator.children[0].children[0].classList.remove('indicator-item')
    doms.indicator.children[0].children[0].classList.add('on')
}
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
.postion-div {
    width: 680px;
    height: 212px;
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
.indicator li .on {
    width: 20px;
    height: 20px;
    background-image: url(../../assets/bg-01.png);
}
.indicator li .on:hover {
    cursor: pointer;
}
</style>