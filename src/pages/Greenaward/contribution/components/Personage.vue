<template>
    <div class="personage">
        <div style="font-size: 12px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 15.91px;
        color: rgba(51, 51, 51, 1);padding:0px 22px;" v-html="contributionData.contentDetails"></div>
    </div>
</template>

<script>
    import { getGreenaward } from '@/api/request.js'

    export default {
        name: 'Contribution',
        data() {
            let contributionData = []
            return {
                contributionData
            }
        },
        mounted() {
            this.getContributionData()
        },
        methods: {
            getContributionData(p = this.$store.state.lang.version) {
                getGreenaward({ 'moduleType': '4', 'status': '1', 'version': p }).then(res => {
                    this.contributionData = res.data.rows[0]
                })
            }
        },
        watch: {
            '$store.state.lang.langs': {
                handler() {
                    this.getContributionData()
                }
            }
        }
    }
</script>