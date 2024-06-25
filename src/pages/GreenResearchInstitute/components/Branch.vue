<template>
    <div class="branch">
        <div class="branchItem" v-for="i in organizationDatas" :key="i.greeninstituteId">
            <div class="pic">
                <img :src=" 'http://www.wgdo.net/' + i.cover " alt="">
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
                getGreenResearchInstitute({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
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
    .branch {
        padding: 0 20px;
        overflow: hidden;
    }

    .branchItem {
        margin-bottom: 20px;
        width: 335px;
        border-bottom: 1px solid rgba(161, 161, 161, .3);
    }

    .branchItem .pic {
        width: 335px;
        height: 193px;
    }

    .branchItem .pic img {
        display: block;
        width: 335px;
        height: 193px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .branchItem .bottoms {
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
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 15.91px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
    }
</style>