<template>
    <div class="character">
        <!-- <a href=""> -->
        <div class="characterItem" v-for="i in aboutDatas" :key="i.aboutusId">
            <div class="pic">
                <img :src="'http://www.wgdo.net/'  + i.figureHeadportrait" alt="">
            </div>
            <div class="right">
                <div class="title">{{i.figureName}}</div>
                <div class="dec">{{i.figureIntroduce}}</div>
            </div>
        </div>
        <!-- </a> -->
    </div>
</template>

<script>
    import { getAboutContent } from '@/api/request.js'

    export default {
        name: 'Introduce',
        data() {
            let aboutDatas = []
            return {
                aboutDatas
            }
        },
        mounted() {
            this.getAboutData()
        },
        methods: {
            getAboutData(p = this.$store.state.lang.version) {
                getAboutContent({ 'moduleType': '3', 'status': '1', 'version': p }).then(res => {
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
    .character {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
    }

    /* characterItem */
    .characterItem {
        margin-bottom: 20px;
        display: flex;
    }

    .characterItem .pic {
        margin-right: 20px;
        width: 80px;
        height: 100px;
    }

    .characterItem .pic img {
        display: block;
        width: 80px;
        height: 100px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    /* right */
    .characterItem .right {
        padding: 6px 0 9px 0;
        width: 235px;
    }

    .characterItem .right .title {
        max-width: 235px;
        height: 19px;
        opacity: 1;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .characterItem .right .dec {
        margin-top: 12px;
        max-width: 235px;
        height: 54px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 18px;
        color: rgba(102, 102, 102, 1);
        word-break: break-all;
        text-align: justify;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
    }
</style>