<template>
    <div class="review">
        <div class="foretellItem" v-for="i in conferenceDatas" :key="i.conferenceId">
            <div class="topPic">
                <img :src="'http://www.wgdo.net/' + i.cover " alt="">
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
        name: 'Review',
        data() {
            let conferenceDatas = []
            return {
                conferenceDatas
            }
        },
        mounted() {
            this.getConferenceData()
        },
        methods: {
            getConferenceData(p = this.$store.state.lang.version) {
                getConference({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.conferenceDatas = res.data.rows
                        // console.log(this.conferenceDatas, 'content');
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getConferenceData()
                }
            }
        }
    }
</script>

<style scoped>
    .review {
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