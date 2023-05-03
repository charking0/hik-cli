<template>
	<view>
		<view class="fm-container">
			<!--课程卡片部分-->
			<course-card></course-card>
			<!--切换部分-->
			<view class="class-tab">
				<tab-view :tab-list="tabList" :tabCur.sync="currentTab" @change="tabChange"></tab-view>
			</view>
			<!--课程简介部分-->
			<intro-duction v-if="currentTab===0"></intro-duction>
			<!--课程目录-->
			<course-directory v-if="currentTab===1"></course-directory>
		</view>
		<!--底部固定购买部分-->
		<buy-bottom @click="handSubmit"></buy-bottom>
		<pop-confirm :show="isPop" @close="onClose" @submit="onConfirm"></pop-confirm>
	</view>
</template>

<script>
	import tabView from '../../components/tab-view/tab-view.vue';
	import courseCard from '../../components/class-comp/course-card.vue';
	import introDuction from '../../components/class-comp/introduction.vue';
	import buyBottom from '../../components/class-comp/buy-bottom.vue';
	import courseDirectory from '../../components/class-comp/course-directory.vue';
	import popConfirm from '../../components/pop-confirm/pop-confirm.vue';
	export default {
		components: {
			tabView,
			courseCard,
			introDuction,
			buyBottom,
			courseDirectory,
			popConfirm
		},
		data() {
			return {
				currentTab: 0,
				tabList: [{
					name: '简介'
				}, {
					name: '目录'
				}],
				isPop: false,
			}
		},
		methods: {
			tabChange(index) {
				this.currentTab = index;
			},
			handSubmit() {
				this.isPop = true;
			},
			onClose() {
				this.isPop = false;
			},
			onConfirm() {
				this.isPop = false;
				this.$uni.toast('已支付')
			}
		}
	}
</script>

<style lang="less">
	page {
		background: #F5F5F5;
		height: 100vh;
	}

	.fm-container {
		padding: 20rpx;

		.class-tab {
			padding-bottom: 20rpx;
		}
	}
</style>
