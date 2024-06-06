<template>
    <div class="modal">
        <div class="toList" @click="showCatalogue">
            <div class="toListA">
                <i class="icon-liebiao"></i>
            </div>
        </div>
        <vue-final-modal class="catalogueDetModal" v-model="isShow" @click.native="getIndex">
            <router-link :to="i.urls" v-for="(i,index) in categoryData" :key="i.classifyId">
                {{i.classifyName}}
            </router-link>
        </vue-final-modal>
    </div>
</template>

<script>
    export default {
        name: 'Modal',
        props: ['categoryData'],
        data() {
            let isShow = false
            return {
                isShow
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
                let aCount = document.querySelectorAll('.modal .catalogueDetModal a')
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
    .modal {
        width: 100vw;
        position: fixed;
        top: 468px;
        left: 325px;
    }

    .modal .toList {
        width: 50px;
        height: 50px;
        opacity: 0.3;
        border-radius: 50px;
        background: rgba(204, 204, 204, 1);
        overflow: hidden;
    }

    .modal .toList .toListA {
        margin: 2px;
        width: 46px;
        height: 46px;
        border-radius: 50px;
        background: rgba(255, 255, 255, .5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal .toList .toListA i {
        font-style: normal;
        font-family: iconfont;
        color: rgba(165, 214, 63, 1);
    }

    /* catalogueDetModal */
    .modal .catalogueDetModal {
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

    /* 模态框最外层样式 */
    .modal :deep(.vfm__container) {
        width: 209px;
        border-radius: 5px;
    }

    /* 最外层背景 */
    .modal :deep(.vfm__overlay) {
        border-radius: 5px;
        background: rgba(255, 255, 255, 1);
    }

    /* 整体高度 */
    .catalogueDet :deep(.vfm--inset) {
        background-color: rgba(255, 255, 255, 1);
    }

    .modal .catalogueDetModal a {
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

    .modal .catalogueDetModal a:first-child {
        border-radius: 5px 5px 0 0;
    }

    .modal .catalogueDetModal a:last-child {
        border-radius: 0 0 5px 5px;
        border: none;
    }

    .modal .catalogueDetModal a.router-link-exact-active {
        color: rgba(165, 214, 63, 1);
    }
</style>