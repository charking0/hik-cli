import Vue from 'vue'
import Vuex from 'vuex'
import $uni from '@/common/utils-uni'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		systemInfo: {},
		userInfo: uni.getStorageSync('userinfo') || "",
		userToken: uni.getStorageSync('token') || "",
		userOpenId: uni.getStorageSync('openid') || "",
		userLine: uni.getStorageSync('userLine') || "",
	},
	mutations: {
		//设置手机系统信息
		SET_SYSTEM_INFO(state, info) {
			state.systemInfo = info
		},
		//设置用户信息
		SET_USER_INFO(state, info) {
			if (info) {
				uni.setStorageSync('userinfo', info);
			} else {
				uni.removeStorageSync('userinfo');
			}
			$uni.setTabbar(info.identitys ? info.identitys : '');
			state.userInfo = info
		},
		//设置用户登录token
		SET_USER_TOKEN(state, info) {
			if (info) {
				uni.setStorageSync('token', info);
			} else {
				uni.removeStorageSync('token');
			}
			state.userToken = info
		},
		//设置用户openId
		SET_USER_OPENID(state, info) {
			if (info) {
				uni.setStorageSync('openid', info);
			} else {
				uni.removeStorageSync('openid');
			}
			state.userOpenId = info
		},
		//设置用户消息提醒数量
		SET_USER_LINE(state, info) {
			if (info) {
				uni.setStorageSync('userLine', info);
			} else {
				uni.removeStorageSync('userLine');
			}
			state.userLine = info
		}
	}
})

export default store
