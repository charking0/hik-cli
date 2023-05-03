<template>
	<view class="fm-container">
		<!--搜索部分-->
		<view class="fm-header">
			<view class="fm-logo"></view>
			<view class="fm-search">
				<view class="input">
					搜索老师、机构、课程
				</view>
				<view class="btn">
					<icon type="search" size="18" color="#333333" />
				</view>
			</view>
		</view>
		<!--切换部分-->
		<view class="fm-tab">
			<tab-view :tab-list="tabList" :currentTab.sync="currentTab" :textFlex="true" @change="tabChange"></tab-view>
		</view>
		<!--轮播图部分-->
		<view class="fm-swipter">
			<uni-swiper-dot :current="current" :len="5">
				<swiper class="banner" :current="current" :autoplay="true" :circular="true" :interval="3000"
					:duration="500" @change="getCurrent">
					<swiper-item v-for="(item,index) in 5" :key="index">
						<image mode="aspectFill" class="banner-item"
							:src="'https://api.btstu.cn/sjbz/api.php?lx=meizi'+index"></image>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<!--推荐视频-->
		<view class="fm-recomm">
			<view class="recomm-title">
				<view class="icon"></view>
				<view class="title">
					推荐视频
				</view>
			</view>
			<view class="recomm-content">
				<video-card class="recomm-card" v-for="(item,index) in dataList" :key="index" :item="item"
					@click="handVideoCard(item.id)"></video-card>
				<view class="bottom" v-if="finished">
					已加载全部数据
				</view>
			</view>
		</view>

		<uni-popup ref="popup" background-color="#fff">
			<view class="agreement">
				<view class="header">
					服务协议和隐私政策
				</view>
				<view class="">
					请同意用户协议和个人信息保护政策, 以便我们向你提供更优质的服务
				</view>
				<view style="width: 90%;margin:10px 0 0 5%">
					<button class='bottom' type='primary' open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"
						style="background-color:#F45C24;border-radius: 10px;">
						授权登录
					</button>
				</view>
			</view>

		</uni-popup>

	</view>
</template>

<script>
	import uniSwiperDot from '../../components/uni-swiper-dot/uni-swiper-dot.vue';
	import tabView from '../../components/tab-view/tab-view.vue';
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	import WXBizDataCrypt from '@/static/WXBizDataCrypt.js'
	import {
		oauth
	} from '@/request/user.js';
	export default {
		components: {
			uniSwiperDot,
			tabView
		},
		data() {
			return {
				currentTab: 0,
				tabList: [{
					name: '热门课程'
				}, {
					name: '推荐课程'
				}, {
					name: '在线直播'
				}],
				current: 0, //当前轮播图索引
				query: { //分页查询条件
					current: 1,
					size: 10,
				},
				dataList: [], //推荐列表
				finished: false, //是否到底部
			}
		},
		onLoad() {
			console.log('phone', uni.getStorageSync('phoneNumber'))
			if (!uni.getStorageSync('phoneNumber')) {
				this.$refs.popup.open('bottom')
			} else {
				let params = {
					phone: uni.getStorageSync('phoneNumber'),
					openId: uni.getStorageSync('openId')
				}
				oauth(params).then((res) => {
					uni.setStorageSync('Token', res.token_type + " " + res.access_token)
					this.$refs.popup.close()
				})
			}
			this.getCourseData();
		},
		//下拉刷新
		onPullDownRefresh() {
			this.init();
		},
		//上拉加载
		onReachBottom() {
			if (this.finished) {
				return;
			}
			this.query.current++;
			this.getCourseData();
		},
		methods: {
			getPhoneNumber(e) {
				console.log('获取电话号码cc 参数', e)
				if (e.detail.errMsg == "getPhoneNumber:fail user deny") { //用户决绝授权  
					//拒绝授权后弹出一些提示
					this.$refs.popup.close()
				} else { //允许授权  
					this.$refs.popup.close()
					let pc = new WXBizDataCrypt('wxf96511225bb03aae', uni.getStorageSync('sessionKey'))
					let data = pc.decryptData(e.detail.encryptedData, e.detail.iv)
					uni.setStorageSync('phoneNumber', data.phoneNumber)
					let params = {
						phone: data.phoneNumber,
						openId: uni.getStorageSync('openId')
					}
					oauth(params).then((res) => {
						uni.setStorageSync('Token', res.token_type + " " + res.access_token)
						this.$refs.popup.close()
					})
				}
			},
			init() {
				this.query.current = 1;
				this.finished = false;
				this.dataList = [];
				this.total = 0;
				this.getCourseData();
			},
			getCourseData() {
				this.$http.getIndexCourse(this.query).then(res => {
					let {
						code,
						msg,
						data
					} = res;
					if (code === 0) {
						if (this.query.current > 1) {
							this.dataList = this.dataList.concat(data.records);
						} else {
							this.dataList = data.records;
						}
						if (this.dataList.length === data.total) {
							this.finished = true;
						}
					} else {
						this.$uni.toast(msg)
					}
					uni.stopPullDownRefresh();
				})
			},
			tabChange(index) {
				this.currentTab = index;
			},
			getCurrent(e) {
				let {
					current
				} = e.detail;
				this.current = current;
			},
			handVideoCard(id) {
				this.$uni.navigateTo('/pages/index/class?id=' + id);
			}
		}
	}
</script>

<style lang="less">
	page {
		background: #F5F5F5;
	}

	.agreement {
		padding: 10px;

		.header {
			line-height: 50px;
			height: 50px;
			font-size: 20px;
			font-weight: 500;
		}
	}

	.fm-container {
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

		.fm-tab {
			height: 90rpx;
			padding: 0rpx 48rpx;
			background: #FFFFFF;
		}

		.fm-swipter {
			padding: 22rpx;

			.banner {
				height: 320rpx;
				border-radius: 16rpx;
				// box-shadow: 0rpx 6rpx 14rpx 0rpx rgba(25, 25, 26, 0.1);

				.banner-item {
					width: 100%;
					height: 320rpx;
					border-radius: 10rpx;
				}
			}

		}

		.fm-recomm {
			padding: 20rpx;

			.recomm-title {
				display: flex;
				align-items: center;
				padding: 20rpx 0rpx;

				.icon {
					width: 40rpx;
					height: 40rpx;
					background: url("/static/page/index/tuijianshipin.png") no-repeat;
					background-size: 100% 100%;
				}

				.title {
					margin-left: 15rpx;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 600;
					color: #323332;
				}
			}

			.recomm-content {
				// width: 100%;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.recomm-card {
					width: 48%;
					margin-bottom: 20rpx;
				}

				.bottom {
					width: 100%;
					height: 100rpx;
					line-height: 100rpx;
					text-align: center;
					color: #999999;
					font-size: 24rpx;
				}

			}
		}
	}
</style>
