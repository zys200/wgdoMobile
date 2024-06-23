<template>
    <div class="newMultilayerModal">
        <div class="lefts" v-show="isShow">
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                active-text-color="#a6e163ff">
                <div v-for="(i,index) in categoryData" :key="i.classifyId">
                    <el-submenu :index="String(index)" v-if="i.children?.length !== 1 && i.children !== null">
                        <div v-for="(t,tt) in i.children" :key="t.classifyId">
                            <!-- 一级 -->
                            <template slot="i.classifyName">
                                <span><router-link :to="{ name: i.urls }">{{i.classifyName}}</router-link></span>
                            </template>
                            <!-- 二级 -->
                            <!-- <el-menu-item-group title="分组2"> -->
                            <el-menu-item index="1">
                                <router-link :to="{ name: t.urls }">{{t.classifyName}}</router-link>
                            </el-menu-item>
                            <!-- </el-menu-item-group> -->
                            <!-- 二级下拉 -->
                            <!-- <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu> -->
                        </div>
                    </el-submenu>
                    <el-menu-item index="1" v-else>
                        <span :slot="i.classifyName">
                            <router-link :to="{ name: i.urls }">
                                {{i.classifyName}}
                            </router-link>
                        </span>
                    </el-menu-item>
                </div>
            </el-menu>
        </div>
        <!-- 右边圆圈 -->
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
            console.log(this.categoryData, 'categoryData');
        },
        methods: {
            showCatalogue() {
                if (this.isShow) {
                    this.isShow = false;
                    document.removeEventListener('click', this.closeModal);
                } else {
                    this.isShow = true;
                    setTimeout(() => {
                        document.addEventListener('click', this.closeModal);
                    }, 0);
                }
            },
            //折叠
            handleOpen(index) { console.log(index) },
            handleClose(index) { console.log(index) }
        },
        beforeRouteLeave(to, from, next) {
            document.removeEventListener('click', this.closeModal);
            next();
        },
        watch: { '$route.path': { handler() { this.isShow = false } } }
    }
</script>

<style scoped>
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
        width: 129px;
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