<template>
	<view style="background-color: #F5F5F5;padding-top:10px;">
		<view class="box">
		  <!-- <van-form @submit="onSubmit"> -->
		  <view  class="filed">
		    <view class="head">
		       学校名称
		    </view>
		    <input type='text' placeholder="请填写学校名称"  v-model="form.schoolName"/>
		   </view>
		   <view class="line"></view>
		  <!--  <van-field
		  	:value="form.schoolName"
			@change="schoolName"
		  	label="学校名称"
		  	placeholder="请填写学校名称"
		  	:rules="[{ required: true, message: '请填写学校名称' }]"
		    /> -->
			<view  class="filed" @click="sexClick">
			  <view class="head">
			     学历
			  </view>
			  <view class="value" style="width: 100%;" >
			  	{{eduTxt}}
			  </view>
			  <view class="iconfont"><image src="../static/imgs/left.png" mode=""class="iconRight"></image></view>
			 </view>
			 <view class="line"></view>
		<!-- 	<view class="row" style="padding-bottom:10px">
				<view class="name">学历</view>
				<view class="value" style="height:36upx" @click="sexClick">
					{{eduTxt}}
				</view>
				<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon" style="top: 10px"></image></view>
			</view> -->
			<view  class="filed">
			  <view class="head">
			     专业
			  </view>
			  <input type='text' placeholder="请填写专业"  v-model="form.major"/>
			 </view>
			 <view class="line"></view>
			<!-- <van-field
			:value="form.major"
			@change="major"
			label="专业"
			placeholder="请填写专业"
			:rules="[{ required: true, message: '请填写专业' }]"
			/> -->
			<view class="row">
				<view class="name">开学时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择开学时间"
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
			<!-- <view class="row" style="padding-bottom:3px">
				<view class="name">开学时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择开学时间"
						:defaultValue="form.beginTime"
						start="1900-01-01"
						:end="nowTime"
						fields="day"
						@change="changeDatetimePickerStart"
					></biaofun-datetime-picker>
				</view>
				<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon" style="top: 10px"></image></view>
			</view> -->
			<view class="row">
				<view class="name">毕业时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择毕业时间"
						:defaultValue="form.endTime"
						:end="nowTime"
						start="1990-01-01"
						fields="day"
						@change="changeDatetimePickerEnd"
					></biaofun-datetime-picker>
				</view>
				<image src="../static/imgs/left.png" mode=""  class="iconRight"></image>
			</view>
			<!-- <view class="row" style="padding-bottom:3px;border-bottom: none">
				<view class="name">毕业时间</view>
				<view class="value">
					<biaofun-datetime-picker
						placeholder="请选择毕业时间"
						:defaultValue="form.endTime"

						fields="day"
						@change="changeDatetimePickerEnd"
					></biaofun-datetime-picker>
				</view>
				<view class="iconfont"><image src="../static/imgs/left.png" mode="" class="right-icon" style="top: 10px"></image></view>
			</view> -->
			
		 
		</view>
		
		<view class="itemTitle">
			在校经历
		</view>
		<view class="advantage">
			 <!-- <van-field
			    :value="form.schoolExperience"
				@change="schoolExperience"
			    type="textarea"
				maxlength='300'
			    placeholder="填写在校经历, 例如 (在校担任职位, 获得荣誉, 所学课程)"
			    autosize
			    border="false"
			  /> -->
			  <view style="padding: 10px">
			  	<textarea   maxlength='300' placeholder="填写在校经历, 例如 (在校担任职位, 获得荣誉, 所学课程)" v-model="form.schoolExperience"/>
			  </view>
		</view>
		<view style="height: 100px;background-color: #F5F5F5">
			
		</view>
		<div style="position:fixed; bottom:16px;width: 90%;margin-left:5%">
		  <van-button round block  color="#F45C24" @click="save">保存</van-button>
		</div>
		
		<uni-popup ref="popup" type="bottom">
			<view style="height: 200px;width:90%;padding: 10px;border-radius:10px;margin: 0 auto">
				<van-radio-group :value="form.degree">
				 <van-cell-group>
				   <van-cell :title="item.label" clickable data-value="1" v-for="item in eduData" @click="selectEdu(item)">
					 <van-radio :name="item.value" />
				   </van-cell>
				 </van-cell-group>
				</van-radio-group>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	// import recom_company from '@/static/mock/recom_company.js'
	import biaofunDatetimePicker from './biaofun-datetime-picker.vue';
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	import onlineResume from './onlineResume.vue'
	import attachResume from './attachResume.vue'
	import videoResume from './videoResume.vue'
	import {openId} from '@/api/user.js';
	import {addEduExperience,putEduExperience,getEdu } from '@/api/user.js';	
	export default {
		components: {
           biaofunDatetimePicker,
		   uniPopup
		   
		   
		},
		data() {
			return {
			  date: '',
			  eduTxt:'',
			  dateShow: false,
			  sexStr: '男',
			  sexShow: false,
			  nowTime:'',
			  eduData:[],
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
			this.getEdu();
			this.nowTime = this.format(Date.parse(new Date()));
			this.form = uni.getStorageSync('eduExperience')?JSON.parse(uni.getStorageSync('eduExperience')):{
				  companyName:'',
				  positionName: '',
				  department: '',
				  achievement:'',
				  beginTime:this.nowTime,
				  endTime: this.nowTime,
				  content: ''};
				  let resumeObj = uni.getStorageSync('personMessage')?JSON.parse(uni.getStorageSync('personMessage')).resume:{};
				  this.form.resumeId = resumeObj.id;
			uni.setStorageSync('eduExperience',{})
		},
		onLoad(options) {
			
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
			selectEdu(item){
				this.eduTxt = item.label;
				this.form.degree = item.value;
				this.$refs.popup.close()
			},
			schoolExperience(item){
				this.form.schoolExperience = item.detail
			},
			schoolName(item){
				this.form.schoolName = item.detail
			},
			major(item){
				this.form.major = item.detail
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
			save() {
			  this.form.endTime = this.form.endTime?this.form.endTime.indexOf(' 00:00:00') == -1?this.form.endTime+' 00:00:00':this.form.endTime:'';
			  if(!this.form.id){
				  addEduExperience(this.form).then((res)=>{
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
				  putEduExperience(this.form).then((res)=>{
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
			getEdu(){
				this.eduData = [];
				getEdu().then((res)=>{
					if(res.code == 0){
						this.eduData = res.data
					}
					if(this.form.degree){
						this.eduData.forEach((e)=>{
							if(e.value = this.form.degree){
								this.eduTxt = e.label;
							}
						})
					}
				})
			},
		  sexClick() {
			 this.$refs.popup.open('bottom')
			// this.sexShow = !this.sexShow;
			this.eduTxt = '';
			this.eduData.forEach((e)=>{
				if(e.value == this.form.degree){
					this.eduTxt = e.label;
				}
			})
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
