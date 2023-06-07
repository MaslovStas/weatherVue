<template>
	<div class="forecast">
		<div class="wrapper">
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

<style scoped>
.forecast {
	display: flex;
	justify-content: center;
	margin-top: 10px;
}
.wrapper {
	border: 1px solid white;
	border-radius: 12px;
	padding: 5px;
	display: flex;
	justify-content: center;
}
</style>
