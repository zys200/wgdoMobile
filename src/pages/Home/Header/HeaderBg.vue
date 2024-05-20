<template>
    <div class="box">
        <Swipe :swipeStyle="swipeStyle" />
    </div>
</template>

<script>
    import Swipe from '@/components/Swipe.vue'
    import { getHomeData } from '@/request/request.js'

    export default {
        name: "HeaderBg",
        components: { Swipe },
        data() {
            const swipeStyle = {
                width: '100vw',
                height: '484px'
            }
            return {
                swipeStyle
            }
        },
        mounted() {
            // this.getHeaderDatas()
        },
        methods: {
            getHeaderDatas() {
                getHomeData('pageNum=1&pageSize=10', 'GET', { "moduleType": "1", "status": "1" }).then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
        height: 484px;
    }
</style>