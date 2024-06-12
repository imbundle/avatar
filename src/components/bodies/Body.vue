<script setup lang="ts">
import { computed, reactive } from "vue";
import { type BodyKind, type BodyProps } from "./types";

import Breasts from "./Breasts.vue";
import Chest from "./Chest.vue";

type Props = {
	kind: BodyKind;
} & BodyProps;

const props = defineProps<Props>();

const currentComponent = computed(() => {
	switch (props.kind) {
		case "Breasts":
			return Breasts;
		case "Chest":
			return Chest;
		default:
			return Breasts;
	}
});
const componentProps = reactive({ ...props });
</script>

<template>
	<component :is="currentComponent" v-bind="componentProps" />
</template>
