<template>
    <div class="donate">
        <div>donate</div>
        <Single :singles="wflfareData" v-if="this.$route.path === '/welfareproject/thegreenribbon/donate' " />
        <router-view></router-view>
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
            return {
                wflfareData
            }
        },
        mounted() {
            this.getwflfareDataData()
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
                handler() {
                    this.getwflfareDataData()
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