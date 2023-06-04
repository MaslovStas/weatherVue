<template>
	<div class="search">
		<my-input
			v-model:inputValue="searchQuery"
			v-model:selectValue="selectedCityIndex"
			:options="cities"
		></my-input>
	</div>
</template>

<script>
import getApi from "@/utils/getApi";

export default {
	data() {
		return {
			searchQuery: "",
			selectedCityIndex: "",
			cities: [],
		};
	},
	emits: ["choose"],
	methods: {
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
			const city = this.cities[index];
			const coords = `${city.lat},${city.lon}`;
			this.searchQuery = "";
			this.$emit("choose", coords);
		},
	},
};
</script>

<style scoped>
.search {
	padding: 20px;
	float: right;
}
</style>
