<script setup lang="ts">
import { computed, reactive } from "vue";
import { type HatsKind, type HatProps } from "./types";
import Turban from "./Turban.vue";
import Beanie from "./Beanie.vue";

type Props = {
	kind: HatsKind;
} & HatProps;

const props = defineProps<Props>();

const currentComponent = computed(() => {
	return props.kind === "Beanie" ? Beanie : Turban;
});

const componentProps = reactive({ ...props });
</script>

<template>
	<component :is="currentComponent" v-bind="componentProps" />
</template>
