<template>
	<view style="background-color: #F5F5F5;padding-top:10px;">
		<view class="box">
		  <!-- <van-form @submit="onSubmit"> -->
		  <!-- <view style="padding: 0xp 0px 6px;" > -->
			  <view  class="filed">
			    <view class="head">
			       公司名称
			    </view>
			    <input type='text' placeholder="请填写公司名称"  v-model="form.companyName"/>
			   </view>
			   <view class="line"></view>
		  <!--  <van-field
		  	:value="form.companyName"
		  	label="公司名称"
		  	placeholder="请填写公司名称"
			@change="companyName"
		  	:rules="[{ required: true, message: '请填写姓名' }]"
		    />
			</view>
			<view style="padding: 0xp 0px 6px;" > -->
			<view  class="filed">
			  <view class="head">
			     职位名称
			  </view>
			  <input type='text' placeholder="请填写职位名称"  v-model="form.positionName"/>
			 </view>
			 <view class="line"></view>
			<!-- <van-field
			:value="form.positionName"
			label="职位名称"
			placeholder="请填写职位名称"
			@change="positionName"
			:rules="[{ required: true, message: '请填写姓名' }]"
			/>
			 </view >
			<view style="padding: 0xp 0px 6px;" > -->
			<view  class="filed">
			  <view class="head">
			     所属部门
			  </view>
			  <input type='text' placeholder="请填写所属部门"  v-model="form.department"/>
			 </view>
			 <view class="line"></view>
		<!-- 	<van-field
			:value="form.department"
			label="所属部门"
			@change="department"
			placeholder="请填写所属部门"
			:rules="[{ required: true, message: '请填写姓名' }]"
			/>
			 </view >
			<view class="row" style="padding-bottom:8px"> -->
			<view class="row">
				<view class="name">入职时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择入职时间"
						:defaultValue="form.beginTime"
						start="1970-01-01"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePickerStart"
					></biaofun-datetime-picker>
				</view>
				<image src="../static/imgs/left.png" mode=""  class="iconRight"></image>
			</view>
			 <view class="line"></view>
				<!-- <view class="name">入职时间</view>
				<view class="value"style="margin-top: 7px;" >
					<biaofun-datetime-picker
						placeholder="请选择入职时间"
						:defaultValue="form.beginTime"
						start="2000-01-01"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePickerStart"
					></biaofun-datetime-picker>
				</view>
				<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon" style="top: 6px"></image></view>
			</view> -->
			<view class="row">
				<view class="name">离职时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择离职时间"
						:defaultValue="form.endTime"
						start="1970-01-01"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePickerEnd"
					></biaofun-datetime-picker>
				</view>
				<image src="../static/imgs/left.png" mode=""  class="iconRight"></image>
			</view>
		<!-- 	<view class="row" style="padding-bottom:8px;border-bottom: none;">
				<view class="name">离职时间</view>
				<view class="value" style="margin-top: 7px;" >
					<biaofun-datetime-picker
						placeholder="请选择离职时间"
						:defaultValue="form.endTime"
						:start="form.beginTime"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePickerEnd"
					></biaofun-datetime-picker>
				</view>
				<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon" style="top: 6px"></image></view>
			</view> -->
		 
		</view>
		
		
		<view class="itemTitle">
			工作内容
		</view>
		<view class="advantage">
			<!--  <van-field
			    :value="form.content"
			    type="textarea"
				maxlength='300'
				@change="content"
			    placeholder="请填写你的工作内容"
			    autosize="{ minHeight: 500 }"
			    border="false"
			  /> -->
			  <view style="padding: 10px">
			  	<textarea   maxlength='300' placeholder="请填写你的工作内容" v-model="form.content"/>
			  </view>
		</view>
		<view class="itemTitle">
			工作业绩
		</view>
		<view class="advantage" >
			<!--  <van-field
			    :value="form.achievement"
			    type="textarea"
				@change="achievement"
				maxlength='300'
			    placeholder="请填写你的工作业绩  (例如 取得成绩, 现实的突破, 获得的表彰)"
			    autosize="{ minHeight: 500 }"
			    border="false"
			  /> -->
			  <view style="padding: 10px">
			  	<textarea   maxlength='300' placeholder="请填写你的工作业绩  (例如 取得成绩, 现实的突破, 获得的表彰)" v-model="form.achievement"/>
			  </view>
		</view>
		<view style="height: 100px;background-color: #F5F5F5">
			
		</view>
		<div style="position:fixed; bottom:16px;width: 90%;margin-left:5%">
		  <van-button round block  color="#F45C24" @click="save">保存</van-button>
		</div>
	
	</view>
</template>

<script>
	import biaofunDatetimePicker from './biaofun-datetime-picker.vue';
    import {addFile} from '@/api/user.js';
	import {addWrokExperience,putWrokExperience } from '@/api/user.js';
	export default {
		components: {
           biaofunDatetimePicker
		},
		data() {
			return {
				nowTime:'',
			  form: {
				  companyName:'',
				  positionName: '',
				  department: '',
				  achievement:'',
				  beginTime:this.nowTime,
				  endTime: this.nowTime,
				  content: ''
			  }
			}
		},
		options: { styleIsolation: 'shared' },
		onLoad(options) {
			this.nowTime = this.format(Date.parse(new Date()));
			
			this.form = uni.getStorageSync('workExperience')?JSON.parse(uni.getStorageSync('workExperience')):{
				  companyName:'',
				  positionName: '',
				  department: '',
				  achievement:'',
				  beginTime:"",
				  endTime: '',
				  content: ''};
				  let resumeObj = uni.getStorageSync('personMessage')?JSON.parse(uni.getStorageSync('personMessage')).resume:{};
				  this.form.resumeId = resumeObj.id;
				  uni.setStorageSync('workExperience',{})
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
		  companyName(item) {
			  this.form.companyName = item.detail
			 },
		 positionName(item) {
			this.form.positionName = item.detail
		 },
		 department(item) {
		 	this.form.department = item.detail
		 },
		 achievement(item) {
		 	this.form.achievement = item.detail
		 },
		 content(item) {
		 	this.form.content = item.detail
		 },
		  changeDatetimePickerStart(date) {
			this.form.beginTime = date.f1+' 00:00:00';
			// if(this.form.beginTime && this.form.endTime && this.form.beginTime > this.form.endTime){
			// 	this.form.endTime = '';
			// }
		  },
		  changeDatetimePickerEnd(date) {
			this.form.endTime = date.f1+' 00:00:00';
			// if(this.form.beginTime && this.form.endTime && this.form.beginTime > this.form.endTime){
			// 	this.form.beginTime = '';
			// }
		  },
		   onConfirm(event) {
			   // console.log(event)
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
		  save() {
			  if(!this.form.id){
				  addWrokExperience(this.form).then((res)=>{
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
				  putWrokExperience(this.form).then((res)=>{
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
