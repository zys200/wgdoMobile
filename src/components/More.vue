<template>
    <div class="more">
        <a href="">
            <span>{{ $t('second.more') }}</span>
            <i class="iconfont icon-youjiantou"></i>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'More'
    }
</script>

<style scoped>
    .more {
        /*width: 50px;*/
        height: 14px;
        margin-right: 8px;
    }

    .more a {
        display: flex;
        align-items: center;
        top: 0;
    }

    .more a span {
        height: 14px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 14px;
        color: rgba(166, 225, 99, 1);
        text-align: right;
    }

    .more a i {
        top: -1.2px;
        left: 38px;
        width: 3px;
        height: 4px;
        color: rgba(166, 225, 99, 1);
        line-height: 4px;
    }
</style>