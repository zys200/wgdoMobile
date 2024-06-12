import axios from 'axios'

const requestInstacne = axios.create({
    baseURL: 'http://106.3.97.14:9002/prod-api',
    timeout: 8000,
    headers: {
        'Content-Type': 'application/json'
    }
})

axios.interceptors.request.use(config => {
    return config
})

axios.interceptors.response.use((response => {
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response.data.data
}), (err => {
    return Promise.reject(err)
}))

export default requestInstacne