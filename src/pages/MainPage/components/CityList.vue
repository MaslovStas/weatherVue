<template>
	<aside class="sidebar">
		<ul>
			<city-item
				v-for="(forecast, coords) in forecasts"
				:forecast="forecast"
				:key="coords"
				@choose="chooseCity"
				:class="{ item__active: coords === this.currentCoords }"
			></city-item>
		</ul>
	</aside>
</template>

<script>
import CityItem from "./CityItem";

export default {
	components: {
		CityItem,
	},
	props: {
		forecasts: {
			type: Object,
			required: true,
		},
		currentCoords: {
			type: String,
			required: true,
		},
	},
	methods: {
		chooseCity(coords) {
			this.$emit("choose", coords);
		},
	},
	// computed: {
	// 	isActive() {
	// 		return this.data
	// 	}
	// },
};
</script>

<style scoped>
.sidebar {
	border-right: 2px solid white;
	padding: 20px;
}
.item__active {
	border-radius: 12px;
	border: 1px solid;
	background: rgba(255, 255, 255, 0.3);
}
</style>
