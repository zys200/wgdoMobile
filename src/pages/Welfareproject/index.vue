<template>
    <div class="welfareproject">
        <div class="bread">
            <newBreadcrumb :urlData="urlData" :key="breadcrumbKey" />
        </div>
        <div class="container">
            <div class="topTitle" v-if=" $route.path === '/welfareproject/greenleaf' ">
                <OrderTitle :title="title" />
                <Greenleaf />
            </div>
            <div class="topTitle" v-else>
                <OrderTitle :title="title" />
                <TheGreenRibbon />
            </div>
            <div class="toListUse">
                <newMultilayerModal :categoryData="categoryData" @gindex="gindex" @gindexChild="gindexChild" />
            </div>
        </div>
    </div>
</template>

<script>
    import newBreadcrumb from '@/components/newBreadcrumb.vue'
    import OrderTitle from '@/components/OrderTitle.vue'
    import newMultilayerModal from '@/components/newMultilayerModal.vue'
    import { getTitle } from '@/api/request.js'
    import Greenleaf from '@/pages/Welfareproject/Greenleafhouse/Greenleaf.vue'
    import TheGreenRibbon from '@/pages/Welfareproject/TheGreenRibbon/index.vue'

    export default {
        name: 'Mediacenter',
        components: { newBreadcrumb, OrderTitle, newMultilayerModal, Greenleaf, TheGreenRibbon },
        data() {
            let urlData = []
            let titleData = []
            let gindexs = null
            let ggindex = -1
            let categoryData = []
            let breadData = []
            let title = ''
            let names = []
            return {
                urlData,
                titleData,
                gindexs,
                ggindex,
                categoryData,
                breadData,
                title,
                names,
                breadcrumbKey: 0
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
                        // console.log(res.data.rows, '公益');
                        this.urlData = []
                        this.titleData = res.data.rows
                        this.title = this.titleData[0].classifyName
                        this.categoryData = this.titleData[0].children
                        // console.log(this.categoryData, 'sdfs');
                        this.breadData = this.titleData[0].children
                        let Mapping = ['greenleaf', 'thegreenribbon']
                        this.categoryData.forEach((v, index) => { v.urls = Mapping[index] })
                        this.addUrls(this.categoryData)
                        //面包屑地址名称
                        this.urlData.push({
                            path: 'greenleaf',
                            name: this.titleData[0].classifyName
                        })
                        this.titleData[0].children.forEach((v, index) => {
                            if (index === 0) {
                                this.urlData.push({ path: v.urls, name: v.classifyName })
                            }
                        })
                        // if (this.$route.matched.length > 3) {
                        //     let currentPaths = this.$route.matched[2].path
                        //     let aaa = this.getEntries(this.breadData, currentPaths, 1)
                        //     this.urlData.push(aaa[0])
                        // }
                    }
                })
            },
            getEntries(data1, baseAddress, gindex = 0) {
                let result = []
                function processEntry(entry, baseUrl) {
                    let newPath = baseUrl + (entry.urls ? `/${entry.urls}` : '')
                    if (entry.children && entry.children.length > 0) {
                        processEntry(entry.children[gindex], newPath);
                    } else { result.push({ name: entry.classifyName, path: newPath }) }
                }
                processEntry(data1[gindex], baseAddress)
                return result
            },
            childrenUrl() {
                this.categoryData[1].children.forEach((v, index) => {
                    let Mapping = ['epidemic', 'submit', 'lists', 'donate', 'news', 'propagate', 'cooperation', 'connection']
                    v.urls = Mapping[index]
                })
            },
            addUrls(data) {
                this.categoryData[1].children.forEach((v, index) => {
                    if (index === 0) {
                        v.urls = 'greenleaf'
                    } else {
                        v.urls = 'thegreenribbon'
                    }
                })
                this.categoryData = data
                this.breadData[1].children.forEach((v, index) => {
                    if (index === 0) {
                        v.urls = 'greenleaf'
                    } else {
                        v.urls = 'thegreenribbon'
                    }
                })
                this.categoryData = data
                this.childrenUrl()
            },
            gindex(gindex) { this.gindexs = gindex },
            gindexChild(ggindex) { this.ggindex = ggindex }
        },
        watch: {
            gindexs: {
                handler(newVal) {
                    this.urlData = []
                    this.titleData[0].children.forEach((v, index) => {
                        if (index === newVal) {
                            this.urlData.push({
                                path: 'greenleaf',
                                name: this.titleData[0].classifyName
                            })
                        }
                    })
                    this.titleData[0].children.forEach((v, index) => {
                        if (index === newVal) {
                            this.urlData.push(
                                { path: v.urls, name: v.classifyName }
                            )
                        }
                    })
                    this.title = this.urlData[1].name
                }
            },
            ggindex: {
                handler(newVal) {
                    this.titleData[0].children[this.gindexs].children.forEach((v, index) => {
                        if (index === newVal) {
                            this.urlData.push({
                                path: v.urls, name: v.classifyName
                            })
                        }
                    })
                }
            },
            '$store.state.lang.langs': {
                handler() {
                    if (this.$store.state.lang.isEn === 'en') {
                        this.getMediaCenterData('148')
                    } else {
                        this.getMediaCenterData('6')
                    }
                    if (this.$route.fullPath === '/welfareproject/greenleaf') {
                        this.urlData[1] = {
                            path: 'greenleaf',
                            name: this.titleData[0].children[0].classifyName
                        }
                    } else {
                        this.urlData[1] = {
                            path: 'thegreenribbon',
                            name: this.titleData[0].children[1].classifyName
                        }
                    }
                    this.breadcrumbKey += 1
                }
            },
            "$route": {
                handler() {
                    if (this.$route.fullPath === '/welfareproject/greenleaf') {
                        this.urlData[1] = {
                            path: 'greenleaf',
                            name: this.titleData[0].children[0].classifyName
                        }
                    } else {
                        this.urlData[1] = {
                            path: 'thegreenribbon',
                            name: this.titleData[0].children[1].classifyName
                        }
                    }
                    this.breadcrumbKey += 1;
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
</style>