<template>
    <div class="donate">
        <Single :singles="wflfareData" v-if=" $route.path === '/welfareproject/thegreenribbon/donate' " />
        <router-view v-else></router-view>
    </div>
</template>

<script>
    import { getWelfareproject } from '@/api/request.js'
    import Single from '@/components/Single.vue'

    export default {
        name: 'Donate',
        components: { Single },
        data() {
            let wflfareData = []
            return { wflfareData }
        },
        mounted() {
            this.getwflfareDataData()
            if (this.$route.matched.length > 3) {
                this.$store.commit('updateUrlDataAction', { name: '捐赠公示', path: 'donate' })
            }
        },
        methods: {
            getwflfareDataData(p = this.$store.state.lang.version) {
                getWelfareproject({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.wflfareData = res.data.rows
                        let Mapping = ['records', 'honorroll']
                        this.wflfareData.forEach((v, index) => { v.urls = Mapping[index] })
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() { this.getwflfareDataData() }
            },
            "$route": {
                handler() {
                    if (this.$route.fullPath === 'welfareproject/thegreenribbon/donate') {
                        this.$store.commit('updateUrlDataAction', { name: '捐赠公式', path: 'donate' })
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .donate {
        padding-bottom: 20px;
        width: 100vw;
        overflow: hidden;
    }
</style>