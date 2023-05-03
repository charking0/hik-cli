import http from './interface'
import utils from '../common/utils-uni.js'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
// const test = (data) => {
// 	/* http.config.baseUrl = "http://localhost:8080/api/"
// 	//设置请求前拦截器
// 	http.interceptor.request = (config) => {
// 		config.header = {
// 			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
// 		}
// 	} */
// 	//设置请求结束后拦截器
// 	http.interceptor.response = (response) => {
// 		console.log('个性化response....')
// 		//判断返回状态 执行相应操作
// 		return response;
// 	}
// http.config.header["Content-Type"] = "application/json;charset=UTF-8";
// 	return http.request({
// 		baseUrl: 'https://unidemo.dcloud.net.cn/',
// 		url: 'ajax/echo/text?name=uni-app',
// 		dataType: 'text',
// 		data,
// 	})
// }

//获取首页推荐课程
const getIndexCourse = (data) => {
	return http.request({
		url: '/platforms/online/app/course/recommend/page',
		method: 'get',
		data
	})
}

//获取首页推荐课程详情
const getCourseDetils = (data) => {
	return http.request({
		url: '/platforms/online/app/course/with/chapter',
		method: 'get',
		data
	})
}




export default {
	getIndexCourse,
	getCourseDetils
}
