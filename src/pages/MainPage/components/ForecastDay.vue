<template>
	<div class="forecast-day">
		<div class="forecast-day__body box--border">
			<forecast-day-item
				v-for="(day, index) in forecast.day"
				:forecast="day"
				:key="day.day"
				:class="{ 'box--border-bottom': index !== forecast.day.length - 1 }"
			/>
		</div>
	</div>
</template>

<script>
import ForecastDayItem from "./ForecastDayItem";
import { mapGetters } from "vuex";

export default {
	components: {
		ForecastDayItem,
	},
	computed: {
		...mapGetters({
			forecast: "weather/forecast",
		}),
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
