<template>
	<div class="forecast-hour">
		<p>{{ forecast.time }}</p>
		<img :src="forecast.icon" />
		<p>{{ forecast.desc }}</p>
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
.forecast-hour {
	text-align: center;
}
</style>
