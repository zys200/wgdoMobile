<template>
    <div class="breadcrumb">
        <a href="/"><img src="@/static/imgs/home.png"></a>
        <el-breadcrumb class="ebc" separator-class="el-icon-arrow-left">
            <el-breadcrumb-item v-for="item in $store.state.urlDatas" :to="{ name: item.path }">
                <i class="icon-zuojiantou" id="lef"></i>
                {{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'newBreadcrumb',
        props: ['urlData'],
        mounted() {
            this.upurldata()
        },
        methods: {
            upurldata() {
                if (this.urlData) this.$store.commit('pushUrlData', this.urlData)
            }
        },
        beforeDestroy() {
            this.$store.commit('clearUrlDatas')
        }
    }
</script>

<style scoped>
    .breadcrumb {
        display: inline-flex;
        align-items: center;
        width: 335px;
        height: 15px;
        line-height: 15px;
        margin: 14px 20px 12px 20px;
    }

    .breadcrumb img {
        display: block;
        margin: 0 2.5px 0 0;
        width: 9px;
        height: 10px;
        background-size: cover;
        background-position: center;
    }

    .ebc {
        overflow-y: hidden;
        overflow-x: scroll;
        white-space: nowrap;
    }

    #lef {
        display: inline-block;
        margin: 0 5px;
        width: 4.75px;
        height: 8.5px;
        color: rgba(150, 150, 150, 1);
        font-family: iconfont;
        font-style: normal;
    }

    .el-breadcrumb__item {
        margin-left: -5px;
        height: 15px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 15px;
        color: rgba(150, 150, 150, 1);
        text-align: center;
        white-space: nowrap;
    }

    :deep(.el-breadcrumb__inner) {
        height: 10px;
        font-size: 10.67px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 10px;
        color: rgba(150, 150, 150, 1);
        text-align: left;
    }

    :deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
        margin-left: -9px;
    }

    :deep(.is-link) {
        height: 15px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 15px;
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