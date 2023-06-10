<template>
	<div class="city-search">
		<input
			class="city-search__input"
			v-model="searchQuery"
			type="text"
			list="cities"
			@keyup.enter="handleEnter"
			required
		/>
		<datalist id="cities">
			<option
				v-for="city in cities"
				:key="city.id"
				:value="`${city.lat},${city.lon}`"
			>
				{{ city.name }}, {{ city.country }}
			</option>
		</datalist>
	</div>
</template>

<script>
import getApi from "@/utils/getApi";
import { mapActions } from "vuex";

export default {
	data() {
		return {
			searchQuery: "",
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
		handleEnter() {
			if (this.searchQuery) {
				this.getWeather(this.searchQuery);
				this.searchQuery = "";
			}
		},
	},

	watch: {
		searchQuery() {
			this.searchQuery.length > 2 ? this.searchCity() : (this.cities = []);
		},
	},
};
</script>

<style>
.city-search {
	display: flex;
	justify-content: end;
	padding: 20px;
	width: 100%;
}
.city-search__input {
	color: black;
	width: 200px;
}
</style>
