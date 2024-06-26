<template>
    <div class="records">
        <div>records</div>
        <div class="title">{{wflfareData.title}}</div>
        <div class="dsc">
            <span>浏览次数：{{wflfareData.clickVolume}} </span>
            <span>发布时间：{{wflfareData.createTime}}</span>
        </div>
        <div class="underline">
            <div></div>
            <div></div>
        </div>
        <div class="pic" v-html="wflfareData.contentDetails"></div>
    </div>
</template>

<script>
    import { getWelfareproject } from '@/api/request.js'

    export default {
        name: 'Records',
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
                        this.wflfareData = res.data.rows[0]
                        // console.log(res.data.rows, '到货记录');
                        this.wflfareData.urls = 'records'
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
    .records {
        padding-bottom: 20px;
        width: 100vw;
        overflow: hidden;
    }

    .records .title {
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

    .records .underline {
        margin-top: 12px;
    }

    .records .underline div {
        width: 375px;
        height: 0px;
        border: .8px solid rgba(161, 161, 161, 1);
    }

    .records .underline div:last-child {
        margin: 5px 0 20px;
    }

    .records .dsc {
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

    .records .dsc span:first-child {
        margin-right: 10px;
    }
</style>