import requestInstance from '@/request/index.js'

//获取首页相关
export const getHomeData = async function (url, method = 'GET', params) {
    return requestInstance({
        url,
        method,
        params
    })
}