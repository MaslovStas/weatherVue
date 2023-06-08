<template>
	<div class="text--center">
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

<style></style>
