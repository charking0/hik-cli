<template>
	<view style="background-color: #F5F5F5;padding-top:10px;height: 100vh;">
		<view class="box">
		  <!-- <van-form @submit="onSubmit"> -->
		<!--  <view class="row" style="padding-bottom:10px">
		  	<view class="name">工作类型</view>
		  	<view class="value" style="height:36upx" @click="sexClick">
		  		{{jobTxt}}
		  	</view>
		  	<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon" style="top: 10px"></image></view>
		  </view> -->
		  
		  <view  class="filed" @click="sexClick">
		    <view class="head">
		       工作类型
		    </view>
		    <view class="value" style="width: 100%;" >
		    	{{jobTxt}}
		    </view>
		    <view class="iconfont"><image src="../static/imgs/left.png" mode=""class="iconRight"></image></view>
		   </view>
		   <view class="line"></view>
		   
		 <view  class="filed">
		   <view class="head">
		      期望行业
		   </view>
		   <input type='text' placeholder="请填写期望行业"  v-model="form.positionIndustry"/>
		  </view>
		  <view class="line"></view>
		 <!-- <van-field
		  :value="form.positionIndustry"
		  @change="positionIndustry"
		  label="期望行业"
		  placeholder="请填写期望行业"
		  /> -->
		  
		  <view  class="filed">
		    <view class="head">
		       期望职位
		    </view>
		    <input type='text' placeholder="请填写期望职位"  v-model="form.positionName"/>
		   </view>
		   <view class="line"></view>
		   
		 <!--   <van-field
		  	:value="form.positionName"
			@change="positionName"
		  	label="期望职位"
		  	placeholder="请填写期望职位"
		  	:rules="[{ required: true, message: '请填写期望职位' }]"
		    /> -->
			
			<view  class="filed">
			  <view class="head">
			     期望薪资(k)
			  </view>
			  <input type='text' placeholder="请填写期望薪资(最低)"  v-model="form.salaryRequirementsBegin"/>
			 </view>
			 <view class="line"></view>
			 
		<!-- 	<van-field
			:value="form.salaryRequirementsBegin"
			@change="salaryRequirementsBegin"
			label="期望薪资"
			type="number"
			placeholder="请填写期望薪资(最低)"
			:rules="[{ required: true, message: '请填写期望薪资(最低)' }]"
			>
			<template #button>
			    <text>K</text>
			  </template>
			</van-field> -->
			
			<view  class="filed">
			  <view class="head">
			     期望薪资(k)
			  </view>
			  <input type='text' placeholder="请填写期望薪资(最高)"  v-model="form.salaryRequirementsEnd"/>
			 </view>
			 <view class="line"></view>
			 
		<!-- 	<van-field
			:value="form.salaryRequirementsEnd"
			@change="salaryRequirementsEnd"
			label="期望薪资"
			type="number"
			placeholder="请填写期望薪资(最高)"
			:rules="[{ required: true, message: '请填写期望薪资(最高)' }]"
			>
				<template #button>
			    <text>K</text>
			  </template>
			</van-field> -->
			
			<view class="row">
				<view class="name">工作城市</view>
				<view class="value">
					<biaofun-region :defaultValue="['湖北省', '武汉市', '洪山区']" @change="onChangeRegion"></biaofun-region>
				</view>
				<image src="../static/imgs/left.png" mode=""  class="iconRight"></image>
			</view>

			<!-- <view class="row" style="padding-bottom:10px;border-bottom: none">
				<view class="name">工作城市</view>
				<view class="value" >
					<biaofun-region :defaultValue="['湖北省', '武汉市', '洪山区']" @change="onChangeRegion"></biaofun-region>
				</view>
				<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon" style="top: 10px"></image></view>
			</view>	 -->
		</view>
		
		<view style="height: 100px;">
			
		</view>
		<div style="position:fixed; bottom:16px;width: 90%;margin-left:5%">
		  <van-button round block  color="#F45C24" @click="save">保存</van-button>
		</div>
		<uni-popup ref="popup" type="bottom">
			<view style="height: 100px;width:90%;padding: 10px;border-radius:10px;margin: 0 auto;">
				<van-radio-group :value="form.jobType">
				 <van-cell-group>
				   <van-cell :title="item.label" clickable data-value="1" v-for="item in jobData" @click="selectJob(item)">
					 <van-radio :name="item.value" />
				   </van-cell>
				 </van-cell-group>
				</van-radio-group>
			</view>
		</uni-popup>
		<!-- <van-popup :show="sexShow"  @close="sexClick">
			<view style="height: 100px;width:300px;padding: 10px;border-radius:10px ;">
				<van-radio-group :value="form.jobType">
				 <van-cell-group>
				   <van-cell :title="item.label" clickable data-value="1" v-for="item in jobData" @click="selectJob(item)">
					 <van-radio :name="item.value" />
				   </van-cell>
				 </van-cell-group>
				</van-radio-group>
			</view>
			
		</van-popup> -->
	</view>
</template>

<script>
	import biaofunRegion from './biaofun-region.vue';
	import {addPost,putPost } from '@/api/user.js';
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	export default {
		components: {
   
		   biaofunRegion
		   
		   
		},
		data() {
			return {
				jobTxt:'',
				jobData:[{value:1,label:'全职'},{value:2,label:'兼职'}],
			  date: '',
			  dateShow: false,
			  sexStr: '男',
			  sexShow: false,
			  form: {
				  username:'',
				  sex: '1',
				  weixin: '',
				  email: '',
				  advantage:''
			  }
			}
		},
		options: { styleIsolation: 'shared' },
		onShow() {
		  this.form = uni.getStorageSync('post')?JSON.parse(uni.getStorageSync('post')):{};
		    let resumeObj = uni.getStorageSync('personMessage')?JSON.parse(uni.getStorageSync('personMessage')).resume:{};
		    this.form.resumeId = resumeObj.id;
		    uni.setStorageSync('post',{})
		  if(this.form.jobType){
		  	this.jobData.forEach((e)=>{
		  		if(e.value = this.form.jobType){
		  			this.jobTxt = e.label;
		  		}
		  	})
		  }	
		},
		onLoad(options) {
		
		},
		methods: {
			sexClick() {
				this.$refs.popup.open('bottom')
				this.jobTxt = '';
				this.jobData.forEach((e)=>{
					if(e.value == this.form.jobType){
						this.jobTxt = e.label;
					}
				})
			},
			selectJob(item){
				this.jobTxt = item.label;
				this.form.jobType = item.value;
				this.$refs.popup.close()
			},
		 onChangeRegion(region) {
		 	console.log('选择的省市区数据：', region);
		 },
		 positionIndustry(item){
		 	this.form.positionIndustry = item.detail
		 },
		 positionName(item){
		 	this.form.positionName = item.detail
		 },
		 salaryRequirementsBegin(item){
				
			 this.form.salaryRequirementsBegin = item.detail;
			 if(isNaN(this.form.salaryRequirementsBegin)){
				 this.form.salaryRequirementsBegin = '';
				 return false;
			 }
			 // if(this.form.salaryRequirementsEnd && this.form.salaryRequirementsBegin && (parseFloat(this.form.salaryRequirementsEnd) < parseFloat(this.form.salaryRequirementsBegin))){
				//  this.form.salaryRequirementsEnd = '';
			 // }
		 },
		 salaryRequirementsEnd(item){
			 this.form.salaryRequirementsEnd = item.detail;
			 if(isNaN(this.form.salaryRequirementsEnd)){
				 this.form.salaryRequirementsEnd = '';
				 return false;
			 }
			 // if(this.form.salaryRequirementsEnd && this.form.salaryRequirementsBegin && (parseFloat(this.form.salaryRequirementsEnd) < parseFloat(this.form.salaryRequirementsBegin))){
				//  this.form.salaryRequirementsBegin = '';
			 // }
		 },
		 save() {
			 if(this.form.salaryRequirementsEnd && this.form.salaryRequirementsBegin && (parseFloat(this.form.salaryRequirementsEnd) < parseFloat(this.form.salaryRequirementsBegin))){
			 	uni.showToast({
			 		title:'期望薪资区间有误',
					icon:"none"
			 	})
				return false;
			 }
			  if(!this.form.id){
				  addPost(this.form).then((res)=>{
					  if(res.code == 0){
						  uni.showToast({
							title:res.msg || '提交成功'
						  });
						  // uni.setStorageSync('personMessage',JSON.stringify(res.data))
						  uni.navigateBack({
							  delta: 1
						  });
					  }else{
						  uni.showToast({
							title:res.msg || '提交失败',
							icon:'none'
						  });
					  }
				  })
			  }else{
				  putPost(this.form).then((res)=>{
					  if(res.code == 0){
						  uni.showToast({
							title:res.msg || '提交成功'
						  });
						  // uni.setStorageSync('personMessage',JSON.stringify(res.data))
						  uni.navigateBack({
							  delta: 1
						  });
					  }else{
						  uni.showToast({
							title:res.msg || '提交失败',
							icon:'none'
						  });
					  }
				  })
			  }
		 			 
		 },
		  returnTo() {
			  uni.navigateBack({
			  	animationType:"pop-out"
			  })
		  },
		  onChange() {
			  
		  },
		  man() {
			  this.form.sex = '1'
		  },
		  femael(){
			   this.form.sex = '2'
		  }
		}
	}
</script>

<style lang="scss">
	.box {
		width: 90%;
		padding: 10px 0;
		margin: 0px auto 10px auto;
		border-radius:10px;
		background-color: white;
	}
	.itemTitle {
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 500;
		color: #323332;
		margin: 20px 6% 10px 6%;
		
	}
	.filed {
		display: flex;
		padding: 10px 20px;
		flex: 1;
		position: relative;
		.head {
			flex: 0 0 100px;
			display: flex;
			align-items: center;
		}
		.content {
			flex: 1;
			text-align: center;
		}
		.iconRight {
			position: absolute;
			display: block;
			width: 8px;
			height: 15px;
			right: 23px;
			top: 14px;
		}
	}
	.line {
		width: 90%;
		border-bottom: 1px solid #ebedf0;
		margin: 0 auto;
	}
	.row {
		display: flex;
		width: 90%;
		height: 24px;
		margin: 0 auto;
		position: relative;
		padding: 10px 20px;
		align-items: center;
		color: #040506;
		.name {
			width: 100px;
			height: 24px;
			display: flex;
			align-items: center;
			
		}
		.value {
			display: flex;
			flex: 1;
			height: 24px;
			align-items: center;
			overflow: hidden;
			// text-align: right;
		}
		.iconRight {
			position: absolute;
			display: block;
			width: 8px;
			height: 15px;
			right: 23px;
			top: 14px;
		}
		
	}
	.advantage {
		width: 90%;
		margin: 0px auto;
		border-radius:10px;
	    background-color: white;
		min-height: 150px;
		
	}
	.link {
	  width: 90%;
	  padding: 0px 0;
	  margin: 0px auto 0px auto;
	  border-radius:10px;	  
	}
	
		
</style>
