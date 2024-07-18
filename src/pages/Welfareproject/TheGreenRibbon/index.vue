<template>
    <div class="thegreenribbon">
        <span style="font-size: 22px" v-if=" $route.path === '/welfareproject/thegreenribbon' ">
            <span v-for="i in thegreenribbonData" :key="i.benefitId" v-html="i.contentDetails"></span>
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
                    this.thegreenribbonData = res.data.rows
                })
            }
        }
    }
</script>