<template>
    <div class="box">
        <div class="content">
            <Breadcrumb class="mianbai" :urlData="urlDatas" />
            <div class="cont" v-for="item in detData" :key="item.hpId">
                <div class="title" :class=" $store.state.lang.isEn === 'en' ? 'titleEN' :'title' ">{{item.title}}</div>
                <div class="titletwo">
                    <span v-show="item.clickVolume !== null">浏览次数:{{item.clickVolume}}</span>
                    <span v-show="item.createTime !== null">发布时间:{{item.createTime}}</span>
                </div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div class="dsc" v-html="item.contentDetails"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '@/components/Breadcrumb.vue'
    import { getHomeData } from '@/api/request.js'

    export default {
        name: 'Greendet',
        components: { Breadcrumb },
        data() {
            let detData = []
            let urlDatas = []
            let orders
            return {
                detData,
                urlDatas,
                orders
            }
        },
        mounted() {
            if (typeof (this.$route.params.orders) === 'string') {
                this.getSecondData()
            } else {
                this.orders = this.$route.params.orders
                this.getSecondData(this.orders)
            }
            if (this.$store.state.lang.isEn !== 'en') {
                this.urlDatas = []
                this.urlDatas.push(
                    { path: '/', name: '首页' },
                    { path: this.$route.path, name: '绿色设计观点' }
                )
            } else {
                this.urlDatas = []
                this.urlDatas.push(
                    { path: '/', name: 'Home' },
                    { path: this.$route.path, name: 'Organizational dynamics' }
                )
            }
        },
        methods: {
            getSecondData(currentIndex = '', p = this.$store.state.lang.version) {
                getHomeData({ "moduleType": "2", "status": "1", version: p, currentIndex }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        if (currentIndex === '') {
                            this.detData = res.data.rows
                        } else {
                            this.detData.pop()
                            this.detData.push(res.data.rows[currentIndex])
                        }
                    }
                })
            }
        },
        watch: {
            "$store.state.lang.version": {
                handler() {
                    if (this.orders > 9999) {
                        this.getHomeData(this.$store.state.lang.version, '')
                    } else {
                        this.getHomeData(this.$store.state.lang.version, this.orders)
                    }
                    if (this.$store.state.lang.isEn !== 'en') {
                        this.urlDatas = []
                        this.urlDatas.push(
                            { path: '/', name: '首页' },
                            { path: this.$route.path, name: '绿色设计观点' }
                        )
                    } else {
                        this.urlDatas = []
                        this.urlDatas.push(
                            { path: '/', name: 'Home' },
                            { path: this.$route.path, name: 'Organizational dynamics' }
                        )
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
        height: auto;
    }

    .content {
        width: 100vw;
        background: rgba(242, 241, 221, 1);
    }

    .mianbai {
        width: 100%;
    }

    .cont {
        padding: 7px 16px 12px;
    }

    .cont .title {
        padding: 0 10vw;
        width: 100%;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.36px;
        line-height: 7.72px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
    }

    .cont .titleEN {
        padding: 0 10vw;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
        text-align: center;
    }

    .cont .titletwo {
        margin: 5px 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: 22px;
    }

    .cont .titletwo span {
        left: 19.28px;
        height: 5.09px;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0.36px;
        line-height: 4.82px;
        color: rgba(153, 153, 153, 1);
        text-align: center;
    }

    .cont .lines {
        margin-top: 12px;
        margin-bottom: 20px;
    }

    .cont .lines .line {
        width: 100%;
        height: 0px;
        border: .6px solid rgba(161, 161, 161, 1);
    }

    .cont .lines .line:first-child {
        margin-bottom: 8px;
    }

    .cont .dsc {
        margin-top: 15px;
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0px;
        line-height: 25px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
    }

    .cont .dsc p {
        display: block !important;
        margin: 20px 0 !important;
    }
</style>