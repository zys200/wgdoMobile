<template>
    <div class="box">
        <Headers />
        <div class="content">
            <Breadcrumb class="mianbai" :urlData="urlDatas" />
            <div class="cont" v-for="(item,index) in detData" :key="item.index">
                <div class="title">{{item.title}}</div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div class="dsc" v-html="item.contentDetails"></div>
            </div>
        </div>
        <div class="footer">
            <Footers />
        </div>
    </div>
</template>

<script>
    // import Headers from '@/components/Header'
    // import Footers from '@/components/Footer/index.vue'
    import Breadcrumb from '@/components/Breadcrumb.vue'
    // import { getContentList } from '@/api/requests.js'
    import funs from '@/utils/index.js'

    export default {
        name: 'Details',
        components: { Headers, Breadcrumb, Footers },
        data() {
            let detData = []
            let urlDatas = []
            let types = ''
            let indexs
            return {
                urlDatas,
                detData,
                types,
                indexs,
                currentIndexSession: Number(sessionStorage.getItem('currentIndex'))
            }
        },
        mounted() {
            if (!isNaN(this.currentIndexSession)) {
                this.getCurrentData(this.currentIndexSession, this.$store.state.lang.version, sessionStorage.getItem('currentType'));
            }
            this.types = this.$route.params.types
            if (this.types === 'fourAll' || this.types === 'fiveAll') {
                this.getCurrentData()
            } else if (this.types === 'fourList' || this.types === 'fiveList') {
                this.indexs = this.$route.params.orders
                window.sessionStorage.setItem('currentIndex', this.$route.params.orders);
                window.sessionStorage.setItem('currentType', this.$route.params.types)
                this.currentIndexSession = Number(sessionStorage.getItem('currentIndex'));
                this.getCurrentData(this.indexs)
            }
            if (this.$store.state.lang.isEn !== 'en') {
                this.urlDatas = []
                if (this.types === 'fourList' || this.types === 'fourAll') {
                    this.urlDatas.push(
                        { path: '/', name: '首页' },
                        { path: this.$route.path, name: '世界绿色设计园' }
                    )
                } else {
                    this.urlDatas.push(
                        { path: '/', name: '首页' },
                        { path: this.$route.path, name: '品牌项目' }
                    )
                }
            } else {
                this.urlDatas = []
                if (this.types === 'fourList' || this.types === 'fourAll') {
                    this.urlDatas.push(
                        { path: '/', name: 'Home' },
                        { path: this.$route.path, name: 'World Green Design Park' }
                    )
                } else {
                    this.urlDatas.push(
                        { path: '/', name: 'Home' },
                        { path: this.$route.path, name: 'Brand Project' }
                    )
                }
            }
        },
        methods: {
            getCurrentData(currentIndex = '', p = this.$store.state.lang.version, type) {
                let that = this
                switch (type || that.types) {
                    case 'fourAll':
                        getContentList({ "moduleType": "5", "status": "1", version: p }).then(res => {
                            if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                                that.detData = res.data.rows
                            }
                        })
                        return;
                    case 'fourList':
                        getContentList({ "moduleType": "5", "status": "1", version: p, currentIndex }).then(res => {
                            if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                                res.data.rows.forEach((v, index) => {
                                    if (index === currentIndex) {
                                        this.detData.pop()
                                        this.detData.push(v)
                                    }
                                })
                            }
                        })
                        return;
                    case 'fiveAll':
                        getContentList({ "moduleType": "6", "status": "1", version: p }).then(res => {
                            if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                                let [leftImg, ...rightImgLists] = res.data.rows
                                that.detData = []
                                that.detData.push(leftImg)
                            }
                        })
                        return;
                    case 'fiveList':
                        getContentList({ "moduleType": "6", "status": "1", version: p, currentIndex }).then(res => {
                            if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                                let [leftImg, ...rightImgLists] = res.data.rows
                                that.detData = []
                                rightImgLists.forEach((v, index) => {
                                    if (currentIndex === index) {
                                        that.detData.pop()
                                        that.detData.push(v)
                                    }
                                })
                            }
                        })
                        return;
                }
            }
        },
        watch: {
            "$store.state.lang.version": {
                handler() {
                    if (this.types === 'fourAll' || this.types === 'fiveAll') {
                        funs(this.getCurrentData(), this.$store.state.lang.version)
                    } else {
                        funs(this.getCurrentData(this.indexs), this.$store.state.lang.version)
                    }
                    if (!isNaN(this.currentIndexSession)) {
                        this.getCurrentData(this.currentIndexSession, this.$store.state.lang.version, sessionStorage.getItem('currentType'));
                    }
                    if (this.$store.state.lang.isEn !== 'en') {
                        this.urlDatas = []
                        if (this.types === 'fourList' || this.types === 'fourAll') {
                            this.urlDatas.push(
                                {
                                    path: '/',
                                    name: '首页'
                                },
                                {
                                    path: this.$route.path,
                                    name: '世界绿色设计园'
                                }
                            )
                        } else {
                            this.urlDatas.push(
                                {
                                    path: '/',
                                    name: '首页'
                                },
                                {
                                    path: this.$route.path,
                                    name: '品牌项目'
                                }
                            )
                        }
                    } else {
                        this.urlDatas = []
                        if (this.types === 'fourList' || this.types === 'fourAll') {
                            this.urlDatas.push(
                                {
                                    path: '/',
                                    name: 'Home'
                                },
                                {
                                    path: this.$route.path,
                                    name: 'World Green Design Park'
                                }
                            )
                        } else {
                            this.urlDatas.push(
                                {
                                    path: '/',
                                    name: 'Home'
                                },
                                {
                                    path: this.$route.path,
                                    name: 'Brand Project'
                                }
                            )
                        }
                    }
                }
            }
        },
        beforeRouteLeave(to, from, next) {
            sessionStorage.removeItem('currentIndex');
            sessionStorage.removeItem('currentType');
            next();
        }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
    }

    .content {
        width: 100vw;
        padding: 30px 16vw 120px;
        background: rgba(242, 241, 221, 1);
    }

    .mianbai {
        width: 100%;
    }

    .cont .title {
        margin-top: 30px;
        height: 24px;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
        vertical-align: top;
    }

    .cont .lines {
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .cont .lines .line {
        width: 100%;
        height: 0px;
        border: 1px solid rgba(161, 161, 161, 1);
    }

    .cont .lines .line:first-child {
        margin-bottom: 10px;
    }

    .cont .dsc {
        margin-top: 15px;
        font-size: 15px;
        font-weight: 300;
        letter-spacing: 0px;
        line-height: 25px;
        color: rgba(51, 51, 51, 1);
        text-align: justify;
    }

    .box .footer {
        background: rgba(166, 225, 99, 1) !important;
    }
</style>