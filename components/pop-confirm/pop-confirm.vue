<template>
	<view>
		<uni-transition :mode-class="['fade']" :styles="maskClass" :show="show">
			<view class="pop-confirm">
				<view class="header">
					<view class="title">
						订购须知
					</view>
					<view class="back" @click="onClose" >
						返回
					</view>
				</view>
				<view class="content">
					1、确认：系统中订位成功并支付成功之后，网站将按照您选择预订的航班和价格出票；万一订位不成功，机场售票处将尽快电话联系您，故请务必保持您所填的联系电话畅通；您也可以在成功出票后致电0519-88883721查询您的票。（服务时间：每天07：00-20：00），或者拨打各航空公司客服电话查询您的客票。
					2、先预订，不支付出票：如果您希望只预订机位不支付票款出票，航空公司有权取消任何未出票的预订，我们也无法为您保留预定的折扣。因此请务必确认行程之后再订座，并立即支付出票
					3、联系方式：如所留通讯方式无人接听、忙音等通讯问题而无法联系到预订人，从而导致不能及时确认、出票以及通知航班变更信息等问题，本网站不承担责任。
					4、确认：系统中订位成功并支付成功之后，网站将按照您选择预订的航班和价格出票；万一订位不成功，机场售票处将尽快电话联系您，故请务必保持您所填的联系电话畅通；您也可以在成功出票后致电0519-88883721查询您的票。（服务时间：每天07：00-20：00），或者拨打各航空公司客服电话查询您的客票。
				</view>
			</view>
			<view class="model-submit" @click="onSubmit">立即订购</view>
		</uni-transition>
	</view>
</template>

<script>
	export default {
		props: {
			show: { //是否展示
				type: Boolean,
				default: false
			},
			content: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				maskClass: { //模态层样式
					'position': 'fixed',
					'bottom': 0,
					'top': 0,
					'left': 0,
					'right': 0,
					'background-color': 'rgba(0, 0, 0, 0.4)',
					'z-index': '100'
				},
			}
		},
		methods: {
			onClose() {
				this.$emit('close')
			},
			onSubmit() {
				this.$emit('submit')
			}
		}
	}
</script>

<style lang="less" scoped>
	.pop-confirm {
		width: 90%;
		height: 60vh;
		position: absolute;
		top: 37%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #F45C24;
		border-radius: 40rpx;

		.header {
			height: 100rpx;
			padding: 0rpx 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				font-size: 30rpx;
				font-family: PingFang SC;
				font-weight: 600;
				color: #FFFFFF;
			}

			.back {
				font-size: 24rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
			}
		}

		.content {
			height: calc(60vh - 200rpx);
			background: #FFFFFF;
			border-radius: 40rpx;
			padding: 50rpx 24rpx;
			overflow-y: auto;
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #333333;
			line-height: 40rpx;
		}
	}


	.model-submit {
		width: 90%;
		height: 100rpx;
		position: absolute;
		top: 73%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #F45C24;
		border-radius: 50rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}
</style>
