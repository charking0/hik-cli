<template>
	<view class="class-content">
		<!--内容标题部分-->
		<view class="content-title">
			<view class="round-bg"></view>
			<view class="title-text">
				讲师介绍
			</view>
		</view>
		<!--讲师卡片部分-->
		<view class="teacher-card">
			<view class="teachear-head">
				<image class="class-image" src="https://api.btstu.cn/sjbz/api.php?lx=meizi" mode="aspectFill">
				</image>
			</view>
			<view class="teachear-info">
				<view class="name">
					Cheney
				</view>
				<view class="title">
					资深讲师
				</view>
			</view>
		</view>
		<!--正文部分-->
		<view class="content-text">
			现担任 eBay 中国研发中心资深技术专家，负责 eBay 内部前端框架的研发。
			作为国内第一批 React 的实践者和布道者，创建了 Rekit 开源项目：专属的 React 开发 IDE，目前在 GitHub 有超过 5000 Star。
			曾任职于 IBM 和 SAP，主导了多个 UI 框架和大型云产品的前端架构和开发，在 IBM 期间参与 Dojo 开源项目，成为代码贡献者，参与创建和设计了基于 Dojo 的 GridX 项目。

		</view>
		<!--内容标题部分-->
		<view class="content-title">
			<view class="round-bg"></view>
			<view class="title-text">
				课程介绍
			</view>
		</view>
		<!--正文部分-->
		<view class="content-text">
			React作为应用最广泛的前端开发库之一，不仅有着极其丰富的用户界面，而且非常容易上手。同时，在其他前端应用发生翻天覆地的变化的时候，它的功能却异常稳定。正因如此，无论你是专职从事前端开发，还是以后端为主但也需要自己做一些
			UI 界面，React 基本上就是你的首选。
			最重要的是，React 在2019年2月发布的 16.8 版本中引入了 Hooks。Hooks 带来的全新机制让人耳目一新，因为它进一步拓展 了React 的开发思路，为前端开发提供了一种更优的选择。
		</view>
	</view>
</template>

<script>
	export default {
		name: "introduction"
	}
</script>

<style lang="less">
	.class-content {
		background: #FFFFFF;
		border-radius: 20rpx;
		padding: 20rpx;

		.content-title {
			position: relative;
			display: flex;

			.round-bg {
				width: 26rpx;
				height: 26rpx;
				background: #F45C24;
				border-radius: 50%;
			}

			.title-text {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 600;
				color: #333333;
				transform: translate(-16rpx, 5rpx);
			}
		}

		.teacher-card {
			margin-top: 26rpx;
			display: flex;
			background: #F7F9FF;
			border-radius: 20rpx;
			padding: 20rpx;

			.teachear-head {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;

				.class-image {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				}
			}

			.teachear-info {
				margin-left: 20rpx;
				display: flex;
				justify-content: space-between;
				flex-direction: column;

				.name {
					font-size: 36rpx;
					font-family: PingFang SC;
					font-weight: 600;
					color: #333333;
				}

				.title {
					font-size: 20rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #333333;
				}
			}
		}

		.content-text {
			margin: 20rpx 0rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #333333;
			line-height: 40rpx;
		}
	}
</style>
