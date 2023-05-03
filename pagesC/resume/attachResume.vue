<template>
	<view style="background-color: #F5F5F5;padding-top:10px;min-height: 350px;">
		<view class="title">
			文件简历
		</view>
		
		
		<view class="contentAttach">
		   <view class="content-item-attach" v-for="item in attachList">
		   	 <image src="../static/imgs/file.png" mode="" class="content-item-pic"></image>
			 <view class="content-box">
				 <view class="content-box-com">
				 	{{item.name}}
				 </view>
			 	 <view class="content-box-date">
			 	 	{{change(item.size)}} {{item.time}}
			 	 </view>
				 <image src="../static/imgs/delete.png" mode="" class="img" @click="deleteData(item)"></image>
				 
			 </view>
		   </view>
		</view>
		
		<view style="position: fixed; bottom: 20px;width: 90%;margin-left: 5%;">
			<view class="uploaderBox" style="width:100%">
					<view class="uploader" @click="uploadF">
						<image src="../static/imgs/addFill.png" mode="" class="addFill"></image>
						<view style="font-size: 18px;color: #F45C24;">
							上传附件简历
						</view>
								 <!-- <uni-file-picker :value ="fileValue" @success="successfileList" file-mediatype="all" file-extname="pdf"
			             style="position: absolute;top:0; bottom:0;left:0;right:0;opacity: 0;z-index: 10"></uni-file-picker> -->
					</view>
			</view>
		</view>
		 

	
	</view>
</template>

<script>
	// import recom_company from '@/static/mock/recom_company.js'
	// import uniFilePicker from '@/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue'
	import {getAttach,uploadFile,deleteAttach } from '@/api/user.js';
	export default {
		components: {

		   // uniFilePicker
		   
		},
		data() {
			return {
			  date: '',
			  dateShow: false,
			  sexStr: '男',
			  sexShow: false,
			  personMessage:{},
			  attachList:[],
			  form: {
				  username:'',
				  sex: '1',
				  weixin: '',
				  email: '',
				  advantage:''
			  },
			  fileValue:[
			  ],
			  listStyles:{  
				  "height": 60,   // 边框高度
				  "width": 60,    // 边框宽度
				  "border":{ // 如果为 Boolean 值，可以控制边框显示与否
					  "color":"#eee",     // 边框颜色
					  "width":"1px",      // 边框宽度
					  "style":"solid",    // 边框样式
					  "radius":"50%"      // 边框圆角，支持百分比
				  }
			  }
			  
			}
		},
		options: { styleIsolation: 'shared' },
		created() {
			this.getData();
		},
		methods: {
			getTime() {
				var time = new Date();
				return time.toLocaleString() //获取日期与时间
			},
			change(limit){
			    var size = "";
			    if(limit < 0.1 * 1024){                            //小于0.1KB，则转化成B
			        size = limit.toFixed(2) + "B"
			    }else if(limit < 0.1 * 1024 * 1024){            //小于0.1MB，则转化成KB
			        size = (limit/1024).toFixed(2) + "KB"
			    }else if(limit < 0.1 * 1024 * 1024 * 1024){        //小于0.1GB，则转化成MB
			        size = (limit/(1024 * 1024)).toFixed(2) + "MB"
			    }else{                                            //其他转化成GB
			        size = (limit/(1024 * 1024 * 1024)).toFixed(2) + "GB"
			    }
			
			    var sizeStr = size + "";                        //转成字符串
			    var index = sizeStr.indexOf(".");                    //获取小数点处的索引
			    var dou = sizeStr.substr(index + 1 ,2)            //获取小数点后两位的值
			    if(dou == "00"){                                //判断后两位是否为00，如果是则删除00                
			        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
			    }
			    return size;
			},
			fnDate(){
				var date=new Date();
				var year=date.getFullYear();//当前年份
				var month=date.getMonth();//当前月份
				var data=date.getDate();//天
				var hours=date.getHours();//小时
				var minute=date.getMinutes();//分
				var second=date.getSeconds();//秒
				var time=year+"/"+this.fnW((month+1))+"/"+this.fnW(data)+" "+this.fnW(hours)+":"+this.fnW(minute)+":"+this.fnW(second);
				return time
			},
				//补位 当某个字段不是两位数时补0
			fnW(str){
				var num;
				str>10?num=str:num="0"+str;
				return num;
			}, 
			select(e){
				console.log('选择文件：',e)
			},
			// 获取上传进度
			progress(e){
				console.log('上传进度：',e)
			},

			// 上传成功
			successfileList(e){
				console.log('上传成功',e)
				this.attachList.push({...e.tempFiles[0],time: this.fnDate()})
				console.log(this.fileValue)
			},

			// 上传失败
			fail(e){
				console.log('上传失败：',e)
			},
			uploadF(){
				let _this = this;
				wx.chooseMessageFile({
					count:1,
					type:'file',
					success:function(res){
						console.log('res', res)
						const tempFilePaths = res.tempFiles;
						_this.attachList.push({...res.tempFiles[0],time: _this.fnDate()})
						wx.uploadFile({
							url:'http://120.78.194.204:8999/admin/sys-file/upload',
							filePath:tempFilePaths[0].path,
							name:'file',
							formData:{
								method:'post'
							},
							header: {
							'Content-Type': 'multipart/form-data',
							'Authorization':uni.getStorageSync('Token')
							},
							success:function(res){
								console.log(res);
								//debugger;
							},
							fail:function(err){
								//debugger;
							}
						})
					}
				})
				// return false;
			},
			deleteData(item){
				deleteAttach(item.id).then(res=>{
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
		  beforeRead(file){
			  // debugger;
			  // let formData = new FormData();
			  // formData.append('file',file);
			  // uploadFile(formData).then(res=>{
				 //  if(res.code == 0){
					  
				 //  }
			  // })
		  },
		  getData(){
			  this.attachList = [];
			  getAttach(this.personMessage.resume.id).then(res=>{
				  if(res.code == 0){
					  this.attachList = res.data;
				  }
			  })
		  },
		  afterRead(file) {
			  console.log(file)
		  },
		  returnTo() {
			  uni.navigateBack({
			  	animationType:"pop-out"
			  })
		  },
		  onChange() {
			  
		  }
		}
	}
</script>

<style lang="scss">
	.uploaderBox {
		width: 100%;
		height: 100px;
		position: relative;
		display: flex;
		margin: 0 auto;
		// margin-top: 50px;
		justify-content: center;
	}
	
    .uploader {
		width: 100%;
		border-radius: 20px;
		border: 1px solid #F45C24;
		display: flex;
		align-items: center;
		margin: 32px auto;
		height: 43px;
		position: relative;
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
		padding: 10px 20px;
		
	}
	.contentAttach {
		width: 90%;
		margin: 12px auto;
		
		
		// height: 100px;
	}
	.content-item-attach {
		display: flex;
		padding: 10px;
		margin-top: 10px;
		border-radius:10px;
		background-color: white;
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
			
			// padding: 10px;
			.content-box-com {
				color: #333333;
				font-size: 15px;
				margin-top:5px;
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
				width:20px;
				height:20px;
			}
		}
	}
	
		
</style>
