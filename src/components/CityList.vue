<template>
	<aside class="sidebar">
		<ul>
			<city-item
				v-for="(forecast, id) in forecasts"
				:forecast="forecast"
				:key="id"
				@choose="chooseCity"
			></city-item>
		</ul>
	</aside>
</template>

<script>
import CityItem from "@/components/CityItem.vue";

export default {
	components: {
		CityItem,
	},
	props: {
		forecasts: {
			type: Object,
			required: true,
		},
	},
	methods: {
		chooseCity(coords) {
			this.$emit("choose", coords);
		},
	},
};
</script>

<style scoped>
.sidebar {
	border: 1px solid #000;
	padding: 20px;
}
</style>
