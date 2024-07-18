<template>
    <div class="epidemic">
        <div>epidemic抗疫宣传</div>
        <Single :singles="wflfareData" />
        <router-view />
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
                getWelfareproject({ 'moduleType': '7', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.wflfareData = res.data.rows
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
    .epidemic {
        padding-bottom: 20px;
        width: 100vw;
        overflow: hidden;
    }
</style>