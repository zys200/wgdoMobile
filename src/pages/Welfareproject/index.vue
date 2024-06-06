<template>
    <div class="welfareproject">
        <div class="bread">
            <Breadcrumb :urlData="urlData" />
        </div>
        <div class="container">
            <div class="topTitle">
                <OrderTitle :title="title" />
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
        name: 'Mediacenter',
        components: { Breadcrumb, OrderTitle, Modal },
        data() {
            let urlData = []
            let titleData = []
            let gindexs = null
            let categoryData = []
            let title = ''
            return {
                urlData,
                titleData,
                gindexs,
                categoryData,
                title
            }
        },
        mounted() {
            if (this.$store.state.lang.isEn === 'en') {
                this.getMediaCenterData('148')
            } else {
                this.getMediaCenterData('6')
            }
        },
        methods: {
            getMediaCenterData(par) {
                getTitle({ 'parentId': par }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.titleData = res.data.rows[0]
                        let categoryData = this.titleData.children
                        let Mapping = ['greenleaf', 'thegreenribbon']
                        this.categoryData = this.titleData.children
                        this.categoryData.forEach((v, index) => {
                            v.urls = Mapping[index]
                        })
                        this.urlData = []
                        this.urlData.push(
                            { path: '/welfareproject/greenleaf', name: '公益项目' },
                            { path: this.titleData.children[0].urls, name: this.titleData.children[0].classifyName }
                        )
                        this.title = this.urlData[1].name
                        sessionStorage.setItem('chirdData', JSON.stringify(this.categoryData))
                    }
                })
            },
            gindex(gindex) {
                this.gindexs = gindex
            }
        },
        watch: {
            gindexs: {
                handler(newVal) {
                    this.urlData = []
                    this.titleData.children.forEach((v, index) => {
                        if (index === newVal) {
                            this.urlData.push(
                                { path: '/welfareproject/greenleaf', name: '公益项目' },
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
                        this.getMediaCenterData('148')
                    } else {
                        this.getMediaCenterData('6')
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .welfareproject {
        width: 100vw;
        background: rgba(242, 241, 221, 1);
    }

    /* container */
    .welfareproject .topTitle {}

    .welfareproject .toListUse {}
</style>