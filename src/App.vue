<script setup lang="ts">
import Avatar from "./components/Avatar.vue";
</script>
<template>
	<div class="center">
		<Avatar
			:mask="true"
			circleColor="blue"
			hat="Beanie"
			hatColor="green"
			hair="Balding"
			hairColor="blonde"
		/>
		<Avatar
			:mask="true"
			circleColor="blue"
			hatColor="green"
			hair="Afro"
			hairColor="blonde"
		/>
	</div>
</template>

<style scoped>
.center {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: auto;
}
</style>
