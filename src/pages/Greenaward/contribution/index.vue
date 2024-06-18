<template>
    <div class="contribution">
        <div v-html="contributionData.contentDetails" v-if="this.$route.path === '/greenaward/contribution' "></div>
        <router-view v-else></router-view>
    </div>
</template>

<script>
    import { getGreenaward } from '@/api/request.js'

    export default {
        name: 'Contribution',
        data() {
            let contributionData = []
            return { contributionData }
        },
        mounted() {
            this.getContributionData()
        },
        methods: {
            getContributionData(p = this.$store.state.lang.version) {
                getGreenaward({ 'moduleType': '3', 'status': '1', 'version': p }).then(res => {
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

<style scoped>
    .contribution {
        width: 100vw;
        background: rgba(242, 241, 221, 1);
    }

    /* container */
    .contribution .topTitle {}

    .contribution .toListUse {}
</style>