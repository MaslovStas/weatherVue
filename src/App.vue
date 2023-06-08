<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	color: aliceblue;
	font-family: "PT Sans";
}
ul {
	list-style-type: none;
}
.text--overflow-hidden {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.text--black {
	color: black;
}
.text--center {
	text-align: center;
}
.text--end {
	text-align: end;
}
.text--center-vertical {
	display: flex;
	align-items: center;
}
.box--border {
	border: 1px solid;
	border-radius: 12px;
}
.box--border-bottom {
	border-bottom: 1px solid;
}
</style>
