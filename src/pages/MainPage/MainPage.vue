<template>
	<div class="main">
		<city-list />
		<forecast-main />
	</div>
</template>

<script>
import CityList from "./components/CityList";
import ForecastMain from "./components/ForecastMain";

export default {
	components: {
		CityList,
		ForecastMain,
	},
};
</script>

<style>
.main {
	background: linear-gradient(
		90deg,
		rgba(9, 9, 121, 1) 25%,
		rgba(0, 212, 255, 1) 100%
	);
	display: grid;
	min-height: 100vh;
	grid-template-columns: 300px 1fr;
}
</style>
