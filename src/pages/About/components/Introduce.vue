<template>
    <div class="introduce">
        <div v-for="i in  aboutDatas" :key="i.aboutusId">
            <span style="
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 1px;
            line-height: 18px;
            color: rgba(51, 51, 51, 1);
            text-align: justify;
            vertical-align: top;
            " v-html="i.contentDetails"></span>
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
            this.getEnImgs()
            this.addImageStyles()
            // if (this.$store.state.lang.isEn = 'en') {
            //     this.getEnImgs()
            // }
        },
        methods: {
            getAboutData(p = this.$store.state.lang.version) {
                getAboutContent({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.aboutDatas = res.data.rows
                        // console.log(res.data.rows, 'content');
                    }
                })
            },
            getEnImgs() {
                let imgs = document.querySelectorAll('img')
                // console.log(imgs[0].src, 'start');
                imgs.forEach(v => {
                    v.src = v.currentSrc
                })
                // console.log(imgs[0].src, 'end');
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
                    // if (this.$store.state.lang.isEn = 'en') {
                    //     this.getEnImgs()
                    // }
                }
            }
        }
    }
</script>

<style scoped>
    .introduce {
        padding: 0 20px 30px;
    }
</style>