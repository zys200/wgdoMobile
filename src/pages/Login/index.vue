<template>
    <div class="box">
        <div class="topImg">
            <div>Hello!</div>
            <div>欢迎来到世界绿色设计组织</div>
        </div>
        <div class="content">
            <van-tabs v-model="active" line-width="26px" line-heigt="4px" title-active-color="rgba(54, 151, 81, 1)"
                title-inactive-color="rgba(255, 255, 255, 1)">
                <van-tab title="快速登录" id="cleft">left</van-tab>
                <van-tab title="账号登录" id="cright">right</van-tab>
            </van-tabs>
            <div class="isRadius"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                active: 0,
            }
        },
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

    /* content */
    .content {
        width: 343px;
        height: 430px;
        margin-top: -138px;
        margin: -138px auto 0;
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
        border-radius: 0 20px 0 0;
    }

    #cright {
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 20px 0 0 0;
    }

    .isRadius {
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 1);
        transform: translate(165px, -40px);
    }
</style>