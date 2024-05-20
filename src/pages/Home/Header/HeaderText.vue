<template>
    <div class="box">
        <div class="headerText">
            <div class="catalogue">
                <i class="iconfont icon-caidan"></i>
                目录
            </div>
            <div class="logo">
                <Logo />
            </div>
            <div class="login"><a href="/login">Login</a></div>
        </div>
    </div>
</template>

<script>
    import Logo from '@/components/Logo.vue'

    export default {
        name: 'HeaderText',
        components: { Logo }
    }
</script>

<style scoped>
    .box {
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
</style>