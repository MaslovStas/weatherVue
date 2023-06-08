<template>
	<aside class="sidebar">
		<ul>
			<city-list-item
				v-for="(forecast, coords) in forecasts"
				:forecast="forecast"
				:key="coords"
				@choose="chooseCity"
				:class="{ 'sidebar__item--active': coords === this.currentCoords }"
			/>
		</ul>
	</aside>
</template>

<script>
import CityListItem from "./CityListItem";

export default {
	components: {
		CityListItem,
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
};
</script>

<style>
.sidebar {
	border-right: 2px solid white;
	padding: 20px;
}
.sidebar__item--active {
	border-radius: 12px;
	border: 1px solid;
	background: rgba(255, 255, 255, 0.3);
}
</style>
