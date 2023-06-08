<template>
	<section>
		<city-search @choose="getWeather" />
		<forecast-status v-if="isForecast" :forecast="forecast" />
		<forecast-hour v-if="isForecast" :forecast="forecast" />
		<forecast-day v-if="isForecast" :forecast="forecast" />
	</section>
</template>

<script>
import getApi from "@/utils/getApi";
import CitySearch from "./CitySearch";
import ForecastStatus from "./ForecastStatus";
import ForecastHour from "./ForecastHour";
import ForecastDay from "./ForecastDay";

export default {
	components: {
		CitySearch,
		ForecastStatus,
		ForecastHour,
		ForecastDay,
	},
	emits: ["get"],
	props: {
		forecast: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async getWeather(coords) {
			const forecast = await getApi(
				"https://weatherapi-com.p.rapidapi.com/forecast.json",
				{
					q: `${coords}`,
					days: "10",
				}
			);
			this.$emit("get", coords, forecast);
		},
	},
	computed: {
		isForecast() {
			return Object.keys(this.forecast).length !== 0;
		},
	},
};
</script>

<style>
.test {
	display: inline-block;
	/* flex-direction: column; */
}
</style>
