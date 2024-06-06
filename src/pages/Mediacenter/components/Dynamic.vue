<template>
    <div class="dynamic">
        <div class="dynamicItem" v-for="v in mediacenterDatas" :key="v.mediacenterId">
            <div class="left">
                <div class="yue">{{v.timer.yue}}</div>
                <div class="years">{{v.timer.years}}</div>
            </div>
            <div class="line"></div>
            <div class="right">
                <div class="title">{{v.title}}</div>
                <div class="dsc">{{v.intro}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getMediacenter } from '@/api/request.js'
    import { getTimerTwo } from '@/utils/index.js'

    export default {
        name: 'Dynamic',
        data() {
            let mediacenterDatas = []
            return {
                mediacenterDatas
            }
        },
        mounted() {
            this.getMediacenterData()
        },
        methods: {
            getMediacenterData(p = this.$store.state.lang.version) {
                getMediacenter({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.mediacenterDatas = res.data.rows
                        this.mediacenterDatas.forEach(v => {
                            v.timer = getTimerTwo(v.updateTime)
                        })
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getMediacenterData()
                }
            }
        }
    }
</script>

<style scoped>
    .dynamic {
        padding: 0 20px;
        overflow: hidden;
    }

    .dynamicItem {
        margin-bottom: 20px;
        height: 106px;
        display: flex;
        border-bottom: 1px solid rgba(161, 161, 161, .3);
    }

    .dynamicItem .left {
        width: 55px;
        margin-right: 10px;
    }

    .dynamicItem .left .yue {
        width: 48px;
        height: 24px;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 23.87px;
        color: rgba(165, 214, 63, 1);
        text-align: left;
    }

    .dynamicItem .left .years {
        width: 42px;
        height: 22px;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 21.22px;
        color: rgba(62, 73, 56, 1);
        text-align: left;
    }

    .dynamicItem .line {
        height: 32px;
        transform: translate(3px, 10px);
        border: 1px solid rgba(153, 153, 153, 1);
    }

    /* right */
    .dynamicItem .right {
        margin-left: 10px;
        max-width: 267px;
    }

    .dynamicItem .right .title {
        margin-bottom: 5px;
        height: 19px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(40, 40, 40, 1);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .dynamicItem .right .dsc {
        width: 267px;
        height: 63px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 15.91px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
</style>