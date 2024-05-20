<template>
    <div class="box">
        <div class="container">
            <div class="containerTop">
                <div class="title">
                    <span>Organizational dynamics</span>
                </div>
                <div class="titletwo">
                    <span>组织动态</span>
                    <a href="">
                        <More />
                    </a>
                </div>
                <div class="swipes">
                    <van-swipe class="myswipe" :autoplay="3000">
                        <van-swipe-item class="swipeItem">
                            <div class="swipeImgs"><img
                                    src="https://img.js.design/assets/img/656d2a0fd84fbf5ada090732.png#1326725bf7d16197d8aee5544172a369"
                                    alt=""></div>
                            <div class="line"></div>
                            <div class="swipeTitle">全球第一枚绿色设计勋章在欧洲议会颁授</div>
                            <div class="swipeDsc">
                                作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用
                            </div>
                        </van-swipe-item>
                        <van-swipe-item class="swipeItem">
                            <div class="swipeImgs"><img
                                    src="https://img.js.design/assets/img/656d2a0fd84fbf5ada090732.png#1326725bf7d16197d8aee5544172a369"
                                    alt=""></div>
                            <div class="line"></div>
                            <div class="swipeTitle">全球第一枚绿色设会颁授</div>
                            <div class="swipeDsc">作为用户和产品之间的要的角色分享时机在不同的时机分析用</div>
                        </van-swipe-item>
                    </van-swipe>
                </div>
            </div>
            <div class="greenDes">
                <div class="top">
                    <div class="gimg">
                        <img src="@/static/imgs/greenDes.png" alt="">
                    </div>
                    <div class="gtitle">绿色设计观点</div>
                    <div class="gmore">
                        <a href="">
                            <More />
                        </a>
                    </div>
                </div>
                <div class="gline"></div>
                <div class="content">
                    <div class="contentItem">
                        <div class="contentItemTitle">世界环境日丨从源头保护我们的地球</div>
                        <div class="contentItemDsc">作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用</div>
                        <div class="contentLine"></div>
                    </div>
                    <div class="contentItem">
                        <div class="contentItemTitle">世界环境日丨从源头保护我们的地球</div>
                        <div class="contentItemDsc">作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用</div>
                        <div class="contentLine"></div>
                    </div>
                    <div class="contentItem">
                        <div class="contentItemTitle">世界环境日丨从源头保护我们的地球</div>
                        <div class="contentItemDsc">
                            作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用
                        </div>
                        <div class="contentLine"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import More from '@/components/More.vue'

    export default {
        name: 'Second',
        components: { More }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        height: 100%;
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
    }

    /* swipes */
    .container .containerTop .swipes {
        margin-top: 20px;
        width: 100%;
        height: 280px;
    }

    .container .containerTop .swipes .myswipe {
        width: 100%;
        height: 100%;
    }

    .container .containerTop .swipes .myswipe .swipeItem {
        width: 100%;
        height: 100%;
    }

    .container .containerTop .swipes .myswipe .swipeItem .swipeImgs img {
        display: block;
        width: 335px;
        height: 158px;
    }

    .container .containerTop .swipes .myswipe .swipeItem .line {
        margin: 12px 0;
        width: 335px;
        height: 0px;
        opacity: 0.6;
        border: 1px solid rgba(255, 255, 255, 1);
    }

    .container .containerTop .swipes .myswipe .swipeItem .swipeTitle {
        height: 19px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .container .containerTop .swipes .myswipe .swipeItem .swipeDsc {
        margin-bottom: 23px;
        width: 335px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 16px;
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    .myswipe :deep(.van-swipe__indicators) {
        margin-bottom: 10px;
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
        margin: 5px auto 0;
        display: flex;
        align-items: center;
        width: 335px;
        height: 20px;
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
    }

    .container .greenDes .top .gmore {
        line-height: 16px;
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
        height: 19px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .container .greenDes .content .contentItem .contentItemDsc {
        margin-top: 6px;
        width: 335px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 15.91px;
        color: rgba(255, 255, 255, 0.8);
        text-align: left;
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