<template>
	<div class="status">
		<h3>{{ status.name }}</h3>
		<h3>{{ status.temp }}°</h3>
		<h5>{{ status.text }}</h5>
		<p>Min: {{ status.mintemp }}°, max: {{ status.maxtemp }}°</p>
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
			const currentHour = new Date().getHours();
			return {
				name: this.forecast.location.name,
				temp: this.forecast.forecast.forecastday[0].hour[currentHour].temp_c,
				text: this.forecast.current.condition.text,
				mintemp: this.forecast.forecast.forecastday[0].day.mintemp_c,
				maxtemp: this.forecast.forecast.forecastday[0].day.maxtemp_c,
			};
		},
	},
};
</script>

<style scoped>
.status {
	text-align: center;
}
</style>
