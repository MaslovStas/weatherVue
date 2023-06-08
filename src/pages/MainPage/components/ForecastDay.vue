<template>
	<div class="forecast-day">
		<div class="forecast-day__body box--border">
			<forecast-day-item
				v-for="(day, index) in forecastDay"
				:forecast="day"
				:key="day.day"
				:class="{ 'box--border-bottom': index !== forecastDay.length - 1 }"
			></forecast-day-item>
		</div>
	</div>
</template>

<script>
import ForecastDayItem from "./ForecastDayItem";
export default {
	components: {
		ForecastDayItem,
	},
	props: {
		forecast: {
			type: Object,
			required: true,
		},
	},
	computed: {
		forecastDay() {
			const days = [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thirsday",
				"Friday",
				"Saturday",
				"Sunday",
			];
			const today = new Date().getDay() - 1;

			return this.forecast.forecast.forecastday.map((day, index) => ({
				day: index !== 0 ? days[(today + index) % 7] : "Today",
				icon: day.day.condition.icon,
				temp: day.day.avgtemp_c + "°",
			}));
		},
	},
};
</script>

<style>
.forecast-day {
	display: flex;
	justify-content: center;
	padding: 10px;
}
.forecast-day__body {
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.border-bottom {
	border-bottom: 1px solid;
}
</style>
