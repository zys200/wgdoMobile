<template>
    <div class="box">
        <div class="boxa">
            <div class="boxaTitle">
                <TopTitle title="品牌项目" />
            </div>
            <div class="boxaDsc">作为用户和产品之间的桥梁社交分享在产品的发展过程中扮演了重要的角色分享时机在不同的时机分析用</div>
        </div>
        <div class="boxb">
            <div class="boxbTop">
                <img src="" alt="">
            </div>
            <div class="picList">
                <img :src="item.pic" alt="" v-for="item in picList" :key="item.index">
            </div>
        </div>
        <div class="boxc">
            <div class="boxcTitle">
                <TopTitle title="获奖名单" />
            </div>
            <div class="boxcDsc">2015绿色设计国际贡献大奖获奖个人</div>
            <div class="shortLine"></div>
            <div class="boxcContent">
                <div class="boxcContentItem">
                    <div class="boxcContentItemTop">
                        <img src="https://img.js.design/assets/smartFill/img334164da748e08.jpg" alt="">
                    </div>
                    <div class="boxcContentItemName">
                        张星星
                    </div>
                </div>
                <div class="boxcContentItem">
                    <div class="boxcContentItemTop">
                        <img src="https://img.js.design/assets/smartFill/img334164da748e08.jpg" alt="">
                    </div>
                    <div class="boxcContentItemName">
                        张星星
                    </div>
                </div>
                <div class="boxcContentItem">
                    <div class="boxcContentItemTop">
                        <img src="https://img.js.design/assets/smartFill/img334164da748e08.jpg" alt="">
                    </div>
                    <div class="boxcContentItemName">
                        张星星
                    </div>
                </div>
                <div class="boxcContentItem">
                    <div class="boxcContentItemTop">
                        <img src="https://img.js.design/assets/smartFill/img334164da748e08.jpg" alt="">
                    </div>
                    <div class="boxcContentItemName">
                        张星星
                    </div>
                </div>
                <div class="boxcContentItem">
                    <div class="boxcContentItemTop">
                        <img src="https://img.js.design/assets/smartFill/img334164da748e08.jpg" alt="">
                    </div>
                    <div class="boxcContentItemName">
                        张星星
                    </div>
                </div>
                <div class="boxcContentItem">
                    <div class="boxcContentItemTop">
                        <img src="https://img.js.design/assets/smartFill/img334164da748e08.jpg" alt="">
                    </div>
                    <div class="boxcContentItemName">
                        张星星sdfsdf
                    </div>
                </div>
            </div>
        </div>
        <div class="boxd">
            <div class="boxdTitle">2015绿色设计国际贡献大奖获奖机构</div>
            <div class="shortLine"></div>
            <div class="boxdContent">
                <div class="boxdContentItem">
                    <div class="boxdConetentItemTop">
                        <img src="https://img.js.design/assets/img/6630bd5b9009830b4a8bd468.jpg" alt="">
                    </div>
                    <div class="boxdConetentItemDsc">IKEsfsdfsdfA</div>
                </div>
                <div class="boxdContentItem">
                    <div class="boxdConetentItemTop">
                        <img src="https://img.js.design/assets/img/6630bd5b9009830b4a8bd468.jpg" alt="">
                    </div>
                    <div class="boxdConetentItemDsc">IKEA</div>
                </div>
                <div class="boxdContentItem">
                    <div class="boxdConetentItemTop">
                        <img src="https://img.js.design/assets/img/6630bd5b9009830b4a8bd468.jpg" alt="">
                    </div>
                    <div class="boxdConetentItemDsc">IKEA</div>
                </div>
            </div>
        </div>
        <div class="boxe">
            <a href="">
                <span>查看历年获奖信息<i class="iconfont icon-youjiantou"></i></span>
            </a>
        </div>
    </div>
</template>

<script>
    import TopTitle from '@/components/TopTitle'

    export default {
        name: 'Five',
        components: { TopTitle },
        data() {
            let picList = [
                {
                    pic: 'https://img.js.design/assets/img/656e79de0730cdb0e847a766.png#0f336d45cd92e89bb6e75aff28e22db1'
                },
                {
                    pic: 'https://img.js.design/assets/img/656e79de0730cdb0e847a766.png#0f336d45cd92e89bb6e75aff28e22db1'
                },
                {
                    pic: 'https://img.js.design/assets/img/656e79de0730cdb0e847a766.png#0f336d45cd92e89bb6e75aff28e22db1'
                },
                {
                    pic: 'https://img.js.design/assets/img/656e79de0730cdb0e847a766.png#0f336d45cd92e89bb6e75aff28e22db1'
                },
            ]
            return {
                picList
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
        height: 27px;
        font-size: 10px;
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
        background: url('https://img.js.design/assets/img/66276cca30560d8346ff0c0d.jpg#38a95656a576c8b4a776dc19d77b2802');
        background-size: cover;
        background-position: center;
    }

    .boxb .picList {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .boxb .picList img {
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
        margin-top: 6px;
        max-width: 190px;
        height: 38px;
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
        height: 100%;
        object-fit: cover;
        background-size: cover;
        background-position: center;
    }

    .boxc .boxcContent .boxcContentItem .boxcContentItemName {
        min-width: 79px;
        max-width: 79px;
        height: 19.35px;
        line-height: 20px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        text-align: center;
        color: rgba(16, 16, 16, 1);
        background: rgba(165, 214, 63, 0.5);
    }

    /* boxd */
    .boxd {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .boxd .boxdTitle {
        max-width: 190px;
        height: 38px;
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
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        min-width: 160px;
        max-width: 160px;
        height: 24px;
        background: rgba(62, 73, 56, 1);
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        color: rgba(255, 255, 255, 1);
    }

    /* boxe */
    .boxe {
        margin: 10px auto 0;
        width: 120px;
        height: 28px;
        border-radius: 50px;
        border: 1px solid rgba(165, 214, 63, 1);
    }

    .boxe a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .boxe a span {
        position: relative;
        top: 0;
        min-width: 88px;
        height: 14px;
        opacity: 1;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 29px;
        color: rgba(165, 214, 63, 1);
    }

    .boxe a span i {
        position: absolute;
        top: -0.34px;
        width: 4.37px;
        height: 8.57px;
        color: rgba(165, 214, 63, 1);
    }
</style>