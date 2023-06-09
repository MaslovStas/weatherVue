<template>
	<aside class="sidebar">
		<ul>
			<city-list-item
				v-for="(forecast, coords) in forecasts"
				:forecast="forecast"
				:key="coords"
				@click="setCurrentCoords(coords)"
				:class="{ 'sidebar__item--active': coords === this.currentCoords }"
			/>
		</ul>
	</aside>
</template>

<script>
import CityListItem from "./CityListItem";
import { mapState, mapMutations } from "vuex";

export default {
	components: {
		CityListItem,
	},
	methods: {
		...mapMutations({
			setCurrentCoords: "weather/setCurrentCoords",
		}),
	},
	computed: {
		...mapState({
			forecasts: (state) => state.weather.forecasts,
			currentCoords: (state) => state.weather.currentCoords,
		}),
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
