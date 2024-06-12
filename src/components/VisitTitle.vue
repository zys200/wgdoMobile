<template>
    <div class="visitTitle">
        <h1>hhhh</h1>
        <div class="title">{{visitTitleData.title}}</div>
        <div class="dsc">
            <span>浏览次数：{{visitTitleData.clickVolume}} </span>
            <span>发布时间：{{visitTitleData.createTime}}</span>
        </div>
        <div class="underline">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VisitTitle',
        props: ['visitTitleData']
    }
</script>

<style scoped>
    .visitTitle {
        padding-bottom: 20px;
        width: 100vw;
        overflow: hidden;
    }

    .visitTitle .title {
        margin: 22px auto 0;
        width: 100vw;
        height: 22px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 21.22px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
    }

    .visitTitle .underline {
        margin-top: 12px;
    }

    .visitTitle .underline div {
        width: 375px;
        height: 0px;
        border: .8px solid rgba(161, 161, 161, 1);
    }

    .visitTitle .underline div:last-child {
        margin: 5px 0 20px;
    }

    .visitTitle .dsc {
        margin-top: 5px auto 22px;
        width: 100vw;
        height: 14px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 13.26px;
        color: rgba(153, 153, 153, 1);
        text-align: center;
    }

    .visitTitle .dsc span:first-child {
        margin-right: 10px;
    }
</style>