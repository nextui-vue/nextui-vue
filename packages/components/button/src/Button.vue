<script lang="ts">
import type { ButtonProps as Props } from "./use-button";
import { type HTMLNextUIVueProps } from "@vue-nextui/shared";

export interface ButtonProps extends HTMLNextUIVueProps<"button"> {
  isLoading?: boolean;
  disableRipple?: boolean;
  spinnerPlacement?: "start" | "end";

  /* Button variants */
  variant?: Props["variant"];
  size?: Props["size"];
  color?: Props["color"];
  radius?: Props["radius"];
  fullWidth?: Props["fullWidth"];
  isDisabled?: Props["isDisabled"];
  isIconOnly?: Props["isIconOnly"];
  disableAnimation?: Props["disableAnimation"];

  /* Button aria */
  role?: Props["role"]; // unsupported, just placeholder
}

type ButtonState = "pressed" | "hover";
</script>

<script lang="ts" setup>
import { computed, ref, type Component } from "vue";
import { button } from "@heroui/theme";
import { useRipple } from "@vue-nextui/shared";

const props = withDefaults(defineProps<ButtonProps>(), {
  disableRipple: false,
  disableAnimation: false,
  spinnerPlacement: "start",
  color: "primary",
});

const slots = defineSlots<{
  default(): Component;
  startContent(): Component;
  endContent(): Component;
  spinner(): Component;
}>();

const buttonState = ref<ButtonState | undefined>();
const buttonRef = ref<HTMLButtonElement>();
useRipple(buttonRef);

const className = computed(() => {
  return button({ ...props });
});

function setButtonState(state?: ButtonState) {
  buttonState.value = state;
}
</script>

<template>
  <button
    ref="buttonRef"
    :data-pressed="buttonState === 'pressed'"
    :data-hover="buttonState === 'hover'"
    :class="className"
    @mouseup="setButtonState()"
    @mousedown="setButtonState('pressed')"
    @mouseenter="setButtonState('hover')"
    @mouseleave="setButtonState()"
  >
    <slot name="startContent" />
    <slot name="spinner" />
    <slot />
    <slot name="endContent" />
  </button>
</template>
