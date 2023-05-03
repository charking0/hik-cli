<template>
	<view>
		<!-- 自定义导航栏 -->
		<view :style="'height:'+statusBarHeight+'px;'"></view>
	<!-- 	<view class="flex align-center" style="height:44px;"
		@click="back">
			<view class="flex align-center justify-center animate__animated animate__fast" style="width: 44px;height: 44px;" hover-class="text-main animate__pulse">
				<text class="iconfont iconguanbi font-lg"></text>
			</view>
		</view> -->
		<!-- 欢迎回来 -->
		<view class="flex align-center justify-center font-lg text-muted" style="margin-top:100rpx; margin-bottom:80rpx;">
			欢迎回来
		</view>
		<!-- Input框 -->
		<view class="px-4">
			<!-- 登录功能 -->
			<!-- <input type="text" value="" class="uni-input bg-light rounded mb-4" placeholder="手机号/用户名/邮箱" /> -->
			<!-- <input type="text" value="" class="uni-input bg-light rounded mb-4" placeholder="请输入密码" /> -->
			<!-- 注册功能 -->
			<!-- <input type="text" value="" class="uni-input bg-light rounded mb-4" placeholder="请输入确认密码"
			v-if="type === 'reg'"/> -->
		</view>
		<!-- 提交框 -->
		<view class="px-4">
			<!-- <main-big-button @click="login">微信登录</main-big-button> -->
			<!-- <button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">微信用户信息</button> -->
			<button class='bottom' type='primary' open-type="getPhoneNumber"  @getphonenumber="getPhoneNumber">
						  授权登录
						</button>
		</view>
		<!-- 第三方登录 -->
		<!-- 社交账号登录 -->
		<!-- <view class="flex align-center justify-center py-5">
			<view style="height: 1rpx; width:100rpx;background-color: #E3E1DD;"></view>
		</view> -->
		<!-- 图标 -->
		<view class="flex align-center px-5">
		</view>
	</view>
</template>

<script>
	import mainBigButton from '@/components/common/main-big-button.vue';
	import WXBizDataCrypt from '@/static/WXBizDataCrypt.js'
	import {openId,info,phone,oauth} from '@/api/user.js';
	export default {
		components:{
			mainBigButton
		},
		data() {
			return {
				type:"login",
				statusBarHeight:0,
				Code:'',
				sessionKey: '',
				iv:'',
				encryptedData:'',
				openId: '',
				phoneNumber: ''
			}
		},
		created(){
			
		},
		onLoad(){
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			// this.login()
			
		},
		methods: {
			//获取号码授权
			getOpenId() {
				openId({code: this.code}).then((result)=> {
					console.log('获取openid',result)
					this.sessionKey = result.data.sessionKey,
					this.openId = result.data.openid
				})
			
			},
			getQuth() {
				let params = {
					appid: 'wxf96511225bb03aae',
					sessionKey: this.sessionKey,
				    phone: this.phoneNumber,
					openId: this.openId,
					Authorization:true
				}
				oauth(params).then((res)=> {
					uni.setStorageSync('Token',res.token_type + " " + res.access_token);
					// console.log(' 授权',uni.getStorageSync('Token'))
					uni.switchTab({
					    url: '/pages/index/index'
					});
				})
			},
			login() {
			   	 uni.login({
			   		provider: 'weixin',
			   		success: res => {
			   			// console.log('登录成功：', res);
			   			//获取临时登录凭证code
			   			this.code = res.code;
						let appid = "wxf96511225bb03aae"  //需替换
					    this.getOpenId()
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
			   },
			   getQuth() {
			   	let params = {
			   		appid: 'wxf96511225bb03aae',
			   		sessionKey: uni.getStorageSync('openId'),
			   	    phone: uni.getStorageSync('phoneNumber'),
			   		openId: uni.getStorageSync('openId'),
			   		Authorization:true
			   	}
			   	oauth(params).then((res)=> {
			   		uni.setStorageSync('Token',res.token_type + " " + res.access_token);
			   	})
			   },
			getPhoneNumber(e) {
				console.log('获取电话号码参数', e)
				 if(e.detail.errMsg=="getPhoneNumber:fail user deny"){       //用户决绝授权  
						//拒绝授权后弹出一些提示
						
					}else{      //允许授权  
					let pc = new WXBizDataCrypt('wxf96511225bb03aae',this.sessionKey);
					let data = pc.decryptData(e.detail.encryptedData , e.detail.iv); 
					uni.setStorageSync('phoneNumber', data.phoneNumber);
					this.phoneNumber = data.phoneNumber
					this.getQuth()
				    
				}  	    	
			},
			wxGetUserInfo(value){
				console.log(value)
			},
	       
			changeType(){
				this.type = this.type === 'login' ? 'reg':'login';
			},
			back(){
			
			}
		}
	}
</script>

<style>

</style>
