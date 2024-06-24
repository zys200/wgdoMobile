<template>
    <div class="box">
        <div class="boxa">
            <div class="boxaTitle">
                <TopTitle title="合作伙伴" />
            </div>
            <div class="dsc">作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用</div>
            <div class="boxaLogo">
                <LogoPic :logoPicData="sixOne" />
            </div>
        </div>
        <div class="boxb">
            <div class="boxbTitle">{{$store.state.lang.homeTitle[10]?.classifyName}}</div>
            <div class="boxbLine"></div>
            <div class="content">
                <van-swipe class="myswipe" :autoplay="3000" :loop="true">
                    <van-swipe-item class="myswipeItem" v-for="item in sixTwo" :key="item.hpId"
                        style="width: 217.61px; height: 151px;">
                        <img :src=" 'http://106.3.97.14:9002' + item.cover" alt="">
                        <div class="myswipeItemDsc">{{item.title}}</div>
                    </van-swipe-item>
                </van-swipe>
            </div>
        </div>
        <div class="boxc">
            <div class="boxcTitle">{{$store.state.lang.homeTitle[11]?.classifyName}}</div>
            <div class="boxcLine"></div>
            <div class="boxcLogo">
                <LogoPic :logoPicData="sixThree" />
            </div>
        </div>
        <div class="boxd">
            <div class="boxdTitle">{{$store.state.lang.homeTitle[12]?.classifyName}}</div>
            <div class="boxdLine"></div>
            <div class="boxdLogo">
                <LogoPic :logoPicData="sixFour" />
            </div>
        </div>
    </div>
</template>

<script>
    import TopTitle from '@/components/TopTitle.vue'
    import LogoPic from '@/components/LogoPic.vue'
    import { getHomeData } from '@/api/request.js'

    export default {
        name: 'Six',
        components: { TopTitle, LogoPic },
        data() {
            let sixOne = []
            let sixTwo = []
            let sixTwoLength = 0
            let sixThree = []
            let sixFour = []
            return {
                sixOne,
                sixTwo,
                sixTwoLength,
                sixThree,
                sixFour
            }
        },
        mounted() {
            this.getSixData()
        },
        methods: {
            getSixData(p = this.$store.state.lang.version) {
                getHomeData({ "moduleType": "9", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.sixOne = res.data.rows
                    }
                })
                getHomeData({ "moduleType": "10", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.sixTwo = res.data.rows
                        this.sixTwoLength = res.data.rows.length
                    }
                })
                getHomeData({ "moduleType": "11", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.sixThree = res.data.rows
                    }
                })
                getHomeData({ "moduleType": "12", "status": "1", version: p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.sixFour = res.data.rows
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getSixData(this.$store.state.lang.version)
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        padding-bottom: 40px;
        width: 100%;
        height: auto;
        background: url(https://img.js.design/assets/img/653d080a48f711670ecb020f.png#5a63ef9f1eb110944c2c96c39ea84e7b), rgba(62, 73, 56, 1);
        object-fit: cover;
        overflow: hidden;
    }

    .boxa {
        margin: 62px auto 0;
        width: 335px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxa .dsc {
        margin-top: 6px;
        width: 297px;
        height: 27px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 13.26px;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
    }

    .boxa .logopic {
        margin-top: 12px;
    }

    /* boxb */
    .boxb {
        margin-top: 40px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .boxb .boxbTitle {
        width: 61px;
        height: 19px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .boxb .boxbLine {
        margin-top: 10px;
        width: 20px;
        height: 0px;
        opacity: 0.6;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 1);
    }

    .boxb .content {}

    .boxb .content .myswipe {
        position: relative;
        margin-top: 20px;
        width: 217.61px;
        width: 100vw;
        height: 151px;
    }

    .boxb .content .myswipe .myswipeItem {
        position: relative;
        top: 0;
        width: 217.61px;
        height: 151px;
        margin: 0 5px;
    }

    .boxb .content .myswipe .myswipeItem:last-child {
        width: calc(100% - calc(217.61px *4))
    }

    .boxb .content .myswipe .myswipeItem img {
        display: block;
        width: 217.61px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .boxb .content .myswipe .myswipeItem .myswipeItemDsc {
        position: absolute;
        bottom: 0;
        width: 217.61px;
        height: 33.56px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 33.56px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .myswipe :deep(.van-swipe-item) {
        width: 217.61px;
        height: 33.56px;
    }

    .myswipe :deep(.van-swipe__indicators) {
        border: 10px solid hotpink;
        width: 100%;
        height: 4px;
        position: absolute;
        bottom: -55px;
        display: flex;
        justify-content: center;
    }

    .myswipe :deep(.van-swipe__indicator) {
        margin: 0 3.5px;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, 1);
    }

    .myswipe :deep(.van-swipe__indicator--active) {
        background: rgba(166, 225, 99, 1);
    }

    /* boxc */
    .boxc {
        margin-top: 40px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .boxc .boxcTitle {
        height: 19px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }


    .boxc .boxcLine {
        margin-top: 10px;
        width: 20px;
        height: 0px;
        opacity: 0.6;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 1);
    }

    .boxc .boxcLogo {
        margin-top: 20px;
    }

    /* boxd */
    .boxd {
        margin-top: 40px;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .boxd .boxdTitle {
        height: 19px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    .boxd .boxdLine {
        margin-top: 10px;
        width: 20px;
        height: 0px;
        opacity: 0.6;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, 1);
    }

    .boxd .boxdLogo {
        margin-top: 20px;
    }
</style>