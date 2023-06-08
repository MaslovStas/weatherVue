<template>
	<li
		class="sidebar__item box--border-bottom"
		@click="$emit('choose', city.coords)"
	>
		<div class="sidebar__item__name text--overflow-hidden">
			{{ city.name }}
		</div>
		<div class="sidebar__item__temp">{{ city.temp }}°</div>
		<div class="sidebar__item__text text--overflow-hidden">
			{{ city.text }}
		</div>
		<div class="sidebar__item__minmax">
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
			const currentHour = new Date().getHours();
			return {
				name: this.forecast.location.name,
				temp: this.forecast.forecast.forecastday[0].hour[currentHour].temp_c,
				text: this.forecast.current.condition.text,
				mintemp: this.forecast.forecast.forecastday[0].day.mintemp_c,
				maxtemp: this.forecast.forecast.forecastday[0].day.maxtemp_c,
				coords: `${this.forecast.location.lat},${this.forecast.location.lon}`,
			};
		},
	},
};
</script>

<style>
.sidebar__item {
	padding: 10px;
	margin-top: 15px;
	cursor: pointer;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	grid-template-areas:
		"name name   temp"
		" .     .    temp"
		"txt  minmax minmax";
}
.sidebar__item__name {
	font-size: 20px;
	font-weight: bold;
	grid-area: name;
}
.sidebar__item__temp {
	grid-area: temp;
	font-size: 35px;
	text-align: end;
}
.sidebar__item__text {
	grid-area: txt;
	font-size: medium;
	line-height: 20px;
}
.sidebar__item__minmax {
	grid-area: minmax;
	font-size: small;
	text-align: end;
	line-height: 20px;
}
</style>
