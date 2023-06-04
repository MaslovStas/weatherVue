<template>
	<section class="main">
		<city-search @choose="getWeather"></city-search>
		<city-status :forecast="forecast"></city-status>
	</section>
</template>

<script>
import getApi from "@/utils/getApi";
import CitySearch from "@/components/CitySearch";
import CityStatus from "@/components/CityStatus";

export default {
	components: {
		CitySearch,
		CityStatus,
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
};
</script>

<style scoped></style>
