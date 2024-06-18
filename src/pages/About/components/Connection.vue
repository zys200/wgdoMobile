<template>
    <div class="connection">
        <div class="topData" v-for="i in  aboutDatas" :key="i.aboutusId">
            <span v-html="i.contentDetails"></span>
        </div>
        <div class="toconnection">
            <div class="title">欢迎给我们留言</div>
            <div class="inp">
                <div class="inps">
                    <input type="text" v-model="inptext">
                </div>
                <div class="btn" @click="sendTous">
                    <img src="@/static/imgs/zhifeiji.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { getAboutContent } from '@/api/request.js'

    export default {
        name: 'Introduce',
        data() {
            let aboutDatas = []
            let inptext = ''
            return {
                aboutDatas,
                inptext
            }
        },
        mounted() { this.getAboutData() },
        methods: {
            getAboutData(p = this.$store.state.lang.version) {
                getAboutContent({ 'moduleType': '4', 'status': '1', 'version': p }).then(res => {
                    if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                        this.aboutDatas = res.data.rows
                        // console.log(res.data.rows, 'content');
                    }
                })
            },
            sendTous() {
                if (this.inptext) {
                    console.log('yifasong');
                }
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getAboutData()
                }
            }
        }
    }
</script>

<style scoped>
    .connection {}

    .connection .topData {
        padding: 0 20px 30px;
    }

    /* toconnection */
    .toconnection {
        width: 375px;
        height: 119px;
        opacity: 1;
        background: rgba(62, 73, 56, 1);
        overflow: hidden;
    }

    .toconnection .title {
        margin: 30px 0 0 27px;
        height: 22px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        line-height: 21.22px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
    }

    .toconnection .inp {
        display: flex;
        margin: 12px 0 0 27px;
    }

    .toconnection .inps {
        width: 250px;
        height: 25px;
        opacity: 0.3;
        border-radius: 2px;
        background: rgba(204, 204, 204, 1);
    }

    .toconnection .inps input {
        display: block;
        margin: auto;
        width: 100%;
        height: 25px;
        outline: none;
        border: none;
        font-size: 12px;
    }

    .toconnection .btn {
        margin-left: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 25px;
        opacity: 1;
        border-radius: 2px;
        background: rgba(165, 214, 63, 1);
    }

    .toconnection .btn img {
        display: block;
        width: 18px;
        height: 18px;
    }
</style>