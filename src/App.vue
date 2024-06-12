<script setup lang="ts">
import Avatar from "./components/Avatar.vue";
</script>
<template>
	<div class="center">
		<Avatar
			circleColor="blue"
			hat="Beanie"
			hatColor="green"
			hair="Bun"
			hairColor="blonde"
			eyebrows="Angry"
			:mask="true"
			:lashes="true"
			:faceMask="false"
			faceMaskColor="blue"
			eyes="Hearts"
			lipColor="purple"
			mouth="Vampire"
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
			hairColor="brown"
			eyebrows="LeftLowered"
			faceMaskColor="blue"
			eyes="Content"
			lipColor="red"
			mouth="Sad"
			accesory="None"
			facialHair="Shaved"
			clothingColor="blue"
			graphic="Vue"
			:braStraps="true"
			body="Chest"
			clothing="Shirt"
			skinTone="light"
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
