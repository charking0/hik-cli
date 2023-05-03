<template>
	<view class="container">
		<scroll-view class="index-scroll" scroll-y="true">
			<view class="index-content">
				<!--搜索部分-->
				<view class="fm-header">
					<view class="fm-logo"></view>
					<view class="fm-search">
						<view class="input">
							人人可复制的电商玩法
						</view>
						<view class="btn">
							<icon type="search" size="18" color="#333333" />
						</view>
					</view>
				</view>
				<!-- <view class="headerSearch">
					<view class="header-box">
						<image src="/static/imgs/header.png" mode="" class="header-img"></image>
					</view>
					<view class="search">
					  <van-search
					    :value="search"
					    shape="round"
					    background="#FFFFFF"
					    placeholder="人人可复制的电商玩法"
					    right-icon=""
					  />
					</view>
				</view> -->
				<view class="positonBox">
					<view class="position-hot">
						<view class="text">
							推荐岗位
						</view>
					</view>
					<view class="position-new">
						<view class="text">
						  最新岗位
						</view>
					</view>
				</view>
			</view>
			<view class="index-content-list">
				<view class="index-content-list-title">
					<view class="icon-img">
						<!-- <image src="/static/imgs/icon.png" mode=""></image> -->
					</view>
					<view><text>猜你喜欢</text></view>
					<view class="search">
						<view class="city">
							<span>{{city}}</span>
							<biaofunFull :defaultValue="defaultValue" @change="onChangeRegion" class="cityChose"></biaofunFull>
							<image src="/static/imgs/anco.png" mode="" class="anco"></image>
						</view>
						<view class="chose" @click="open">
							筛选
							<image src="/static/imgs/anco.png" mode="" class="anco"></image>
						</view>
					</view>
				</view>
			    <van-popup
			      :show="choseShow"
			      position="bottom"
				  :close-on-click-overlay="false"
			      custom-class="bottom"
				  closeable
			      @close="toggleBottomPopup"
			    >
			      <view style="width: 100%;height: 500px;position: relative;">
			         <view  class="choseItemTitle">
			         	学历要求
			         </view>
					 <view style="margin: 0 20px;">
					 	<view class="choseItem" v-for="(item,index) in degreeArr" :class="{'choose': degreeActive === index}" @click="degreeActiveF(inedx)">
					 		{{item.label}}
					 	</view>
					 </view>
					 <view  class="choseItemTitle">
					 	薪资待遇
					 </view>
					 <view style="margin: 0 20px;">
					 	<view class="choseItem" v-for="(item,index) in salaryArr" :class="{'choose': salaryActive === index}" @click="salaryActiveF(index)">
					 		{{item}}
					 	</view>
					 </view>
					 <view  class="choseItemTitle">
					 	经验要求
					 </view>
					 <view style="margin: 0 20px;">
					 	<view class="choseItem" v-for="(item,index) in experienceArr" :class="{'choose': experienceActive === index}" @click="experienceActiveF(index)">
					 		{{item.label}}
					 	</view>
					 </view>
					 <view style="padding: 0 20px; display: flex; margin: 20px 0;width: 100%;" class="buttonSave">
					 	<van-button round   color="#F45C24" style="width:40%;display: flex;margin-right: 20px;" @click="save" >保存</van-button>
					 	<van-button round   color="#F45C24" style="width:40%;display: flex;" @click="this.choseShow = false">取消</van-button>
					 </view>
					 
			      </view>
			    </van-popup>
				<view class="index-content-list-list">
					<view class="content-list" v-for="val in arrList" :key="val.rercuitListEntity.recruitId">
						<navigator :url="'/pagesB/office/office?id=' + val.rercuitListEntity.recruitId+ '&cityCode='+ val.rercuitListEntity.cityCode +'&abCode='+val.rercuitListEntity.abCode +'&isCollection='+val.isCollection" animation-type="pop-in" hover-class="none">
							<view class="list-office">
								<view class="office">{{val.rercuitListEntity.name}}</view>
								<view class="wage">{{`${val.rercuitListEntity.salaryBegin}k - ${val.rercuitListEntity.salaryEnd}k`}}</view>
								<!-- <view class="wage">{{`${val.wage[0]} - ${val.wage[1]}`}}</view> -->
							</view>
							<view class="list-company">
								<view class="companyName">{{val.rercuitListEntity.companyName }}</view>
								<!-- <view>
									<text class="companyPeopNum" v-if="!val.companyPeopNum.length">{{`${val.companyPeopNum}人以上`}}</text>
									<text class="companyPeopNum" v-else>{{`${val.companyPeopNum[0]} - ${val.companyPeopNum[1]}人`}}</text>
								</view> -->
								<view>
									<!-- <text class="financing" v-if="val.financing === true">以融资</text>
									<text class="financing" v-else>不需要融资</text> -->
								</view>
							</view>
							<view class="list-tag">
								<view class="tag" v-for="(tag,index) in tag" :key="index">{{tag.label}}</view>
							</view>
							<view class="list-hr">
								<view class="left">
									<!-- <image class="hrImage" :src="val.hrImage"></image> -->
									<view class="hrName">{{val.company.legalPersonName}}</view>
									<view class="dot" v-if="val.company.organizationCode">.</view> 
									<view class="hrOffice">{{val.company.organizationCode}}</view>
								</view>
								<view class="right">
									<view class="companyAddress">{{val.rercuitListEntity.province }} {{val.rercuitListEntity.region }}</view>
								</view>
							</view>
						</navigator>
					</view>
				</view>
				<text class="loading-text">
				  {{loadingType === 0 ? 
				  contentText.contentdown : 
				  (loadingType === 1 ? contentText.contentrefresh : contentText.contentnomore)}}
				</text>
			</view>
			<!-- <IndexContentList></IndexContentList> -->
		</scroll-view>
	</view>
</template>

<script>	
	// import IndexContentList from './IndexContentList.vue'
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	import uniIcon from '@/components/uni-ui/uni-icons/uni-icons.vue'
	// import api from '@/request/user.js';
	import {condition, dic, latitude} from '@/request/user.js';
	import recom_company from '@/static/mock/recom_company.js'
	import biaofunFull from './biaofun-full.vue';
	export default {
		components: {
			uniIcon,
			biaofunFull,
			uniPopup
		},
		data() {
			return {
				search: '',
				arrList: [],
				defaultValue:[],
				tag: ['房贷首付','范德萨','发的说说'],
				city:'武汉市',
				choseShow: false,
				degreeArr:['不限','初中及以下','中专/中技','高中','大专','本科','硕士','博士'],
				degreeActive: 0,
				salaryArr:['不限','8k以下','8-12k','12k-16k','16k-20k','20-30k','30k以上'],
				salaryActive:0,
				experienceArr: ['不限','在校生','应届生','1年以内','1-3年','3-5年','5-10年','10年以上'],
				experienceActive: 0,
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				pageNo: 1,
				pageSize: 10,
				form:{
				  adcode: "",
				  ageCondition: "",
				  cityCode: "",
				  companyId: "",
				  degreeCondition: "",
				  experienceCondition: "",
				  orderByCreatTime: "",
				  orderByRecommend: "",
				  salaryBegin: "",
				  salaryEnd: "",
				  type: ""
				}

			}
		},
		options: { styleIsolation: 'shared' },
		onShow(){
			this.getAuthorizeInfo()
		},
		onLoad() {
			this.getAuthorizeInfo()
			dic('full_job_edu').then(res=> {
				this.degreeArr = res.data
			})
			dic('full_job_exp').then(res=> {
				this.experienceArr = res.data
			})
			dic('full_job_lebal').then(res=> {
				this.tag = res.data
			})
			this.form = {
				  adcode: "",
				  ageCondition: "",
				  cityCode: "",
				  companyId: "",
				  degreeCondition: '',
				  experienceCondition: '',
				  orderByCreatTime: "",
				  orderByRecommend: "",
				  salaryBegin: "",
				  salaryEnd: "",
				  type: ""
				}
			this.pageNo = 1
			this.pageSize = 10
			this.getList()
			let _self = this;
		},
		onShow(){
		},
		created() {
			
		},
		onReachBottom() {
			// console.log('fdsfsdf')
		},
		methods: {
		  degreeActiveF(index) {
			this.degreeActive = index
			this.form.degreeCondition = index + 1 
		  },
		  experienceActiveF(index) {
			 this.experienceActive = index
			 this.form.experienceCondition = index + 1
		  },
		  salaryActiveF(index) {
			  this.salaryActive = index
			  switch (index) {
			  	case 0:
				this.form.salaryBegin = ''
				this.form.salaryEnd = ''
			  		break;
			  	case 1:
				this.form.salaryBegin = ''
				this.form.salaryEnd = 8
			  		break;
			  	case 2:
				this.form.salaryBegin = 8
				this.form.salaryEnd = 12
			  		break;
				case 3:
				this.form.salaryBegin = 12
				this.form.salaryEnd = 16
				  break;
				case 4:
				this.form.salaryBegin = 16
				this.form.salaryEnd = 20
					break;
				case 5:
				this.form.salaryBegin = 20
				this.form.salaryEnd = 30
				  break;
				case 6:
				this.form.salaryBegin = 30
				this.form.salaryEnd = ''
				  	break;
			  }
		  },
		  getList(){
		  	condition({...this.form,pageNo: this.pageNo,pageSize: this.pageSize}).then((res)=> {
		  		this.arrList =  res.data
		  	})
		  },
		  save() {
			 this.pageNo = 1
			 condition({...this.form,pageNo: this.pageNo,pageSize: this.pageSize}).then((res)=> {
			 	this.arrList =  res.data
			 })
			  this.choseShow = false
		  },
		  	// 上拉加载
		  onReachBottom: function() {
		      console.log('dibu')
			 let _self = this;
			if (_self.loadingType != 0) {//loadingType!=0;直接返回
				return false;
			}
			_self.loadingType = 1;
		  	uni.showNavigationBarLoading();//显示加载动画
		  	condition({...this.form,pageNo: this.pageNo,pageSize: this.pageSize}).then((res)=> {
		  		if (res.data.length === 0) {//没有数据
		  			_self.loadingType = 2;
		  			uni.hideNavigationBarLoading();//关闭加载动画
		  			return false;
		  		}
		  		this.pageNo++;//每触底一次 page +1
		  		for(var i=_self.arrList.length;i<res.data.length;i++){
		  			_self.arrList = _self.arrList.concat(res.data[i]);//将数据拼接在一起
		  		}
		  		_self.loadingType = 0;//将loadingType归0重置
		  		uni.hideNavigationBarLoading();//关闭加载动画
		  	})				
		  },
		  getAuthorizeInfo(){
		  	const that = this;
		  	uni.authorize({
		  		scope: 'scope.userLocation',
		  		success() { // 允许授权
		  			that.getLocationInfo();
		  		},
		  		fail(){    // 拒绝授权
		  			// that.openConfirm();
					uni.showToast({
						title: '你拒绝了授权，无法获得周边信息',
						duration: 2000
					});
		  			// console.log("你拒绝了授权，无法获得周边信息")
					
		  		}
		  	})
		   },
		  // 获取地理位置
		  getLocationInfo(){  
			  let _this = this
		  	uni.getLocation({
		  		type: 'wgs84',
		  		success (res) {
					latitude({longitude: res.longitude,latitude: res.latitude}).then(res=> {
						_this.defaultValue = [].concat([res.data.province,res.data.city,res.data.district])
						_this.form.adcode = res.data.adcode
						_this.form.cityCode = res.data.citycode
						// _this.getList()
					})
		  		}
		  	});
		  },
		  open() {
		  	 // this.$refs.popup.open('top')
		  	 this.choseShow = true
		  },
		  toggleBottomPopup() {
		  	this.choseShow = false
		  },
		  onChangeRegion(option) {
		  	console.log(option)
		  	this.city = option[1].name
			this.form.cityCode = option[2].cityCode
			this.form.adcode = option[2].adcode
			condition({...this.form,pageNo: this.pageNo,pageSize: this.pageSize}).then((res)=> {
				this.arrList =  res.data
			})
			
		  }

		}
	}
</script>

<style lang="scss">
	.buttonSave button {
		width: 100%;
	}
	.container {
		width: 100%;
		height: 100%;
		padding: 0;
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
	.fm-header {
		background: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 20rpx;
		border-bottom: 2rpx solid #ECECEC;
	
		.fm-logo {
			width: 46rpx;
			height: 50rpx;
			background: url("/static/imgs/header.png") no-repeat;
			background-size: 100% 100%;
		}
	
		.fm-search {
			flex: 1;
			height: 70rpx;
			line-height: 70rpx;
			background: #FFFFFF;
			border: 1px solid #ECECEC;
			border-radius: 18px;
			margin-left: 30rpx;
			padding: 0rpx 26rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
	
			.input {
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #999999;
			}
	
			.btn {
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
	.headerSearch {
		display: flex;
		.header-box {
		  padding: 0 5px 0 15px;
		  background-color: white;
		  display: flex;
		  align-items: center;
		  .header-img {
		  	display: block;
		  	width: 25px;
		  	height: 25px;
		  }
		}
		.search {
		  flex:1;
		  /deep/.van-cell {
		  	flex-direction: row-reverse
		  }
		}
		border-bottom: 1px solid #ECECEC;;
	  }
	  .positonBox {
		background-color: white;
		padding: 10px 14px;
		display: flex;
		height: 58px;
		margin-bottom: 13.5px;
		.text {
		  font-size: 15px;
		  font-family: PingFang SC;
		  font-weight: 600;
		  color: #333333;
		  margin: 10px 0 0 12.5px;
		}
		.position-hot {
		  flex: 1;
		  margin-right:11px;
		  background:url('/static/imgs/hot.png') no-repeat;
		  background-size: 100%;
		}
		.position-new {
		  flex: 1;
		  background:url('/static/imgs/new.png') no-repeat;
		  background-size: 100%;
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
	  .choose {
	    border: 1px solid #F15A24;
	    color: #F15A24;
	  }
	  .index-content-list {
	  	.index-content-list-title {
	  		display: flex;
	  		// justify-content: space-between;
	  		font-size: 20px;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			// height: 100rpx;
	  		border-bottom: 1px solid #f6f6f6;
	  		padding: 36rpx 20rpx;
	  		background: #FFFFFF;
	  		align-items: center;
	  		.icon-img {
	  			float: left;
	  			width: 4px;
	  			height: 15px;
	  			background: #F15A24;
	  			border-radius: 2px;
	  			margin-right:14rpx;
	  		}
			
	  		.search {
	  			flex: 1;
	  			text-align: right;
	  			display: flex;
				font-family: PingFangSC-Regular;
				font-size: 24rpx;
				font-weight: 400;
	  			justify-content: flex-end;
				.anco {
					position: absolute;
					bottom: 10rpx;
					right: 5rpx;
					width: 10rpx;
					height: 10rpx;
					display: block;
				}
				
	  			.city {
	  				// flex: 0 0 50px;
	  				padding:2px 8px;
	  				background: #F5F5F5;
	  				border-radius: 3px;
	  				margin-right:20px;
	  				text-align: center;
	  				position: relative;
					color: #666666;
					
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
					position: relative;
					padding:2px 8px;
	  				flex: 0 0 50px;
					color: #666666;
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
						font-family: PingFangSC-Semibold;
						font-size: 30rpx;
	  					color: #F15A24;
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
		.choseItemTitle {
			font-size: 30rpx;
			font-family: PingFangSC-Semibold;
			color: #323332;
			padding: 10px 20px;
		}
	  .choseItem {
	  	// padding:2px 20px;
	  	width: calc(35% - 20px);
	  	display: inline-block;
	  	background: #F5F5F5;
		font-size: 24rpx;
	  	border-radius: 3px;
	  	margin:0 10px 20px 0;
	  	text-align: center;
	  	
	  }
	  .choose {
	    border: 1px solid #F15A24;
	    color: #F15A24;
	  }
</style>
