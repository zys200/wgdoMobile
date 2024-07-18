<template>
    <div class="box">
        <div class="boxa">
            <div class="boxaTitle">
                <TopTitle :title="$store.state.lang.homeTitle[6]?.classifyName" />
            </div>
            <div class="boxaDsc">{{ $t('five.dsc') }}</div>
            <router-link :to="toFiveDetAll">
                <More />
            </router-link>
        </div>
        <div class="boxb">
            <div class="boxbTop">
                <img :src=" 'http://www.wgdo.net' + leftImg.cover" alt="" @click="detailsRoute">
            </div>
            <div class="picList">
                <div class="picListItem" v-for="(item,index) in rightImgLists" :key="index">
                    <img :src=" 'http://www.wgdo.net' + item.cover" alt="" @click="detailsRouteall(index)">
                </div>
            </div>
        </div>
        <div class="boxc">
            <div class="boxcTitle">
                <TopTitle :title="$t('five.huojiangmingdan')" />
            </div>
            <div class="boxcDsc">{{ $store.state.lang.homeTitle[7]?.classifyName }}</div>
            <div class="shortLine"></div>
            <div class="boxcContent">
                <div class="boxcContentItem" v-for="item in getPrice" :key="item.hpId">
                    <div class="boxcContentItemTop">
                        <img :src="'http://www.wgdo.net' + item.cover">
                    </div>
                    <div class="boxcContentItemName">
                        {{ item.title }}
                    </div>
                </div>
            </div>
        </div>
        <div class="boxd">
            <div class="boxdTitle">{{ $store.state.lang.homeTitle[8]?.classifyName }}</div>
            <div class="shortLine"></div>
            <div class="boxdContent">
                <div class="boxdContentItem" v-for="item in awardWinningOrganization" :key="item.hpId">
                    <div class="boxdConetentItemTop">
                        <img :src="'http://www.wgdo.net' + item.cover" alt="">
                    </div>
                    <div class="boxdConetentItemDsc">{{ item.title }}</div>
                </div>
            </div>
        </div>
        <div :class="$store.state.lang.isEn === 'en' ? 'boxeEn' : 'boxe' ">
            <a href="">
                <span>{{ $t('five.seehistory') }}<i class="iconfont icon-youjiantou"></i></span>
            </a>
        </div>
    </div>
</template>

<script>
    import TopTitle from '@/components/TopTitle'
    import { getHomeData } from '@/api/request.js'
    import More from '@/components/More.vue'

    export default {
        name: 'Five',
        components: { TopTitle, More },
        data() {
            let leftImg = []
            let rightImgLists = []
            let getPrice = []
            let awardWinningOrganization = []
            return {
                leftImg,
                rightImgLists,
                getPrice,
                awardWinningOrganization,
                pageTitle: 'sgd'
            }
        },
        mounted() { this.getFiveDatas() },
        methods: {
            getFiveDatas(p = this.$store.state.lang.version) {
                getHomeData({ 'moduleType': '6', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        let [leftImg, ...rightImgLists] = res.data.rows
                        this.leftImg = leftImg
                        this.rightImgLists = rightImgLists.slice(0, 4)
                    }
                })
                getHomeData({ "moduleType": "7", "status": "1", version: p }).then(res => {
                    this.getPrice = res.data.rows
                })
                getHomeData({ "moduleType": "8", "status": "1", version: p }).then(res => {
                    this.awardWinningOrganization = res.data.rows
                })
            },
            detailsRoute() {
                this.$router.push({
                    path: '/fivemore/fivemoreinfo',
                    name: 'FiveMoreinfo',
                    params: { orders: Number(0) }
                })
            },
            detailsRouteall(index) {
                this.$router.push({
                    path: '/fivemore/fivemoreinfo',
                    name: 'FiveMoreinfo',
                    params: { orders: Number(index) }
                })
            }
        },
        computed: {
            toFiveDetAll() {
                return {
                    path: '/fivemore',
                    name: 'FiveMore',
                }
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getFiveDatas(this.$store.state.lang.version)
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        padding: 40px 0;
        width: 100%;
        height: 100%;
        background: rgba(242, 241, 221, 1);
    }

    .box .boxa {
        margin: 0 auto;
        width: 335px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .box .boxa .boxaTitle {
        margin-top: 12px;
    }

    .box .boxa .boxaDsc {
        margin-top: 6px;
        width: 275px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 13.26px;
        color: rgba(153, 153, 153, 0.8);
        text-align: center;
    }

    /* boxb */
    .boxb {
        margin-top: 12px;
        width: 100%;
    }

    .boxb .boxbTop {
        width: 100%;
    }

    .boxb .boxbTop img {
        display: block;
        width: 100%;
        height: 222px;
        background-size: cover;
        background-position: center;
    }

    .boxb .picList {
        display: grid;
        grid-template-columns: 1fr 1fr
    }

    .boxb .picList .picListItem img {
        display: block;
        width: 100%;
        height: 111px;
        object-fit: cover;
        background-size: cover;
        background-position: center;
    }

    /* boxc */
    .boxc {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .boxc .boxcTitle {
        margin-top: 50px;
    }

    .boxc .boxcDsc {
        margin-top: 20px;
        max-width: 90%;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(62, 73, 56, 1);
        text-align: center;
    }

    .shortLine {
        margin-top: 10px;
        width: 20px;
        height: 0px;
        opacity: 0.6;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 1);
    }

    .boxc .boxcContent {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 6px;
        width: 100%;
        padding: 20px;
    }

    .boxc .boxcContent .boxcContentItem {
        display: flex;
        flex-direction: column;
        width: 79px;
        height: 101px;
    }

    .boxc .boxcContent .boxcContentItem .boxcContentItemTop {
        width: 100%;
        height: 81px;
    }

    .boxc .boxcContent .boxcContentItem .boxcContentItemTop img {
        display: block;
        width: 100%;
        height: 81px;
        object-fit: cover;
        background-size: cover;
        background-position: center;
    }

    .boxc .boxcContent .boxcContentItem .boxcContentItemName {
        min-width: 79px;
        max-width: 79px;
        height: 19.35px;
        line-height: 20px;
        font-size: 7px;
        font-weight: 400;
        letter-spacing: 1px;
        text-align: center;
        color: rgba(16, 16, 16, 1);
        /* background: rgba(165, 214, 63, 0.5);*/
        background: rgba(255, 255, 255, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    /* boxd */
    .boxd {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .boxd .boxdTitle {
        max-width: 90%;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(62, 73, 56, 1);
        text-align: center;
    }

    .boxd .boxdContent {
        margin: 0px 20px 0 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        padding: 20px;
        width: 100%;
    }

    .boxd .boxdContent .boxdContentItem {
        width: 160px;
        height: 76px;
    }

    .boxd .boxdContent .boxdContentItem .boxdConetentItemTop {
        width: 160px;
        height: 52px;
    }

    .boxd .boxdContent .boxdContentItem .boxdConetentItemTop img {
        display: block;
        width: 160px;
        height: 52px;
        object-fit: cover;
        background-size: cover;
        background-position: center;
    }

    .boxd .boxdContent .boxdContentItem .boxdConetentItemDsc {
        padding: 0 5px;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        min-width: 160px;
        max-width: 160px;
        height: 24px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        /*background: rgba(62, 73, 56, 1);
        color: rgba(255, 255, 255, 1);*/
        color: rgba(16, 16, 16, 1);
        background: rgba(255, 255, 255, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    /* boxe */
    .boxe {
        margin: 10px auto 0;
        width: 145px;
        height: 28px;
        border-radius: 50px;
        border: 1px solid rgba(62, 73, 56, 1);
    }

    .boxeEn {
        margin: 10px auto 0;
        width: 190px;
        height: 28px;
        border-radius: 50px;
        border: 1px solid rgba(62, 73, 56, 1);
    }

    .boxe a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .boxeEn a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .boxe a span {
        position: relative;
        top: 0;
        height: 14px;
        opacity: 1;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 24px;
        color: rgba(56, 56, 56, 1);
    }

    .boxeEn a span {
        position: relative;
        top: 0;
        height: 14px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 24px;
        color: rgba(56, 56, 56, 1);
    }

    .boxe a span i {
        position: absolute;
        top: -0.24px;
        width: 4.37px;
        height: 18px;
        color: rgba(56, 56, 56, 1);
    }

    .boxeEn a span i {
        position: absolute;
        top: 1px;
        width: 4.37px;
        height: 18px;
        color: rgba(56, 56, 56, 1);
    }
</style>