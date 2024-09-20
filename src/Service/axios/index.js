import axios from "axios";

const baseURI ='http://18.116.136.181'

const Axios = axios.create({
    baseURI
})

Axios.interceptors.request.use(
    (config)=>{
        config.headers['Access-Control-Allow-Origin'] = '*';
        config.timeout = 20000
        return config
    },
    (error)=>{
        Promise.reject(error).then()
    }
)
Axios.interceptors.response.use(
    (response) => {
        if (response.status !== 200 &&
            response.status !== 201 &&
            response.status !== 202
        ) {
            throw new Error(`${response?.status}`)
        } else {
            return response
        }
    },
    (error)=>{
        return Promise.reject(error)
    }
)


export default class API{
    static async get(url, config){
        return Axios.get(url, config)
    }
    static async post(url,body, config){
        return Axios.post(url,body, config)
    }
}