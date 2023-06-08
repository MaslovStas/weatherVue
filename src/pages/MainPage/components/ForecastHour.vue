<template>
	<div class="forecast-hour">
		<div class="forecast-hour__body box--border">
			<forecast-hour-item
				v-for="hour in forecastHour"
				:forecast="hour"
				:key="hour.time"
			></forecast-hour-item>
		</div>
	</div>
</template>

<script>
import ForecastHourItem from "./ForecastHourItem";

export default {
	components: {
		ForecastHourItem,
	},
	props: {
		forecast: {
			type: Object,
			required: true,
		},
	},
	computed: {
		forecastHour() {
			const currentHour = new Date().getHours();
			const forecastToday = this.forecast.forecast.forecastday[0].hour;
			const forecastTomorrow = this.forecast.forecast.forecastday[1].hour;

			const result = [...forecastToday, ...forecastTomorrow]
				.slice(currentHour, currentHour + 10)
				.map((hour, index) => ({
					time: index !== 0 ? new Date(hour.time).getHours() : "Now",
					icon: hour.condition.icon,
					desc: hour.temp_c + "°",
				}));
			return result;
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
