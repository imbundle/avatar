<script setup lang="ts">
import { computed, reactive } from "vue";
import { type EyebrowsKind } from "./types";
import Angry from "./Angry.vue";
import Concerned from "./Concerned.vue";
import Serious from "./Serious.vue";
import LeftLowered from "./LeftLowered.vue";
import Normal from "./Normal.vue";

type Props = {
	kind: EyebrowsKind;
};
const props = defineProps<Props>();

const currentComponent = computed(() => {
	switch (props.kind) {
		case "Angry":
			return Angry;
		case "Concerned":
			return Concerned;
		case "Serious":
			return Serious;
		case "LeftLowered":
			return LeftLowered;
		default:
			return Normal;
	}
});

const componentProps = reactive({ ...props });
</script>

<template>
	<component :is="currentComponent" v-bind="componentProps" />
</template>
