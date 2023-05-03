<template>
	<view class="office-content">
		<view class="title">职位详情</view>
		<view class="content" :class="{'content-clear':clear}">
			<view class="tag">
				<view class="tag-text" v-for="(val,index) in tag" :key="index">{{val.label}}</view>
			</view>
			<rich-text :nodes="recomData.rercuitListEntity.desc"></rich-text>
		</view>
		<view v-show="clear" class="button" @tap="switchContent">查看全部</view>
		
	</view>
</template>

<script>
	import {details, dic} from '@/api/user.js';
	
	export default {
		props: {
			recomData: Object
		},
		data() {
			return {
				tag:[],
				clear: true
			}
		},
		created() {
			dic('full_job_lebal').then(res=> {
				// this.tag = res.data
				this.recomData.rercuitListEntity.tags.split(',').forEach((item)=> {
					console.log('fd', item)
					this.tag.push(res.data[parseInt(item)-1])
				})
			})
		},
		methods: {
			switchContent: function(event) {
				this.clear = false
			}
		}
	}
</script>

<style lang="scss">
	.office-content {
		margin: 0 10px 0px 10px;
		padding: 20px 0;
		box-sizing: border-box;
		border-bottom: 1px solid #f6f6f6;
		position: relative;
		
		.title {
			font-family: PingFangSC-Semibold;
			color: #323332;
			font-size: 30rpx;
			margin-bottom: 10px;
		}

		.content {
			background-color: white;
			border-radius: 10px;
			font-size: 14px;
			padding: 12px 10px 17px 10px;
			line-height: 25px;
		}

		.content-clear {
			// width: 100%;
			height: 100px;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.button {
			text-align: center;
			font-size: 14px;
			color: #F15A24;;
			width: 100%;
			padding-top: 30px;
			box-sizing: border-box;
			background: white;
			opacity: 0.8;
			transform: translateY(-30px);
			// position: absolute;
			// bottom: 0px;
		}

		.tag {
			display: flex;
			margin-bottom: 19px;
			
			.tag-text {
				border-radius: 10rpx;
				padding: 2px 5px;
				background: #F5F5F4;
				color: #323332;
				font-family: PingFangSC-Regular;
				font-size: 24rpx;
				margin-right: 10px;
			}

		}


	}
</style>
