<template>
    <div class="thegreenribbon">
        <span style="font-size: 22px" v-if="this.$route.path === '/welfareproject/thegreenribbon' ">
            The Green Ribbon绿叶标
        </span>
        <router-view v-else></router-view>
    </div>
</template>

<script>
    import { getWelfareproject } from '@/api/request.js'

    export default {
        name: 'TheGreenRibbon',
        data() {
            let thegreenribbonData = []
            return { thegreenribbonData }
        },
        mounted() {
            this.getThegreenribbonData()
        },
        methods: {
            getThegreenribbonData(p = this.$store.state.lang.version) {
                getWelfareproject({ 'moduleType': '2', "status": '1', 'version': p }).then(res => {
                    console.log(res.data.rows);
                })
            }
        }
    }
</script>