<template>
	<view class="office-title">
		<view class="office-title-top">
			<view class="office">{{recomData.rercuitListEntity.name}}</view>
			<view class="wage">{{`${recomData.rercuitListEntity.salaryBegin}k - ${recomData.rercuitListEntity.salaryEnd}k`}}</view>
			<!-- <view class="wage" v-else>{{`${recomData.wage[0]}-${recomData.wage[1]}`}}</view> -->
		</view>
		<view class="office-title-bottom">
			<view class="year">
				<!-- <uniIcon class='i' type="map" size='14' color='#000'></uniIcon> -->
				<!-- <text v-if="recomData.year">{{recomData.year}}</text> -->
				{{experienceArr[Number(recomData.rercuitListEntity.experienceCondition)-1].label}}
			</view>
			<view class="line"> </view>
			<view class="degree">
				<!-- <uniIcon class='i' type="person" size='14' color='#000'></uniIcon> -->
				{{degreeArr[Number(recomData.rercuitListEntity.degreeCondition)-1].label}}
			</view>
		</view>
		
			<view class="office-title-bottom">
				<navigator :url="'/pagesB/office/map/map?'+'latitude='+recomData.rercuitListEntity.latitude +'&longitude='+ recomData.rercuitListEntity.longitude" animation-type="pop-in" hover-class="none">
				<view class="companyAddress">
					<!-- <uniIcon class='i' type="location" size='12' color='#000'></uniIcon> -->
					<image src="/pagesB/static/imgs/position.png" mode="" style="width: 18rpx;height: 22rpx;display: inline-block;margin-right: 10rpx;"></image>
					<text>{{recomData.rercuitListEntity.province}} {{recomData.rercuitListEntity.region}}</text>
				</view>
				</navigator>
			</view>
	 
	</view>

</template>

<script>
	import uniIcon from '@/components/uni-ui/uni-icons/uni-icons.vue'
	import {details, dic} from '@/api/user.js';
	

	export default {
		components: {
			uniIcon
		},
		
		props:{
			recomData:Object
		},
		data() {
			return {
				experienceArr: [],
				degreeArr:[]
				
			}
		},
		created() {
			dic('full_job_edu').then(res=> {
				this.degreeArr = res.data
			})
			dic('full_job_exp').then(res=> {
				this.experienceArr = res.data
			})
		}
		
	}
</script>

<style lang="scss">
	.office-title {
		// padding: 50px 0px 20px 0px;
		// margin: 0 20px;
		padding: 17px 11px 14px 11px;
		margin: 10px 10px 0 10px;
		background: white;
		border-bottom: 1px solid #f6f6f6;
		border-top-left-radius:10px;
		border-top-right-radius:10px;

		.office-title-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background: white;
			margin-bottom: 10px;

			.office {
				font-family: PingFangSC-Semibold;
				color: #323332;
				background: white;
				padding: 0px;
				font-size: 42rpx;
			}

			.wage {
				display: flex;
				font-family: PingFangSC-Semibold;
				align-items: center;
				font-size: 30rpx;
				color: #F15A24;
				line-height: 24px;
			}
		}

		.office-title-bottom {
			display: flex;
			align-items: center;
			color: #666666;
			font-family: PingFangSC-Regular;
			font-size:24rpx;
			margin-top:10px;
			// font-weight: bold;
            .line {
				flex: 0 0 1px;
				width: 1px;
				height: 12px;
				background-color: #666666;
				display: inline-block;
				margin: 0 20px 0 20px;
			}
			.companyAddress {
				font-size: 12px;
			}
			.year {
				// margin-right: 18px;
				color: #666666;
				font-family: PingFangSC-Regular;
				font-size:24rpx;
				span {
				  display: inline-block;
				  border-right: 1px solid #666666;
				}
				
			}
			.degree {
				margin-right: 18px;
				color: #666666;
				font-family: PingFangSC-Regular;
				font-size:24rpx;
				.i {
					margin-right: 4px;
				}
			}
		}
	}
</style>
