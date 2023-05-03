<template>
	<navigator :url="'/pagesB/office/company/company?'+'id='+recomData.rercuitListEntity.companyId" animation-type="pop-in" hover-class="none">
	<view class="office-hr">
		<image class="hrImage" :src="recomData.hrImage"></image>
		<view class="hrContent">
			<view class="name">
				<text class="hrName">{{recomData.rercuitListEntity.companyName}}</text>
				<text class="hrName">本月活跃</text>
			</view>
			<text class="hrOffice">{{recomData.rercuitListEntity.companyName}}</text>
			<image src="../static/imgs/left.png" mode="" class="img"></image>
		</view>
	</view>
	</navigator>
</template>

<script>
	import {details} from '@/api/user.js';
	
	export default {
		props: {
			recomData: Object
		},
		data() {
			return {
			}
		},
		created() {
		}

	}
</script>

<style lang="scss">
	.office-hr {
		background: white;
		display: flex;
		padding: 12px 12px;
		position: relative;
		border-bottom-left-radius:10px;
		border-bottom-right-radius:10px;
		// margin: 0 20px;
		margin: 0 10px;
		border-bottom: 1px solid #f6f6f6;
		.hrImage {
			width: 44px;
			height: 44px;
			margin-right: 15px;
		}

		.hrContent {
			.name {
				.hrName:nth-child(1) {
					font-size: 15px;
					font-weight: bold;
					margin-right: 14.5px;
				}

				.hrName:nth-child(2) {
					color: #a7a7a7;
					font-size: 12px;
				}

			}
			.img {
				position: absolute;
				right: 14px;
				top:22px;
				width:8px;
				height: 15px;
			}
			.hrOffice{
				font-size: 12px;
			}



		}
	}
</style>
