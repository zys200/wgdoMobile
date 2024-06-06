<template>
    <div class="architecture">
        <div v-for="i in  aboutDatas" :key="i.aboutusId">
            <span v-html="i.contentDetails"></span>
        </div>
    </div>
</template>

<script>
    import { getAboutContent } from '@/api/request.js'

    export default {
        name: 'Introduce',
        data() {
            let isMe = ''
            let myData = []
            let aboutDatas = []
            return {
                isMe,
                myData,
                aboutDatas
            }
        },
        mounted() {
            this.getAboutData()
        },
        methods: {
            getAboutData(p = this.$store.state.lang.version) {
                getAboutContent({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.aboutDatas = res.data.rows
                        console.log(res.data.rows, 'content');
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getAboutData()
                }
            }
        }
    }
</script>

<style scoped>
    .architecture {
        padding: 0 20px;
    }
</style>