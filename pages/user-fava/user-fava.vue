<template>
	<view>
		<uni-swipe-action v-for="(item,index) in list" :key="index">
			<uni-swipe-action-item :options="options" @click="bindClick($event,item)">
				<media-list :item="item" :index="index"></media-list>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue';
	import uniSwipeActionItem from '@/components/uni-ui/uni-swipe-action-item/uni-swipe-action-item.vue';
	export default {
		components:{
			mediaList,
			uniSwipeAction,
			uniSwipeActionItem
		},
		data() {
			return {
				options: [{
					text: '取消收藏',
					style:{
						backgroundColor: 'rgb(255,58,49)'
					}
				}],
				list:[{
					id:1,
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					id:2,
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					id:3,
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					id:4,
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					id:5,
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				},{
					id:6,
					cover:"/static/demo/list2/01.jpg",
					title:"烟雨风缥缈可可爱爱没有脑袋可可爱爱没有脑袋",
					create_time:"今天07:00",
					play_count:"200.1万",
					danmu_count:"7700"
				}]
			}
		},
		methods: {
			bindClick(e,item) {
				console.log(item.id)
				uni.showToast({
					title: `点击了${e.content.text}按钮`,
					icon: 'none'
				})
			},
		}
	}
</script>

<style>

</style>
