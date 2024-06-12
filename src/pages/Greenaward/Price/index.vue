<template>
    <div class="price">
        <div v-html="priceData.contentDetails"></div>
    </div>
</template>

<script>
    import { getGreenaward } from '@/api/request.js'

    export default {
        name: 'Price',
        data() {
            let priceData = []
            return {
                priceData
            }
        },
        mounted() {
            this.getPriceData()
        },
        methods: {
            getPriceData(p = this.$store.state.lang.version) {
                getGreenaward({ 'moduleType': '1', 'status': '1', 'version': p }).then(res => {
                    this.priceData = res.data.rows[0]
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    this.getPriceData()
                }
            }
        }
    }
</script>