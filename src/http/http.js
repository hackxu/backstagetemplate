import axios from 'axios'
import store from '../store/index'
import {message} from "antd";


const service = axios.create({
    baseURL: '/travel-web',
    timeout: 5000,
})

service.interceptors.request.use(config => {

    if (store.token) {


        if (config.data) {
            config.data.token = store.token
        }

    }
    return config
}, error => {
    // Do something with request error
    message.error("接口错误")
    Promise.reject(error)
})

service.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data
    }

    return Promise.reject(new Error())
}, error => {
    // console.log(error)
    message.error("接口错误")
    return Promise.reject(error)
})

export default service
