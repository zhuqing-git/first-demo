import axios from 'axios'

export function request(config){
    const instance =axios.create({
timeout:5000,
baseURL:'https://api-hmugo-web.itheima.net/api/public/v1'
    })
    //请求拦截
    instance.interceptors.request.use(req=>{
        return req
    },err=>{
            console.log(err);
    })
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log(err)
    })

    return instance(config)
}