<template>
    <div class="box">
        <div class="container">
            <div class="containerTop">
                <div class="title">
                    <span>ORGANIZATIONAL SYNAMICS</span>
                </div>
                <div class="titletwo">
                    <span>{{ $store.state.lang.homeTitle[1]?.classifyName }}</span>
                    <router-link :to="toSencondDetAll">
                        <More />
                    </router-link>
                </div>
                <div class="swipes">
                    <van-swipe class="myswipe" :autoplay="3000">
                        <van-swipe-item class="swipeItem" v-for="(item,index) in sedSwipeData" :key="item.hpId"
                            @click="toSenconds(index)">
                            <div class="swipeImgs"><img :src="'http://www.wgdo.net' + item.cover"></div>
                            <div class="line"></div>
                            <div class="swipeTitle">{{ item.title }}</div>
                            <div class="swipeDsc">{{ item.intro }} </div>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <div class="greenDes">
                <div class="top">
                    <div style="display: flex;">
                        <div class="gimg">
                            <img src="@/static/imgs/greenDes.png" alt="">
                        </div>
                        <div class="gtitle">{{ $store.state.lang.homeTitle[2]?.classifyName }}</div>

                    </div>
                    <div class="gmore">
                        <router-link :to="toSencondDetAlls">
                            <More />
                        </router-link>
                    </div>
                </div>
                <div class="gline"></div>
                <div class="content">
                    <div class="contentItem" v-for="(item,index) in greenData" :key="item.hpId"
                        @click="toSencondDerList(index)">
                        <div class="contentItemTitle">{{item.title}}</div>
                        <div class="contentItemDsc">{{item.intro}}</div>
                        <div class="contentLine"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import More from '@/components/More.vue'
    import { getHomeData } from '@/api/request.js'

    export default {
        name: 'Second',
        components: { More },
        data() {
            let sedSwipeData = []
            let greenData = []
            return {
                sedSwipeData,
                greenData
            }
        },
        mounted() { this.getSecondDatas() },
        methods: {
            getSecondDatas(p = this.$store.state.lang.version) {
                getHomeData({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        // console.log(res.data.rows);
                        this.sedSwipeData = res.data.rows
                    }
                })
                getHomeData({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.greenData = res.data.rows.slice(0, 3)
                    }
                })
            },
            toSenconds(indexs) {
                this.$router.push({
                    path: '/det',
                    name: 'Det',
                    params: {
                        fromPath: this.$route.path,
                        fromName: this.$route.name,
                        orders: Number(indexs),
                        datas: this.sedSwipeData
                    }
                })
            },
            toSencondDerList(indexs) {
                this.$router.push({
                    path: '/det',
                    name: 'Det',
                    params: {
                        fromPath: this.$route.path,
                        fromName: this.$route.name,
                        orders: Number(indexs),
                        datas: this.greenData
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getSecondDatas(this.$store.state.lang.version)
                }
            }
        },
        computed: {
            toSencondDetAll() {
                return {
                    path: '/det',
                    name: 'Det',
                    params: {
                        fromPath: this.$route.path,
                        fromName: this.$route.name,
                        orders: 'seAll',
                        datas: this.sedSwipeData
                    }
                }
            },
            toSencondDetAlls() {
                return {
                    path: '/greendet',
                    name: 'Greendet',
                    params: {
                        fromPath: this.$route.path,
                        fromName: this.$route.name,
                        orders: 'seAll',
                        datas: this.greenData
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        height: auto;
        background-color: rgba(62, 73, 56, 1);
    }

    .container {
        margin: 0 auto;
        padding: 40px 0;
        width: 335px;
    }

    /* title */
    .container .containerTop .title span {
        height: 22px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 22px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    /* titletwo */
    .container .containerTop .titletwo {
        margin-top: 4px;
        display: flex;
        align-items: center;
        height: 22px;
        justify-content: space-between;
    }

    .container .containerTop .titletwo span {
        margin-right: 12px;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 22px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        font-family: 'Misans-Medium';
    }

    /* swipes */
    .container .containerTop .swipes {
        margin-top: 20px;
        width: 100%;
    }

    .container .containerTop .swipes .myswipe {
        width: 100%;
    }

    .container .containerTop .swipes .myswipe .swipeItem {
        width: 100%;
        height: 100%;
    }

    .container .containerTop .swipes .myswipe .swipeItem .swipeImgs img {
        display: block;
        width: 335px;
        height: 158px;
        background-size: cover;
        background-position: center;
    }

    .container .containerTop .swipes .myswipe .swipeItem .line {
        margin: 12px 0;
        width: 335px;
        height: 0px;
        opacity: 0.6;
        border: 1px solid rgba(255, 255, 255, 1);
    }

    .container .containerTop .swipes .myswipe .swipeItem .swipeTitle {
        width: 97%;
        height: 19px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .container .containerTop .swipes .myswipe .swipeItem .swipeDsc {
        margin-bottom: 23px;
        width: 335px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 16px;
        color: rgba(255, 255, 255, 0.8);
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    .myswipe :deep(.van-swipe__indicators) {
        margin-bottom: -5px;
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

    /* greenDes */
    .container .greenDes {
        width: 100%;
    }

    .container .greenDes .top {
        margin: 10px auto 0;
        display: flex;
        align-items: center;
        width: 335px;
        height: 20px;
        justify-content: space-between;
    }

    .container .greenDes .top .gimg {
        margin-right: 11px;
        width: 20px;
        height: 20px;
    }

    .container .greenDes .top .gimg img {
        display: block;
        width: 20px;
        height: 20px;
    }

    .container .greenDes .top .gtitle {
        margin-right: 12px;
        height: 20px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 22px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        font-family: 'Misans-Medium';
    }

    .container .greenDes .top .gmore {
        line-height: 16px;
        margin-top: 4px;
    }

    .container .greenDes .gline {
        margin-top: 16px;
        width: 335px;
        height: 0px;
        opacity: 0.6;
        border: 1px solid rgba(255, 255, 255, 1);
    }

    .container .greenDes .content .contentItem {
        width: 100%;
    }

    .container .greenDes .content .contentItem .contentItemTitle {
        margin-top: 12px;
        width: 97%;
        height: 19px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: 'Misans-Medium';
    }

    .container .greenDes .content .contentItem .contentItemDsc {
        margin-top: 6px;
        width: 335px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 15.91px;
        color: rgba(255, 255, 255, 0.8);
        word-break: break-all;
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    .container .greenDes .contentLine {
        margin-top: 12px;
        width: 335px;
        height: 0px;
        opacity: 0.6;
        border: 1px dashed rgba(255, 255, 255, 1);
    }
</style>