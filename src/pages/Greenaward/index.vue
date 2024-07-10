<template>
    <div class="greenaward">
        <div class="bread">
            <Breadcrumb :urlData="urlData" />
        </div>
        <div class="container">
            <div class="topTitle">
                <OrderTitle :title="title" />
            </div>
            <div class="toListUse">
                <newMultilayerModal :categoryData="categoryData" @gindex="gindex" @gindexChild="gindexChild" />
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
    import newMultilayerModal from '@/components/newMultilayerModal.vue'
    import { getTitle } from '@/api/request.js'

    export default {
        name: 'Greenaward',
        components: { Breadcrumb, OrderTitle, newMultilayerModal },
        data() {
            let urlData = []
            let titleData = []
            let gindexs = null
            let ggindex = -1
            let categoryData = []
            let title = ''
            let names = []
            return {
                urlData,
                titleData,
                gindexs,
                ggindex,
                categoryData,
                title,
                names
            }
        },
        mounted() {
            if (this.$store.state.lang.isEn === 'en') {
                this.getGreenawardData('149')
            } else {
                this.getGreenawardData('7')
            }
        },
        methods: {
            getGreenawardData(par) {
                getTitle({ "parentId": par }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.urlData = []
                        //res.data
                        this.titleData = res.data.rows
                        //title
                        this.title = this.titleData[0].classifyName
                        //categoryData
                        this.categoryData = this.titleData[0].children
                        this.breadData = this.titleData[0].children
                        let Mapping = ['price', 'contribution']
                        this.categoryData.forEach((v, index) => v.urls = Mapping[index])
                        // console.log(this.breadData, 'br');
                        //增加地址
                        this.addUrls(this.categoryData)
                        //面包屑地址名称
                        this.urlData.push({
                            path: 'contribution',
                            name: this.titleData[0].classifyName
                        })
                        this.titleData[0].children.forEach((v, index) => {
                            if (index === 0) {
                                this.urlData.push(
                                    { path: v.urls, name: v.classifyName }
                                )
                            }
                        })
                        if (this.$route.matched.length > 3) {
                            let currentPaths = this.$route.matched[2].path
                            let aaa = this.getEntries(this.breadData, currentPaths, 1)
                            this.urlData.push(aaa[0])
                        }
                    }
                })
            },
            getEntries(data1, baseAddress, gindex = 0) {
                let result = [];
                function processEntry(entry, baseUrl) {
                    let newPath = baseUrl + (entry.urls ? `/${entry.urls}` : '');
                    if (entry.children && entry.children.length > 0) {
                        processEntry(entry.children[gindex], newPath);
                    } else {
                        result.push({ name: entry.classifyName, path: newPath });
                    }
                }
                processEntry(data1[gindex], baseAddress);
                return result;
            },
            addUrls(data) {
                this.categoryData[1].children.forEach((v, index) => {
                    if (index === 0) {
                        v.urls = 'rule'
                    } else {
                        v.urls = 'personage'
                    }
                })
                this.categoryData = data
                this.breadData[1].children.forEach((v, index) => {
                    if (index === 0) {
                        v.urls = 'rule'
                    } else {
                        v.urls = 'personage'
                    }
                })
                this.categoryData = data
            },
            gindex(gindex) { this.gindexs = gindex },
            gindexChild(gindexChild) { this.ggindex = gindexChild }
        },
        watch: {
            gindexs: {
                handler(newVal) {
                    this.urlData = []
                    this.urlData.push({
                        path: 'contribution',
                        name: this.titleData[0].classifyName
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
                            // this.urlData.splice(this.urlData.length - 1, 1)
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
                        this.getGreenawardData('149')
                    } else {
                        this.getGreenawardData('7')
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .greenaward {
        width: 100vw;
        background: rgba(242, 241, 221, 1);
    }
</style>