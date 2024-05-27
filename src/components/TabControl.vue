<template>
    <div class="box">
        <el-tabs class="ets" v-model="activeName" @tab-click="handleClick">
            <template v-for="item in tabName">
                <el-tab-pane class="etp" :label="item" :name="item">
                    <Breadcrumb :urlData="urlData"/>
                    <!-- <div class="wgdo-in" v-for="tab in tabDatas" :key="tab.hpId">
                        {{ tab.label }}
                    </div> -->
                </el-tab-pane>
            </template>
        </el-tabs>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import { Aboutus } from "@/api/requests.js";
import { Meet } from "@/api/requests.js";
import { Media } from "@/api/requests.js";
import { Research } from "@/api/requests.js";
import { Project } from "@/api/requests.js";
import { Prize } from "@/api/requests.js";
import { getWgdo } from '@/api/requests.js'
import funs from '@/utils/index.js'

export default {
    components: { Breadcrumb },
    props: ['tabName'],
    data() {
        let activeName = this.tabName[0]
        let tabDatas = []
        let routesData = []
        let currentRoute = []
        let urlData = []
        let aboutmap = {
            '组织介绍': '1',
            '组织架构': "2",
            '重要人物': '3',
            '联系我们': '4',
        }
        let meetmap = {
            '活动预告': '1',
            '正在进行': "2",
            '历届回顾': '3',
            '活动详情': '4',
        }
        let mediamap = {
            '组织动态': '1',
            '论坛视频': "2",
            '媒体报告': '3',
        }
        let researchmap = {
            '绿色设计报告': '1',
            '绿色设计国际标准': '2',
            '绿色设计国际实验室': '3',
            '共享资源': '4'
        }
        let projectmap = {
            '绿叶之家': '1',
            '绿丝带': "2",
            '绿丝带物资到货记录': "3",
            '绿丝带行动捐赠光荣榜': "5",
            '可信供方清单': "4",
            '抗疫宣传': "6",
        }
        let prizemap = {
            '绿色设计国际大奖': '1',
            '绿色设计国际贡献奖': "2",
            '评定规则': "3",
            '获奖个人': "4",
            '获奖机构': "5",
        }
        let Mapping = {
            '机构简介': '1',
            '分支拓建': '2',
            '品牌服务': '3',
            '绿色政策': '4',
            '绿色设计培训': '5',
        }
        return {
            activeName: '',
            tabDatas,
            routesData,
            currentRoute,
            urlData,
            aboutmap,
            meetmap,
            mediamap,
            researchmap,
            projectmap,
            prizemap,
            Mapping,
        }
    },
    mounted() {
        this.routesData = this.$router.options.routes
        this.currentRoute = this.$router.history.current
        this.routesData.forEach(v => {
            if (v.name === this.currentRoute.name) {
                this.urlData.push(v)
            }
        })
    },
    methods: {
        // 点击选项卡
        handleClick(tab, event) {
            if (this.urlData.length > 1) {
                this.urlData.pop()
            }
            let currentTabName = tab.$options.propsData.name
            this.urlData.push({ name: currentTabName })
            //在这里发请求 你点哪一个就发哪一个请求
            // 关于我们
            for (const key in this.aboutmap) {
                if (key === this.urlData[1].name) {
                    this.getAboutusData(this.aboutmap[key])
                    this.$emit('tabclickDatas', this.urlData[1].name)
                    // console.log(this.getAboutusData);
                    return
                }
            };
            // 会议活动
            for (const key in this.meetmap) {
                if (key === this.urlData[1].name) {
                    this.getMeetData(this.meetmap[key])
                    this.$emit('tabclickDatas', this.urlData[1].name)
                    // console.log(key);
                    return
                }
            };
            // 媒体中心
            for (const key in this.mediamap) {
                if (key === this.urlData[1].name) {
                    this.getMediaData(this.mediamap[key])
                    this.$emit('tabclickDatas', this.urlData[1].name)
                    // console.log(key);
                    return
                }
            };
            // 学术研究
            for (const key in this.researchmap) {
                if (key === this.urlData[1].name) {
                    this.getResearchData(this.researchmap[key])
                    this.$emit('tabclickDatas', this.urlData[1].name)
                    // console.log(key);
                    return
                }
            };
            // 公益项目
            for (const key in this.projectmap) {
                if (key === this.urlData[1].name) {
                    this.getProjectData(this.projectmap[key])
                    this.$emit('tabclickDatas', this.urlData[1].name)
                    // console.log(key);
                    return
                }
            };
             // 国际绿奖
             for (const key in this.prizemap) {
                if (key === this.urlData[1].name) {
                    this.getPrizeData(this.prizemap[key])
                    this.$emit('tabclickDatas', this.urlData[1].name)
                    // console.log(key);
                    return
                }
            };
            // WGDO绿研院
            for (const key in this.Mapping) {
                if (key === this.urlData[1].name) {
                    this.getWgdoData(this.Mapping[key])
                    this.$emit('tabclickDatas', this.urlData[1].name)
                    // console.log(key);
                    return
                }
            };

        },
        getAboutusData(p) {
            Aboutus({ moduleType: p, status: '1' }).then(res => {
                console.log(res.data.rows);
                this.tabDatas = res.data.rows
                this.$emit('Aboutus', this.tabDatas)
            })
        },
        getMeetData(p) {
            Meet({ moduleType: p, status: '1' }).then(res => {
                console.log(res.data.rows);
                this.tabDatas = res.data.rows
                this.$emit('Meet', this.tabDatas)
            })
        },
        getMediaData(p) {
            Media({ moduleType: p, status: '1' }).then(res => {
                console.log(res.data.rows);
                this.tabDatas = res.data.rows
                this.$emit('Media', this.tabDatas)
            })
        },
        getResearchData(p) {
            Research({ moduleType: p, status: '1' }).then(res => {
                console.log(res.data.rows);
                this.tabDatas = res.data.rows
                this.$emit('Research', this.tabDatas)
            })
        },
        getProjectData(p) {
            Project({ moduleType: p, status: '1' }).then(res => {
                console.log(res.data.rows);
                this.tabDatas = res.data.rows
                this.$emit('Project', this.tabDatas)
            })
        },
        getPrizeData(p) {
            Prize({ moduleType: p, status: '1' }).then(res => {
                console.log(res.data.rows);
                this.tabDatas = res.data.rows
                this.$emit('Prize', this.tabDatas)
            })
        },
        getWgdoData(p) {
            getWgdo({ moduleType: p, status: '1' }).then(res => {
                console.log(res.data.rows);
                this.tabDatas = res.data.rows
                this.$emit('WgdoData', this.tabDatas)
            })
        }
    }
}
</script>

<style scoped>
.box {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.ets {
    margin: 0 auto;
    background: rgba(242, 241, 221, 1);
    width: 67%;
}

.etp {
    font-size: 348.33px;
    font-weight: 700;
    letter-spacing: 17.42px;
    line-height: 461.89px;
    /* color: rgba(62, 73, 56, 1); */
    text-align: left;
    vertical-align: top;
    /* background-color: #ffd; */
}

/*未选中时字体颜色*/
:deep(.el-tabs__item) {
    height: 60px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 60px;
    color: rgba(150, 150, 150, 1);
    text-align: left;
    vertical-align: top;
}

/*选中时字体颜色*/
:deep(.el-tabs__item.is-active) {
    height: 60px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 60px;
    color: rgba(62, 73, 56, 1);
    text-align: left;
    vertical-align: top;
}

/* 下划线颜色 */
:deep(.el-tabs__active-bar) {
    color: rgba(62, 73, 56, 1);
}

/* 修改底部最长的边颜色 */
:deep(.el-tabs--card>.el-tabs__header) {
    border: 17.42px solid rgba(219, 219, 219, 1);
}

.wgdo-in {
    display: flex;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}
</style>