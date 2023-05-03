<template>
	<view style="background-color: #F5F5F5;padding-top:10px;min-height: 100vh;">
		<view class="itemTitle">
			自定义标签
		</view>
		<view class="advantageTag">
			<view style="padding: 10px">
				<textarea   maxlength='100' placeholder="请填写你的个人优势" v-model="form.tagLists[0].tagName"/>
			</view>
			 <!-- <van-field
			    :value="form.tagLists[0].tagName"
				@change="tagName"
			    type="textarea"
				maxlength='300'
			    placeholder="填写你的个人标签"
			    autosize
			    border="false"
			  /> -->
		</view>
		<!-- <view class="title">
			推荐标签
		</view>
		<view class="tagTo">
			<view class="tag">
				少女心发
			</view>
		</view> -->
	<div style="position:fixed; bottom:16px;width: 90%;margin-left:5%">
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
	import {addPersonTag } from '@/api/user.js';
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
			  form: {
				  tagLists:[{
					  tagName:''
				  }]
			  }
			}
		},
		options: { styleIsolation: 'shared' },
		onLoad(options) {
		  let resumeObj = uni.getStorageSync('personMessage')?JSON.parse(uni.getStorageSync('personMessage')).resume:{};
		  this.form.resumeId = resumeObj.id;
		},
		methods: {
			tagName(item){
				this.form.tagLists[0].tagName = item.detail;
			},
			save() {
			  addPersonTag(this.form).then((res)=>{
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
		  }
		}
	}
</script>

<style lang="scss">
	
    .tagTo {
		margin: 0px auto 0px auto;
		width: 90%;
		.tag {
			padding: 4px 8px;
			border-radius: 5px;
			display: inline-block;
			text-align: center;
			background-color: white;
			font-size: 12px;
			color: #323332;
		}
		.tag:hover {
			border: 1px solid #F15A24;
			color: #F15A24;
			
		}
	}
	.itemTitle {
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 500;
		color: #323332;
		margin: 20px 6% 10px 6%;
		
	}
	.advantageTag {
		width: 90%;
		margin: 0px auto;
		border-radius:10px;
	    background-color: white;
		min-height: 50px;
		
	}
	
		
</style>
