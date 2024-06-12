<template>
    <div class="rule">
        <div v-html="contributionData.contentDetails"></div>
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
                getGreenaward({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
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