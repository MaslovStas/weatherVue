<template>
	<div class="forecast-day text-center-vertical">
		<p>{{ forecast.day }}</p>
		<img style="text-align: center" :src="forecast.icon" />
		<p style="text-align: end">{{ forecast.temp }}</p>
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

<style scoped>
.forecast-day {
	display: grid;
	grid-template-columns: 2fr 2fr 1fr;
	border-bottom: 1px solid;
	padding: 0 10px;
}
.text-center-vertical {
	line-height: 60px;
}
</style>
