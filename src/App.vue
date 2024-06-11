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
			eyebrows="Angry"
			:lashes="true"
			:faceMask="false"
			eyes="Hearts"
			lipColor="red"
			mouth="OpenMouth"
		/>
		<Avatar
			:mask="true"
			circleColor="blue"
			hatColor="green"
			hair="Afro"
			hairColor="blonde"
			eyebrows="Concerned"
			:lashes="true"
			:faceMask="false"
			eyes="Dizzy"
			lipColor="pink"
			mouth="Lips"
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
