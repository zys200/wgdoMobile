<template>
    <div class="proceed">
        <div class="foretellItem" v-for="i in conferenceDatas" :key="i.conferenceId">
            <div class="topPic">
                <img :src="'http://106.3.97.14:9005/' + i.cover " alt="">
            </div>
            <div class="bottoms">
                <div class="title">{{i.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getConference } from '@/api/request.js'

    export default {
        name: 'Proceed',
        data() {
            let conferenceDatas = []
            return {
                conferenceDatas
            }
        },
        mounted() {
            this.getConferenceData()
            // if (this.$store.state.lang.isEn = 'en') {
            //     this.getEnImgs()
            // }
        },
        methods: {
            getConferenceData(p = this.$store.state.lang.version) {
                getConference({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.conferenceDatas = res.data.rows
                        // console.log(this.conferenceDatas, 'content');
                    }
                })
            },
            // getEnImgs() {
            //     let imgs = document.querySelectorAll('img')
            //     console.log(imgs[0].src, 'start');
            //     imgs.forEach(v => {
            //         v.src = v.currentSrc
            //     })
            //     console.log(imgs[0].src, 'end');
            // }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getConferenceData()
                    // if (this.$store.state.lang.isEn = 'en') {
                    //     this.getEnImgs()
                    // }
                }
            }
        }
    }
</script>

<style scoped>
    .proceed {
        padding: 0 20px;
        overflow: hidden;
    }

    .foretellItem {
        margin: 0 auto;
        margin-bottom: 20px;
        width: 335px;
        height: 216px;
        background: rgba(255, 255, 255, 1);
    }

    .foretellItem .topPic {
        width: 335px;
        height: 172px;
    }

    .foretellItem .topPic img {
        display: block;
        width: 335px;
        height: 172px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .foretellItem .bottoms {
        padding: 12px;
        width: 335px;
        height: 43px;
        background: rgba(255, 255, 255, 1);
    }

    .bottoms .title {
        height: 19px;
        opacity: 1;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        vertical-align: top;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: npwrap;
    }
</style>