<template>
	<view style="background-color: #F5F5F5;padding-top:10px;min-height: 350px;">
		<view class="title">
			文件简历
		</view>
		<!-- <view class="box"> -->
		  <view  class="boxContent" v-for="item in videoList">
		    <image src="/static/demo/list3/1.webp" style="width:100%;height:110px;border-radius: 10px 10px 0px 0px;display: block;" mode="aspectFill" class="rounded-lg"></image>
		    <view style="width:100%;border-radius: 0px 0px 10px 10px;background-color: white;">
		  	  <view style="color: #333333;font-size: 15px;padding:6px 0 0 5px">
		  	  	 王伟光
		  	  </view>
		  	  <view style="color: #666666;font-size: 12px;padding:6px 0 0 5px">
		  	  	 资深讲师
		  	  </view>
		  	  <view style="color: #999999;font-size: 12px;padding:6px 0 10px 5px">
		  	  	 20kb 2021.5.10  9:40上传
		  	  </view>
		    </view>
			 <image src="../static/imgs/delete.png" mode="" class="img" @click="deleteData(item)"></image>
		  </view>
		  
		<!-- </view> -->
		
		<view style="position: fixed; bottom: 20px;width: 90%;margin-left: 5%;">
		   <view class="uploaderBox" style="width:100%">
			<view class="uploader">
				<image src="../static/imgs/addFill.png" mode="" class="addFill"></image>
				<view style="font-size: 18px;color: #F45C24;">
					上传附件简历
				</view>
			</view>
		</view>
		</view>

	
	</view>
</template>

<script>
	// import recom_company from '@/static/mock/recom_company.js'
	// import uniDatetimePicker from '@/components/uni-ui/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue'
	import {getVideo,uploadFile,deleteVideo } from '@/api/user.js';
	export default {
		components: {

		   
		   
		},
		data() {
			return {
				videoList:[],
				personMessage:{},
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
		onLoad(options) {
			
		},
		methods: {
			deleteData(item){
				deleteVideo(item.id).then(res=>{
					if(res.code== 0){
						this.getData();
					}else{
					  uni.showToast({
						title:res.msg || '删除失败',
						icon:'none'
					  });
				  }
				})
			},
			getData(){
				  this.videoList = [];
				  getVideo(this.personMessage.resume.id).then(res=>{
					  if(res.code == 0){
						  this.videoList = res.data;
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
margin: 0 auto;

<style lang="scss">
	.uploaderBox {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.boxContent {
	  width: calc(50% - 18px);
	  float: left;
	  position: relative;
	  .img {
	  	position: absolute;
	  	right: 5px;
	  	top:5px;
	  	width:20px;
	  	height:20px;
	  }
	}
	.boxContent:nth-child(even) {
		margin: 0 16px 10px 10px;
	}
	.boxContent:nth-child(odd) {
		margin: 0 10px 10px 0px;
	}
    .uploader {
		width: 100%;
		border-radius: 20px;
		border: 1px solid #F45C24;
		display: flex;
		align-items: center;
		margin: 32px auto;
		height: 43px;
		/deep/ .van-uploader {
			display: block;
			margin: 0 auto;
		}
		image {
			display: block;
			margin: 0 20px 0 104px;
		}
		.addFill {
			width:33px;
			height: 33px;
		}
		&:hover {
			opacity: 0.8;
		}
	}
	.title {
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 500;
		color: #323332;
		margin: 10px 20px;
		
	}
	
	
</style>
