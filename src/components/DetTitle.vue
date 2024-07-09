<template>
    <div class="det-title">
        <div class="title">{{title}}</div>
        <div class="info">
            <div class="info-browser">{{ $t('tip.Number of views') }}：{{ clickVolume }}</div>
            <div class="info-create">{{ $t('tip.Release time') }}：{{ releaseTime }}</div>
        </div>
        <div class="underline">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrderTitle',
        props: ['title', 'clickVolume', 'releaseTime']
    }
</script>

<style scoped>
    .det-title {
        width: 100vw;
    }

    .title {
        padding: 0 20px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 21.22px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
    }

    .info {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin: 5px auto 12px;
    }

    .info-browser {
        height: 14px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 13.26px;
        color: rgba(153, 153, 153, 1);
        text-align: left;
        margin-right: 30px;
    }

    .info-create {
        height: 14px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 13.26px;
        color: rgba(153, 153, 153, 1);
        text-align: left;
    }

    .underline {
        margin-top: 12px;
    }

    .underline div {
        width: 375px;
        height: 0px;
        border: .8px solid rgba(161, 161, 161, 1);
    }

    .underline div:last-child {
        margin: 5px 0 20px;
    }
</style>