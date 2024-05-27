import requestInstance from '@/request/index.js'

//获取首页相关
export const getHomeData = async function (params) {
    return await requestInstance({
        url: '/content/hp/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}