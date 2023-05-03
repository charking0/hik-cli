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


function addFile(data) {
	return  http.request({
		url: '/client/c/resumetext',
		method: 'post'
	})
}

 function openId(data) {
	return  http.request({
		url: '/client/c/miniapp/login',
		method: 'get'
	})
}
 function info(data) {
  return  http.request({
    url: `/client/c/miniapp/info?appid=${data.appid}&sessionKey=${data.sessionKey}`,
    method: 'get'
  })
}
 function phone(data) {
  return  http.request({
    url: `/client/c/miniapp/phone?iv=${data.iv}&sessionKey=${data.sessionKey}&encryptedData=${data.encryptedData}`,
    method: 'get'
  })
}

 function oauth(data) {
	 console.log('autoData')
  return  http.request({
    url: `/auth/oauth/token?grant_type=client&phone=${data.phone}&openid=${data.openId}`,
	Authorization: 'Basic cGlnOnBpZw==',
    method: 'get'
  })
}

 function condition(data) {
  return  http.request({
    url: `/client/c/recruit/condition`,
    method: 'post',
	data
  })
}

 function dic(type) {
  return  http.request({
    url: '/admin/dict/type/'+ type,
    method: 'get'
  })
}

 function details(data) {
  return  http.request({
    url: '/client/c/recruit/query/details',
    method: 'get',
	data
  })
}
 function companyDetails(data) {
  return  http.request({
    url: `/client/c/recruit/company/${data.companyId}`,
  })
}

 function collection(data) {
  return  http.request({
    url: '/client/c/collection',
    method: 'post',
	data
  })
}

 function changePass(data) {
  return  http.request({
    url: '/user/changePass',
    method: 'post',
    data
  })
}

 function getPersonMessage(data) {
	return  http.request({
		url: '/client/c/resume/details',
		method: 'get',
		data:data
	})
}

 function addPersonMessage(data) {
	return  http.request({
		url: '/client/c/resume',
		method: 'post',
		data:data
	})
}

 function putPersonMessage(data) {
	return  http.request({
		url: '/client/c/resume',
		method: 'put',
		data:data
	})
}

 function addWrokExperience(data) {
	return  http.request({
		url: '/client/c/work-experience',
		method: 'post',
		data:data
	})
}

 function putWrokExperience(data) {
	return  http.request({
		url: '/client/c/work-experience',
		method: 'put',
		data:data
	})
}

 function addProgramExperience(data) {
	return  http.request({
		url: '/client/c/project-exp',
		method: 'post',
		data:data
	})
}

 function putProgramExperience(data) {
	return  http.request({
		url: '/client/c/project-exp',
		method: 'put',
		data:data
	})
}

 function addEduExperience(data) {
	return  http.request({
		url: '/client/c/education-experience',
		method: 'post',
		data:data
	})
}

 function putEduExperience(data) {
	return  http.request({
		url: '/client/c/education-experience',
		method: 'put',
		data:data
	})
}

 function deliverList() {
	return  http.request({
		url: '/client/c/resume-file/list',
		method: 'get'
	})
}

 function getEdu(data) {
	return  http.request({
		url: '/admin/dict/type/full_job_edu',
		method: 'get',
		data:data
	})
}

 function addPost(data) {
	return  http.request({
		url: '/client/c/job-expectation',
		method: 'post',
		data:data
	})
}

 function putPost(data) {
	return  http.request({
		url: '/client/c/job-expectation',
		method: 'put',
		data:data
	})
}
 function addPersonTag(data) {
	return  http.request({
		url: '/client/c/tags',
		method: 'post',
		data:data
	})
}
 function deletePersonTag(data) {
	return  http.request({
		url: '/client/c/tags/'+data.id,
		method: 'delete',
	})
}

 function getAttach(id) {
	return  http.request({
		url: '/client/c/resume-file/list',
		method: 'get',
	})
}

 function deleteAttach(id) {
	return  http.request({
		url: '/client/c/resume-file/list/'+id,
		method: 'delete',
	})
}

 function uploadFile(data) {
	return  http.request({
		url: '/admin/sys-file/upload',
		method: 'post',
		data:data
	})
}

 function getVideo(id) {
	return  http.request({
		url: '/client/c/resume-video',
		method: 'get',
	})
}

 function deleteVideo(id) {
	return  http.request({
		url: '/client/c/resume-video',
		method: 'delete',
	})
}
 function deliver(data) {
	return  http.request({
		url: '/client/c/resume/delivery',
		method: 'post',
		data
	})
}
 function latitude(data) {
	return  http.request({
		url: '/client/c/recruit/query/code',
		method: 'get',
		data
	})
}




export  {
	addFile,
	latitude,
	deliver,
	deleteVideo,
	getVideo,
	uploadFile,
	deleteAttach,
	getAttach,
	deletePersonTag,
	addPersonTag,
	putPost,
	addPost,
	getEdu,
	deliverList,
	putEduExperience,
	addEduExperience,
	putProgramExperience,
	addProgramExperience,
	putWrokExperience,
	addWrokExperience,
	putPersonMessage,
	addPersonMessage,
	getPersonMessage,
	changePass,
	collection,
	companyDetails,
	details,
	dic,
	condition,
	oauth,
	phone,
	info,
	openId
}
