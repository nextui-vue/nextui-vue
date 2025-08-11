<script lang="ts" setup>
import { useButton, type ButtonProps } from "./use-button";

import { computed, ref, type Component } from "vue";

const props = withDefaults(defineProps<ButtonProps>(), {});

defineSlots<{
  default(): Component;
  startContent(): Component;
  endContent(): Component;
  spinner(): Component;
}>();

const buttonRef = ref<HTMLButtonElement | null>();
const bind = useButton(props, buttonRef);
</script>

<template>
  <button ref="buttonRef" v-bind="bind">
    <slot name="startContent" />
    <slot name="spinner" />
    <slot />
    <slot name="endContent" />
  </button>
</template>
