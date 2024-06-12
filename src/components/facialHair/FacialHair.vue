<script setup lang="ts">
import { computed, reactive } from "vue";
import { type FacialHairKind, type FacialHairProps } from "./types";
import MeddiumBeard from "./MediumBeard.vue";
import Stubble from "./Stubble.vue";

type Props = {
	kind: FacialHairKind;
} & FacialHairProps;

const props = defineProps<Props>();

const currentComponent = computed(() => {
	switch (props.kind) {
		case "MediumBeard":
			return MeddiumBeard;
		case "Stubble":
			return Stubble;
		default:
			return MeddiumBeard;
	}
});
const componentProps = reactive({ ...props });
</script>

<template>
	<component
		:is="currentComponent"
		v-bind="componentProps"
		v-if="props.kind !== 'Shaved'"
	/>
</template>
