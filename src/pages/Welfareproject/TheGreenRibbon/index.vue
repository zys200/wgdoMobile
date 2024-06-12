<template>
    <div class="thegreenribbon">
        <span style="font-size: 22px;">The Green Ribbon 绿叶标</span>
        <router-view></router-view>
    </div>
</template>

<script>
    import { getWelfareproject } from '@/api/request.js'

    export default {
        name: 'TheGreenRibbon',
        data() {
            let thegreenribbonData = []
            return {
                thegreenribbonData
            }
        },
        mounted() {
            this.getThegreenribbonData()
            // let aaa = JSON.parse(sessionStorage.getItem('welfareData'))
            // console.log(aaa[0].children[1]);
        },
        methods: {
            getThegreenribbonData(p = this.$store.state.lang.version) {
                getWelfareproject({ 'moduleType': '2', "status": '1', 'version': p }).then(res => {
                    // console.log(res.data.rows);
                })
            },
            upMoreUrlData() {

            }
        }
    }
</script>