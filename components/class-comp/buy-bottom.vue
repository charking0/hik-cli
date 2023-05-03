<template>
	<view class="buy-fixed" :style="{paddingBottom:getbottom+'px'}">
		<view class="rule-info" @click="handChecked">
			<view class="is-checkd" :class="[isChecked?'active':'']"></view>
			订购即表示已阅读 <text>购买须知</text>
		</view>
		<view class="buy-price">
			<view class="price-info">
				<view class="unit">￥</view>
				<view class="price-group">
					<view class="price">9.9</view>
					<view class="preferential">优惠价</view>
					<view class="discount">￥199</view>
				</view>
			</view>
			<view class="buy-btn" @click="handClick">
				立即订购
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			getbottom() {
				let appHeight = uni.getSystemInfoSync().screenHeight,
					safeAreaHeight = uni.getSystemInfoSync().safeArea.bottom;
				return appHeight - safeAreaHeight;
			}
		},
		data() {
			return {
				isChecked: false
			}
		},
		methods: {
			handChecked() {
				this.isChecked = !this.isChecked;
			},
			handClick() {
				if (!this.isChecked) {
					this.$uni.toast('请勾选协议')
					return
				}
				this.$emit('click')
			}
		}
	}
</script>

<style lang="less">
	.buy-fixed {
		height: 180rpx;
		width: 100%;
		background: #FFFFFF;
		position: fixed;
		bottom: 0rpx;
		box-shadow: 0px -2px 5px 1px rgba(0, 0, 0, 0.08);

		.rule-info {
			width: 100%;
			height: 60rpx;
			background: #F5F5F5;
			font-size: 22rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #666666;
			display: flex;
			align-items: center;
			padding: 0rpx 44rpx;

			.is-checkd {
				width: 24rpx;
				height: 24rpx;
				background: url("/static/page/index/checked.png") no-repeat;
				background-size: 100% 100%;
				margin-right: 10rpx;
			}

			.active {
				width: 24rpx;
				height: 24rpx;
				background: url("/static/page/index/checked-active.png") no-repeat;
				background-size: 100% 100%;
			}

			text {

				margin-left: 20rpx;
				color: #F45C24;
				text-decoration: underline;
			}
		}

		.buy-price {
			height: 120rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.price-info {
				margin-left: 60rpx;
				display: flex;

				.unit {
					font-size: 26rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #F45C24;
					margin-top: 22rpx;
				}

				.price-group {
					display: flex;
					position: relative;

					.price {
						font-size: 48rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #F45C24;
					}

					.preferential {
						width: 70rpx;
						height: 34rpx;
						background: #FFFFFF;
						border: 2rpx solid #F45C24;
						border-radius: 18rpx 16rpx 16rpx 0px;
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #F45C24;
						line-height: 34rpx;
						text-align: center;
						position: absolute;
						right: -80rpx;
						top: -12rpx;
					}

					.discount {
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #CCCCCC;
						text-decoration: line-through;
						position: absolute;
						right: -70rpx;
						bottom: 0rpx;
					}
				}
			}

			.buy-btn {
				width: 45%;
				height: 80rpx;
				background: #F45C24;
				border-radius: 40rpx;
				text-align: center;
				line-height: 80rpx;
				font-size: 36rpx;
				font-family: PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				margin-right: 20rpx;
			}
		}
	}
</style>
