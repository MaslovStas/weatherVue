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
import CityList from "@/components/CityList.vue";
import WeatherMain from "@/components/WeatherMain.vue";

export default {
	name: "App",
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

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	color: aliceblue;
}
ul {
	list-style-type: none;
}
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
