<template>
	<div class="forecast-day__item .text--center">
		<p class="text--center-vertical">{{ forecast.day }}</p>
		<img :src="forecast.icon" />
		<p class="text--center-vertical">{{ forecast.temp }}</p>
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
};
</script>

<style>
.forecast-day__item {
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
	padding: 0 10px;
}
</style>
