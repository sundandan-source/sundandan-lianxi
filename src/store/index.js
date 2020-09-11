import Vue from 'vue'
import Vuex from 'vuex'
import $http from '../http/index'; //引入axios二次封装
Vue.use(Vuex)
//登录 二次封装 动画 loading 数据 

export default new Vuex.Store({
  state: {
    loading: false,
    list: [],
    token: ''
  },
  mutations: {
    //loading
    SET_LOADING(state, data) {
      state.loading = data
    },


    SET_LIST(state, data) {
      state.list = data
    },
    SET_TOKEN(state,data){
      state.token=data
    }
  },
  actions: {
    //获取到数据
    getList(context) {
      $http.get('/api/list').then((res) => {
        console.log('/api/list', res)
        context.commit('SET_LIST', res.data)
      })
    }
  },
  modules: {}
})