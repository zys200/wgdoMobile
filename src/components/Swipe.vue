<template>
    <div class="box">
        <van-swipe class="my-swipe" :autoplay="3000" :style="swipeStyle" ref="swipe">
            <van-swipe-item v-for="item in swipeData" :key="item.hpId">
                <img :src=" 'http://106.3.97.14:9002' + item.cover">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: 'Swipe',
        props: ['swipeStyle', 'swipeData'],
        mounted() {
        },
        methods: {
            // this.$refs.swipe.resize();
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        height: 100%;
        background-color: hotpink;
    }

    .my-swipe :deep(.van-swipe__indicators) {
        margin-bottom: 31px;
    }

    .my-swipe :deep(.van-swipe__indicator) {
        margin: 0 3.5px;
        width: 5px;
        height: 5px;
        background: rgba(255, 255, 255, 1);
    }

    .my-swipe :deep(.van-swipe__indicator--active) {
        background: rgba(166, 225, 99, 1);
    }

    .my-swipe img {
        display: block;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }
</style>