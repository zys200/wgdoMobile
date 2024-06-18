<template>
    <div class="learning">
        <div class="bread">
            <Breadcrumb :urlData="urlData" />
        </div>
        <div class="container">
            <div class="topTitle">
                <OrderTitle :title="title" class="titless" />
                <div class="downLoad" v-if="$route.fullPath === '/learning/sharedresource' " @click.stop="downs">
                    <span v-if="!$store.state.isMore">批量下载</span>
                    <span v-else>
                        <span @click.stop="downs">取消</span>
                        <span @click.stop="downss">下载</span>
                    </span>
                </div>
            </div>
            <div class="toListUse">
                <Modal :categoryData="categoryData" @gindex="gindex" />
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from '@/components/Breadcrumb.vue'
    import OrderTitle from '@/components/OrderTitle.vue'
    import Modal from '@/components/Modal.vue'
    import { getTitle } from '@/api/request.js'

    export default {
        name: 'Learning',
        components: { Breadcrumb, OrderTitle, Modal },
        data() {
            let urlData = []
            let titleData = []
            let gindexs = null
            let categoryData = []
            let title = ''
            let isMore = false
            return {
                urlData,
                titleData,
                gindexs,
                categoryData,
                title,
                isMore
            }
        },
        mounted() {
            if (this.$store.state.lang.isEn === 'en') {
                this.getLearningData('147')
            } else {
                this.getLearningData('5')
            }
        },
        methods: {
            getLearningData(par) {
                getTitle({ "parentId": par }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.titleData = res.data.rows[0]
                        let categoryData = this.titleData.children
                        let Mapping = ['designreport', 'designcriteria', 'laboratory', 'sharedresource']
                        this.categoryData = this.titleData.children
                        this.categoryData.forEach((v, index) => {
                            v.urls = Mapping[index]
                        })
                        this.title = this.titleData.classifyName
                        this.urlData = []
                        this.urlData.push(
                            { path: '/learning/designreport', name: this.title },
                            { path: this.titleData.children[0].urls, name: this.titleData.children[0].classifyName }
                        )
                        // sessionStorage.setItem('chirdData', JSON.stringify(this.categoryData))
                    }
                })
            },
            gindex(gindex) {
                this.gindexs = gindex
            },
            downs() {
                this.$store.commit('changeIsMore')
            },
            downss() {
            }
        },
        watch: {
            gindexs: {
                handler(newVal) {
                    this.urlData = []
                    this.titleData.children.forEach((v, index) => {
                        if (index === newVal) {
                            this.urlData.push(
                                { path: '/learning/designreport', name: '学术研究' },
                                { path: v.urls, name: v.classifyName }
                            )
                        }
                    })
                    this.title = this.urlData[1].name
                }
            },
            '$store.state.lang.langs': {
                handler() {
                    if (this.$store.state.lang.isEn === 'en') {
                        this.getLearningData('147')
                    } else {
                        this.getLearningData('5')
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .learning {
        width: 100vw;
        background: rgba(242, 241, 221, 1);
    }

    /* container */
    .container .topTitle {}

    .container .toListUse {}

    .topTitle {
        display: flex;
        justify-content: space-between;
    }

    .topTitle .titless {
        width: 270px;
    }

    .topTitle .downLoad {
        flex: 1;
        padding-right: 20px;
        height: 22px;
        font-size: 10px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 25px;
        color: rgba(165, 214, 63, 1);
        text-align: right;
    }

    .downLoad span:last-child {
        padding-left: 15px;
    }
</style>