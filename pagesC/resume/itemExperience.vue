<template>
	<view style="background-color: #F5F5F5;padding-top:10px;">
		<view class="box">
		  <!-- <van-form @submit="onSubmit"> -->
		<!--    <van-field
		  	:value="form.projectName"
			@change="changeprojectName"
		  	label="项目名称"
		  	placeholder="请填写项目名称"
		  	:rules="[{ required: true, message: '请填写项目名称' }]"
		    /> -->
			<view  class="filed">
			  <view class="head">
			     项目名称
			  </view>
			  <input type='text' placeholder="请填写项目名称"  v-model="form.projectName"/>
			 </view>
			 <view class="line"></view>
		<!-- 	<van-field
			:value="form.takeRoles"
			label="担任角色"
			@change="changetakeRoles"
			placeholder="请填写担任角色"
			:rules="[{ required: true, message: '请填写担任角色' }]"
			/> -->
			<view  class="filed">
			  <view class="head">
			     担任角色
			  </view>
			  <input type='text' placeholder="请填写担任角色"  v-model="form.takeRoles"/>
			 </view>
			 <view class="line"></view>
			 <view class="row">
			 	<view class="name">开始时间</view>
			 	<view class="value">
			 		<biaofun-datetime-picker
			 			placeholder="请选择开始时间"
			 			:defaultValue="form.beginTime"
			 			start="1990-01-01"
			 			:end="nowTime"
			 			fields="day"
			 			@change="changeDatetimePickerStart"
			 		></biaofun-datetime-picker>
			 	</view>
			 	<image src="../static/imgs/left.png" mode=""  class="iconRight"></image>
			 </view>
			 <view class="line"></view>
		<!-- 	<view class="row" style="padding-bottom:12px">
				<view class="name">开始时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择开始时间"
						:defaultValue="form.beginTime"
						start="1900-01-01"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePickerStart"
					></biaofun-datetime-picker>
				</view>
				<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon" style="top: 4px"></image></view>
			</view> -->
			<view class="row">
				<view class="name">结束时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择结束时间"
						:defaultValue="form.endTime"
						start="1990-01-01"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePickerEnd"
					></biaofun-datetime-picker>
				</view>
				<image src="../static/imgs/left.png" mode=""  class="iconRight"></image>
			</view>
			<!-- <view class="row" style="padding-bottom:8px;border-bottom: none">
				<view class="name">结束时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择结束时间"
						:defaultValue="form.endTime"
						:start="form.beginTime"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePickerEnd"
					></biaofun-datetime-picker>
				</view>
				<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon" style="top: 4px"></image></view>
			</view> -->
			
		 
		</view>
		
		<view class="itemTitle">
			项目描述
		</view>
		<view class="advantage">
		<!-- 	  <van-field
			    :value="form.projectDescription"
				@change="changeprojectDescription"
			    type="textarea"
				maxlength='300'
			    placeholder="展示你的项目经验, 例如 (项目概况, 人员分工, 我的责任)"
			    autosize
			    border="false"
			  /> -->
			  <view style="padding: 10px">
			  	<textarea   maxlength='300' placeholder="展示你的项目经验, 例如 (项目概况, 人员分工, 我的责任)" v-model="form.projectDescription"/>
			  </view>
		</view>
		<view class="itemTitle">
			项目业绩
		</view>
		<view class="advantage">
		<!-- 	  <van-field
			    :value="form.projectPerformance"
				@change="changeprojectPerformance"
			    type="textarea"
				maxlength='300'
			    placeholder="展示你的项目业绩, 例如 (项目收益, 我的贡献, 我的收获)"
			    autosize
			    border="false"
			  /> -->
			  <view style="padding: 10px">
			  	<textarea   maxlength='300' placeholder="展示你的项目业绩, 例如 (项目收益, 我的贡献, 我的收获)" v-model="form.projectPerformance"/>
			  </view>
		</view>
		<view class="itemTitle">
			项目链接
		</view>
		<view class="advantage">
			<!--  <van-field
			    :value="form.projectLinks"
				@change="changeprojectLinks"
			    type="textarea"
				maxlength='100'
			    placeholder="请输入项目链接"
			    autosize
			    border="false"
			  /> -->
			  <view style="padding: 10px">
			  	<textarea   maxlength='300' placeholder="请输入项目链接" v-model="form.projectLinks"/>
			  </view>
		</view>
		<view style="height: 100px;background-color: #F5F5F5">
			
		</view>
		<div style="position:fixed; bottom:16px;width: 90%;margin-left:5%;">
		  <van-button round block  color="#F45C24" @click="save">保存</van-button>
		</div>
	
	</view>
</template>

<script>
	// import recom_company from '@/static/mock/recom_company.js'
	import biaofunDatetimePicker from './biaofun-datetime-picker.vue';
	// import uniDatetimePicker from '@/components/uni-ui/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue'
	import onlineResume from './onlineResume.vue'
	import attachResume from './attachResume.vue'
	import videoResume from './videoResume.vue'
	import {addProgramExperience,putProgramExperience } from '@/api/user.js';
	export default {
		components: {
           biaofunDatetimePicker
		   
		   
		},
		data() {
			return {
			  date: '',
			  dateShow: false,
			  sexStr: '男',
			  sexShow: false,
			  nowTime:'',
			  form: {
			  }
			}
		},
		options: { styleIsolation: 'shared' },
		onLoad(options) {
			this.nowTime = this.format(Date.parse(new Date()));
			
			this.form = uni.getStorageSync('itemExperience')?JSON.parse(uni.getStorageSync('itemExperience')):{
				  companyName:'',
				  positionName: '',
				  department: '',
				  achievement:'',
				  beginTime:this.nowTime,
				  endTime: this.nowTime,
				  content: ''};
				  let resumeObj = uni.getStorageSync('personMessage')?JSON.parse(uni.getStorageSync('personMessage')).resume:{};
				  this.form.resumeId = resumeObj.id;
				  uni.setStorageSync('itemExperience',{})
		},
		methods: {
			add0(m){return m<10?'0'+m:m },
			format(shijianchuo){
				  //shijianchuo是整数，否则要parseInt转换
				  var time = new Date(shijianchuo);
				  var y = time.getFullYear();
				  var m = time.getMonth()+1;
				  var d = time.getDate();
				  var h = time.getHours();
				  var mm = time.getMinutes();
				  var s = time.getSeconds();
				  return y+'-'+this.add0(m)+'-'+this.add0(d);
			},
			changeprojectName(item){
				this.form.projectName = item.detail
			},
			changetakeRoles(item){
				this.form.takeRoles = item.detail
			},
			changeprojectPerformance(item){
				 this.form.projectPerformance = item.detail
			},
			changeprojectLinks(item){
				 this.form.projectLinks = item.detail
			},
			changeprojectDescription(item){
				 this.form.projectDescription = item.detail
			},
			changeDatetimePickerStart(date) {
						this.form.beginTime = date.f1+' 00:00:00';
						// if(this.form.beginTime && this.form.endTime && this.form.beginTime > this.form.endTime){
						// 	this.form.endTime = '';
						// }
						// this.$forceUpdate();
			},
			changeDatetimePickerEnd(date) {
						this.form.endTime = date.f1+' 00:00:00';
						// if(this.form.beginTime && this.form.endTime && (this.form.beginTime > this.form.endTime)){
						// 	this.form.beginTime = '';
						// }
						// this.$forceUpdate();
			},
		  sexClick() {
			this.sexShow = !this.sexShow
			this.sexStr = this.form.sex === '1' ? '男': '女'
		  },
		  dateClick() { 
			  this.dateShow = true
			  console.log(this.dateShow)
		  },
		  changeDatetimePicker(date) {
		  	console.log('选择的日期时间数据：', date);
		  },
		  formatDate(date) {
			  let newDate = new Date(date);
			  console.log('dsadsaf',newDate.getFullYear())
		      return `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()}`;
		  },
		   onConfirm(event) {
			   console.log(event)
			  this.date =  this.formatDate(event.detail)
		      this.dateShow = false;
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
		  },
		  save() {
			  this.form.endTime = this.form.endTime?this.form.endTime.indexOf(' 00:00:00') == -1?this.form.endTime+' 00:00:00':this.form.endTime:'';
			  if(!this.form.id){
				  addProgramExperience(this.form).then((res)=>{
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
				  putProgramExperience(this.form).then((res)=>{
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
		.head {
			flex: 0 0 100px;
			display: flex;
			align-items: center;
		}
		.content {
			flex: 1;
			text-align: center;
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
	
		
</style>
