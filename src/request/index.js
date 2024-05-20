import axios from 'axios'

const requestInstacne = axios.create({
    baseURL: 'http://106.3.97.14:9002/prod-api/content/hp/list',
    timeout: 8000
})

axios.interceptors.request.use(config => {
    return config
})

axios.interceptors.response.use((res => {
    return res
}), (err => {
    return Promise.reject(err)
}))

export default requestInstacne