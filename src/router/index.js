import Vue from 'vue'
import vueRouter from 'vue-router'
import Layout from '@/pages/Layout/index.vue'

Vue.use(vueRouter)

const routes = [
    {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [
            {
                path: 'about',
                name: 'about',
                component: () => import('@/pages/About/index.vue'),
                children: [
                    {
                        path: 'introduce',
                        // name: '组织介绍',
                        name: 'introduce',
                        component: () => import('@/pages/About/components/Introduce.vue'),
                        meta: { isMe: 'introduce' }
                    },
                    {
                        path: 'architecture',
                        // name: '组织架构',
                        name: 'architecture',
                        component: () => import('@/pages/About/components/Architecture.vue'),
                        meta: { isMe: 'architecture' }
                    },
                    {
                        path: 'character',
                        // name: '重要人物',
                        name: 'character',
                        component: () => import('@/pages/About/components/Character.vue'),
                        meta: { isMe: 'character' }
                    },
                    {
                        path: 'connection',
                        // name: '联系我们',
                        name: 'connection',
                        component: () => import('@/pages/About/components/Connection.vue'),
                        meta: { isMe: 'connection' }
                    }
                ]
            },
            {
                path: 'conference',
                name: 'conference',
                component: () => import('@/pages/Conference/index.vue'),
                children: [
                    {
                        path: 'foretell',
                        // name: '活动预告',
                        name: 'foretell',
                        component: () => import('@/pages/Conference/components/Foretell.vue'),
                        meta: { isMe: 'foretell' }
                    },
                    {
                        path: 'proceed',
                        // name: '正在进行',
                        name: 'proceed',
                        component: () => import('@/pages/Conference/components/Proceed.vue'),
                        meta: { isMe: 'proceed' }
                    },
                    {
                        path: 'review',
                        // name: '历届回顾',
                        name: 'review',
                        component: () => import('@/pages/Conference/components/Review.vue'),
                        meta: { isMe: 'review' }
                    },
                ]
            },
            {
                path: 'mediacenter',
                // name: '媒体中心',
                name: 'mediacenter',
                component: () => import('@/pages/Mediacenter/index.vue'),
                children: [
                    {
                        path: 'dynamic',
                        // name: '组织动态',
                        name: 'dynamic',
                        component: () => import('@/pages/Mediacenter/components/Dynamic.vue')
                    },
                    {
                        path: 'video',
                        // name: '论坛视频',
                        name: 'video',
                        component: () => import('@/pages/Mediacenter/components/Video.vue')
                    },
                    {
                        path: 'report',
                        // name: '媒体报道',
                        name: 'report',
                        component: () => import('@/pages/Mediacenter/components/Report.vue')
                    }
                ]
            },
            {
                path: 'learning',
                // name: '学术研究',
                name: 'learning',
                component: () => import('@/pages/Learning/index.vue'),
                children: [
                    {
                        path: 'designreport',
                        // name: '绿色设计报告',
                        name: 'designreport',
                        component: () => import('@/pages/Learning/components/Designreport.vue')
                    },
                    {
                        path: 'designcriteria',
                        // name: '绿色设计国际标准',
                        name: 'designcriteria',
                        component: () => import('@/pages/Learning/components/Designcriteria.vue')
                    },
                    {
                        path: 'laboratory',
                        // name: '绿色国际实验室',
                        name: 'laboratory',
                        component: () => import('@/pages/Learning/components/Laboratory.vue')
                    },
                    {
                        path: 'sharedresource',
                        // name: '共享资源',
                        name: 'sharedresource',
                        component: () => import('@/pages/Learning/components/Sharedresource.vue')
                    }
                ]
            },
            {
                path: 'welfareproject',
                // name: '公益项目',
                name: 'welfareproject',
                component: () => import('@/pages/Welfareproject/index.vue'),
                children: [
                    {
                        path: 'greenleaf',
                        // name: '绿叶之家',
                        name: 'greenleaf',
                        component: () => import('@/pages/Welfareproject/Greenleafhouse/Greenleaf.vue')
                    },
                    {
                        path: 'thegreenribbon',
                        // name: '绿丝带',
                        name: 'thegreenribbon',
                        component: () => import('@/pages/Welfareproject/TheGreenRibbon/index.vue'),
                        children: [
                            {
                                path: 'donate',
                                // name: '捐赠公示',
                                name: 'donate',
                                component: () => import('@/pages/Welfareproject/TheGreenRibbon/Donate/index.vue'),
                                children: [
                                    {
                                        path: 'records',
                                        // name: '绿丝带物资到货记录',
                                        name: 'records',
                                        component: () => import('@/pages/Welfareproject/TheGreenRibbon/Donate/Records.vue')
                                    },
                                    {
                                        path: 'honorroll',
                                        // name: '绿丝带行动捐赠光荣榜',
                                        name: 'honorroll',
                                        component: () => import('@/pages/Welfareproject/TheGreenRibbon/Donate/Honorroll.vue')
                                    }
                                ]
                            },
                            {
                                path: 'propagate',
                                // name: '抗疫宣传',
                                name: 'propagate',
                                component: () => import('@/pages/Welfareproject/TheGreenRibbon/Propagate/index.vue'),
                                children: [
                                    {
                                        path: 'actions',
                                        // name: '中欧抗疫绿丝带行动',
                                        name: 'actions',
                                        component: () => import('@/pages/Welfareproject/TheGreenRibbon/Propagate/Actions.vue'),
                                        meta: {
                                            title: '中欧抗疫绿丝带行动'
                                        }
                                    }
                                ]
                            },
                            {
                                path: 'lists',
                                // name: '清单',
                                name: 'lists',
                                component: () => import('@/pages/Welfareproject/TheGreenRibbon/Lists/index.vue')
                            }
                        ]
                    }
                ]
            },
            {
                path: 'greenaward',
                // name: '国际绿奖',
                name: 'greenaward',
                component: () => import('@/pages/Greenaward/index.vue'),
                children: [
                    {
                        path: 'price',
                        // name: '绿色设计国际大奖',
                        name: 'price',
                        component: () => import('@/pages/Greenaward/Price/index.vue'),
                    },
                    {
                        path: 'contribution',
                        // name: '绿色设计国际贡献奖',
                        name: 'contribution',
                        component: () => import('@/pages/Greenaward/contribution/index.vue'),
                        children: [
                            {
                                path: 'rule',
                                // name: '评定规则',
                                name: 'rule',
                                component: () => import('@/pages/Greenaward/contribution/components/Rule.vue')
                            },
                            {
                                path: 'personage',
                                // name: '个人获奖名单',
                                name: 'personage',
                                component: () => import('@/pages/Greenaward/contribution/components/Personage.vue')
                            }
                        ]
                    }
                ]
            },
            {
                path: 'greenresearchinstitute',
                // name: 'WGDO绿研院',
                name: 'greenresearchinstitute',
                component: () => import('@/pages/GreenResearchInstitute/index.vue'),
                children: [
                    {
                        path: 'organization',
                        // name: '机构简介',
                        name: 'organization',
                        component: () => import('@/pages/GreenResearchInstitute/components/Organization.vue')
                    },
                    {
                        path: 'branch',
                        // name: '分支拓建',
                        name: 'branch',
                        component: () => import('@/pages/GreenResearchInstitute/components/Branch.vue')
                    },
                    {
                        path: 'brand',
                        // name: '品牌服务',
                        name: 'brand',
                        component: () => import('@/pages/GreenResearchInstitute/components/Brand.vue')
                    },
                    {
                        path: 'greendesigntraining',
                        // name: '绿色设计培训',
                        name: 'greendesigntraining',
                        component: () => import('@/pages/GreenResearchInstitute/components/Greendesigntraining.vue')
                    },
                    {
                        path: 'policy',
                        // name: '绿色政策',
                        name: 'policy',
                        component: () => import('@/pages/GreenResearchInstitute/components/Policy.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/Login/index.vue')
    },
    {
        path: '/details',
        name: 'Details',
        component: () => import('@/components/Details.vue'),
        meta: {
            isAuth: false,
            toTop: true
        }
    },
    {
        path: '/det',
        name: 'Det',
        component: () => import('@/components/Det.vue'),
        meta: {
            isAuth: false,
            toTop: true
        }
    },
]

const router = new vueRouter({
    mode: 'history',
    routes,
    ignoreDuplicate: true
})

export default router