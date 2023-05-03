<template>
	<view class="office-map">
		<view >
			<map class="map" :latitude="31.23691" :longitude="121.50109" ></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					longitude: 121.50109,
					latitude: 31.23691
				}
		},
		onLoad(option) {
			this.longitude = option.longitude
			this.latitude = option.latitude
		},
		methods:{
		}


	}
</script>

<style lang="scss">
	.office-map {
		width: 100%;
		height: 100%;

		.map {
			width: 100%;
			height: calc(100% + 45px);
			position: absolute;
			top: -45px;
		}
	}
</style>
