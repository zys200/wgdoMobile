<template>
    <div class="layout">
        <div class="header">
            <div class="headertext">
                <HeaderText />
            </div>
            <div class="headerBg">
                <HeaderBg />
            </div>
        </div>
        <div class="content">
            <!-- <router-view></router-view> -->
            <TopTitle title="hhhh" />
        </div>
        <div class="footer">
            <Footers />
        </div>
    </div>
</template>

<script>
    import HeaderText from '@/components/Header/HeaderText.vue'
    import HeaderBg from '@/components/Header/HeaderBg.vue'
    import Footers from '@/components/Footers/index.vue'
    import TopTitle from '@/components/TopTitle.vue'

    export default {
        name: 'Layout',
        components: { HeaderText, HeaderBg, Footers, TopTitle }
    }
</script>

<style scoped>
    .layout {
        width: 100vw;
    }

    /* header */
    .header {
        position: relative;
        top: 0;
        width: 100vw;
        height: 484px;
    }

    .headertext {
        position: absolute;
        top: 0;
        width: 100%;
        height: 95px;
        z-index: 200;
        background: rgba(0, 0, 0, .5);
    }

    .headerBg {
        width: 100vw;
    }

    .content {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        height: 100px;
    }

    /* footer */
    .footer {
        width: 100vw;
    }
</style>