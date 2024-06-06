<template>
    <div class="sharedresource">
        <div class="sharedresourceItem" v-for="i in designreportData" :key="i.academicId">
            <div class="left">
                <div class="title">{{i.gxfileList[0].name}}</div>
                <div class="dsc">{{i.createTime}}</div>
            </div>
            <div class="right">
                <i class="iconfont icon-xiazai" v-if="!$store.state.isMore" @click="downLoad(i.academicId)"></i>
                <van-checkbox-group v-model="results" v-else checked-color="rgba(165, 214, 63, 1)" @change="isChange"
                    class="vcg">
                    <van-checkbox :name="i.academicId"></van-checkbox>
                </van-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
    import { getlearning } from '@/api/request.js'

    export default {
        name: 'Designcriteria',
        data() {
            let designreportData = []
            let results = []
            return {
                designreportData,
                results
            }
        },
        mounted() {
            this.getDesignreportData()
        },
        methods: {
            getDesignreportData(p = this.$store.state.lang.version) {
                getlearning({ 'moduleType': '4', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.designreportData = res.data.rows
                    }
                })
            },
            downLoad(i) {
                this.designreportData.forEach(v => {
                    let urls
                    if (i === v.academicId) {
                        urls = 'http://106.3.97.14:9002/prod-api' + v.gxfileList[0].url
                        // console.log(urls);
                    }
                })
            },
            isChange() {
                console.log(this.results);
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getDesignreportData()
                }
            }
        }
    }
</script>

<style scoped>
    .sharedresource {
        padding: 0 10px 20px;
        overflow: hidden;
    }

    .sharedresourceItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        left: 0px;
        height: 57px;
        border-bottom: 1px solid rgba(161, 161, 161, .3);
    }

    .sharedresourceItem .left {
        max-width: 325px;
    }

    .sharedresourceItem .left .title {
        max-width: 320px;
        height: 16px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 15.91px;
        color: rgba(62, 73, 56, 1);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .sharedresourceItem .left .dsc {
        margin-top: 5px;
        height: 12px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 13.26px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
    }

    .sharedresourceItem .right {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 57px;
    }

    .sharedresourceItem .right i {
        left: 1.25px;
        top: 3.12px;
        width: 17.5px;
        height: 11.25px;
        color: rgba(62, 73, 56, 1);
    }

    .sharedresourceItem .right .vcg {
        height: 12px;
    }
</style>