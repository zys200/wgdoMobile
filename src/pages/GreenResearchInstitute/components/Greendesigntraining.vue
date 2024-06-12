<template>
    <div class="greendesigntraining">
        <div class="greendesigntrainingItem" v-for="i in organizationDatas" :key="i.greeninstituteId">
            <div class="pic">
                <img :src=" 'http://106.3.97.14:9002/' + i.cover " alt="">
                <div class="bottoms">
                    <div class="title">{{i.title}}</div>
                    <div class="dsc">{{i.intro}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getGreenResearchInstitute } from '@/api/request.js'

    export default {
        name: 'Organization',
        data() {
            let organizationDatas = []
            return {
                organizationDatas
            }
        },
        mounted() {
            this.getGreenResearchInstituteData()
        },
        methods: {
            getGreenResearchInstituteData(p = this.$store.state.lang.version) {
                getGreenResearchInstitute({ 'moduleType': '4', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.organizationDatas = res.data.rows
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getGreenResearchInstituteData()
                }
            }
        }
    }
</script>

<style scoped>
    .greendesigntraining {
        padding: 0 20px 20px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px 7px;
    }

    .greendesigntrainingItem {
        border-bottom: 1px solid rgba(161, 161, 161, .3);
        width: 164px;
        height: 110px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
        background-blend-mode: normalnormal;
    }

    .greendesigntrainingItem .pic {
        position: relative;
        width: 164px;
        height: 110px;
    }

    .greendesigntrainingItem .pic img {
        display: block;
        width: 164px;
        height: 110px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .greendesigntrainingItem .bottoms {
        position: absolute;
        bottom: 0;
        width: 164px;
        overflow: hidden;
    }

    .greendesigntrainingItem .bottoms .title {
        margin-left: 10px;
        height: 16px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 15.91px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .greendesigntrainingItem .bottoms .dsc {
        margin: 10px;
        height: 13px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 13.26px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>