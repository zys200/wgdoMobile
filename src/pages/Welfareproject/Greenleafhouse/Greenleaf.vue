<template>
    <div class="greenleaf">
        <div v-for="i in welfareproject" :key="i.benefitId">
            <span v-html="i.contentDetails"></span>
        </div>
    </div>
</template>

<script>
    import { getWelfareproject } from '@/api/request.js'

    export default {
        name: 'Greenleaf',
        data() {
            let welfareproject = []
            return {
                welfareproject
            }
        },
        mounted() {
            this.getWelfareprojectData()
        },
        methods: {
            getWelfareprojectData(p = this.$store.state.lang.version) {
                getWelfareproject({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.welfareproject = res.data.rows
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getWelfareprojectData()
                }
            }
        }
    }
</script>

<style scoped>
    .greenleaf {
        padding: 0 20px;
        overflow: hidden;
    }

    .greenleaf span {
        margin-bottom: 20px;
    }
</style>