<template>
    <div class="box">
        <div class="header">
            <div class="headertext">
                <HeaderText />
            </div>
            <div class="headerBg">
                <HeaderBg />
            </div>
        </div>
        <div class="second">
            <Second />
        </div>
        <div class="third">
            <Third />
        </div>
        <div class="fourth">
            <Fourth />
        </div>
        <div class="five">
            <Five />
        </div>
        <div class="six">
            <Six />
        </div>
        <div class="footer">
            <Footers />
        </div>
    </div>
</template>

<script>
    import HeaderText from '@/pages/Home/Header/HeaderText.vue'
    import HeaderBg from '@/pages/Home/Header/HeaderBg.vue'
    import Second from '@/pages/Home/Second/index.vue'
    import Third from '@/pages/Home/Third/index.vue'
    import Fourth from '@/pages/Home/Fourth/index.vue'
    import Five from '@/pages/Home/Five/index.vue'
    import Six from '@/pages/Home/Six/index.vue'
    import Footers from '@/pages/Home/Footers/index.vue'

    export default {
        name: 'Home',
        components: { HeaderText, HeaderBg, Second, Third, Fourth, Five, Six, Footers }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
        height: auto;
    }

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

    .second {
        width: 100vw;
    }

    .third {
        width: 100vw;
    }

    .fourth {
        width: 100vw;
    }

    .five {
        width: 100vw;
    }

    .six {
        width: 100vw;
    }

    .footer {
        width: 100vw;
    }
</style>