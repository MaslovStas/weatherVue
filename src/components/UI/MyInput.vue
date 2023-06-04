<template>
	<div class="search">
		<input
			class="search__input"
			:value="inputValue"
			@input="updateInput"
			type="text"
			placeholder="Search..."
		/>
		<select
			class="search__select"
			size="5"
			@change="updateSelect"
			:value="selectValue"
			ref="mySelect"
		>
			<option
				class="search__option"
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

<style scoped>
* {
	color: black;
}
.search {
	display: flex;
	flex-direction: column;
	width: 300px;
}
.search__input {
	padding: 5px;
}
.search__select {
	background: transparent;
	border: none;
	overflow: hidden;
	outline: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
</style>
