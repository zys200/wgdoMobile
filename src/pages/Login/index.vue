<template>
    <div class="box">
        <div class="topImg">
            <div>Hello!</div>
            <div :class="$store.state.lang.isEn === 'en' ? 'topImgDscEn' : 'topImgDsc' ">{{ $t('login.welcome') }}</div>
        </div>
        <div :class="active === 0 ? 'content' : 'contentr'">
            <van-tabs v-model="active" line-width="26px" line-heigt="4px" title-active-color="rgba(54, 151, 81, 1)"
                title-inactive-color="rgba(255, 255, 255, 1)">
                <van-tab :title=" $t('login.Quick login') " id="cleft">
                    <loginLeft />
                </van-tab>
                <van-tab :title=" $t('login.Account login') " id="cright">
                    <loginRight />
                </van-tab>
            </van-tabs>
        </div>
        <div class="forget"><a href="#">{{ $t('login.forget') }} ？</a></div>
    </div>
</template>

<script>
    import loginLeft from '@/pages/Login/components/loginLeft.vue'
    import loginRight from '@/pages/Login/components/loginRight.vue'

    export default {
        name: 'Login',
        components: { loginLeft, loginRight },
        data() {
            return {
                active: 0,
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
        height: 100vw;
    }

    .box .topImg {
        left: 0px;
        top: 0px;
        width: 375px;
        height: 350px;
        opacity: 1;
        background: url(https://img.js.design/assets/img/664abb0203bc5ac269ce17de.png#6fc79459a415ff6fe4cdaac4c406ace3);
        background-size: cover;
        background-position: center;
        object-fit: cover;
        overflow: hidden;
    }

    .box .topImg div {
        height: 64px;
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 31.82px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .box .topImg div:first-child {
        margin: 110px 0 0 30px;
    }

    .box .topImg div:last-child {
        margin: -30px 0 0 30px;
    }

    .box .topImg .topImgDsc {
        width: 335px;
        height: 64px;
        font-size: 24px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 31.82px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .box .topImg .topImgDscEn {
        width: 335px;
        height: 64px;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 31.82px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    /* content */
    .content {
        max-width: 343px;
        margin-top: -138px;
        margin: -138px auto 0;
        background-image: url('@/static/imgs/loginLeft.png');
        background-size: cover;
    }

    .contentr {
        max-width: 343px;
        margin-top: -138px;
        margin: -138px auto 0;
        background-image: url('@/static/imgs/loginRight.png');
        background-size: cover;
    }

    /* 头部导航 */
    :deep(.van-tabs__wrap) {
        background-color: none;
        border-radius: 20px 20px 0 0;
    }

    :deep(.van-tabs__nav--line) {
        background-color: rgba(255, 255, 255, .1);
    }

    :deep(.van-tab--active) {
        background: rgba(255, 255, 255, 1);
        border-radius: 20px 20px 0 0;
    }

    /* 头部文字 */
    :deep(.van-tab__text) {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 23.87px;
        text-align: center;
    }

    /* 下划线 */
    :deep(.van-tabs__line) {
        background-color: rgba(54, 151, 81, 1);
    }

    #cleft {
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
    }

    #cright {
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
    }

    .forget {
        position: fixed;
        bottom: 10vh;
        width: 100vw;
        height: 14px;
    }

    .forget a {
        display: inline-block;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 14px;
        color: rgba(165, 214, 63, 1);
        text-align: center;
    }
</style>