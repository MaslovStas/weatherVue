<template>
	<div class="wrapper">
		<city-list
			:forecasts="forecasts"
			:currentCoords="currentCoords"
			@choose="changeCurrentCoords"
		></city-list>
		<weather-main @get="addForecast" :forecast="currentForecast"></weather-main>
	</div>
</template>

<script>
import CityList from "./components/CityList";
import WeatherMain from "./components/WeatherMain";

export default {
	components: {
		CityList,
		WeatherMain,
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

<style scoped>
.wrapper {
	background: rgb(9, 9, 121);
	background: linear-gradient(
		90deg,
		rgba(9, 9, 121, 1) 25%,
		rgba(0, 212, 255, 1) 100%
	);
	display: grid;
	min-height: 100vh;
	grid-template: 1fr / 300px 1fr;
}
</style>
