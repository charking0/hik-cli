<template>
	<view style="background-color: #F5F5F5;padding-top:10px;height: 100vh;">
		<view class="box">
		  <!-- <van-form @submit="onSubmit"> -->
		    <view  class="filed">
		      <view class="head">
		         姓名
		      </view>
		      <input type='text' placeholder="请填写姓名"  v-model="form.name"/>
		     </view>
			 <view class="line"></view>
		   <!-- <van-field
		  	:value="form.name"
			@change="changeName"
		  	label="姓名"
		  	placeholder="请填写姓名"
		  	:rules="[{ required: true, message: '请填写姓名' }]"
		    /> -->
			<view  class="filed">
			    <view class="head">
			     性别
			    </view>
			    <view>
				<radio-group @change="radioChange" >
				  <label class="radio" style="margin-right: 20px;"><radio value="1" checked="true" style="transform:scale(0.7);"/>男</label>
				  <label class="radio"><radio value="2" style="transform:scale(0.7);" />女</label>
				</radio-group>
			  </view>
			  </view>
			  <view class="line"></view>
			 
		<!-- 	<view class="row" style="padding:12px 0px;" >
				<view class="name">性别</view>
				<view class="value" @click="sexClick">
					{{sexStr}}
				</view>
				<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon"  style="top: 15px;"  ></image></view>
			</view> -->
			<view class="row">
				<view class="name">参加工作时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择工作时间"
						:defaultValue="form.joinJobTime"
						start="1970-01-01"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePicker"
					></biaofun-datetime-picker>
				</view>
				<image src="../static/imgs/left.png" mode=""  class="iconRight"></image>
			</view>
			<view class="line"></view>
				<!-- <van-field
				label="微信号(选填)"
				:value="form.wxNumber"
				@change="changeWeixin"
				placeholder="请填写微信号"
				/> -->
		     <view  class="filed">
				<view class="head">
				   微信号
				</view>
				<input type='text' placeholder="请填写微信号" v-model="form.wxNumber"/>
			   </view>
			   <view class="line"></view>
			<view class="row" >
				<view class="name">出生年月</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择出生年月"
						:defaultValue="form.birthday"
						start="1970-01-01"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePickerBirth"
					></biaofun-datetime-picker>
				</view>
				<image src="../static/imgs/left.png" mode=""  class="iconRight"></image>
			</view>
			<view class="line"></view>
			<!-- </van-field> -->
			<view class="last">
				<!-- <van-field
				:value="form.email"
				@change="changeEmail"
				label="邮箱(选填)"
				placeholder="请填写邮箱"
				/> -->
				<view  class="filed">
					<view class="head">
					   邮箱
					</view>
					<input type='text' placeholder="请填写邮箱"  v-model="form.email" />
				  </view>
			</view>
		 
		</view>
		
		<view class="itemTitle">
			个人优势
		</view>
		<view class="advantage">
			<view style="padding: 10px">
				<textarea   maxlength='300' placeholder="请填写你的个人优势" v-model="form.description"/>
			</view>
			 
			<!-- <div style="height: 10px;border-radius: 10px; background-color: white;"></div>
			  <van-field
			    :value="form.description"
				@change="changeDescription"
			    type="textarea"
				maxlength='300'
			    placeholder="请填写你的个人优势"
			    autosize="{ minHeight: 500 }"
			    border="false"
			  />
			  <div style="height: 10px;border-radius: 10px; background-color: white;"></div> -->
		</view>
		<view style="height: 100px;background-color: #F5F5F5">
			
		</view>
		<div style="position:fixed; bottom:16px;width: 90%;margin-left:5%">
		  <van-button round block  color="#F45C24" @click="save">保存</van-button>
		</div>
	  
	
	</view>
</template>

<script>
	// import recom_company from '@/static/mock/recom_company.js'
	import biaofunDatetimePicker from './biaofun-datetime-picker.vue';
	import {addPersonMessage,putPersonMessage } from '@/api/user.js';
	// import uniDatetimePicker from '@/components/uni-ui/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue'
	import onlineResume from './onlineResume.vue'
	import attachResume from './attachResume.vue'
	import videoResume from './videoResume.vue'
	
	export default {
		components: {
           biaofunDatetimePicker
		   
		   
		},
		data() {
			return {
			  date: '',
			  nowTime:'',
			  form: {
				  name:'test',
				  sex: '1',
				  joinJobTime:'',
				  birthday:'',
				  wxNumber: '',
				  email: '',
				  description:''
			  }
			}
		},
		options: { styleIsolation: 'shared' },
		onLoad(options) {
			this.nowTime = this.format(Date.parse(new Date()));
			console.log('uni.getStorage', uni.getStorageSync('personMessage'))
			this.form = uni.getStorageSync('personMessage')?JSON.parse(uni.getStorageSync('personMessage')).resume:{name:'',
				  sex: '1',
				  wxNumber: '',
				  email: '',
				  description:''};
				  uni.setStorageSync('personMessage',{})
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
		  radioChange(value) {
			  console.log(value)
			// this.sexShow = !this.sexShow
		    this.form.sex = value.detail.value;
		  },
		  dateClick() { 
			  this.dateShow = true
			  console.log(this.dateShow)
		  },
		  changeDatetimePicker(date) {
		  	console.log('选择的日期时间数据：', date);
			this.form.joinJobTime = date.f1+' 00:00:00';
		  },
		  changeDatetimePickerBirth(date) {
		  	console.log('选择的日期时间数据：', date);
			this.form.birthday = date.f1+' 00:00:00';
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
		  save () {
			  console.log('fdhgjh',this.form)
			  // if(!this.form.id){
				 //  addPersonMessage({...this.form}).then((res)=>{
					//   if(res.code == 0){
					// 	  uni.showToast({
					// 		title:res.msg || '提交成功'
					// 	  });
					// 	  // uni.setStorageSync('personMessage',JSON.stringify(res.data))
					// 	  uni.navigateBack({
					// 		  delta: 1
					// 	  });
					//   }else{
					// 	  uni.showToast({
					// 		title:res.msg || '提交失败',
					// 		icon:'none'
					// 	  });
					//   }
				 //  })
			  // }else{
				 //  putPersonMessage({...this.form}).then((res)=>{
					//   if(res.code == 0){
					// 	  uni.showToast({
					// 		title:res.msg || '提交成功'
					// 	  });
					// 	  // uni.setStorageSync('personMessage',JSON.stringify(res.data))
					// 	  uni.navigateBack({
					// 		  delta: 1
					// 	  });
					//   }else{
					// 	  uni.showToast({
					// 		title:res.msg || '提交失败',
					// 		icon:'none'
					// 	  });
					//   }
				 //  })
			  // }
			  
		  }
		}
	}
</script>

<style lang="scss">
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
	.box {
		width: 90%;
		padding: 10px 0;
		margin: 0px auto 10px auto;
		border-radius:10px;
		background-color: white;
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
	
	.itemTitle {
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 500;
		color: #323332;
		margin: 20px 6% 10px 6%;
		
	}
	.advantage {
		width: 90%;
		margin: 0px auto;
		border-radius:10px;
	    background-color: white;
		min-height: 150px;
		
	}
	
		
</style>
