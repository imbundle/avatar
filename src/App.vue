<script setup lang="ts">
import Avatar from "./components/Avatar.vue";
</script>
<template>
	<div class="center">
		<Avatar
			circleColor="blue"
			hat="Beanie"
			hatColor="green"
			hair="Afro"
			hairColor="blonde"
			eyebrows="Angry"
			:mask="true"
			:lashes="true"
			:faceMask="false"
			faceMaskColor="blue"
			eyes="Hearts"
			lipColor="red"
			mouth="OpenMouth"
			accesory="None"
			facialHair="Stubble"
			clothingColor="red"
			graphic="GraphQL"
			:braStraps="true"
			body="Chest"
			clothing="DressShirt"
			skinTone="yellow"
		/>
		<Avatar
			:mask="true"
			:lashes="true"
			:faceMask="false"
			circleColor="blue"
			hat="Beanie"
			hatColor="green"
			hair="Pixie"
			hairColor="blue"
			eyebrows="LeftLowered"
			faceMaskColor="blue"
			eyes="Content"
			lipColor="red"
			mouth="Sad"
			accesory="None"
			facialHair="Shaved"
			clothingColor="green"
			graphic="GraphQL"
			:braStraps="true"
			body="Breasts"
			clothing="Shirt"
			skinTone="yellow"
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
