<template>
	<div class="forecast">
		<div class="wrapper">
			<forecast-day-item
				v-for="(day, index) in forecastDay"
				:forecast="day"
				:key="day.day"
				:class="{ 'border-bottom': index !== forecastDay.length - 1 }"
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

<style scoped>
.forecast {
	display: flex;
	padding: 10px;
	justify-content: center;
}
.wrapper {
	border: 1px solid white;
	border-radius: 12px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.border-bottom {
	border-bottom: 1px solid;
}
</style>
