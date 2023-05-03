<template>
	<view style="background-color: #F5F5F5;">
	  <view class="resume-header">
	  	  <view class="resume-title">
	  	  	 <van-icon name="arrow-left" color="white" size="16px" class="icon" @click="returnTo"/>
			 简历管理
	  	  </view>
		  <view class="resume">
		  	 <view class="info">
		  	 	<view class="info-name">
		  	 		{{personMessage.resume?personMessage.resume.name:''}}
		  	 	</view>
				<view class="info-year">
					<text v-if="personMessage.resume">{{personMessage.resume.descTitle?personMessage.resume.descTitle:''}}</text> <text v-if="personMessage.resume && personMessage.resume.joinJobTime">{{nowYear - parseInt(personMessage.resume.joinJobTime.split("-")[0])}}年</text>
				</view>
		  	 </view>
			 <view class="img"></view>
		  </view>
	  </view>
	  <view class="tab">
	  	<van-tabs :active="active" @change="onChange">
	  		 <van-tab title="在线简历"><onlineResume ref="onlineResume"></onlineResume></van-tab>
	  		 <van-tab title="附件简历"><attachResume ref="attachResume"></attachResume></van-tab>
	  		 <van-tab title="视频简历"><videoResume ref="videoResume"></videoResume></van-tab>
	  	</van-tabs>
	  </view>
	 
	
	</view>
</template>

<script>
	// import recom_company from '@/static/mock/recom_company.js'
	import onlineResume from './onlineResume.vue'
	import attachResume from './attachResume.vue'
	import videoResume from './videoResume.vue'
	import {getPersonMessage} from '@/api/user.js';
	export default {
		components: {
           onlineResume,
		   attachResume,
		   videoResume
		},
		data() {
			return {
				nowYear:'',
				personMessage:{},
			  active: 0
			}
		},
		onShow(){
			// uni.showToast({
			// 	title:'onShow'
			// })
			this.getPerson();
			// this.personMessage = uni.getStorageSync('personMessage')?JSON.parse(uni.getStorageSync('personMessage')):{};
		},
		options: { styleIsolation: 'shared' },
		onLoad(options) {
			console.log('inin');
			this.getPerson();
			this.nowYear = parseInt(new Date().getFullYear());
		},
		methods: {
		  returnTo() {
			  uni.navigateBack({
			  	animationType:"pop-out"
			  })
		  },
		  onChange(value) {
			  this.active = value.detail.index;
		  },
		  getPerson(){
			  this.personMessage = {};
			  getPersonMessage({}).then((res)=>{
				  if(res.code == 0){
					  this.personMessage = res.data?res.data:{};
				  }
				  uni.setStorageSync('personMessage',JSON.stringify(this.personMessage));
				  this.$refs.onlineResume.personMessage = this.personMessage;
				  this.$refs.attachResume.personMessage = this.personMessage;
				  this.$refs.attachResume.getData();
				  this.$refs.videoResume.personMessage = this.personMessage;
				  this.$refs.videoResume.getData();
			  })
		  },
		}
	}
</script>

<style lang="scss">
	.resume-header {
		width: 100%;
		height: 223px;
		background: url("/static/demo/6.jpg") no-repeat;
		background-size: 100% 100%;
		.resume-title {
			padding: 59px 0 0 0;
			position: relative;
			text-align: center;
			font-size: 15px;
			font-weight: 600;
			color: white;
			.icon {
				position: absolute;
				left: 6px;
				top: 64px;
				margin-left:12px;
			}
		}
		.resume {
			margin-top: 42px;
			display: flex;
			padding: 0 20px;
			justify-content: space-between;
			align-items: center;
			.img {
				background: url("/static/demo/6.jpg") no-repeat;
				background-size: 100% 100%;
				border-radius: 35px;
				width: 70px;
				height: 70px;
			}
			.info {
				text-align: center;
				.info-name {
					font-size: 24px;
					font-weight: 500;
					color: white;
				}
				.info-year {
					font-size: 15px;
					font-weight: 500;
					color: white;
				}
			}
		}
		
	}
	.tab {
		/deep/ .van-tab--active{
			// color: linear-gradient(0deg, #F45E24 0%, #F99855 99.4873046875%);
			color: #F45C24;
		}
		/deep/ .van-tabs__line {
			background-color: #F45C24;
		}
	}
		
</style>
