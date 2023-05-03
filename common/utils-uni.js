import store from '../store/index'
import $url from '../config/index'


// 提示框
function showModal(content, callback, showCancel = true, title = "提示") {
	uni.showModal({
		title: title,
		content: content,
		showCancel: showCancel,
		confirmColor: '#A68B3A',
		success(res) {
			if (res.confirm) {
				callback()
			}
		}
	});
}

//轻提示
function toast(title, duration = 2000, icon = "none") {
	uni.showToast({
		title: title,
		duration: duration,
		icon: icon
	});
}

//路由跳转
function navigateTo(url, hasLogin = false) {
	if (hasLogin) {
		if (!store.state.userInfo || !store.state.userToken) {
			uni.navigateTo({
				url: '/pages/login/login'
			});
			return;
		}
	}
	uni.navigateTo({
		url: url
	});
}

//路由跳转
function redirectTo(url, hasLogin = false) {
	if (hasLogin) {
		if (!store.state.userInfo && !store.state.userToken) {
			uni.navigateTo({
				url: '/pages/login/login'
			});
			return;
		}
	}
	uni.redirectTo({
		url: url
	});
}



//tabbar 切换
function switchTab(url) {
	uni.switchTab({
		url: url
	});
}

//关闭当前页 跳转其他页
function reLaunch(url) {
	uni.reLaunch({
		url: url
	});
}

//路由返回
function navigateBack(num = 1) {
	setTimeout(() => {
		uni.navigateBack({
			delta: num
		});
	}, 600)
}


// 展示加载层
function showLoading(title) {
	uni.showLoading({
		title: title || '加载中...',
		mask: true
	});
}

// 隐藏加载层
function hideLoading() {
	uni.hideLoading();
}

//增加缓存
function setStorage(key, val) {
	uni.setStorageSync(key, val);
}

//移除缓存
function remStorage(key) {
	uni.removeStorageSync(key);
}

//获取缓存
function getStorage(key) {
	return uni.getStorageSync(key);
}

//获取缓存
function clearStorage() {
	return uni.clearStorageSync();
}

//上传文件统一工具
function uploadFile(options, callback) {
	showLoading('上传中...')
	uni.uploadFile({
		url: `${$url.http_url}/${options.httpUrl}`,
		filePath: options.filePath,
		name: options.fileName,
		header: {
			"Authorization": store.state.userToken,
			"Content-Type": "multipart/form-data"
		},
		success(res) {
			console.log(res);
			if (res.statusCode === 200) {
				let {
					data
				} = res;
				let json = JSON.parse(data);
				callback(json)
			}
		},
		complete() {
			hideLoading();
		}
	});
}

//截取url值
function getUrlKey(url, name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || ['', ''])[1]
		.replace(
			/\+/g, '%20')) || null;
}

//参数 进行格式化
function getParams(params) {
	let str = '';
	let objs = Object.keys(params);
	objs.forEach((item, index) => {
		str = str + `${item}=${params[item]}`
		if (index != objs.length - 1) {
			str = str + '&'
		}
	})
	return str;
}

//金钱格式化
function parseMoney(num) {
	if (num && num != null) {
		num = String(num);
		var left = num.split('.')[0],
			right = num.split('.')[1];
		right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
		var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
		return (Number(num) < 0 ? "-" : "") + temp.join(',').split('').reverse().join('') + right;
	} else if (num === 0) {
		return '0.00';
	} else {
		return "";
	}
}

//获取下单时间
function getDate() {
	let date = new Date();
	let year = date.getFullYear();
	let month = (date.getMonth() + 1) >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
	let day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
	return `${year}-${month}-${day}`;
}

//防抖
//调用示例
// import $uni from '@/common/utils-uni';
// function: $uni.debounce(function() {}, 300)

function debounce(fn, delay = 300) {
	// 维护一个 timer
	let timer = null;

	return function() {
		// 获取函数的作用域和变量
		let context = this;
		let args = arguments;

		clearTimeout(timer);
		timer = setTimeout(function() {
			fn.apply(context, args);
		}, delay)
	}
}

//深拷贝
function deepCopy(data) {
	return JSON.parse(JSON.stringify(data));
}


export default {
	showModal,
	toast,
	navigateTo,
	redirectTo,
	switchTab,
	reLaunch,
	navigateBack,
	showLoading,
	hideLoading,
	setStorage,
	remStorage,
	getStorage,
	clearStorage,
	uploadFile,
	getUrlKey,
	getParams,
	parseMoney,
	getDate,
	debounce,
	deepCopy
}
