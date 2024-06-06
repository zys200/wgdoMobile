<template>
    <div class="topTitle">
        <div class="small"></div>
        <div class="big"></div>
        <div class="text">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: 'TopTitle',
        props: ['title']
    }
</script>

<style scoped>
    .topTitle {
        position: relative;
        text-align: center;
        line-height: 22px;
    }

    .small {
        position: absolute;
        left: 0;
        bottom: 2px;
        transform: translateX(-50%);
        width: 8px;
        height: 8px;
        opacity: 1;
        background: rgba(165, 214, 63, 1);
        border-radius: 50%;
    }

    .big {
        position: absolute;
        left: 8px;
        bottom: 2px;
        transform: translateX(-50%);
        width: 22px;
        height: 22px;
        opacity: 0.3;
        background: rgba(165, 214, 63, 1);
        border-radius: 50%;
    }

    .text {
        padding-left: 10px;
        display: inline-block;
        height: 22px;
        line-height: 22px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        color: rgba(51, 51, 51, 1);
    }
</style>