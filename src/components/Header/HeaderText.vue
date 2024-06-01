<template>
    <div class="box">
        <div class="headerText">
            <div class="catalogue" is-link @click="showCatalogue">
                <i class="iconfont icon-caidan"></i>
                目录
            </div>
            <div class="logo">
                <Logo />
            </div>
            <div class="login"><a href="/login">Login</a></div>
        </div>
        <van-popup class="catalogueDet" v-model="isShow" position="left">
            <a href="#">关于我们</a>
            <a href="#">会议活动</a>
            <a href="#">媒体中心</a>
            <a href="#">学术研究</a>
            <a href="#">公益项目</a>
            <a href="#">国际绿奖</a>
            <a href="#">WGDO绿研究院</a>
            <a href="#">绿叶标</a>
        </van-popup>
    </div>
</template>

<script>
    import Logo from '@/components/Logo.vue'

    export default {
        name: 'HeaderText',
        components: { Logo },
        data() {
            let isShow = false
            return {
                isShow
            }
        },
        methods: {
            showCatalogue() {
                console.log(1);
                this.isShow = true
            }
        }
    }
</script>

<style scoped>
    .box {
        position: relative;
        width: 100%;
    }

    .headerText {
        display: grid;
        grid-template-columns: 1.5fr 5fr 1.5fr;
        align-items: center;
        margin-top: 52px;
        width: 100%;
        height: 35px;
    }

    .catalogue {
        position: relative;
        top: 0;
        padding-left: 15px;
        height: 23px;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 1);
    }

    .catalogue i {
        position: absolute;
        top: .3px;
        left: 7px;
    }

    .logo {
        justify-self: center;
        width: 145px;
        height: 35px;
    }

    .login {
        padding-right: 19px;
        height: 23px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 22.4px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        vertical-align: top;
    }

    .login a {
        height: 35px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
    }

    /* catalogueDet */
    .catalogueDet {
        position: absolute;
        top: 50px;
        left: 6px;
        padding: 16px 39px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        /* height: 600px; */
        border-radius: 5px;
        background: rgba(255, 255, 255, 1);
    }

    /* .catalogueDet :deep(.van-popup) {
        width: 300px;
        height: 600px;
    } */

    .catalogueDet a {
        display: block;
        width: 52px;
        height: 16px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 15.91px;
        color: rgba(150, 150, 150, 1);
    }
</style>