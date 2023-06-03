<template>
	<div class="search">
		<my-input v-model="searchQuery"></my-input>
		<ul>
			<li
				class="search__item"
				v-for="city in cities"
				:key="city.id"
				@click="chooseCity(city)"
			>
				{{ city.name }}, {{ city.country }}
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			searchQuery: "",
			cities: [],
		};
	},
	methods: {
		async searchCity() {
			const options = {
				method: "GET",
				url: "https://weatherapi-com.p.rapidapi.com/search.json",
				params: { q: `${this.searchQuery}` },
				headers: {
					"X-RapidAPI-Key":
						"289e47d0dfmsh8d74c82e635ad3dp1bc686jsn0859ae9abdaf",
					"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
				},
			};

			try {
				const response = await axios.request(options);
				this.cities = response.data;
			} catch (error) {
				console.log(error);
			}
		},
		chooseCity(city) {
			const coords = `${city.lat},${city.lon}`;
			this.searchQuery = "";
			this.$emit("choose", coords);
		},
	},
	watch: {
		searchQuery() {
			this.searchQuery.length > 2 ? this.searchCity() : (this.cities = []);
		},
	},
};
</script>

<style scoped>
.search {
	padding: 20px;
	float: right;
}
.search__item {
	cursor: pointer;
	color: black;
}
</style>
