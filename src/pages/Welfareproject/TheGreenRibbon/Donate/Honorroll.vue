<template>
    <div class="honorroll">
        <VisitTitle :visitTitle="wflfareData" />
        <div class="pic" v-html="wflfareData.contentDetails"></div>
    </div>
</template>

<script>
    import { getWelfareproject } from '@/api/request.js'
    import VisitTitle from '@/components/VisitTitle.vue'

    export default {
        name: 'Records',
        components: { VisitTitle },
        data() {
            let wflfareData = []
            return { wflfareData }
        },
        mounted() { this.getwflfareDataData() },
        methods: {
            getwflfareDataData(p = this.$store.state.lang.version) {
                getWelfareproject({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.wflfareData = res.data.rows[1]
                        this.wflfareData.urls = 'honorroll'
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() { this.getwflfareDataData() }
            }
        }
    }
</script>

<style scoped>
    .honorroll {
        padding-bottom: 20px;
        width: 100vw;
        overflow: hidden;
    }

    .honorroll .title {
        margin: 22px auto 0;
        width: 100vw;
        height: 22px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 21.22px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
    }

    .honorroll .underline {
        margin-top: 12px;
    }

    .honorroll .underline div {
        width: 375px;
        height: 0px;
        border: .8px solid rgba(161, 161, 161, 1);
    }

    .honorroll .underline div:last-child {
        margin: 5px 0 20px;
    }

    .honorroll .dsc {
        margin-top: 5px auto 22px;
        width: 100vw;
        height: 14px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 13.26px;
        color: rgba(153, 153, 153, 1);
        text-align: center;
    }

    .honorroll .dsc span:first-child {
        margin-right: 10px;
    }
</style>