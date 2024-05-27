<template>
    <div class="about">
        <div class="bread">
            <Breadcrumb :urlData="urlData" />
        </div>
    </div>
</template>

<script>
    import Headers from '@/pages/About/index.vue'
    import Breadcrumb from '@/components/Breadcrumb.vue'

    export default {
        name: 'AboutUs',
        components: { Headers, Breadcrumb },
        data() {
            let urlData = []
            return {
                urlData
            }
        },
        mounted() {
            // console.log(this.$router.history.current.name);
            this.urlData.push({
                path: this.$router.history.current.path,
                name: this.$router.history.current.name
            })
        }
    }
</script>

<style scoped>
    .about {
        width: 100vw;
    }
</style>