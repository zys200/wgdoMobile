<template>
    <div class="box">
        <a href="/"><img src="@/static/imgs/home.png"></a>
        <el-breadcrumb class="ebc" separator-class="el-icon-arrow-left">
            <el-breadcrumb-item v-for="item in urlData" :to="{ path: item.path }">
                <i class="iconfont icon-zuojiantou" id="lef"></i>
                {{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'Breadcrumb',
        props: ['urlData'],
        mounted() {
            // console.log(this.urlData, 'url')
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        display: flex;
        align-items: center;
        height: 19px;
    }

    .box img {
        display: block;
        margin: 0 5px;
        width: 13px;
        height: 13px;
        background-size: cover;
        background-position: center;
        transform: translateY(-.6px);
    }

    #lef {
        display: inline-block;
        margin-right: 5px;
        width: 6.33px;
        height: 11.33px;
        color: rgba(150, 150, 150, 1);
    }

    .el-breadcrumb__item {
        margin-left: -5px;
        width: auto;
        height: 19px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(150, 150, 150, 1);
        text-align: center;
    }

    :deep(.el-breadcrumb__inner) {
        width: 100%;
        height: 14.48px;
        font-size: 10.67px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 14.14px;
        color: rgba(150, 150, 150, 1);
        text-align: left;
    }

    :deep(.is-link) {
        width: 100%;
        height: 19px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(150, 150, 150, 1);
        text-align: left;
    }

    :deep(.is-link:hover) {
        color: rgba(150, 150, 150, 1);
    }

    :deep(.el-icon-arrow-left:before) {
        display: none;
    }
</style>