<template>
    <div class="box">
        <van-swipe class="my-swipe" :autoplay="3000" ref="swipe">
            <van-swipe-item v-for="item in swipeData" :key="item.hpId">
                <img :src=" 'http://106.3.97.14:9005' + item.cover">
                <div class="texts" v-if="item.intro">
                    <div class="textOne">
                        {{item.intro.slice(0,8)}}
                        <span class="GreenDesign">{{item.intro.slice(8,21)}}</span>
                        {{item.intro.slice(21)}}
                    </div>
                    <div class="textTwo">{{item.title}}</div>
                    <div class="carouselLink">
                        <a href="#">READ NOW<i class="iconfont icon-youjiantou"></i></a>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import { getHomeData } from '@/api/request.js'

    export default {
        name: "HeaderBg",
        components: {},
        data() {
            const swipeStyle = {
                width: '100vw',
                height: '484px'
            }
            let swipeData = []
            return {
                swipeStyle,
                swipeData
            }
        },
        mounted() {
            this.getHeaderDatas()
        },
        methods: {
            getHeaderDatas(p = this.$store.state.lang.version) {
                getHomeData({ 'moduleType': '0', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.swipeData = res.data.rows
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
        height: 484px;
    }

    .my-swipe {
        width: 100vw;
        height: 484px;
    }

    .my-swipe :deep(.van-swipe__indicators) {
        margin-bottom: 31px;
    }

    .my-swipe :deep(.van-swipe__indicator) {
        margin: 0 3.5px;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, 1);
    }

    .my-swipe :deep(.van-swipe__indicator--active) {
        background: rgba(166, 225, 99, 1);
    }

    img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    /* text */
    .texts {
        position: absolute;
        top: 214px;
        z-index: 109;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
    }

    .textOne {
        width: 281px;
        height: 32px;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 15.91px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .GreenDesign {
        color: rgba(166, 225, 99, 1);
    }

    .textTwo {
        margin-top: 12px;
        width: 289px;
        height: 54px;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 26.52px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .carouselLink a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 38px;
        border-radius: 21.34px;
        color: rgba(255, 255, 255, 1);
        width: 120px;
        height: 30px;
        border-radius: 28px;
        border: 1px solid rgba(255, 255, 255, 1);
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 15.91px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        vertical-align: middle;
    }
</style>