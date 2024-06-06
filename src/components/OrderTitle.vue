<template>
    <div class="order-title">
        <div class="title">{{title}}</div>
        <div class="underline">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OrderTitle',
        props: ['title']
    }
</script>

<style scoped>
    .order-title {
        width: 100vw;
    }

    .title {
        margin-left: 20px;
        height: 22px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 21.22px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        vertical-align: top;
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