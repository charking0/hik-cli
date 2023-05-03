<template>
	<view class="class-video">
		<view class="video">
			<video class="video-ctrl"
				src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
				controls></video>
			<view class="video-title">
				<view class="title">
					人人可复制的电商玩法七天速
				</view>
				<view class="save-btn">
					加入学习计划
				</view>
			</view>
		</view>
		<view class="classs-course">
			<view class="course-title">
				课程
			</view>
			<course-directory style="margin-bottom: 0rpx;" ></course-directory>
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
				<video-card class="recomm-card" v-for="(item,index) in 20" :key="index" :item="item" ></video-card>
			</view>
		</view>
	</view>
</template>

<script>
	import courseDirectory from '../../components/class-comp/course-directory.vue';
	export default {
		components: {
			courseDirectory
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	page {
		background: #F5F5F5;
	}

	.class-video {
		.video {
			width: 100%;

			.video-ctrl {
				width: 100%;
			}

			.video-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #FFFFFF;
				padding: 28rpx 20rpx;
				transform: translateY(-8rpx);

				.title {
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 600;
					color: #323332;
					flex: 1;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.save-btn {
					width: 216rpx;
					height: 52rpx;
					background: #F45C24;
					border-radius: 10rpx;
					font-size: 30rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 52rpx;
					text-align: center;
				}
			}
		}

		.classs-course {
			padding: 20rpx;

			.course-title {
				margin-bottom: 25rpx;
				font-size: 30rpx;
				font-family: Adobe Heiti Std;
				font-weight: normal;
				color: #323332;
			}
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
			}
		}
	}
</style>
