<template>
    <div class="about">
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
    import { getTitle } from '@/api/request.js'
    import Headers from '@/pages/About/index.vue'
    import Breadcrumb from '@/components/Breadcrumb.vue'
    import OrderTitle from '@/components/OrderTitle.vue'
    import Modal from '@/components/Modal.vue'

    export default {
        name: 'About',
        components: { Headers, Breadcrumb, OrderTitle, Modal },
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
        created() {
            if (this.$store.state.lang.isEn === 'en') {
                this.getAboutData('144')
            } else {
                this.getAboutData('2')
            }
        },
        methods: {
            getAboutData(par) {
                getTitle({ 'parentId': par }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.titleData = res.data.rows[0]
                        this.categoryData = this.titleData.children
                        let Mapping = ['introduce', 'architecture', 'character', 'connection']
                        this.categoryData.forEach((v, index) => {
                            v.urls = Mapping[index]
                        })
                        this.title = this.titleData.classifyName
                        this.urlData = []
                        this.urlData.push(
                            { path: 'introduce', name: this.title },
                            { path: this.titleData.children[0].urls, name: this.titleData.children[0].classifyName }
                        )
                        this.title = this.titleData.classifyName
                        console.log(this.urlData, 'about');
                    }
                })
            },
            gindex(gindex) { this.gindexs = gindex }
        },
        watch: {
            gindexs: {
                handler(newVal) {
                    this.urlData = []
                    this.titleData.children.forEach((v, index) => {
                        if (index === newVal) {
                            this.urlData.push(
                                { path: '/about/introduce', name: '关于我们' },
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
                        this.getAboutData('144')
                    } else {
                        this.getAboutData('2')
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .about {
        width: 100vw;
        background: rgba(242, 241, 221, 1);
    }

    /* container */
    .container .topTitle {}

    .container .toListUse {}
</style>