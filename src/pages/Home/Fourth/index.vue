<template>
    <div class="box">
        <div class="container">
            <div class="title">World Green Design Park</div>
            <div class="titletwo">
                <span>世界绿色设计园</span>
                <a href="">
                    <More />
                </a>
            </div>
            <div class="swipe">
                <van-swipe class="my-swipe" :autoplay="3000">
                    <van-swipe-item v-for="item in swipeData" :key="item.index">
                        <img :src="item.pic" alt="">
                        <div class="titles">{{item.title}}</div>
                        <div class="dsc">{{item.dsc}}</div>
                        <div class="more">
                            <LearnMore />
                        </div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
    </div>
</template>

<script>
    import More from '@/components/More.vue'
    import LearnMore from '@/components/LearnMore.vue'

    export default {
        name: 'Fourth',
        components: { More, LearnMore },
        data() {
            let swipeData = [
                {
                    pic: 'https://img.js.design/assets/img/66272a8c5489c5903d1aa618.jpg#2c0f8b6a865bd83adb28f7c8ff763ad3',
                    title: '国家级工业设计示范基地',
                    dsc: '园区已建立起具有市场调研、创新设计、研发中试（研发中心、中试车间）、生产制造、交易、展览、交流、培训、孵化及公共服务等综合功能为一体服务外包体系，服务范围涵盖智能制造、智慧家居、生命健康和医疗器械等新兴产业。'
                },
                {
                    pic: 'https://img.js.design/assets/img/66272a8c5489c5903d1aa618.jpg#2c0f8b6a865bd83adb28f7c8ff763ad3',
                    title: '国家级工业设计示范基地',
                    dsc: '园区已建立起具有市场调研、创新设计、研发中试（研发中心、中试车间）、生产制造、交易、展览、交流、培训、孵化及公共服务等综合功能为一体服务外包体系，服务范围涵盖智能制造、智慧家居、生命健康和医疗器械等新兴产业。'
                }
            ]
            return {
                swipeData
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        height: 100%;
        background: rgba(62, 73, 56, 1);
    }

    .box .container {
        margin: 0 auto;
        padding: 40px 0 40px;
        width: 335px;
    }

    .box .container .title {
        width: 270px;
        height: 22px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 21.22px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .box .container .titletwo {
        display: flex;
        align-items: center;
    }

    .box .container .titletwo span {
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 21.22px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .box .container .titletwo a {
        margin-left: 12px;
    }

    /* swipe */
    .swipe {
        margin-top: 20px;
    }

    .my-swipe {
        position: relative;
        min-height: 335px;
    }

    .swipe img {
        display: block;
        width: 100%;
        height: 158px;
        background-size: cover;
        background-position: center;
    }

    .swipe .titles {
        margin-top: 12px;
        height: 19px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(255, 255, 255, 1);
    }

    .swipe .dsc {
        margin-top: 6px;
        width: 335px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 15.91px;
        color: rgba(255, 255, 255, 0.8);
        text-align: justify;
        text-indent: 1rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
    }

    .swipe .more {
        position: absolute;
        right: 0;
        bottom: -33px;
    }

    .my-swipe :deep(.van-swipe__indicators) {
        margin-bottom: 0px;
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
</style>