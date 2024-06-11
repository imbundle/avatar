<script setup lang="ts">
import { computed, reactive } from "vue";
import { type MouthsKind, type MouthsProps } from "./types";
import Grin from "./Grin.vue";
import Lips from "./Lips.vue";
import OpenMouth from "./OpenMouth.vue";
import Sad from "./Sad.vue";
import Serious from "./Serious.vue";
import SmileOpen from "./SmileOpen.vue";
import Tongue from "./Tongue.vue";

type Props = {
	kind: MouthsKind;
} & MouthsProps;

const props = withDefaults(defineProps<Props>(), {
	lipColor: "red",
});

const currentComponent = computed(() => {
	switch (props.kind) {
		case "Grin":
			return Grin;
		case "Lips":
			return Lips;
		case "OpenMouth":
			return OpenMouth;
		case "Sad":
			return Sad;
		case "Serious":
			return Serious;
		case "SmileOpen":
			return SmileOpen;
		case "Tongue":
			return Tongue;
		default:
			return Grin;
	}
});
const componentProps = reactive({ ...props });
</script>

<template>
	<component :is="currentComponent" v-bind="componentProps" />
</template>
