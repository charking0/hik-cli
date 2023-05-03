<template>
	<view>
		<!-- 底部背景图 -->
		<image src="/static/demo/list2/01.jpg" mode="aspectFill" style="width: 750rpx;height: 320rpx;"></image>
		<view style="height: 350rpx;" class="border-bottom">
			<!-- 头像 -->
			<view class="flex align-center justify-between px-3">
				<image src="/static/demo/6.jpg" mode="widthFix" class="rounded-circle" style="width: 130rpx;height: 130rpx; margin-top:-60rpx;"></image>
				<view class="flex align-center justify-center rounded bg-main text-white py-1 px-2" hover-class="bg-main-hover">
					<text class="font">关注</text>
				</view>
			</view>
			<!-- 个人描述 -->
			<view class="px-4 flex align-center py-1">
				<view class="font-lg text-main font-weight-bold">昵称</view>
				<text class="font text-light-muted ml-2">UID:123456</text>
			</view>
			<view class="flex align-center px-4">
				<view class="rounded font-sm bg-main text-white px-1">年度大会员</view>
			</view>
			<!-- 关注与粉丝数 -->
			<view class="flex align-center px-4 mt-2">
				<view class="font-md text-dark flex align-center">
					21
					<text class="ml-2 font-sm text-light-muted">关注</text>
				</view>
				<view class="font-md text-dark flex align-center ml-2">
					21
					<text class="ml-2 font-sm text-light-muted">粉丝</text>
				</view>
			</view>
			<view class="px-4 mt-2">
				<view class="text-ellipsis font-sm text-light-muted" style="line-height: 1.5;">年度大会员年度大会员年度大会员年度大会员年度大会员年度大会员年度大会员</view>
			</view>
		</view>
		<!-- 选项卡 -->
		<view class="flex align-center" style="height: 80rpx;">
			<view class="flex-1 flex align-center justify-center"
			v-for="(item,index) in tabBars" :key="index" @click="changeTab(index)">
				<text class="font" :class="tabIndex === index ?'text-main':''">{{item.name}}</text>
			</view>
		</view>
		<!-- scrollview组件 -->
		<swiper :current="tabIndex" :duration="300" :style="'height:'+scrollHeight+'px'" @change="changeSwiper">
			<swiper-item v-for="(tab,tabI) in tabBars" :key="tabI">
				<scroll-view scroll-y="true" style="height: 100vh;" :style="'height:'+scrollHeight+'px'">
					<view class="f-divider"></view>
					<media-list v-for="(item,index) in list" :key="index" :item="item" :index="index"></media-list>
				</scroll-view>
			</swiper-item>
		</swiper>
		
			
		
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	export default {
		components:{
			mediaList
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[{
					name:'主页'
				},{
					name:'动态'
				},{
					name:'作品'
				},{
					name:'收藏'
				}],
				scrollHeight:0,
				list:[{
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				}]
			}
		},
		created(){
			let res = uni.getSystemInfoSync();
			this.scrollHeight = res.windowHeight - 88 - res.statusBarHeight;
		},
		methods: {
			changeTab(index){
				this.tabIndex = index;
			},
			changeSwiper(e){
				this.tabIndex = e.detail.current;
			}
		}
	}
</script>

<style>

</style>
