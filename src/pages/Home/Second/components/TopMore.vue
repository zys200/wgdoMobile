<template>
    <div class="topmore">
        <div class="item">
            <div class="bread">
                <Hbreadcrumb :urlData="urlData" />
            </div>
            <div v-if=" $route.path === '/topmore' ">
                <OrderTitle :title="title" />
                <div class="container" v-for="(i,index) in moredetDatas" :key="i.hpId" @click="sedTiaoZhuan(index)">
                    <img :src=" 'http://www.wgdo.net' + i.cover " alt="">
                    <span>{{i.title}}</span>
                </div>
            </div>
            <router-view v-else @childrenUrl="handleChildrenUrl"></router-view>
        </div>
    </div>
</template>

<script>
    import { getHomeData } from "@/api/request.js"
    import Hbreadcrumb from '@/components/Hbreadcrumb.vue'
    import OrderTitle from '@/components/OrderTitle.vue'

    export default {
        name: 'TopMore',
        components: { Hbreadcrumb, OrderTitle },
        data() {
            let moredetDatas = []
            let urlData = []
            return {
                moredetDatas,
                urlData,
                title: 'Green design perspective'
            };
        },
        mounted() {
            this.getMoredetData()
            if (this.$store.state.lang.isEn !== 'en') {
                this.urlData.push(
                    { path: '/', name: '首页' },
                    { path: '/topmore', name: '绿色设计观点' }
                )
            } else {
                this.urlData.push(
                    { path: '/', name: 'Home' },
                    { path: '/topmore', name: 'Green design perspective' }
                )
            }
        },
        methods: {
            getMoredetData(p = this.$store.state.lang.version) {
                getHomeData({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.moredetDatas = res.data.rows
                    }
                })
            },
            sedTiaoZhuan(index) {
                this.$router.push({
                    path: '/topmore/topmoreinfo',
                    query: { index }
                })
                console.log(index);
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
                            { path: '/topmore', name: '组织动态' }
                        )
                    } else {
                        this.urlData.push(
                            { path: '/', name: 'Home' },
                            { path: '/topmore', name: 'Organizational dynamics' }
                        )
                    }
                }
            },
            '$route'() {
                if (this.$route.path === '/topmore' && this.urlData.length >= 2) {
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
        margin: 0 auto;
        margin-bottom: 20px;
        width: 335px;
        height: 216px;
    }

    .container img {
        display: block;
        width: 335px;
        height: 172px;
        object-fit: cover;
    }

    .container span {
        display: inline-block;
        padding: 0 12px;
        width: 335px;
        height: 46px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        line-height: 46px;
        background-color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>