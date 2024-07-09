<template>
    <div class="item">
        <div class="bread">
            <Hbreadcrumb :urlData="urlData" />
        </div>
        <div v-if=" $route.path === '/thirdtopmore' ">
            <OrderTitle :title="title" />
            <div class="container">
                <div @click="sedTiaoZhuan(index)" class="containerItem" v-for="(i,index) in moredetDatas"
                    :key="i.mediacenterId">
                    <div class="containerTitle">{{ i.title }}</div>
                    <div class="containerDsc">{{ i.intro }}</div>
                    <div class="lines"></div>
                </div>
            </div>
        </div>
        <router-view v-else @childrenUrl="handleChildrenUrl"></router-view>
    </div>
</template>

<script>
    import { getHomeData } from "@/api/request.js";
    import Hbreadcrumb from '@/components/Hbreadcrumb.vue'
    import OrderTitle from '@/components/OrderTitle.vue'

    export default {
        name: "ThirdTopMore",
        components: { Hbreadcrumb, OrderTitle },
        data() {
            let moredetDatas = []
            let urlData = []
            return {
                moredetDatas,
                urlData,
                title: 'Be in progress'
            }
        },
        mounted() {
            this.getMoredetData()
            if (this.$store.state.lang.isEn !== 'en') {
                this.urlData.push(
                    { path: '/', name: '首页' },
                    { path: '/thirdmore', name: '正在进行' }
                )
            } else {
                this.urlData.push(
                    { path: '/', name: 'Home' },
                    { path: '/thirdmore', name: 'Be in progress' }
                )
            }
        },
        methods: {
            getMoredetData(p = this.$store.state.lang.version) {
                getHomeData({ 'moduleType': '3', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.moredetDatas = res.data.rows
                    }
                })
            },
            sedTiaoZhuan(index) {
                this.$router.push({
                    path: '/thirdtopmore/thirdtopmoreinfo',
                    query: { index }
                })
            },
            handleChildrenUrl(i) { this.urlData.push(i) }
        },
        watch: {
            "$store.state.lang.version": {
                handler() {
                    this.getMoredetData(this.$store.state.lang.version)
                    this.urlData = []
                    if (this.$store.state.lang.isEn !== 'en') {
                        this.urlData.push(
                            { path: '/', name: '首页' },
                            { path: '/thirdtopmore', name: '正在进行' }
                        )
                    } else {
                        this.urlData.push(
                            { path: '/', name: 'Home' },
                            { path: '/thirdtopmore', name: 'Be in progress' }
                        )
                    }
                }
            },
            '$route'() {
                if (this.$route.path === '/thirdtopmore' && this.urlData.length >= 2) {
                    this.urlData.pop()
                }
            }
        }
    }
</script>

<style scoped>
    .item {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: rgba(242, 241, 221, 1);
    }

    .bread {
        padding: 0;
    }

    .container {
        padding: 0 20px 38px;
    }

    .containerItem {
        margin-bottom: 20px;
    }

    .containerTitle {
        padding-bottom: 5px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        line-height: 18.56px;
        color: rgba(40, 40, 40, 1);
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .containerDsc {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 15.91px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
    }

    .lines {
        margin-top: 20px;
        width: 100%;
        height: 0px;
        border: 1px solid rgba(161, 161, 161, .3);
    }
</style>