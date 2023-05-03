// import ajax from './axios'
import {
	config
} from './luch-config.js'

let baseURL = config.BURY_URL//测试使用服务地址

function http(options){
	let headers={}
	var Token =uni.getStorageSync('Token');
	// var UserId =uni.getStorageSync('UserId');
	// var sign=date_hao+UserId;
	// var hash=hex_md5(sign);
	console.log('options', options.Authorization)
	if (Token) {
		headers['Authorization'] = Token
	}
	if(options.Authorization) { 
		headers['Authorization'] = options.Authorization
	}
	
	// headers['HBWS-Client-Timestamp'] = date_hao;
	// headers['ztsToken'] = localStorage.getItem('userMessage')?JSON.parse(localStorage.getItem('userMessage')).token:'';
	// headers['HBWS-Client-Sign'] = hash;
	// headers['HBWS-Client-UserId'] = UserId;
	headers["Content-Type"] = "application/json";
	return new Promise((res,rej)=>{
		console.log(baseURL)
		uni.request({
			url:baseURL + options.url,
			method:options.method || 'GET',
			data:options.data,
			header:headers,
			success(data) {
				if(data.data.message && (data.data.message == '401' || data.data.message == 'Token invalided.')){
					// uni.showToast({
					// 	icon:'none',
					// 	title:'用户已过期'
					// })
					uni.switchTab({
					    url: '/pages/index/index'
                     })
				}
				res(data.data)
				
			},
			fail(error) {
				if(error.response.data.message && (error.response.data.message == '401' || error.response.data.message == 'Token invalided.')){
					uni.showToast({
						title:'请登录'
					})
				}
				reject()
			}
		})
	})
}

export default http