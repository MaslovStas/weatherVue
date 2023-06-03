<template>
	<section class="main">
		<city-search @choose="getWeather"></city-search>
		<city-status :forecast="forecast"></city-status>
	</section>
</template>

<script>
import axios from "axios";
import CitySearch from "@/components/CitySearch";
import CityStatus from "@/components/CityStatus";

export default {
	components: {
		CitySearch,
		CityStatus,
	},
	// data() {
	// 	return {
	// 		forecast: {},
	// 	};
	// },
	props: {
		forecast: {
			type: Object,
			required: true,
		},
	},
	methods: {
		async getWeather(coords) {
			const options = {
				method: "GET",
				url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
				params: {
					q: `${coords}`,
					days: "3",
					lang: "ru",
				},
				headers: {
					"X-RapidAPI-Key":
						"289e47d0dfmsh8d74c82e635ad3dp1bc686jsn0859ae9abdaf",
					"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
				},
			};

			try {
				const response = await axios.request(options);
				// this.forecast = response.data;
				this.$emit("get", coords, response.data);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style scoped></style>
