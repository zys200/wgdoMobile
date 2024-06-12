<template>
    <div class="organization">
        <div class="organizationItem" v-for="i in organizationDatas" :key="i.greeninstituteId">
            <div class="pic">
                <img :src=" 'http://106.3.97.14:9002/' + i.cover " alt="">
            </div>
            <div class="bottoms">
                <div class="title">{{i.title}}</div>
                <div class="dsc">{{i.intro}}</div>
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
                getGreenResearchInstitute({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
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
    .organization {
        padding: 0 20px;
        overflow: hidden;
    }

    .organizationItem {
        margin-bottom: 20px;
        width: 335px;
    }

    .organizationItem .pic {
        width: 335px;
        height: 193px;
    }

    .organizationItem .pic img {
        display: block;
        width: 335px;
        height: 193px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .organizationItem .bottoms {
        width: 335px;
        overflow: hidden;
    }

    .bottoms .title {
        margin: 20px 0 12px;
        height: 19px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(40, 40, 40, 1);
        text-align: left;
    }

    .bottoms .dsc {
        margin-bottom: 30px;
        width: 335px;
        height: 78px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 15.91px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
    }
</style>