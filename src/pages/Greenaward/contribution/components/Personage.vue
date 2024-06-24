<template>
    <div class="personage">
        <div v-html="contributionData.contentDetails"></div>
    </div>
</template>

<script>
    import { getGreenaward } from '@/api/request.js'

    export default {
        name: 'Contribution',
        data() {
            let contributionData = {}
            return {
                contributionData,
                personageDatas: null
            }
        },
        mounted() {
            this.getContributionData()
            this.personageDatas = JSON.parse(sessionStorage.getItem('personageDatas'))
        },
        methods: {
            getContributionData(p = this.$store.state.lang.version) {
                getGreenaward({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                    this.contributionData = res.data.rows[0]
                })
            }
        },
        watch: {
            '$store.state.lang.langs': { handler() { this.getContributionData() } },
            'personageDatas': {
                handler(newVal) {
                    console.log(newVal);
                    this.contributionData = newVal
                    console.log('personageDatas 变化了：');
                    // this.getContributionData(this.$store.state.lang.version) // 手动获取最新数据
                },
                deep: true
            }
        }
    }
</script>