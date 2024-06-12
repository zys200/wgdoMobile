<template>
    <div class="brand">
        <div class="brandItem" v-for="i in organizationDatas" :key="i.greeninstituteId">
            <span v-html="i.contentDetails"></span>
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
                getGreenResearchInstitute({ 'moduleType': '3', 'status': '1', 'version': p }).then(res => {
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
    .brand {
        padding: 0 20px;
        overflow: hidden;
    }

    .brandItem {
        margin-bottom: 30px;
        width: 335px;
    }

    .brandItem span {
        width: 335px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 15.91px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
        vertical-align: top;
    }
</style>