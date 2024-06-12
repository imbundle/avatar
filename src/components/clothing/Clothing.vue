<script setup lang="ts">
import { computed, reactive } from "vue";
import { type ClothingKind, type ClothingProps } from "./types";
import VNeck from "./VNeck.vue";
import Dress from "./Dress.vue";
import DressShirt from "./DressShirt.vue";
import TankTop from "./TankTop.vue";
import Shirt from "./Shirt.vue";

type Props = {
	kind: ClothingKind;
} & ClothingProps;

const props = defineProps<Props>();

const currentComponent = computed(() => {
	switch (props.kind) {
		case "VNeck":
			return VNeck;
		case "Dress":
			return Dress;
		case "DressShirt":
			return DressShirt;
		case "TankTop":
			return TankTop;
		case "Shirt":
			return Shirt;
		default:
			return VNeck;
	}
});
const componentProps = reactive({ ...props });
</script>

<template>
	<component
		v-if="props.kind !== 'Naked'"
		:is="currentComponent"
		v-bind="componentProps"
	/>
</template>
