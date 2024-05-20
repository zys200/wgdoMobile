<template>
    <div class="learn">
        <span>了解详情
            <i class="iconfont icon-youjiantou"></i>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'LearnMore'
    }
</script>

<style scoped>
    .learn {
        position: relative;
        width: 100px;
        height: 28px;
        border-radius: 35.5px;
        background: rgba(166, 225, 99, 1);
        display: flex;
        align-items: center;
    }

    .learn span {
        position: absolute;
        left: 20px;
        width: 49px;
        height: 20px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(90, 107, 81, 1);
        text-align: right;
    }

    .learn span i {
        position: absolute;
        left: 40px;
        top: .6px;
        margin-left: 14px;
        width: 3.5px;
        height: 7.71px;
    }
</style>