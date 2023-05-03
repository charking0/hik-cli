<template>
	<view style="background-color: #F5F5F5;">
		<view class="item">
			<view class="title">
				<view class="">
					个人信息
				</view>
				<view class="add" @click="push('personMessage')">
					<image src="../static/imgs/add.png" mode="" class="img"></image>
				</view>
			</view>
			<view class="content" >
				<view class="p-3 flex align-center my-heeader" >
					<image src="" style="height:100rpx;width:100rpx;" class="bg-light rounded-circle flex-shrink" mode="aspectFill"></image>
					<view class="flex flex-column pl-3 flex-1">
						<view class="name">
							<!-- {{userInfo.nickName}} -->
						</view>
						<text class="font-sm text-muted"></text>
					</view>
				</view>
				<view class="line-box">
					<view class="line">	
					</view>
				</view>
				<view class="text">
					{{personMessage.resume?personMessage.resume.description:''}}
				</view>
			</view>
		</view>
		
		<view class="item">
			<view class="title">
				<view class="">
					工作经历
				</view>
				<view class="add"  @click="push('workExperience')">
					<image src="../static/imgs/add.png" mode="" class="img"></image>
				</view>
			</view>
			<view class="content" v-if="personMessage.workExperiences">
			   <view class="content-item" v-for="item in personMessage.workExperiences" @click="toWork(item)">
			   	 <image src="../static/imgs/company.png" mode="" class="content-item-pic"></image>
				 <view class="content-box">
					 <view class="content-box-com">
					 	{{item.companyName?item.companyName:''}}
					 </view>
				 	 <view class="content-box-date">
				 	 	{{item.positionName?item.positionName:''}} {{item.beginTime?item.beginTime.split(' ')[0].replace('-','/').replace('-','/'):''}}-{{item.endTime?item.endTime.split(' ')[0].replace('-','/').replace('-','/'):''}}
				 	 </view>
					 <image src="../static/imgs/left.png" mode="" class="img"></image>
				 </view>
			   </view>
			</view>
		</view>
		
		<view class="item">
			<view class="title">
				<view class="">
					项目经历
				</view>
				<view class="add" @click="push('itemExperience')">
					<image src="../static/imgs/add.png" mode="" class="img"></image>
				</view>
			</view>
			<view class="content" v-if="personMessage.projectExperiences">
			  <view class="content-item" v-for="item in personMessage.projectExperiences" @click="toExp(item)">
			  	 <image src="../static/imgs/company.png" mode="" class="content-item-pic"></image>
					 <view class="content-box">
						 <view class="content-box-com">
							{{item.projectName?item.projectName:''}}
						 </view>
						 <view class="content-box-date">
							{{item.positionName?item.positionName:''}} {{item.beginTime?item.beginTime.split(' ')[0].replace('-','/').replace('-','/'):''}}-{{item.endTime?item.endTime.split(' ')[0].replace('-','/').replace('-','/'):''}}
						 </view>
						 <image src="../static/imgs/left.png" mode="" class="img"></image>
					 </view>
			  </view>

			</view>
		</view>
		
		<view class="item">
			<view class="title">
				<view class="">
					教育经历
				</view>
				<view class="add" @click="push('eduExperience')">
					<image src="../static/imgs/add.png" mode="" class="img"></image>
				</view>
			</view>
			<view class="content" v-if="personMessage.educationalExperience">
			  <view class="content-item" v-for="item in personMessage.educationalExperience" @click="toEdu(item)">
			  	 <image src="../static/imgs/company.png" mode="" class="content-item-pic"></image>
					 <view class="content-box">
						 <view class="content-box-com">
							{{item.schoolName?item.schoolName:''}}
						 </view>
						 <view class="content-box-date">
							{{item.major?item.major:''}} {{item.beginTime?item.beginTime.split(' ')[0].replace('-','/').replace('-','/'):''}}-{{item.endTime?item.endTime.split(' ')[0].replace('-','/').replace('-','/'):''}}
						 </view>
						 <image src="../static/imgs/left.png" mode="" class="img"></image>
					 </view>
			  </view>
			</view>
		</view>
		
		<view class="item">
			<view class="title">
				<view class="">
					求职期望
				</view>
				<view class="add" @click="push('post')">
					<image src="../static/imgs/add.png" mode="" class="img"></image>
				</view>
			</view>
			<view class="content" v-if="personMessage.jobExpectations">
			  <view class="postBox" v-for="item in personMessage.jobExpectations" @click="toExpec(item)">		
			   <view class="post">
				  <view class="">
					{{item.positionName?item.positionName:''}}
				  </view>
				  <view class="slay">
					 期望薪资： <text v-if="item.salaryRequirementsBegin">{{item.salaryRequirementsBegin?item.salaryRequirementsBegin:''}}k</text>-<text v-if="item.salaryRequirementsEnd">{{item.salaryRequirementsEnd?item.salaryRequirementsEnd:''}}k</text>
				  </view>
			   </view>
			   <view class="location">
				 <text v-if="item.jobType">{{item.jobType==1?'全职':item.jobType==2?'兼职':''}}</text> | 深圳
			   </view>
			
				<image src="../static/imgs/left.png" mode="" class="postimg"></image>
			</view>
			</view>
		</view>
		
		
		<view class="item">
			<view class="title">
				<view class="">
					个人标签
				</view>
				<view class="add" @click="push('personTag')">
					<image src="../static/imgs/add.png" mode="" class="img"></image>
				</view>
			</view>
			<view class="content" v-if="personMessage.resumeTagList">
			  <view class="content-item" v-for="item in personMessage.resumeTagList">
				  <view class="tagBox">
				  	<view class="tag">
				  		 {{item.tagName?item.tagName:''}}
				  	</view>
					<image src="../static/imgs/close.png" mode="" class="tagImg" @click="deleteTag(item)"></image>
				  </view>
				  
				
			  </view>
			</view>
		</view>
		
	  
	 
	
	</view>
</template>

<script>
	// import recom_company from '@/static/mock/recom_company.js'
	import uniBadge from '@/components/uni-ui/uni-badge/components/uni-badge/uni-badge.vue'
	import {deletePersonTag,getPersonMessage } from '@/api/user.js';
	export default {
		components: {
          uniBadge
		},
		data() {
			return {
			  active: 1,
			  phoneNumber:'',
			  userInfo:'',
			  personMessage:{}
			  
			}
		},
		options: { styleIsolation: 'shared' },
		created() {
			// this.phoneNumber = uni.getStorageSync('phoneNumber')
			// this.userInfo = uni.getStorageSync('userInfo')
		},
		onLoad(options) {
			
		},
		methods: {
			getPerson(){
			  this.personMessage = {};
			  getPersonMessage({}).then((res)=>{
				  if(res.code == 0){
					  this.personMessage = res.data?res.data:{};
				  }
				  uni.setStorageSync('personMessage',JSON.stringify(this.personMessage));
				  // this.$refs.onlineResume.personMessage = this.personMessage;
			  })
			},
			deleteTag(item){
				deletePersonTag({id:item.id}).then(res=>{
					if(res.code== 0){
						this.getPerson();
					}else{
					  uni.showToast({
						title:res.msg || '删除失败',
						icon:'none'
					  });
				  }
				})
			},
			toExpec(item){
				uni.setStorageSync('post',JSON.stringify(item))
				this.push('post');
			},
			toEdu(item){
				uni.setStorageSync('eduExperience',JSON.stringify(item))
				this.push('eduExperience');
			},
			toExp(item){
				uni.setStorageSync('itemExperience',JSON.stringify(item))
				this.push('itemExperience');
			},
			toWork(item){
				uni.setStorageSync('workExperience',JSON.stringify(item))
				this.push('workExperience');
			},
			push(url) {
			  uni.navigateTo({
			  	url: '/pagesC/resume/'+url,
			  });
			}
		
		}
	}
</script>

<style lang="scss">
	.title {
		font-size: 15px;
		color: #323332;
		display: flex;
		justify-content: space-between;
		margin: 0;
	}
	.content {
		margin: 12px 0px;
		border-radius:10px;
		background-color: white;
		// height: 100px;
	}
	.add {
		 .img {
			 display: inline-block;
			 width: 20px;
			 height: 20px;
		 }
	}
	.post {
		display: flex;
		padding: 10px;
		.slay {
			background-color: #FEEDE7;
			margin-left: 10px;
			border-radius: 10px;
			padding: 2px 4px;
			color: #F45C24;
			font-size: 12px;
			
		}
	}
	.tagBox {
		position: relative;
		margin-right: 10px;
		.tag {
			padding: 2px 8px;
			border-radius: 5px;
			text-align: center;
			background-color: #F5F5F4;
			font-size: 12px;
		}
		.tagImg {
			position: absolute;
			display: block;
			width: 15px;
			height: 15px;
			top: -6px;
			right: -4px;
		}
	}

	.postBox {
		position: relative;
	}
	.postimg {
	  position: absolute;
	  display: block;
	  right: 20px;
	  top:27px;
	  width:8px;
	  height: 15px;	
	}
	
	.location {
		padding: 0 10px 10px 10px;
		color: #666666;
		font-size: 12px;
	}
	.item {
		padding: 10px;
		.line-box {
			.line {
				width: calc(100% - 30px);
				height: 1px;
				margin: 0 10px;
				background-color:#ECECEC;
			}
		}
		.text {
			padding: 10px;
			color: #666666;
			font-size: 15px;
		}
	}
	.content-item {
		display: flex;
		padding: 10px;
		.content-item-pic {
			display: inline-block;
			// width: 45px;
			height: 45px;
			flex: 0 0 45px;
		}
		.content-box {
			flex: 1;
			margin-left: 10px;
			position: relative;
			width: 90%;
			padding-bottom: 10px;
			border-bottom: 1px solid #ECECEC;
			
			// padding: 10px;
			.content-box-com {
				color: #333333;
				font-size: 15px;
			}
			.content-box-date {
				margin-top: 5px;
				color: #666666;
				font-size: 12px;
			}
			.img {
				position: absolute;
				right: 10px;
				top:17px;
				width:8px;
				height: 15px;
			}
		}
	}

		
</style>
