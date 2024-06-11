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
			:faceMask="true"
			faceMaskColor="blue"
			eyes="Hearts"
			lipColor="red"
			mouth="OpenMouth"
			accesory="TinyGlasses"
			facialHair="MediumBeard"
			clothing="Shirt"
			clothingColor="blue"
			graphic="GraphQL"
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
			faceMaskColor="blue"
			accesory="Shades"
			facialHair="MediumBeard"
			clothing="Shirt"
			clothingColor="blue"
			graphic="GraphQL"
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
