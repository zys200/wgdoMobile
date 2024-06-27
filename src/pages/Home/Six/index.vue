<template>
    <div class="box">
        <div class="boxa">
            <div class="boxaTitle">
                <TopTitle :title="$t('add.Partners')" />
            </div>
            <div class="dsc">{{ $t('six.dsc') }}</div>
            <div class="boxaLogo">
                <LogoPic :logoPicData="sixOne" />
            </div>
        </div>
        <div class="boxb">
            <div class="boxbTitle">{{ $store.state.lang.homeTitle[10]?.classifyName }}</div>
            <div class="boxbLine"></div>
            <div class="content">
                <vue-seamless-scroll :data="sixTwo" :class-option="classOption">
                    <ul class="ul-item">
                        <li class="boxbContentItem" v-for="t in sixTwo" :key="t.hpId">
                            <img :src="'http://www.wgdo.net' + t.cover" alt="">
                            <div class="dsc">{{ t.title }}</div>
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
        </div>
        <div class="boxc">
            <div class="boxcTitle">{{ $store.state.lang.homeTitle[11]?.classifyName }}</div>
            <div class="boxcLine"></div>
            <div class="boxcLogo">
                <LogoPic :logoPicData="sixThree" />
            </div>
        </div>
        <div class="boxd">
            <div class="boxdTitle">{{ $store.state.lang.homeTitle[12]?.classifyName }}</div>
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
    import vueSeamlessScroll from 'vue-seamless-scroll'

    export default {
        name: 'Six',
        components: { TopTitle, LogoPic, vueSeamlessScroll },
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
                sixFour,
                classOption: {
                    step: .3,
                    limitMoveNum: 0,
                    hoverStop: true,
                    direction: 2,
                    switchOffset: 10,
                    switchSingleStep: 134
                }
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

    .boxaTitle {
        position: relative;
        text-align: center;
        line-height: 22px;
    }

    .small {
        position: absolute;
        left: 0;
        bottom: 2px;
        transform: translateX(-50%);
        width: 8px;
        height: 8px;
        opacity: 1;
        background: rgba(165, 214, 63, 1);
        border-radius: 50%;
    }

    .big {
        position: absolute;
        left: 8px;
        bottom: 2px;
        transform: translateX(-50%);
        width: 22px;
        height: 22px;
        opacity: 0.3;
        background: rgba(165, 214, 63, 1);
        border-radius: 50%;
    }

    .text {
        padding-left: 10px;
        display: inline-block;
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 1);
        position: relative;
        z-index: 999;
    }

    .boxa .dsc {
        margin-top: 6px;
        width: 297px;
        font-size: 12px;
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

    .boxb .content {
        margin-top: 15px;
        width: 100vw;
        overflow: hidden;
    }

    .boxb .content .ul-item {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        width: calc(200px * 5);
        height: 115px;
    }

    .boxb .content .boxbContentItem {
        position: relative;
        width: 200px;
        height: 115px;
        margin: 0 5px;
    }

    .boxb .content .boxbContentItem img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .boxb .content .boxbContentItem .dsc {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 26px;
        font-size: 9px;
        line-height: 26px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        background: rgba(44, 43, 44, 0.7);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .boxb .content .boxbContentItem:hover .dsc {
        background: rgba(166, 225, 99, 1);
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