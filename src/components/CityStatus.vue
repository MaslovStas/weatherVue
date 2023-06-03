<template>
	<div class="status">
		<div v-if="Object.keys(forecast).length">
			<h3>{{ status.name }}</h3>
			<h3>{{ status.temp }}°</h3>
			<h5>{{ status.text }}</h5>
			<p>Min: {{ status.mintemp }}°, max: {{ status.maxtemp }}°</p>
			<img :src="status.icon" />
		</div>
		<div v-else>
			<h3>Choose City</h3>
		</div>
	</div>
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
		status() {
			return {
				name: this.forecast.location.name,
				temp: this.forecast.current.temp_c,
				text: this.forecast.current.condition.text,
				mintemp: this.forecast.forecast.forecastday[0].day.mintemp_c,
				maxtemp: this.forecast.forecast.forecastday[0].day.maxtemp_c,
				icon: this.forecast.current.condition.icon,
			};
		},
	},
};
</script>

<style scoped>
.status {
	margin-top: 150px;
	text-align: center;
}
</style>
