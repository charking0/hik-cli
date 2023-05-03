<template>
	<view class="class-text">
		<view class="class-title">
			<view class="title">
				第一讲 人人可复制的电商玩法七天速
			</view>
			<view class="text">
				<text>861</text>人已学习
			</view>
		</view>
		<view class="class-time">
			<text>2021-05</text><text>Cheney</text>
		</view>
		<view class="class-content">
			1、确认：系统中订位成功并支付成功之后，网站将按照您选择预订的航班和价格出票；万一订位不成功，机场售票处将尽快电话联系您，故请务必保持您所填的联系电话畅通；您也可以在成功出票后致电0519-88883721查询您的票。（服务时间：每天07：00-20：00），或者拨打各航空公司客服电话查询您的客票。
			2、先预订，不支付出票：如果您希望只预订机位不支付票款出票，航空公司有权取消任何未出票的预订，我们也无法为您保留预定的折扣。因此请务必确认行程之后再订座，并立即支付出票
			3、联系方式：如所留通讯方式无人接听、忙音等通讯问题而无法联系到预订人，从而导致不能及时确认、出票以及通知航班变更信息等问题，本网站不承担责任。
			1、确认：系统中订位成功并支付成功之后，网站将按照您选择预订的航班和价格出票；万一订位不成功，机场售票处将尽快电话联系您，故请务必保持您所填的联系电话畅通；您也可以在成功出票后致电0519-88883721查询您的票。（服务时间：每天07：00-20：00），或者拨打各航空公司客服电话查询您的客票。
			2、先预订，不支付出票：如果您希望只预订机位不支付票款出票，航空公司有权取消任何未出票的预订，我们也无法为您保留预定的折扣。因此请务必确认行程之后再订座，并立即支付出票
			3、联系方式：如所留通讯方式无人接听、忙音等通讯问题而无法联系到预订人，从而导致不能及时确认、出票以及通知航班变更信息等问题，本网站不承担责任。
		</view>
	</view>
</template>

<script>
	export default {
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

	.class-text {
		padding: 34rpx 26rpx;

		.class-title {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.title {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 600;
				color: #333333;
				flex: 1;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.text {
				max-width: 160rpx;
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #666666;

				text {
					color: #F45C24;
					margin-right: 10rpx;
				}
			}
		}

		.class-time {
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #999999;
			margin-top: 16rpx;

			text {
				margin-right: 20rpx;
			}
		}

		.class-content {
			margin-top: 30rpx;
			min-height: 1000rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #666666;
			line-height: 48rpx;
			padding: 38rpx 34rpx;
		}
	}
</style>
