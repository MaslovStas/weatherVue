<template>
	<div class="text--center">
		<h1>{{ forecast.name }}</h1>
		<h3>{{ forecast.temp }}</h3>
		<h5>{{ forecast.text }}</h5>
		<span>{{ forecast.minmax }}</span>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters({
			forecast: "weather/forecast",
		}),
	},
};
</script>

<style></style>
