<template>
    <div class="actions">
        <div>actions</div>
        <!-- <VisitTitle :visitTitle="wflfareData" /> -->
        <h2>无数据</h2>
    </div>
</template>

<script>
    import { getWelfareproject } from '@/api/request.js'
    import VisitTitle from '@/components/VisitTitle.vue'

    export default {
        name: 'Actions',
        components: { VisitTitle },
        data() { return { wflfareData: [] } },
        mounted() { this.getwflfareDataData() },
        methods: {
            getwflfareDataData(p = this.$store.state.lang.version) {
                getWelfareproject({ 'moduleType': '5', 'status': '1', 'version': p }).then(res => {
                    console.log(res);
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        console.log(res.data.rows, '00');
                        // this.wflfareData = res.data.rows
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
    .actions {
        padding-bottom: 20px;
        width: 100vw;
        /* overflow: hidden; */
    }
</style>