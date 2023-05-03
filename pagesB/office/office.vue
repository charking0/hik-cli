<template>
	<view class="office">
		<scroll-view scroll-y='true'>
			<view class="office-scroll" v-if="recomData">
				<officeTitle :recomData='recomData'></officeTitle>
				<officeHr :recomData='recomData'></officeHr>
				<officeContent :recomData='recomData' ></officeContent>
				<view class="empty">	
				</view>
			</view>
		</scroll-view>
		<officeButton :recomData='recomData' @getAttachFile="getAttachFile"></officeButton>
		
		<uni-popup ref="popup" background-color="#fff" >
			<view style="height: 50px;line-height: 50px;padding-left: 20px;color: #000000;border-radius: 20px 20px 0 0;border-bottom: 1px solid #ECECEC">
				请选择要发送的文件
			</view>
			<view class="popup-content">
				<view class="contentAttach">
				   <view class="content-item-attach" v-for="(item, index) in attachList" :style="{borderBottom: index === attachList.length-1 ? 'none': '1px solid #ebedf0'}" @click="choose(index,item)">
				   	 <image src="../static/imgs/file.png" mode="" class="content-item-pic"></image>
					 <view class="content-box">
						 <view class="content-box-com">
						 	<!-- {{item.resumeFileName}} -->
							学习java
						 </view>
					 	 <view class="content-box-date">
					 	 	<!-- {{change(item.size)}} {{item.createTime}}
							 -->
							 {{item.createTime}}
					 	 </view>
						 <image src="../static/imgs/true.png" mode="" class="img" v-show="active === index"></image>
						 
					 </view>
				   </view>
				   <div style="width: 100%;margin:10px 0 0 0">
				     <van-button round block  color="#F45C24" @click="save()">投递</van-button>
				   </div>
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import recom_company from '@/static/mock/recom_company.js'
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	import officeTitle from './officeTitle.vue'
	import officeHr from './officeHr.vue'
	import officeContent from './officeContent.vue'
	import officeButton from './officeButton.vue'
	import {details, dic, deliverList,deliver} from '@/api/user.js';

	export default {
		components: {
			officeTitle,
			officeHr,
			officeContent,
			officeButton
		},
		data() {
			return {
				recomData: null,
				recruitId: '',
				abCode:'',
				cityCode:'',
				attachList:[],
				active: 0,
				item: {}
			}
		},
		onShow() {
			deliverList().then(res=> {
				console.log(res)
				this.attachList = res.data || []
			})
		},
		onLoad(options) {
			this.recruitId = options.id
			this.abCode = options.abCode
			this.cityCode = options.cityCode
			details({recruitId: this.recruitId,abCode: options.abCode,cityCode: options.cityCode,isCollection: options.isCollection}).then((res)=> {
				console.log(res)
				this.recomData = res.data
			})
		},
		methods: {
			save() {
				console.log(this.item)
				deliver({recruitId: this.recruitId, recruitType: 1,abCode:this.abCode,cityCode: this.cityCode}).then((res)=> {
					if (res.code === 0) {
						uni.showToast({
						 title: '投递成功',
						duration: 1000
						});
					} else {
						uni.showToast({
						 title: `${res.msg}`,
						 duration: 1000
						});
					}
					this.$refs.popup.close()
				 })
			},
			choose(index,item) {
				console.log('item', item)
				this.active = index
				this.item =  item
				
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
			getAttachFile() {
				this.$refs.popup.open('bottom')
				
			}
		}
	}
</script>

<style lang="scss">
	.office {
		position: relative;
		background: #F5F5F5;
		.office-scroll{
			margin-bottom: 70px;
		}
		.empty {
			height: 20px;
		}
	}
	.popup-content {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 15px;
		background-color: #fff;
	}
	.contentAttach {
		width: 90%;
		margin: 0px auto;
	}
	.content-item-attach {
		display: flex;
		// padding: 0 10px 10px 10px;
		border-radius:10px;
		margin-top: 5px;
		background-color: white;
		border-bottom: 1px solid #ebedf0;
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
