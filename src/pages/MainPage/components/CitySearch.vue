<template>
	<div class="city-search">
		<my-input
			v-model:inputValue="searchQuery"
			:options="cities"
			v-model:selectValue="selectedCityIndex"
		/>
	</div>
</template>

<script>
import getApi from "@/utils/getApi";
import { mapActions } from "vuex";

export default {
	data() {
		return {
			searchQuery: "",
			selectedCityIndex: "",
			cities: [],
		};
	},
	methods: {
		...mapActions({
			getWeather: "weather/getWeather",
		}),
		async searchCity() {
			this.cities = await getApi(
				"https://weatherapi-com.p.rapidapi.com/search.json",
				{
					q: `${this.searchQuery}`,
				}
			);
		},
	},

	watch: {
		searchQuery() {
			this.searchQuery.length > 2 ? this.searchCity() : (this.cities = []);
		},
		selectedCityIndex(index) {
			if (this.selectedCityIndex) {
				const city = this.cities[index];
				const coords = `${city.lat},${city.lon}`;
				this.searchQuery = "";
				this.getWeather(coords);
				this.selectedCityIndex = "";
			}
		},
	},
};
</script>

<style>
.city-search {
	display: flex;
	justify-content: end;
	padding: 20px;
	height: 180px;
	width: 100%;
}
</style>
