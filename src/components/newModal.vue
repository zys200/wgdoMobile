<template>
    <div class="newmodal">
        <div class="toList" @click="showCatalogue">
            <div class="toListA"> <i class="icon-liebiao"></i></div>
        </div>
        <vue-final-modal class="catalogueDetModal" v-model="isShow" @click.native="getIndex">
            <template>
                <div v-for="(i,index) in categoryData" :key="i.classifyId">
                    <template v-if="i.children === null">
                        <router-link :to="i.urls">{{i.classifyName}}</router-link>
                    </template>
                    <van-collapse v-else v-model="activeNames" accordion>
                        <router-link :to="i.urls">
                            <van-collapse-item :title="i.classifyName" :name="i.classifyName">
                                <router-link :to="t.urls" v-for="t in i.children" :key="t.classifyId">
                                    {{t.classifyName}}
                                </router-link>
                            </van-collapse-item>
                        </router-link>
                    </van-collapse>
                </div>
            </template>
        </vue-final-modal>
    </div>
</template>

<script>
    export default {
        name: 'newmodal',
        props: ['categoryData'],
        data() {
            let isShow = false
            return {
                isShow,
                activeNames: ['1'],
            }
        },
        mounted() {
            this.getItemNum()
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
            closeModal(e) {
                if (this.isShow && (this.$el.contains(e.target) || !this.$el.contains(e.target))) {
                    this.isShow = false;
                    document.removeEventListener('click', this.closeModal)
                } else {
                    e.stopPropagation();
                }
            },
            getItemNum() {
                let catalogueDetModal = document.getElementsByClassName("catalogueDetModal")[0]
                let aCount = document.querySelectorAll('.newmodal .catalogueDetModal a')
                let catalogueDetModalHeight = 57 * aCount.length
                catalogueDetModal.style.height = catalogueDetModalHeight + 'px'
            },
            getIndex() {
                const indexs = Array.from(event.target.parentNode.children).indexOf(event.target);
                this.$emit('gindex', indexs)
            }
        },
        beforeDestroy() {
            document.removeEventListener('click', this.closeModal);
        }
    }
</script>

<style scoped>
    /* toList */
    .newmodal {
        width: 100vw;
        position: fixed;
        top: 468px;
        left: 325px;
    }

    .newmodal .toList {
        width: 50px;
        height: 50px;
        opacity: 0.3;
        border-radius: 50px;
        background: rgba(204, 204, 204, 1);
        overflow: hidden;
    }

    .newmodal .toList .toListA {
        margin: 2px;
        width: 46px;
        height: 46px;
        border-radius: 50px;
        background: rgba(255, 255, 255, .5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .newmodal .toList .toListA i {
        font-style: normal;
        font-family: iconfont;
        color: rgba(165, 214, 63, 1);
    }

    /* catalogueDetModal */
    .newmodal .catalogueDetModal {
        position: fixed;
        top: 310px;
        left: 195px;
        bottom: 0;
        display: flex;
        flex-direction: column;
        width: 129px;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 5px;
    }

    .newmodal .catalogueDetModal a {
        position: relative;
    }

    .newmodal .catalogueDetModal a i {
        display: inline-block;
        position: absolute;
        top: 1px;
        right: 20px;
        width: 4px;
        height: 9px;
    }

    /* 模态框最外层样式 */
    .newmodal :deep(.vfm__container) {
        width: 209px;
        border-radius: 5px;
    }

    /* 最外层背景 */
    .newmodal :deep(.vfm__overlay) {
        border-radius: 5px;
        background: rgba(255, 255, 255, 1);
    }

    /* 整体高度 */
    .newmodal .catalogueDet :deep(.vfm--inset) {
        background-color: rgba(255, 255, 255, 1);
    }

    .newmodal .catalogueDetModal a {
        display: inline-block;
        width: 129px;
        max-height: 57px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 1px;
        text-align: center;
        line-height: 57px;
        color: rgba(150, 150, 150, 1);
        border-bottom: 1px solid rgba(219, 219, 219, 1);
    }

    .newmodal .catalogueDetModal a:first-child {
        border-radius: 5px 5px 0 0;
    }

    .newmodal .catalogueDetModal a:last-child {
        border-radius: 0 0 5px 5px;
        border: none;
    }

    .newmodal .catalogueDetModal a.router-link-exact-active {
        color: rgba(165, 214, 63, 1);
    }
</style>