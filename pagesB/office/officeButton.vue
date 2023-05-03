<template>
	<view class="office-button">
	<!-- 	<view>
			<uniIcon class='icon' type='upload' size='18'></uniIcon>
			<view class="text">分享</view>
		</view> -->
		<view @click="addStar" style="line-height: 1.3;width: 30px;">
			<uniIcon class='icon' v-if="!star" type='star' size='16'></uniIcon>
			<uniIcon class='icon-star' v-else type='star-filled' size='16' color="#ffd948"></uniIcon>
			<view class="text">收藏</view>
		</view>
		<view class="button" @click="deliver">投递简历</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-ui/uni-icons/uni-icons.vue'
	import {collection} from '@/api/user.js';


	export default {
		props: {
			recomData: Object
		},
		components: {
			uniIcon
		},
		data() {
			return {
				star: false
			}
		},
		watch:{
			recomData() {
				console.log('recomData.isCollection', this.recomData)
				this.star = this.recomData.isCollection === 'Y'
			}
		},
		methods:{
			addStar:function (){
				this.star = !this.star
				collection({jobId: this.recomData.rercuitListEntity.recruitId}).then(()=> {
					uni.showToast({
					title: `${this.star? '收藏成功': '取消收藏成功'}`,
					duration: 1000
					});
				})
			},
			deliver() {
				this.$emit('getAttachFile')
			}
		}
	}
</script>

<style lang="scss">
	.office-button {
		position: fixed;
		bottom: 0px;
		width: 100%;
		background-color: white;
		display: flex;
		justify-content: space-between;
		// margin: 0 20px;
		padding: 10px 20px;
		box-sizing: border-box;
		text-align: center;
		border-top: 1px solid #f6f6f6;
		.text{
			font-size: 12px;
		}
		.button {
			margin-left: 27px;
			flex: 1 1 275px;
			height: 40px;
			border-radius: 20px;
			background: #F45C24;
			// text-align: center;
			line-height: 40px;
			font-size: 15px;
			color: #FFFFFF;
		}
	}
</style>
