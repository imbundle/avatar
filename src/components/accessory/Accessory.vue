<script setup lang="ts">
import { computed, reactive } from "vue";
import { type AccessoryKind } from "./types";
import RoundGlasses from "./RoundGlasses.vue";
import Shades from "./Shades.vue";
import TinyGlasses from "./TinyGlasses.vue";

type Props = {
	kind: AccessoryKind;
};

const props = defineProps<Props>();

const currentComponent = computed(() => {
	switch (props.kind) {
		case "RoundGlasses":
			return RoundGlasses;
		case "Shades":
			return Shades;
		case "TinyGlasses":
			return TinyGlasses;
		default:
			return RoundGlasses;
	}
});

const componentProps = reactive({ ...props });
</script>
<template>
	<component
		:is="currentComponent"
		v-bind="componentProps"
		v-if="props.kind !== 'None'"
	/>
</template>
