import http from '@/utils/myRequest'


export function addFile(data) {
	return http({
		url: '/client/c/resumetext',
		method: 'post',
		data:data
	})
}

export function openId(data) {
	return http({
		url: '/client/c/miniapp/login',
		method: 'get',
		data: data
	})
}
export function info(data) {
  return http({
    url: `/client/c/miniapp/info?appid=${data.appid}&sessionKey=${data.sessionKey}`,
    method: 'get',
  })
}
export function phone(data) {
  return http({
    url: `/client/c/miniapp/phone?iv=${data.iv}&sessionKey=${data.sessionKey}&encryptedData=${data.encryptedData}`,
    method: 'get'
  })
}

export function oauth(data) {
  return http({
    url: `/auth/oauth/token?grant_type=client&phone=${data.phone}&openid=${data.openId}`,
	Authorization: 'Basic cGlnOnBpZw==',
    method: 'get'
  })
}

export function condition(data) {
  return http({
    url: `/client/c/recruit/condition`,
    method: 'post',
	data
  })
}

export function dic(type) {
  return http({
    url: '/admin/dict/type/'+ type,
    method: 'get'
  })
}

export function details(data) {
  return http({
    url: '/client/c/recruit/query/details?recruitId=' + data.recruitId+'&adcode='+data.abCode+'&cityCode='+data.cityCode+'&isCollection='+data.isCollection,
    method: 'get'
  })
}
export function companyDetails(data) {
  return http({
    url: `/client/c/recruit/company/${data.companyId}`,
  })
}

export function collection(data) {
  return http({
    url: '/client/c/collection',
    method: 'post',
	data
  })
}

export function changePass(data) {
  return http({
    url: '/user/changePass',
    method: 'post',
    data
  })
}

export function getPersonMessage(data) {
	return http({
		url: '/client/c/resume/details',
		method: 'get',
		data:data
	})
}

export function addPersonMessage(data) {
	return http({
		url: '/client/c/resume',
		method: 'post',
		data:data
	})
}

export function putPersonMessage(data) {
	return http({
		url: '/client/c/resume',
		method: 'put',
		data:data
	})
}

export function addWrokExperience(data) {
	return http({
		url: '/client/c/work-experience',
		method: 'post',
		data:data
	})
}

export function putWrokExperience(data) {
	return http({
		url: '/client/c/work-experience',
		method: 'put',
		data:data
	})
}

export function addProgramExperience(data) {
	return http({
		url: '/client/c/project-exp',
		method: 'post',
		data:data
	})
}

export function putProgramExperience(data) {
	return http({
		url: '/client/c/project-exp',
		method: 'put',
		data:data
	})
}

export function addEduExperience(data) {
	return http({
		url: '/client/c/education-experience',
		method: 'post',
		data:data
	})
}

export function putEduExperience(data) {
	return http({
		url: '/client/c/education-experience',
		method: 'put',
		data:data
	})
}

export function deliverList() {
	return http({
		url: '/client/c/resume-file/list',
		method: 'get'
	})
}

export function getEdu(data) {
	return http({
		url: '/admin/dict/type/full_job_edu',
		method: 'get',
		data:data
	})
}

export function addPost(data) {
	return http({
		url: '/client/c/job-expectation',
		method: 'post',
		data:data
	})
}

export function putPost(data) {
	return http({
		url: '/client/c/job-expectation',
		method: 'put',
		data:data
	})
}
export function addPersonTag(data) {
	return http({
		url: '/client/c/tags',
		method: 'post',
		data:data
	})
}
export function deletePersonTag(data) {
	return http({
		url: '/client/c/tags/'+data.id,
		method: 'delete',
	})
}

export function getAttach(id) {
	return http({
		url: '/client/c/resume-file/list',
		method: 'get',
	})
}

export function deleteAttach(id) {
	return http({
		url: '/client/c/resume-file/list/'+id,
		method: 'delete',
	})
}

export function uploadFile(data) {
	return http({
		url: '/admin/sys-file/upload',
		method: 'post',
		data:data
	})
}

export function getVideo(id) {
	return http({
		url: '/client/c/resume-video',
		method: 'get',
	})
}

export function deleteVideo(id) {
	return http({
		url: '/client/c/resume-video',
		method: 'delete',
	})
}
export function deliver(data) {
	return http({
		url: '/client/c/resume/delivery',
		method: 'post',
		data
	})
}
export function latitude(data) {
	return http({
		url: '/client/c/recruit/query/code?longitude='+ data.longitude+'&latitude='+ data.latitude,
		method: 'get'
	})
}