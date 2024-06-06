<template>
    <div class="box">
        <div class="second">
            <Second />
        </div>
        <div class="third">
            <Third />
        </div>
        <div class="fourth">
            <Fourth />
        </div>
        <div class="five">
            <Five />
        </div>
        <div class="six">
            <Six />
        </div>
    </div>
</template>

<script>
    import Second from '@/pages/Home/Second/index.vue'
    import Third from '@/pages/Home/Third/index.vue'
    import Fourth from '@/pages/Home/Fourth/index.vue'
    import Five from '@/pages/Home/Five/index.vue'
    import Six from '@/pages/Home/Six/index.vue'
    import { getTitle } from '@/api/request.js'

    export default {
        name: 'Home',
        components: { Second, Third, Fourth, Five, Six },
        mounted() {
            if (this.$store.state.lang.isEn === 'en') {
                this.getAllTitle('143')
            } else {
                this.getAllTitle('1')
            }
        },
        methods: {
            getAllTitle(par) {
                getTitle({ "parentId": par }).then(res => {
                    let titles = res.data.rows[0].children
                    this.$store.commit('setHomeTitle', titles)
                })
            }
        },
        watch: {
            '$store.state.lang.isEn': {
                handler() {
                    if (this.$store.state.lang.isEn === 'en') {
                        this.getAllTitle('143')
                    } else {
                        this.getAllTitle('1')
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100vw;
        height: auto;
    }

    .second {
        width: 100vw;
    }

    .third {
        width: 100vw;
    }

    .fourth {
        width: 100vw;
    }

    .five {
        width: 100vw;
    }

    .six {
        width: 100vw;
    }
</style>