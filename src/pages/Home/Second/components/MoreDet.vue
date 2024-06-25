<template>
    <div class="moredet">
        <Breadcrumb :urlData="urlData" />
        eriteuiort
    </div>
</template>

<script>
    import Breadcrumb from '@/components/Breadcrumb.vue'

    export default {
        name: 'MoreDet',
        components: { Breadcrumb },
        data() {
            return {
                urlData: []
            }
        },
        mounted() {
            console.log(this.$route);
        }
    }
</script>