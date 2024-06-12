<script setup lang="ts">
import { computed, reactive } from "vue";
import { type GraphicKind } from "./types";
import GraphQL from "./GraphQL.vue";
import Gatsby from "./Gatsby.vue";
import React from "./React.vue";
import Vue from "./Vue.vue";
import Redwood from "./Redwood.vue";

type Props = {
	kind: GraphicKind;
};

const props = defineProps<Props>();

const currentComponent = computed(() => {
	switch (props.kind) {
		case "GraphQL":
			return GraphQL;
		case "Gatsby":
			return Gatsby;
		case "React":
			return React;
		case "Vue":
			return Vue;
		case "Redwood":
			return Redwood;
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
