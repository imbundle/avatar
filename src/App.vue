<script setup lang="ts">
import Base from "./components/Base.vue";
</script>
<template>
	<div class="center">
		<Base
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
			clothingColor="green"
			graphic="GraphQL"
			:braStraps="true"
			body="Breasts"
			clothing="Dress"
		/>
		<Base
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
			clothingColor="green"
			graphic="GraphQL"
			:braStraps="true"
			body="Breasts"
			clothing="Shirt"
		/>
	</div>
</template>

<style scoped>
.center {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
}
</style>
