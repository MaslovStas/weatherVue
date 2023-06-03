<template>
	<input
		class="input"
		:value="modelValue"
		@input="updateInput"
		type="text"
		placeholder="Search..."
	/>
</template>

<script>
export default {
	name: "my-input",
	props: {
		modelValue: String,
	},
	methods: {
		updateInput(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>

<style scoped>
.input {
	width: 250px;
	color: black;
}
</style>
