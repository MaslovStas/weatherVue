<template>
	<li class="city__item" @click="$emit('choose', city.coords)">
		<div>{{ city.name }}</div>
		<div>{{ city.temp }}°</div>
		<div style="font-size: smaller">
			Min: {{ city.mintemp }}°, max: {{ city.maxtemp }}°
		</div>
		<div style="font-size: small">{{ city.text }}</div>
	</li>
</template>

<script>
export default {
	props: {
		forecast: {
			type: Object,
			required: true,
		},
	},
	computed: {
		city() {
			return {
				name: this.forecast.location.name,
				temp: this.forecast.current.temp_c,
				text: this.forecast.current.condition.text,
				mintemp: this.forecast.forecast.forecastday[0].day.mintemp_c,
				maxtemp: this.forecast.forecast.forecastday[0].day.maxtemp_c,
				coords: `${this.forecast.location.lat},${this.forecast.location.lon}`,
			};
		},
	},
};
</script>

<style scoped>
.city__item {
	border-bottom: 1px solid;
	margin-top: 15px;
	cursor: pointer;
}
</style>
