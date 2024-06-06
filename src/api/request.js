import requestInstance from '@/api/index.js'

//content
//获取首页相关
export const getHomeData = async function (params) {
    return await requestInstance({
        url: '/content/hp/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}


//次级
//获取关于我们页面
export const getAboutContent = async function (params) {
    return await requestInstance({
        url: '/content/aboutus/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取会议活动
export const getConference = async function (params) {
    return await requestInstance({
        url: '/content/conference/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取媒体中心
export const getMediacenter = async function (params) {
    return await requestInstance({
        url: '/content/mediacenter/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取学术研究中心
export const getlearning = async function (params) {
    return await requestInstance({
        url: '/content/academic/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取公益项目 
export const getWelfareproject = async function (params) {
    return await requestInstance({
        url: '/content/benefit/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//ALL TITLE  获取次级
export const getTitle = async function (params) {
    return await requestInstance({
        url: 'system/classify/selectSysClassifyByParentId',
        method: 'GET',
        params
    })
}