<template>
	<div class="main">
		<city-list
			:forecasts="forecasts"
			:currentCoords="currentCoords"
			@choose="changeCurrentCoords"
		/>
		<forecast-main @get="addForecast" :forecast="currentForecast" />
	</div>
</template>

<script>
import CityList from "./components/CityList";
import ForecastMain from "./components/ForecastMain";

export default {
	components: {
		CityList,
		ForecastMain,
	},
	data() {
		return {
			currentCoords: "",
			forecasts: {},
		};
	},
	methods: {
		addForecast(coords, forecast) {
			this.currentCoords = coords;
			this.forecasts[coords] = forecast;
		},
		changeCurrentCoords(coords) {
			this.currentCoords = coords;
		},
	},
	computed: {
		currentForecast() {
			return this.currentCoords ? this.forecasts[this.currentCoords] : {};
		},
	},
};
</script>

<style>
.main {
	background: linear-gradient(
		90deg,
		rgba(9, 9, 121, 1) 25%,
		rgba(0, 212, 255, 1) 100%
	);
	display: grid;
	min-height: 100vh;
	grid-template-columns: 300px 1fr;
}
</style>
