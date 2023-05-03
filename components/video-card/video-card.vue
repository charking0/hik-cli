<template>
	<view class="video-card" @click="handClick">
		<view class="img-view">
			<image class="image" :src="item.cover+item.id"></image>
		</view>
		<view class="title">
			{{item.title}}
		</view>
		<view class="infos">
			<view class="header">
				<image class="head" :src="item.teacherHeadImg+item.id"></image>
			</view>
			<view class="text">
				<view class="name">
					{{item.teacherName}}
				</view>
				<view class="labels">
					{{item.teacherLevel}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "video-card",
		props: {
			item: Object
		},
		methods: {
			handClick() {
				this.$emit("click")
			}
		}
	}
</script>

<style lang="less">
	.video-card {
		background: #FFFFFF;
		border-radius: 10rpx 10rpx 10rpx 10rpx;

		.img-view {
			background: #C0C0C0;
			height: 220rpx;
			border-radius: 10rpx 10rpx 0rpx 0rpx;

			.image {
				width: 100%;
				height: 220rpx;
				border-radius: 10rpx 10rpx 0rpx 0rpx;
			}
		}

		.title {
			padding: 18rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}

		.infos {
			display: flex;
			align-items: center;
			padding: 0rpx 18rpx 18rpx;

			.header {
				width: 38rpx;
				height: 38rpx;
				border-radius: 50%;

				.head {
					width: 38rpx;
					height: 38rpx;
					border-radius: 50%;
				}
			}

			.text {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-left: 20rpx;

				.name,
				.labels {
					font-size: 12px;
					font-family: PingFang SC;
					font-weight: 400;
					color: #999999;
				}
			}
		}
	}
</style>
