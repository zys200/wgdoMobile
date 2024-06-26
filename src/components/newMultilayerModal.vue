<template>
    <div class="newMultilayerModal">
        <div class="lefts" v-show="isShow">
            <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" active-text-color="#a6e163ff"
                :unique-opened="true" :router="true">
                <template v-for="(i, index) in categoryData">
                    <el-submenu v-if="i.children && i.children.length > 1" :index="i.urls" :key="i.classifyId">
                        <template v-slot:title>
                            <!-- <router-link :to="{ name: i.urls }"></router-link> -->
                            <span>{{i.classifyName}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item v-for="(t, tt) in i.children" :key="t.classifyId"
                                @click="handleSubcategoryClick(i.classifyId, t.classifyId)">
                                {{t.classifyName}}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item v-else :index="i.urls" :key="i.classifyId">
                        <!-- <router-link :to="{ name: i.urls }"></router-link> -->
                        {{i.classifyName}}
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
        <div class="toList" @click="showCatalogue">
            <div class="toListA"><i class="icon-liebiao"></i></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'newMultilayerModal',
        props: ['categoryData'],
        data() { return { isShow: false } },
        mounted() {
            if (this.categoryData.length !== 0) {
                sessionStorage.setItem('localcategorydata', JSON.stringify(this.categoryData))
            }
            window.addEventListener('scroll', function () {
                var modal = document.getElementsByClassName('newMultilayerModal')[0];
                if (modal) {
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (scrollTop > 100) {
                        modal.style.top = '70px';
                    } else {
                        modal.style.top = '468px';
                    }
                }
            })
        },
        methods: {
            showCatalogue() {
                if (this.isShow) {
                    this.isShow = false;
                    document.removeEventListener('click', this.closeModal);
                } else {
                    this.isShow = true
                    setTimeout(() => { document.addEventListener('click', this.closeModal) }, 0)
                }
            },
            //折叠
            handleOpen(index) { console.log(index) },
            handleClose(index) { console.log(index) },
            //点击确定二级分类的res
            handleSubcategoryClick(firstCategoryId, secondCategoryId) {
                let localcategorydata = JSON.parse(sessionStorage.getItem('localcategorydata'))
                localcategorydata.forEach(v => {
                    if (firstCategoryId === v.classifyId) {
                        v.children.forEach((k, kk) => {
                            if (secondCategoryId === k.classifyId) {
                                this.$router.push({ name: k.urls });
                            }
                        })
                    }
                })
            }
        },
        beforeRouteLeave(to, from, next) {
            document.removeEventListener('click', this.closeModal)
            next()
        },
        watch: { '$route.path': { handler() { this.isShow = false } } }
    }
</script>

<style scoped>
    a {
        width: 39.62px;
        height: 12.19px;
        font-size: 9.14px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 12.12px;
        color: rgba(150, 150, 150, 1);
        text-align: center;
    }

    .newMultilayerModal {
        width: 179px;
        position: fixed;
        z-index: 2000;
        top: 468px;
        left: calc(100vw - 179px);
        display: flex;
        justify-content: flex-end;
        border-radius: 5px;
    }

    /* lefts */
    .lefts {
        width: 129px
    }

    .lefts .el-menu-vertical-demo {
        width: 129px;
        border-radius: 5px;
    }

    /* toList */
    .newMultilayerModal .toList {
        width: 50px;
        height: 50px;
        opacity: .7;
        border-radius: 50px;
        background: rgba(204, 204, 204, 1);
        overflow: hidden;
    }

    .newMultilayerModal .toList .toListA {
        padding: 4px;
        margin: 2px;
        width: 46px;
        height: 46px;
        border-radius: 50px;
        background: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .newMultilayerModal .toList .toListA i {
        display: inline-block;
        width: 18px;
        height: 18px;
        font-size: 20px;
        font-style: normal;
        font-family: iconfont;
        color: rgba(165, 214, 63, 1);
    }
</style>