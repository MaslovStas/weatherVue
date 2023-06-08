<template>
	<div class="search-field">
		<input
			class="search-field__text text--black"
			:value="inputValue"
			@input="updateInput"
			type="text"
			placeholder="Search..."
		/>
		<select
			class="search-field__select"
			size="5"
			@change="updateSelect"
			:value="selectValue"
		>
			<option
				class="select__option text--black"
				v-for="(option, index) in options"
				:key="option.id"
				:value="index"
			>
				{{ option.name }}, {{ option.country }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	name: "my-input",
	emits: ["choose", "update:inputValue", "update:selectValue", "noFocus"],
	props: {
		inputValue: String,
		selectValue: String,
		options: Array,
	},
	methods: {
		updateInput(event) {
			this.$emit("update:inputValue", event.target.value);
		},
		updateSelect(event) {
			this.$emit("update:selectValue", event.target.value);
		},
	},
};
</script>

<style>
.search-field {
	display: flex;
	flex-direction: column;
	width: 300px;
	font-family: inherit;
}
.search-field__text {
	padding: 5px;
}
.search-field__select {
	background: transparent;
	border: none;
	overflow: hidden;
	outline: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
</style>
