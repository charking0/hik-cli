<template>
	<view class="course-directory">
		<view class="course-list-item" v-for="(item,index) in 10" :key="index" @click="handClick(item)">
			<view class="img" v-if="index==1||index==4||index==8"></view>
			<view class="video" v-else></view>
			<view class="title">
				0{{index+1}} | 用 Hooks 解决实际问题的思考方式
			</view>
			<view class="labels">
				<view class="free" v-if="index==1||index==4||index==8">
					免费
				</view>
				<view class="time" v-else>
					107分钟
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			handClick(index) {
				if (index == 1 || index == 4 || index == 8) {
					//this.$uni.toast("暂未购买课程，购买后可查看")
					this.$uni.navigateTo('/pages/index/class-text')
				} else {
					//this.$uni.toast("即将播放视频")
					this.$uni.navigateTo('/pages/index/class-video')
				}
			}
		}
	}
</script>

<style lang="less">
	.course-directory {
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 0rpx 20rpx;

		.course-list-item {
			padding: 30rpx 0rpx;
			display: flex;
			align-items: center;
			border-bottom: 2rpx solid #ECECEC;

			.img {
				width: 42rpx;
				height: 50rpx;
				background: url("/static/page/index/wenzhang.png") no-repeat;
				background-size: 100% 100%;
			}

			.video {
				width: 40rpx;
				height: 40rpx;
				background: url("/static/page/index/video.png") no-repeat;
				background-size: 100% 100%;
			}

			.title {
				margin-left: 14rpx;
				flex: 1;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #333333;
			}

			.labels {
				width: 100rpx;

				.free {
					width: 70rpx;
					height: 30rpx;
					background: #FFF0EA;
					border-radius: 16rpx;
					line-height: 30rpx;
					text-align: center;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #F45C24;
				}

				.time {
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 500;
					color: #999999;
				}
			}
		}

		.course-list-item:last-child {
			border-bottom: 0rpx;
		}
	}
</style>
