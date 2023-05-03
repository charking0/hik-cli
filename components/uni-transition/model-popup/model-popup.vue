<template>
	<view>
		<uni-transition :mode-class="['fade']" :styles="maskClass" :show="show">
			<view class="model-popup">
				<view class="model-title">
					提示
				</view>
				<view class="model-content">
					订单中还有【{{content}}】未添加
					是否继续完善？
				</view>
				<view class="model-btns">
					<button class="btn-left" hover-class="btn-hover" @click="onClose">
						<text>继续完善</text>
					</button>
					<button class="btn-right" hover-class="btn-hover" @click="onSubmit">
						<text>确认下单</text>
					</button>
				</view>
				<view class="model-close" @click="onClose"></view>
			</view>
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
	.model-popup {
		width: 90%;
		position: absolute;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-height: 400rpx;
		background: #FFFFFF;
		border-radius: 8rpx;

		.model-title {
			text-align: center;
			margin: 32rpx 30rpx 0rpx;
			padding-bottom: 36rpx;
			font-size: 36rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #1A1A1A;
			border-bottom: 1rpx solid #E6E6E6;
		}

		.model-content {
			margin: 72rpx 82rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #1A1A1A;
			text-align: center;
			max-height: 400rpx;
			overflow-y: auto;
		}

		.model-btns {
			border-top: 1rpx solid #E6E6E6;
			margin: 0rpx 30rpx;
			display: flex;
			justify-content: space-between;
			padding: 40rpx 0rpx;

			.btn-left {
				width: 48%;
				height: 80rpx;
				line-height: 80rpx;
				background: #FAFAFA;
				color: #595959;
				font-size: 28rpx;
				border-radius: 8rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				border: 2rpx solid #E6E6E6;
			}

			.btn-left::after {
				border: none;
			}

			.btn-right {
				width: 48%;
				height: 80rpx;
				line-height: 80rpx;
				background: #A68B3A;
				color: #FFFFFF;
				font-size: 28rpx;
				border-radius: 8rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				border: 2rpx solid #A68B3A;
			}

			.btn-right::after {
				border: none; //黑色边框去掉了
			}

			.btn-hover {
				opacity: 0.6;
			}
		}

		.model-close {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 60%);
			width: 64rpx;
			height: 64rpx;
			background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACKklEQVR4Xu2a601EIRCFDw1oNVrCNqP+MNZhTDQ2YwlajTYwhuSSkM19MM/dAPv3ssOcj8MA95Iw+C8Nrh8TwHTA4ATmFBjcALMIzikwp8DgBOYUsDAAET0A+EkpfVvEO4pBRPcA7lJKn0dtj56rHUBEzwBeAfwBOHlDWMR/AbgB8JJSejsSufdcBaASX+L8ekKoxN8uokgLQQxgRXwB7QJhRXzpTwVBBGBHvAuEHfFqCGwAS8H7AA53kSZOaBBfQ3jiFkYJgFyBcxEq83CvxqggMMTnHER9sQHkniISi+gjaxEB8IYQJV4FwAtCpHg1AGsI0eJNAFhBuIR4MwBaCJcSbwpACmFZQ0OW1bX1WrwKbC3+gtHModz3FFv5mgMQOKHlMCfa5LQEdgFgDMFNvHkNOCfOnA5rA+Yq3h2A0gnu4kMACCGEiJ8ANIehlgorHP0SOsQFbquAUnwYBDcABitACAQXAIbi3SGYA2CKz/O8n62wQPypm8OQRHz5iqT5b+tq5HoYshBgEUMCQ10DLBO3jNUKQwXAI2GPmHswxAA8E/WMfQ5DBCAiwYg+RIehqMQEW2nR2YHtACJ6BPDecJASJaR4qZI/k/t/HF1GptwK2QJoIr7AaHCd+I4A2wFVUlsQTMU3QBCLF9WA2qJDX5FZccJ4l6QqCONek2vdcl5rO3ERvFZB3LwmAC6x3tpPB/Q2olw90wFcYr21nw7obUS5eqYDuMR6a/8PjT2KUCzmOskAAAAASUVORK5CYII=") no-repeat;
			background-size: 100% 100%;
		}
	}
</style>
