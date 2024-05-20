<template>
    <div class="box">
        <div class="container">
            <div class="boxa">
                <div class="title">
                    <TopTitle title="会议活动" />
                </div>
                <div class="boxaDsc">
                    作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用
                </div>
            </div>
            <div class="boxb">
                <Swipe :swipeStyle="swipeStyle" :swipeData="swipeData" />
            </div>
            <div class="boxc">
                <div class="boxcTitle">
                    <div class="boxctitle">活动预告</div>
                    <a href="">
                        <More />
                    </a>
                </div>
                <div class="boxcContent">
                    <div class="boxcContentItem" style="border-top: 1px dashed rgba(182, 182, 182, 1);">
                        <div class="left">
                            <div class="yue">11-11</div>
                            <div class="years">2000</div>
                        </div>
                        <div class="right">
                            <div class="rightTitle">
                                2018扬州峰会
                            </div>
                            <div class="rightDsc">
                                由世界绿色设计组织(WGDO)主办的“2018世界绿色设计论坛扬州峰会暨世界绿色设计博览会”于12月12日在扬州市召
                            </div>
                        </div>
                    </div>
                    <div class="boxcContentItem">
                        <div class="left" style="background: rgba(165, 214, 63, 0.4)">
                            <div class="yue">11-11</div>
                            <div class="years">2000</div>
                        </div>
                        <div class="right">
                            <div class="rightTitle">
                                2018扬州峰会
                            </div>
                            <div class="rightDsc">
                                由世界绿色设计组织(WGDO)主办的“2018世界绿色设计论坛扬州峰会暨世界绿色设计博览会”于12月12日在扬州市召
                            </div>
                        </div>
                    </div>
                    <div class="boxcContentItem">
                        <div class="left" style="background: rgba(165, 214, 63, 0.2)">
                            <div class="yue">11-11</div>
                            <div class="years">2000</div>
                        </div>
                        <div class="right">
                            <div class="rightTitle">
                                2018扬州峰会
                            </div>
                            <div class="rightDsc">
                                由世界绿色设计组织(WGDO)主办的“2018世界绿色设计论坛扬州峰会暨世界绿色设计博览会”于12月12日在扬州市召
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

    export default {
        name: 'Third',
        components: { TopTitle, Swipe, More },
        data() {
            const swipeStyle = {
                width: '100%',
                height: '218px'
            }
            let swipeData = [
                {
                    pic: 'https://img.js.design/assets/img/66272a8c5489c5903d1aa618.jpg#2c0f8b6a865bd83adb28f7c8ff763ad3'
                },
                {
                    pic: 'https://img.js.design/assets/img/66272a8c5489c5903d1aa618.jpg#2c0f8b6a865bd83adb28f7c8ff763ad3'
                }
            ]
            return {
                swipeStyle,
                swipeData
            }
        },
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
        height: 27px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 13.26px;
        color: rgba(153, 153, 153, 0.8);
        text-align: center;
    }

    /* boxb */
    .container .boxb {
        margin-top: 12px;

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
        width: 79px;
        height: 106px;
        background: rgba(165, 214, 63, 0.6);
    }

    .boxc .boxcContent .boxcContentItem .left .yue {
        margin-top: 29px;
        margin-left: 16px;
        width: 50px;
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
        margin-left: 16px;
        width: 37px;
        height: 19px;
        opacity: 1;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(16, 16, 16, 0.6);
        text-align: left;
    }

    .boxc .boxcContent .boxcContentItem .right {
        padding: 0 12px;
        border-bottom: 1px dashed rgba(182, 182, 182, 1);
    }

    .boxc .boxcContent .boxcContentItem .right .rightTitle {
        margin-top: 9px;
        height: 19px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(16, 16, 16, 1);
        text-align: left;
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
        text-align: justify;
        vertical-align: top;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
</style>