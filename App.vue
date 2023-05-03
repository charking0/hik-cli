<script>
	import {openId,info,phone,oauth} from '@/api/user.js';
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.login()
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		data() {
			return {
				code:'',
				sessionKey: '',
				iv:'',
				encryptedData:'',
				openId: '',
				phoneNumber: ''
			}
		},
		methods: {
			//获取号码授权
			getOpenId() {
				openId({code: uni.getStorageSync('code')}).then((result)=> {
					console.log('获取openid',result)
					// this.sessionKey = result.data.sessionKey
					uni.setStorageSync('sessionKey',result.data.sessionKey)
					// this.openId = result.data.openid
					uni.setStorageSync('openId',result.data.openid)
				})
			},
			login() {
				let _this = this
			   	 uni.login({
			   		provider: 'weixin',
			   		success: res => {
			   			// console.log('登录成功：', res);
			   			//获取临时登录凭证code
			   			_this.code = res.code;
						uni.setStorageSync('code', res.code)
						let appid = "wxf96511225bb03aae"  //需替换
					    _this.getOpenId()
						uni.getUserInfo({
							provider: 'weixin',
							withCredentials: true,
							success: res => {
								console.log('获取用户信息', res);
								uni.setStorageSync('userInfo',res.userInfo);
						   },
								fail: err => {
									console.log('获取用户信息错误：', err)
								}
							})
		
			   		},
			   		fail: err => {e
			   			console.log('登录失败：', err)
			   		}
			   	})
			   }
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/* #ifndef APP-NVUE */
	/* 引入官方样式库 */
	@import url("./common/uni.css");
	/* 引入animate动画库 */
	/* @import url("./common/animate.min.css"); */
	/* 引入自定义图标库 */
	@import url("./common/icon.css");
	/* #endif */
	/* 引入free样式库,参考bootstrap4写的 */
	@import url("./common/free.css");
	/* 引入全局样式库 */
	@import url("./common/common.css");
	
	
	
</style>
