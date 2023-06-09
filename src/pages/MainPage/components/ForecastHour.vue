<template>
	<div class="forecast-hour">
		<div class="forecast-hour__body box--border">
			<forecast-hour-item
				v-for="forecast in forecastHour"
				:forecast="forecast"
				:key="forecast.time"
			/>
		</div>
	</div>
</template>

<script>
import ForecastHourItem from "./ForecastHourItem";
import { mapGetters } from "vuex";

export default {
	components: {
		ForecastHourItem,
	},
	computed: {
		...mapGetters({
			forecast: "weather/forecast",
		}),
		forecastHour() {
			const now = new Date().getHours();
			const forecast = this.forecast.hour.slice(now, now + 10);
			forecast[0].time = "Now";
			return forecast;
		},
	},
};
</script>

<style>
.forecast-hour {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}
.forecast-hour__body {
	padding: 5px;
	display: flex;
}
</style>
