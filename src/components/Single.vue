<template>
    <div class="single">
        <router-link to="#" v-for="t in singles" :key="t.benefitId">
            <div class="singleItem">
                <div class="txt">{{t.title}}</div>
                <div class="timer">[{{t.createTime}}]</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Single',
        props: ['singles'],
        mounted() {
            this.sliceSingles()
            console.log(this.singles);
        },
        methods: {
            sliceSingles() {
                this.singles.forEach(v => {
                    v.createTime = v.createTime.slice(0, 10)
                })
            }
        }
    }
</script>

<style scoped>
    .single {
        width: 100vw;
        height: 58px;
    }

    .singleItem {
        padding: 0 20px;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(161, 161, 161, .3);
    }

    .single .singleItem .txt {
        height: 58px;
        font-size: 13px;
        font-weight: 550;
        letter-spacing: 1px;
        line-height: 58px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
    }

    .single .singleItem .timer {
        height: 58px;
        font-size: 12px;
        font-weight: 450;
        letter-spacing: 1px;
        line-height: 58px;
        color: rgba(153, 153, 153, 1);
        text-align: right;
    }
</style>