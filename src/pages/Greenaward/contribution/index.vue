<template>
    <div class="contribution">
        <div style="margin:0 20px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 15.91px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
        vertical-align: top;" v-html="contributionData.contentDetails"
            v-if="this.$route.path === '/greenaward/contribution'"></div>
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
        this.addImageStyles()
    },
    methods: {
        getContributionData(p = this.$store.state.lang.version) {
            getGreenaward({ 'moduleType': '3', 'status': '1', 'version': p }).then(res => {
                this.contributionData = res.data.rows[0]
            })
        },
        addImageStyles() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `
                .content img {
                    width: 100%;
                }
            `;
            document.head.appendChild(style);
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