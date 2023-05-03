<template>
	<view style="background-color: #F5F5F5;">
		<navigator url="../login/login">
		<view class="p-3 flex align-center my-heeader" >
			<image src="/static/demo/6.jpg" style="height:120rpx;width:120rpx;" class="bg-light rounded-circle flex-shrink" mode="aspectFill"></image>
			<view class="flex flex-column pl-3 flex-1">
				<view class="name">
					张三
					<!-- <text class="font-sm text-muted ml-3">武汉</text> -->
				</view>
				<text class="font-sm text-muted">15107142959</text>
			</view>
		</view>
		</navigator>
		<view class="line-box">
			<view class="line">	
			</view>
		</view>
		<view class="manage">
			<navigator url="../../pagesC/resume/resume" animation-type="pop-in" hover-class="none">
			<view class="manage-item">
				<view class="img-box">
					<image src="/static/imgs/file.png" mode="" class="img"></image> 
				</view>
				<view class="text">
					简历管理
				</view>
			</view>
			</navigator>
			<view class="manage-item">
				<view class="img-box">
					<image src="/static/imgs/beg.png" mode="" class="img"></image> 
				</view>
				<view class="text">
					求职管理
				</view>
			</view>
			<view class="manage-item">
				<view class="img-box">
					<image src="/static/imgs/post.png" mode="" class="img"></image> 
				</view>
				<view class="text">
					兼职管理
				</view>
			</view>
			<view class="manage-item">
				<view class="img-box">
					<image src="/static/imgs/appo.png" mode="" class="img"></image> 
				</view>
				<view class="text">
					我的签约
				</view>
			</view>
		</view>
		<view class="myContent">
		  <f-list-item icon="iconshipin" title="我的钱包" :showRightIcon="false" rightText="26个" @click="navigateTo('user-video')"></f-list-item>
		  <view class="line-box" style="background: white;"><view class="line">	</view></view>
		  <f-list-item icon="iconshoucang1" title="学习计划" @click="navigateTo('user-fava')"></f-list-item>
		   <view class="line-box" style="background: white;"><view class="line"></view></view>
		  <f-list-item icon="iconguanzhu" title="实名认证" rightText="365"></f-list-item>
		   <view class="line-box" style="background: white;"><view class="line"></view></view>
		  <f-list-item icon="iconlishi" title="帮助与反馈"></f-list-item>
		   <view class="line-box" style="background: white;"><view class="line"></view></view>
		  <f-list-item icon="iconlishi" title="我的客服"></f-list-item>
		</view>
	
		<view class="f-divider"></view>
		<view class="py-2 px-3">
			<main-big-button @click="addMsg">立即投稿</main-big-button>
		</view>
		<!-- 弹框 -->
		<f-popup ref="popup">
			<view class="position-absolute bottom-0 left-0 right-0 bg-white animate__animated animate__faster animate__fadeIn">
				<view class="flex" style="height: 200rpx;">
					<view class="flex-1 flex align-center justify-center flex-column" hover-class="bg-light"
					@click="navigateTo('create')">
						<text class="iconfont icondingdanwenjian flex align-center justify-center text-white bg-primary rounded-circle" style="width: 80rpx;height: 80rpx;"></text>
						<text class="font mt-1 text-muted">单集</text>
					</view>
					<view class="flex-1 flex align-center justify-center flex-column" hover-class="bg-light">
						<text class="iconfont icon918caidan_wenjian flex align-center justify-center text-white bg-main rounded-circle" style="width: 80rpx;height: 80rpx;"></text>
						<text class="font mt-1 text-muted">连载</text>
					</view>
				</view>
				<view class="f-divider"></view>
				<view class="py-2 flex align-center justify-center font-md text-muted" hover-class="bg-light" @click.stop="hidePopup">取消</view>
			</view>
		</f-popup>
		
	</view>
</template>

<script>
	import fListItem from '@/components/common/f-list-item.vue'
	import mainBigButton from '@/components/common/main-big-button.vue';
	import fPopup from '@/components/common/f-popup.vue';
	export default {
		components:{
			fListItem,
			mainBigButton,
			fPopup
		},
		data() {
			return {
				show:false,
			}
		},
		methods: {
			//选择投稿类型
			addMsg(){
				this.$refs.popup.show();
			},
			hidePopup(){
				this.$refs.popup.hide();
			},
			navigateTo(path){
				uni.navigateTo({
					url: '/pages/'+path+'/'+path,
				});
			}
		}
	}
</script>

<style lang="scss">
	.my-heeader {
		.name {
			 font-size: 16px;
			 color: #333333;
		}
	}
	.line-box {
		background-color: #F5F5F5;
		.line {
			width: calc(100% - 20px);
			height: 1px;
			margin: 0 10px;
			background-color:#ECECEC;
		}
	}
	.manage {
	  display: flex;
	  padding: 16px;
	  .manage-item {
		 flex: 1;
		 .img-box {
			 // width: 20px;
			 // height: 20px;
			 margin-bottom: 11px;
			 display: flex;
			 align-items: center;
			 .img {
				display: block;
				margin: 0 auto;
				width: 20px;
				height: 20px;
			 }
		 }
		 .text {
		 	text-align: center;
			font-size: 15px;
		 }
	  }
	}
	.myContent {
	  background-color: white;
	  margin: 0 10px;
	  border-radius: 5px;
	 }
	
	
 
</style>
