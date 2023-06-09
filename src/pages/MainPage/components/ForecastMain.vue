<template>
	<section>
		<city-search />
		<div v-if="isForecast">
			<forecast-status />
			<forecast-hour />
			<forecast-day />
		</div>
	</section>
</template>

<script>
import CitySearch from "./CitySearch";
import ForecastStatus from "./ForecastStatus";
import ForecastHour from "./ForecastHour";
import ForecastDay from "./ForecastDay";
import { mapGetters } from "vuex";

export default {
	components: {
		CitySearch,
		ForecastStatus,
		ForecastHour,
		ForecastDay,
	},
	computed: {
		...mapGetters({
			isForecast: "weather/isForecast",
		}),
	},
};
</script>

<style></style>
