<template>
    <div class="video">
        <div class="videoItem" v-for="i in mediacenterDatas" :key="i.mediacenterId">
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
    import { getMediacenter } from '@/api/request.js'

    export default {
        name: 'Video',
        data() {
            let mediacenterDatas = []
            return {
                mediacenterDatas
            }
        },
        mounted() {
            this.getMediacenterData()
        },
        methods: {
            getMediacenterData(p = this.$store.state.lang.version) {
                getMediacenter({ 'moduleType': '2', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.mediacenterDatas = res.data.rows
                        console.log(this.mediacenterDatas, 'content');
                    }
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getMediacenterData()
                }
            }
        }
    }
</script>

<style scoped>
    .video {
        padding: 0 20px;
        overflow: hidden;
    }

    .videoItem {
        margin: 0 auto;
        margin-bottom: 20px;
        width: 335px;
        height: 216px;
        background: rgba(255, 255, 255, 1);
    }

    .videoItem .topPic {
        width: 335px;
        height: 172px;
    }

    .videoItem .topPic img {
        display: block;
        width: 335px;
        height: 172px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .videoItem .bottoms {
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