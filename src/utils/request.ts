import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:8009/test',
    timeout: 5000
})

service.interceptors.request.use(
    (config) => { // 发生请求前执行的方法
        return config
    },
    (error) => { // 发生请求失败执行的方法
    }
)

service.interceptors.response.use(
    (response) => { // 接受相应后第一个执行的方法
        return response
    },
    (error) => { // 接受相应失败后执行的方法
    }
)

export default service