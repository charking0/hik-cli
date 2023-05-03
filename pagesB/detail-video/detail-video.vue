<template>
	<view style="line-height: 1;overflow-y:hidden;">
		<!-- 视频 -->
		<!-- #ifndef APP-PLUS -->
		<video :src="detail.src" :poster="detail.poster" style="height: 225px;width:100%;" controls></video>
		<!-- #endif -->
		<!-- scrollview -->
		<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'">
			<!-- 选项卡头部 -->
			<view class="border-bottom border-light-secondary bg-white flex align-stretch position-fixed left-0 right-0" style="height:80rpx;z-index:100;">
				<view class="flex-1 flex align-center justify-center"
				v-for="(item,index) in tabBars" :key="index"
				@click="changeTab(index)">
					<text class="font py-1"
					:class="tabIndex === index ?'text-main border-main':''"
					:style="tabIndex === index ?'border-bottom: 5rpx solid;':''">{{item.name}}</text>
				</view>
			</view>
			<view class="" style="height: 80rpx;"></view>
			<!-- 选项卡内容 -->
			<!-- 简介 -->
			<view v-if="tabIndex === 0" class="animate__animated animate__fadeIn animate__fast">
				<!-- 头像昵称 -->
				<view class="px-3 py-2 flex align-center">
					<image src="/static/demo/6.jpg" mode="" style="width: 80rpx;height: 80rpx;" class="mr-3 rounded-circle"></image>
					<view class="flex flex-column">
						<text class="text-main font-md">昵称</text>
						<text class="font-sm text-muted" style="line-height: 1;">369 粉丝</text>
					</view>
					<!-- 关注按钮 -->
					<view class="flex align-center justify-center rounded bg-main text-white py-1 px-2 ml-auto" hover-class="bg-main-hover">
						<text class="font">关注</text>
					</view>
				</view>
				<!-- 视频标题 -->
				<view class="font-md px-3">
					视频标题
				</view>
				<view class="flex align-center text-muted px-3">
					<text class="iconfont iconbofangshu font-md mr-1"></text>
					<text class="font-sm">200.1万</text>
					<text class="iconfont icondanmushu font-md mx-1"></text>
					<text class="font-sm">7700</text>
					<text class="font-sm ml-1">今日 10:10</text>
				</view>
				<!-- 滚动选集 -->
				<view class="py-3 border-top border-bottom border-light-secondary">
					<!-- 选集标题 -->
					<view class="flex align-center px-3">
						<text class="font-md">选集</text>
						<view class="flex align-center text-muted ml-auto"
						@click="openPopup">
							共9集
							<text class="iconfont iconjinru ml-1"></text>
						</view>
					</view>
					<!-- 选集内容 -->
					<scroll-view scroll-x="true" class="scroll-row mt-2">
						<view v-for="i in 10" :key="i" class="scroll-row-item rounded border ml-2 p-2 " style="width: 340rpx;"
						:class="i-1 === 0 ? 'text-main border-main':'text-muted border-light-secondary'">
							<text class="font">第 1 集</text>
							<view class="font-md text-ellipsis">
								黄龄-繁华梦
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="f-list">
					<media-list v-for="(item,index) in list" :key="index" :item="item" :index="index"></media-list>
				</view>
			</view>
			<!-- 评论 -->
			<view v-else class="animate__animated animate__fadeIn animate__fast px-3 py-1">
				<view class="uni-comment-list">
					<view class="uni-comment-face">
						<image src="/static/demo/6.jpg" mode="" style="width: 80rpx;height: 80rpx;" class="rounded-circle"></image>
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top">
							<text class="text-main font">昵称</text>
						</view>
						<view class="uni-comment-date">
							<text class="text-muted font-sm">10:10</text>
						</view>
						<view class="uni-comment-content">
							评论内容
						</view>
						<!-- 回复内容 -->
						<view class="flex flex-wrap p-2 bg-light rounded">
							<text class="font text-main">昵称2:</text>
							回复功能
						</view>
					</view>
				</view>
				<!-- 右下角+号 -->
				<view class="position-fixed flex align-center justify-center bg-main rounded-circle animate__animated animate__fast" hover-class="bg-main-hover animate__pulse" style="width: 120rpx;height: 120rpx;right: 50rpx;bottom: 50rpx;"
				@click="openComment">
					<text class="text-white iconfont iconjia"></text>
				</view>
			</view>
		</scroll-view>
		<!-- 选集弹出框 -->
		<f-popup ref="popup">
			<view class="position-absolute bottom-0 left-0 right-0 bg-white animate__animated animate__faster animate__fadeIn"
			@click.stop="stop">
				<view style="height: 600rpx;">
					<view class="flex align-center">
						<text class="font-md ml-3">选集</text>
						<view class="flex align-center justify-center ml-auto" style="width: 80rpx;height: 80rpx;" hover-class="bg-light"
						@click="hidePopup">
							<text class="iconfont iconguanbi text-muted"></text>
						</view>
					</view>
					<scroll-view scroll-y="true" style="height: 520rpx;">
						<view class="flex flex-wrap">
							<view style="width: 50%;box-sizing: border-box;" class="p-2" v-for="i in 10" :key="i">
								<view class="rounded border p-2 "
								:class="i-1 === 0 ? 'text-main border-main':'text-muted border-light-secondary'">
									<text class="font">第 1 集</text>
									<view class="font-md text-ellipsis">
										黄龄-繁华梦
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</f-popup>   
		<!-- 评论弹出框 -->
		<f-popup ref="comment">
			<view class="position-absolute bottom-0 left-0 right-0 bg-white animate__animated animate__faster animate__fadeIn"
			@click.stop="stop">
				<view class="flex align-center px-3" style="height: 100rpx;">
					<input type="text" value="" placeholder="说一句话吧" class="bg-light rounded mr-3 px-2 flex-1" style="height: 60rpx;" />
					<!-- 关注按钮 -->
					<view class="flex align-center justify-center rounded bg-main text-white py-1 px-2 ml-auto" hover-class="bg-main-hover">
						<text class="font">关注</text>
					</view>
				</view>
			</view>
		</f-popup>
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import fPopup from '@/components/common/f-popup.vue';
	export default {
		components:{
			mediaList,
			fPopup
		},
		data() {
			return {
				detail:{
					src:"/static/demo/mv/01.mp4",
					poster:"/static/demo/list2/01.jpg"
				},
				scrollH:500,
				tabIndex:0,
				tabBars:[{
					name:"简介"
				},{
					name:"评论"
				}],
				list:[{
					cover:"/static/demo/list2/02.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/02.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/02.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/02.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/02.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/02.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				}]
			}
		},
		onLoad(){
			let res = uni.getSystemInfoSync();
			this.scrollH = res.windowHeight - 226;
		},
		methods: {
			//切换选项卡
			changeTab(index){
				this.tabIndex = index;
			},
			//弹出选集
			openPopup(){
				this.$refs.popup.show();
			},
			hidePopup(){
				this.$refs.popup.hide();
			},
			stop(){
				
			},
			openComment(){
				this.$refs.comment.show();
			}
		}
	}
</script>

<style>

</style>
