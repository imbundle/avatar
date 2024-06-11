<script setup lang="ts">
import { computed, reactive } from "vue";
import { type EyesKind, type EyesProps } from "./types";
import Content from "./Content.vue";
import Dizzy from "./Dizzy.vue";
import Happy from "./Happy.vue";
import Hearts from "./Hearts.vue";
import LeftTwitch from "./LeftTwitch.vue";
import Simple from "./SImple.vue";
import Squint from "./Squint.vue";
import Wink from "./Wink.vue";

type Props = {
	kind: EyesKind;
} & EyesProps;

const props = withDefaults(defineProps<Props>(), {
	withLashes: false,
});

const currentComponent = computed(() => {
	switch (props.kind) {
		case "Content":
			return Content;
		case "Dizzy":
			return Dizzy;
		case "Happy":
			return Happy;
		case "Hearts":
			return Hearts;
		case "LeftTwitch":
			return LeftTwitch;
		case "Simple":
			return Simple;
		case "Squint":
			return Squint;
		case "Wink":
			return Wink;
		default:
			return Content;
	}
});
const componentProps = reactive({ ...props });
</script>

<template>
	<component :is="currentComponent" v-bind="componentProps" />
</template>
