import axios from 'axios'
import store from '../store/index'
let token = 'usertokenxxxxxxx'; //模拟token
//请求拦截器
axios.interceptors.request.use((config) => {
    config.headers['Authoriazation'] = 'Bear ' + token //请求头部，Authoriazation头部信息

    store.commit("SET_LOADING", true) //loading加载 请求数据前面，加上loading

    return config
})
//响应数据
axios.interceptors.response.use((config) => {

    store.commit("SET_LOADING", false) //loading加载  
 

    switch (config.status) { //错误处理
        case 200: //如果状态码为200 就返回一个数据 config.data
            return config.data;
        default:
            alert('网络异常')
    }
})
export default axios

// import axios from 'axios'
// let token='usertoken';

// axios.interceptors.request.use((config)=>{
//    config. headers['Authoriazation'] = 'Bearer '+token
//    return config
// })


// axios.interceptors.response.use((config)=>{
//     switch(config.status){
//    case 200:
//        return config.data
//        default :
//        alert("网络异常")

//     }
// })

// export default axios