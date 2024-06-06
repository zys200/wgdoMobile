<template>
    <div class="designreport">
        <div class="designreportContent">
            <div class="designreportItem" v-for="i in designreportData" :key="i.academicId">
                <img :src=" 'http://106.3.97.14:9002/' + i.cover" alt="">
                <div class="dsc">
                    <span>{{i.title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getlearning } from '@/api/request.js'

    export default {
        name: 'Designreport',
        data() {
            let designreportData = []
            return {
                designreportData
            }
        },
        mounted() {
            this.getDesignreportData()
        },
        methods: {
            getDesignreportData(p = this.$store.state.lang.version) {
                getlearning({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.designreportData = res.data.rows
                    }
                })
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
    .designreport {
        padding: 0 20px;
        overflow: hidden;
    }

    .designreportContent {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 7.5px;
        width: 335px;
    }

    .designreportContent .designreportItem {
        flex: 1;
        margin-bottom: 20px;
        position: relative;
        width: 160px;
        height: 186px;
    }

    .designreportContent .designreportItem img {
        display: block;
        width: 160px;
        height: 186px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .designreportContent .designreportItem .dsc {
        position: absolute;
        bottom: 0;
        width: 160px;
        height: 45px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }

    .designreportContent .designreportItem .dsc span {
        padding: 0 10px;
        width: 140px;
        height: 45px;
        opacity: 1;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 20px;
        color: rgba(255, 255, 255, 1);
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
</style>