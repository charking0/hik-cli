import Vue from 'vue'
import App from './App'
// import http from './http'
// import store from './store'
// import './permission.js'
// Vue.prototype.$http = new http()


import api from '@/request/';
import fun from '@/common/utils-uni';
import store from './store/';
import url from '@/config/';

Vue.prototype.$http = api; //request请求封装
Vue.prototype.$uni = fun; //uni二次封装
Vue.prototype.$url = url; //url配置


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
