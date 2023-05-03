<template>
	<view class="container">
		<view class="content" >
		   <view class="content-item" >
		   	 <image src="../../static/imgs/company.png" mode="" class="content-item-pic"></image>
			 <view class="content-box">
				 <view class="content-box-com">
				 	{{companyDetail.company.companyName}}
				 </view>
			 	 <view class="content-box-date">
			 	 	<image src="/pagesB/static/imgs/position.png" mode="" style="width: 18rpx;height: 22rpx;display: inline-block;margin-right: 10rpx;"></image>{{companyDetail.company.address}}
			 	 </view>
			 </view>
		   </view>
		 
		   <view style="padding: 10px">
		   	 <rich-text :nodes="companyDetail.company.profile"></rich-text>
		   </view>
		</view>
		<view class="line-box">
			<view class="line">	
			</view>
		</view>
		<view class="" style="padding: 10px;font-size: 15px;">
			<span>在招职位</span><span style="color: #F15A24; font-size: 24rpx;">({{companyDetail.rercuitListEntityList.length}})</span>
		</view>
		<scroll-view class="index-scroll" scroll-y="true">
			<!--  -->
			<view class="index-content-list">
				<view class="index-content-list-list">
					<view class="content-list" v-for="val in companyDetail.rercuitListEntityList" :key="val.recruitId">
							<view class="list-office">
								<view class="office">{{val.name}}</view>
								<view class="wage">{{`${val.salaryBegin}k - ${val.salaryEnd}k`}}</view>
								<!-- <view class="wage">{{`${val.wage[0]} - ${val.wage[1]}`}}</view> -->
							</view>
							<view class="list-company">
								<view class="companyName">{{val.companyName }}</view>
							</view>
							<view class="list-tag">
								<view class="tag" v-for="(tag,index) in tag" :key="index">{{tag.label}}</view>
							</view>
							<view class="list-hr">
								<view class="left">
									<view class="hrName">{{val.legalPersonName}}</view>
									<view class="dot" v-if="val.company.organizationCode">.</view> 
									<view class="hrOffice">{{val.organizationCode}}</view>
								</view>
								<view class="right">
									<view class="companyAddress">{{val.province }} {{val.city }} {{val.region}}</view>
								</view>
							</view>
					</view>
				</view>
				<!-- <text class="loading-text">
				  {{loadingType === 0 ? 
				  contentText.contentdown : 
				  (loadingType === 1 ? contentText.contentrefresh : contentText.contentnomore)}}
				</text> -->
			</view>
			<!-- <IndexContentList></IndexContentList> -->
		</scroll-view>
	</view>
</template>

<script>	
	// import IndexContentList from './IndexContentList.vue'
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	import uniIcon from '@/components/uni-ui/uni-icons/uni-icons.vue'
	import {condition, dic, companyDetails} from '@/api/user.js';
	// import recom_company from '@/static/mock/recom_company.js'
	// import biaofunFull from './biaofun-full.vue';
	export default {
		components: {
			uniIcon,
			uniPopup
		},
		data() {
			return {
				companyDetail: null,
				tag: [],
				city:'武汉市'
			}
		},
		options: { styleIsolation: 'shared' },
		onShow() {		
		},
		onLoad(op) {
			companyDetails({companyId: op.id}).then(res=> {
				console.log(res)
				this.companyDetail =res.data
			})
		},
		onShow(){
		},
		created() {
			dic('full_job_lebal').then(res=> {
				this.tag = res.data
			})
			
		},
		onReachBottom() {
			console.log('fdsfsdf')
		},
		methods: {
		  // getList(){
		  // 	condition({...this.form,pageNo: this.pageNo,pageSize: this.pageSize}).then((res)=> {
		  // 		this.arrList =  res.data
		  // 	})
		  // },
		  	// 上拉加载
		  onReachBottom: function() {
			//  let _self = this;
			// if (_self.loadingType != 0) {//loadingType!=0;直接返回
			// 	return false;
			// }
			// _self.loadingType = 1;
		 //  	uni.showNavigationBarLoading();//显示加载动画
		 //  	condition({...this.form,pageNo: this.pageNo,pageSize: this.pageSize}).then((res)=> {
		 //  		if (res.data.length === 0) {//没有数据
		 //  			_self.loadingType = 2;
		 //  			uni.hideNavigationBarLoading();//关闭加载动画
		 //  			return false;
		 //  		}
		 //  		this.pageNo++;//每触底一次 page +1
		 //  		for(var i=_self.arrList.length;i<res.data.length;i++){
		 //  			_self.arrList = _self.arrList.concat(res.data[i]);//将数据拼接在一起
		 //  		}
		 //  		_self.loadingType = 0;//将loadingType归0重置
		 //  		uni.hideNavigationBarLoading();//关闭加载动画
		 //  	})				
		  }

		}
	}
</script>

<style lang="scss">
	.buttonSave button {
		width: 100%;
	}
	.content {
		margin: 12px auto;
		border-radius:10px;
		padding-top:10px;
		background-color: white;
		// height: 300px;
		.content-item {
			display: flex;
			margin: 0 10px;
			border-bottom: 1px solid #ECECEC;
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
				// 
				
				// padding: 10px;
				.content-box-com {
					color: #333333;
					font-size: 36rpx;
					font-family: PingFangSC-Semibold;
				}
				.content-box-date {
					// margin-top: 5px;
					color: #666666;
					font-size: 24rpx;
					font-family: PingFangSC-Regular;
				}
			}
		}
	}
	.container {
		// width: 100%;
		height: 100%;
		padding: 10px!important;
		background-color: #F5F5F5;
		font-size: 14px;
		line-height: 24px;

		.index-scroll {
			height: 100%;
		}

		.nav {
			width: 100%;
			height: 20px;
			background: black;
		}
	}
	.index-content{
		width: 100%;
		background: #f8f8f8;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}
	  
	  .loading-text{
	  		height: 80upx;
	  		line-height: 80upx;
	  		font-size: 30upx;
	  		display: flex;
	  		flex-direction: row;
	  		justify-content: space-around;
	  	}
	  .choose {
	    border: 1px solid #F15A24;
	    color: #F15A24;
	  }
	  .index-content-list {
	  	.index-content-list-title {
	  		display: flex;
	  		// justify-content: space-between;
	  		font-size: 20px;
	  		font-weight: bold;
	  		border-bottom: 1px solid #f6f6f6;
	  		padding: 20px 20px;
	  		background: #FFFFFF;
	  		align-items: center;
	  		.icon-img {
	  			float: left;
	  			width: 4px;
	  			height: 15px;
	  			background: #F15A24;
	  			border-radius: 2px;
	  			margin-right:20px;
	  		}
	  		.search {
	  			flex: 1;
	  			text-align: right;
	  			display: flex;
	  			justify-content: flex-end;
	  			.city {
	  				// flex: 0 0 50px;
	  				padding:2px 8px;
	  				background: #F5F5F5;
	  				border-radius: 3px;
	  				margin-right:20px;
	  				text-align: center;
	  				position: relative;
	  				.cityChose {
	  					opacity: 0;
	  					z-index: 10;
	  					position: absolute;
	  					top: 0px;
	  					left: 0px;
	  					right: 0px;
	  					bottom: 0px
	  				}
	  			}
	  			.chose{
	  				flex: 0 0 50px;
	  				background: #F5F5F5;
	  				border-radius: 3px;
	  				text-align: center;
	  			}
	  		}
	  	}
	  
	  	.index-content-list-list {
	  		.content-list {
	  			padding: 15px 14px 0 14px;
	  			margin-bottom: 6px;
	  			background: #FFFFFF;
				border-radius:10px;
	  
	  			// 1
	  			.list-office {
	  				display: flex;
	  				justify-content: space-between;
	  				align-items: center;
	  				
	  				
	  
	  				.office {
						font-family: PingFangSC-Medium;
	  					font-size: 36rpx;
						color: #333333;
	  				}
	  
	  				.wage {
	  					color: #F15A24;
						font-family: PingFangSC-Semibold;
						font-size: 30rpx;
	  				}
	  			}
	  
	  			// 2
	  			.list-company {
	  				display: flex;
	  				font-size: 12px;
	  				color: #333333;
	  				margin-top: 9px;
	  				align-items: center;
	  
	  				.companyName,
	  				.companyPeopNum,
	  				.financing {
	  					// font-weight: bold;
	  					display: flex;
	  					align-items: center;
	  					margin-right: 12px;
	  				}
	  			}
	  
	  			// 3
	  		.list-tag {
	  			display: flex;
	  			margin-top: 11px;
	  			  
	  			.tag {
	  				margin-right: 5.5px;
	  				padding: 0px 6px;
	  				font-family: PingFangSC-Regular;
	  				font-size: 12px;
	  				border-radius: 10rpx;
	  				color: #333333;
	  				background: #f5f5f5;
	  			}
	  		}
	  			  
	  		// 4
	  		.list-hr {
	  			display: flex;
	  			justify-content: space-between;
	  			align-items: center;
	  			font-size: 12px;
	  			text-align: center;
	  			padding: 14px 0 6px 0;
	  			box-sizing: border-box;
	  			  
	  			.left {
	  				display: flex;
	  				align-items: center;
	  				.hrImage {
	  					width: 24px;
	  					height: 24px;
	  					font-weight: bold;
	  					font-size: 12px;
	  					vertical-align: top;
	  					margin-right: 8px;
	  			  
	  				}
	  			  
	  				.hrName {
	  					margin-right: 8px;
	  					color: #333333;
	  					font-size: 24rpx;
	  					font-family: PingFangSC-Regular;
	  				}
	  				.dot {
	  					transform:translateY(-4px);
	  					margin-right: 8px;
	  				}
	  			  
	  				.hrOffice {
	  					color: #333333;
	  					font-size: 24rpx;
	  					font-family: PingFangSC-Regular;
	  				}
	  			  
	  			}
	  			  
	  			.right {
	  				display: flex;
	  				align-items: center;
	  				height: 24px;
	  			  
	  				.companyAddress {
	  					color: #777777;
	  					font-family: PingFangSC-Regular;
	  					font-size: 20rpx;
	  				}
	  			}
	  		}
	  
	  		}
	  	}
	  
	  }
	  .loading-text{
	  		height: 80upx;
	  		line-height: 80upx;
	  		font-size: 30upx;
	  		display: flex;
	  		flex-direction: row;
	  		justify-content: space-around;
	  	}
	  .choseItem {
	  	// padding:2px 20px;
	  	width: calc(35% - 30px);
	  	display: inline-block;
	  	background: #F5F5F5;
	  	border-radius: 3px;
	  	margin:0 10px 20px 0;
	  	text-align: center;
	  	
	  }
	  .choose {
	    border: 1px solid #F15A24;
	    color: #F15A24;
	  }
</style>
