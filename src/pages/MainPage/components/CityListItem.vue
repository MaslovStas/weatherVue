<template>
	<li class="sidebar__item box--border-bottom">
		<span class="sidebar__item__name text--overflow-hidden">
			{{ forecast.name }}
		</span>
		<span class="sidebar__item__temp">{{ forecast.temp }}</span>
		<span class="sidebar__item__text text--overflow-hidden">
			{{ forecast.text }}
		</span>
		<span class="sidebar__item__minmax">{{ forecast.minmax }}</span>
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
