<template>
    <div class="architecture">
        <div v-for="i in  aboutDatas" :key="i.aboutusId">
            <span style="font-size: 12px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 15.91px;
            color: rgba(51, 51, 51, 1);" v-html="i.contentDetails"></span>
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
        this.addImageStyles()
    },
    methods: {
        getAboutData(p = this.$store.state.lang.version) {
            getAboutContent({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.aboutDatas = res.data.rows
                    console.log(res.data.rows, 'content');
                }
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