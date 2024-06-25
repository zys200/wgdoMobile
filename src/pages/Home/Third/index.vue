<template>
    <div class="box">
        <div class="container">
            <div class="boxa">
                <div class="title">
                    <TopTitle :title="pageTitle" />
                </div>
                <div class="boxaDsc">
                    {{ $t('third.dsc') }}
                </div>
            </div>
            <div class="boxb">
                <!-- :swipeStyle="swipeStyle" -->
                <Swipe :swipeData="thirdswipeData" />
            </div>
            <div class="boxc">
                <div class="boxcTitle">
                    <div :class="$store.state.lang.isEn === 'en' ? 'boxctitleEn' : 'boxctitle'">
                        {{ $store.state.lang.homeTitle[4]?.classifyName }}</div>
                    <a href="">
                        <More />
                    </a>
                </div>
                <div class="boxcContent">
                    <div class="boxcContentItem" v-if="thirdBottomData.length > 0">
                        <div class="left" style="
                            border-top: 1px dashed rgba(182, 182, 182, 1);">
                            <div class="yue">{{ time[0]?.timer }}</div>
                            <div class="years">{{ time[0]?.year }}<span class="yearsZh">年</span></div>
                        </div>

                        <div class="right" style="border-top: 1px dashed rgba(182, 182, 182, 1);">
                            <div class="rightTitle">
                                {{ thirdBottomData[0]?.title }}
                            </div>
                            <div class="rightDsc">
                                {{ thirdBottomData[0]?.intro }}
                            </div>
                        </div>
                    </div>
                    <div class="boxcContentItem" v-if="thirdBottomData.length > 1">
                        <div class="left" style="background: rgba(165, 214, 63, 0.4)">
                            <div class="yue">{{ time[1]?.timer }}</div>
                            <div class="years">{{ time[1]?.year }}<span class="yearsZh">年</span></div>
                        </div>
                        <div class="right">
                            <div class="rightTitle">
                                {{ thirdBottomData[1]?.title }}
                            </div>
                            <div class="rightDsc">
                                {{ thirdBottomData[1]?.intro }}
                            </div>
                        </div>
                    </div>
                    <div class="boxcContentItem" v-if="thirdBottomData.length > 2">
                        <div class="left" style="background: rgba(165, 214, 63, 0.2)">
                            <div class="yue">{{ time[2]?.timer }}</div>
                            <div class="years">{{ time[2]?.year }}<span class="yearsZh">年</span></div>
                        </div>
                        <div class="right">
                            <div class="rightTitle">
                                {{ thirdBottomData[2]?.title }}
                            </div>
                            <div class="rightDsc">
                                {{ thirdBottomData[2]?.intro }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopTitle from '@/components/TopTitle.vue'
import Swipe from '@/components/Swipe.vue'
import More from '@/components/More.vue'
import { getHomeData } from '@/api/request.js'

export default {
    name: 'Third',
    components: { TopTitle, Swipe, More },
    data() {
        const swipeStyle = { width: '335px', height: '218px' }
        let thirdswipeData = []
        let thirdBottomData = []
        let time = []
        return {
            swipeStyle,
            thirdswipeData,
            thirdBottomData,
            time,
            pageTitle: '会议活动'
        }
    },
    mounted() {
        this.getThirdDatas()
    },
    methods: {
        getThirdDatas(p = this.$store.state.lang.version) {
            getHomeData({ 'moduleType': '3', 'status': '1', 'version': p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.thirdswipeData = res.data.rows
                }
            })
            getHomeData({ 'moduleType': '4', 'status': '1', 'version': p }).then(res => {
                let that = this
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.thirdBottomData = res.data.rows
                    res.data.rows.forEach(v => {
                        let stime = that.getTime(v.activityStartDate)
                        that.time.push(stime)
                    });
                }
            })
        },
        getTime(t) {
            const originalDate = new Date(t);
            const year = originalDate.getFullYear();
            const month = ('0' + (originalDate.getMonth() + 1)).slice(-2)
            const day = ('0' + originalDate.getDate()).slice(-2)
            return {
                year: year,
                timer: month + "-" + day,
            };
        }
    },
    watch: {
        '$store.state.lang.isEn': {
            handler() {
                this.getThirdDatas(this.$store.state.lang.version)
                this.pageTitle = this.$store.state.lang.isEn === 'en' ? 'Conferenc Activity' : '会议活动';
            }
        }
    }
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    background: rgba(242, 241, 221, 1);
}

.container {
    margin: 0 auto;
    padding: 52px 0 40px;
    width: 335px;
}

.container .boxa {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container .boxa .title {
    margin: 0 auto;
}

.container .boxa .boxaDsc {
    margin-top: 6px;
    max-width: 297px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 13.26px;
    color: rgba(153, 153, 153, 0.8);
    text-align: center;
}

/* boxb */
.container .boxb {
    margin-top: 12px;
    width: 100%;
    height: 218px;
}

.container .boxb :deep(.my-swipe) {
    width: 100%;
    height: 100%;
}

.container .boxb :deep(.van-swipe-item) {
    width: 100%;
    height: 100%;
}

.container img {
    object-fit: cover;
    background-size: cover;
    background-position: center;
}

.container .boxb :deep(.van-swipe__indicators) {
    margin-bottom: 16px;
}

/* boxc */
.boxc {
    margin-top: 20px;
    padding: 12px;
    width: 100%;
    height: 376px;
    background: rgba(255, 255, 255, 1);
}

.boxc .boxcTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 22px;
}

.boxc .boxcTitle .boxctitle {
    height: 22px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 21.22px;
    color: rgba(16, 16, 16, 1);
    text-align: left;
}

.boxctitleEn {
    height: 22px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 21.22px;
    color: rgba(16, 16, 16, 1);
    text-align: left;
}

.boxc .boxctitle a {
    display: inline-block;
    line-height: 21.22px;
}

.boxc .boxcContent {
    margin: 12px auto;
}

.boxc .boxcContent .boxcContentItem {
    display: flex;
    width: 310px;
    max-height: 106px;
}

.boxc .boxcContent .boxcContentItem .left {
    min-width: 79px;
    height: 106px;
    background: rgba(165, 214, 63, 0.6);
}

.boxc .boxcContent .boxcContentItem .left .yue {
    margin-top: 29px;
    margin-left: 14px;
    height: 24px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 23.87px;
    color: rgba(16, 16, 16, 1);
    text-align: left;
}

.boxc .boxcContent .boxcContentItem .left .years {
    margin-top: 5px;
    margin-left: 14px;
    height: 19px;
    opacity: 1;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 18.56px;
    color: rgba(16, 16, 16, 0.6);
    text-align: left;
}

.yearsZh {
    display: inline-block;
    height: 19px;
    font-size: 10px;
    line-height: 14px;
    transform: translate(1px, -1px);
}

.boxc .boxcContent .boxcContentItem .right {
    padding: 0 12px;
    width: 75%;
    border-bottom: 1px dashed rgba(182, 182, 182, 1);
}

.boxc .boxcContent .boxcContentItem .right .rightTitle {
    margin-top: 9px;
    width: 217px;
    height: 19px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 18.56px;
    color: rgba(16, 16, 16, 1);
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: 'Misans-Medium';
}

.boxc .boxcContent .boxcContentItem .right .rightDsc {
    margin-top: 6px;
    width: 220px;
    height: 64px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 15.91px;
    color: rgba(16, 16, 16, 0.8);
    word-break: break-all;
    text-align: justify;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}
</style>