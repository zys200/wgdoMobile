<template>
    <div class="logopic">
        <div v-for="item in logoPicData" :key="item.hpId">
            <!-- <a href=""> -->
            <img :src=" 'http://106.3.97.14:9002' + item.cover" alt="">
            <!-- </a> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LogoPic',
        props: ['logoPicData']
    }
</script>

<style scoped>
    .logopic {
        width: 335px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    .logopic img {
        display: block;
        margin-bottom: 15px;
        width: 160px;
        height: 60px;
        border-radius: 5px;
    }
</style>