<script setup lang="ts">
import { ThemeKey, colors as c, type Colors } from "../theme";
import { inject } from "vue";
import { injectStrict } from "../utils/injectStrict";

const { colors } = injectStrict(ThemeKey);

const props = defineProps<{
	circleColor: keyof typeof c.bgColors;
}>();
const color = colors.bgColors[props.circleColor];
</script>

<template>
	<circle cx="500" cy="630.1601" r="332.441995" :fill="color" />
</template>
