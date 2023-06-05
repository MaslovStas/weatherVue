<template>
	<li class="item" @click="$emit('choose', city.coords)">
		<div class="item__name trancate">{{ city.name }}</div>
		<div class="item__temp">{{ city.temp }}°</div>
		<div class="item__text trancate">{{ city.text }}</div>
		<div class="item__minmax trancate">
			Min: {{ city.mintemp }}°, max: {{ city.maxtemp }}°
		</div>
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
.item {
	border-bottom: 1px solid;
	padding: 10px;
	margin-top: 15px;
	cursor: pointer;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	grid-template-areas:
		"name name temp"
		". . temp"
		"txt minmax minmax";
}
.item__name {
	font-size: 20px;
	font-weight: bold;
	grid-area: name;
}
.item__temp {
	font-size: 35px;
	grid-area: temp;
	text-align: end;
}
.item__text {
	grid-area: txt;
	font-size: medium;
	line-height: 20px;
}
.item__minmax {
	grid-area: minmax;
	font-size: small;
	text-align: end;
	line-height: 20px;
}
.trancate {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>
