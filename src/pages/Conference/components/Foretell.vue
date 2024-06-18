<template>
    <div class="foretell">
        <div class="foretellItem" v-for="i in conferenceDatas" :key="i.conferenceId">
            <div class="topPic">
                <img :src="'http://106.3.97.14:9002/' + i.cover " alt="">
            </div>
            <div class="bottoms">
                <div class="title">{{i.title}}</div>
                <div class="dsc">{{i.intro}}</div>
                <div class="timer">{{i.timers}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getConference } from '@/api/request.js'
    import { getTimer } from '@/utils/index.js'

    export default {
        name: 'Foretell',
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
                getConference({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.conferenceDatas = res.data.rows
                        this.conferenceDatas.forEach(v => {
                            v.timers = getTimer(v.activityStartDate)
                        })
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
    .foretell {
        padding: 0 20px;
        overflow: hidden;
    }

    .foretellItem {
        margin-bottom: 20px;
        width: 335px;
        height: 287px;
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
        height: 114px;
        background: rgba(255, 255, 255, 1);
    }

    .bottoms .title {
        max-width: 300px;
        height: 19px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .bottoms .dsc {
        margin: 5px 0;
        width: 311px;
        height: 47px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 15.91px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }

    .bottoms .timer {
        margin-top: 10px;
        height: 14px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 13.26px;
        color: rgba(153, 153, 153, 1);
        text-align: left;
    }
</style>