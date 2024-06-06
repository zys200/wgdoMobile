<template>
    <div class="designcriteria">
        <div class="content" v-for="i in designreportData" :key="i.academicId">
            <span v-html="i.contentDetails"></span>
        </div>
    </div>
</template>

<script>
    import { getlearning } from '@/api/request.js'

    export default {
        name: 'Designcriteria',
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
                getlearning({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.designreportData = res.data.rows
                        console.log(this.designreportData);
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
    .designcriteria {
        padding: 0 20px 20px;
        overflow: hidden;
    }

    .designcriteria .content {
        width: 335px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 15.91px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
    }
</style>