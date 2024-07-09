<template>
    <div class="box">
        <van-swipe class="my-swipe" :autoplay="3000" :style="swipeStyle" ref="swipe">
            <van-swipe-item v-for="(item,index) in swipeData" :key="item.hpId" @click="getIndexs(index)">
                <img :src=" 'http://www.wgdo.net' + item.cover ">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: 'Swipe',
        props: ['swipeStyle', 'swipeData'],
        methods: {
            getIndexs(index) {
                this.$emit('gindex', Number(index))
            }
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
    }
</style>