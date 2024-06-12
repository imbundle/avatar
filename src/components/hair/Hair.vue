<script setup lang="ts">
import { computed, reactive } from "vue";
import { type HairKind, type HairProps } from "./types";
import Afro from "./Afro.vue";
import BaldingHair from "./BaldingHair.vue";
import BobCut from "./BobCut.vue";
import BuzzCut from "./BuzzCut.vue";
import BunHair from "./BunHair.vue";
import LongHair from "./LongHair.vue";
import PixieCut from "./PixieCut.vue";
import ShortHair from "./ShortHair.vue";

type Props = {
	kind: HairKind;
} & HairProps;

const props = defineProps<Props>();

const currentComponent = computed(() => {
	switch (props.kind) {
		case "Afro":
			return Afro;
		case "Balding":
			return BaldingHair;
		case "Bobcut":
			return BobCut;
		case "Buzz":
			return BuzzCut;
		case "Bun":
			return BunHair;
		case "Long":
			return LongHair;
		case "Pixie":
			return PixieCut;
		case "Short":
			return ShortHair;
		default:
			return Afro;
	}
});

const componentProps = reactive({ ...props });
</script>

<template>
	<component
		:is="currentComponent"
		v-bind="componentProps"
		v-if="props.kind !== 'Blad'"
	/>
</template>
