<template>
    <div class="greenleaf">
        <div v-for="i in welfareproject" :key="i.benefitId">
            <span style="font-size: 12px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 15.91px;
            color: rgba(51, 51, 51, 1);
            text-align: justify;
            vertical-align: top;" v-html="i.contentDetails"></span>
        </div>
    </div>
</template>

<script>
    import { getWelfareproject } from '@/api/request.js'

    export default {
        name: 'Greenleaf',
        data() {
            return { welfareproject: [] }
        },
        mounted() {
            this.getWelfareprojectData()
            this.addImageStyles()
        },
        methods: {
            getWelfareprojectData(p = this.$store.state.lang.version) {
                getWelfareproject({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.welfareproject = res.data.rows
                    }
                })
            },
            addImageStyles() {
                const style = document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = `.content img { width: 100%; } `;
                document.head.appendChild(style);
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() { this.getWelfareprojectData() }
            }
        }
    }
</script>

<style scoped>
    .greenleaf {
        padding: 0 20px 30px;
        overflow: hidden;
    }

    .greenleaf span {
        margin-bottom: 20px;
    }
</style>