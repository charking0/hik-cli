<template>
	<!--头部分 课程卡片-->
	<view class="class-card">
		<view class="card-image">
			<image class="class-image" src="https://api.btstu.cn/sjbz/api.php?lx=meizi" mode="aspectFill">
			</image>
		</view>
		<view class="card-info">
			<view class="card-title">
				人人可复制的电商玩法七天速
			</view>
			<view class="card-label">
				免费试看
			</view>
			<view class="class-info">
				<view class="text-large">
					共45讲 | 已更新10讲
				</view>
				<view class="text-small">
					<text>861</text> 人已学习
				</view>
			</view>
			<view class="class-user-info">
				<view class="user-head">
					<image class="head" src="http://api.btstu.cn/sjtx/api.php?lx=c1"></image>
					<view class="name">
						Cheney 资深讲师
					</view>
				</view>
				<view class="collection" @click="handCollec">
					<!--:class="[isCollc?'active':'']"-->
					<view class="icon"></view>
					<view class="text">
						收藏
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "course-card",
		data() {
			return {
				isCollc: false
			}
		},
		methods: {
			handCollec() {
				//this.isCollc = !this.isCollc;
				this.$uni.toast('已收藏')
			}
		}
	}
</script>

<style lang="less">
	.class-card {
		display: flex;
		padding: 20rpx;
		background: #FFFFFF;
		border-radius: 20rpx;

		.card-image {
			width: 120rpx;
			height: 160rpx;
			border-radius: 10rpx;

			.class-image {
				width: 120rpx;
				height: 160rpx;
				border-radius: 10rpx;
			}
		}

		.card-info {
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			position: relative;
			flex: 1;

			.card-title {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 600;
				color: #333333;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.card-label {
				width: 100rpx;
				height: 30rpx;
				background: #FFEDE7;
				border-radius: 16rpx 0rpx 0rpx 16rpx;
				font-size: 10px;
				font-family: PingFang SC;
				font-weight: 400;
				color: #F45C24;
				line-height: 30rpx;
				position: absolute;
				right: -20rpx;
				top: 10rpx;
				text-align: center;
			}

			.class-info {
				display: flex;
				align-items: center;

				.text-large {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #666666;
				}

				.text-small {
					margin-left: 20rpx;
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #999999;

					text {
						color: #F45C24;
					}
				}
			}

			.class-user-info {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.user-head {
					display: flex;
					align-items: center;

					.head {
						width: 38rpx;
						height: 38rpx;
						border-radius: 50%;
					}

					.name {
						margin-left: 20rpx;
						font-size: 12px;
						font-family: PingFang SC;
						font-weight: 400;
						color: #999999;
					}
				}

				.collection {
					width: 100rpx;
					height: 40rpx;
					background: #F45C24;
					border-radius: 10rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.icon {
						width: 22rpx;
						height: 22rpx;
						background: url("/static/page/index/shoucang-active.png") no-repeat;
						background-size: 100% 100%;
					}

					.active {
						width: 22rpx;
						height: 22rpx;
						background: url("/static/page/index/shoucang.png") no-repeat;
						background-size: 100% 100%;
					}

					.text {
						margin-left: 10rpx;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>
