<script lang="ts" setup>
import { computed } from "vue";
import { type AlertProps } from "./use-alert";
import { useAlert } from "./use-alert";
import { defaultIconPath, successIconPath, warningIconPath } from "./constant";
import { Button } from "@vue-nextui/button";

const props = withDefaults(defineProps<AlertProps>(), {});

const emits = defineEmits<{
  (e: "close"): void;
  (e: "visibleChange", isVisible: boolean): void;
}>();

const { base, mainWrapper, title, description, alertIcon, iconWrapper } =
  useAlert(props);

const icon = computed(() => {
  const color = props.color;

  if (color === "default" || color === "secondary" || color === "primary") {
    return defaultIconPath;
  } else if (color === "success") {
    return successIconPath;
  } else if (color === "warning" || color === "danger") {
    return warningIconPath;
  } else {
    return defaultIconPath;
  }
});

function onClose() {
  emits("close");
}
</script>

<template>
  <div :class="base()">
    <slot name="startContent" />

    <div v-if="!props.hideIcon" :class="iconWrapper()">
      <slot name="icon">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          :class="alertIcon()"
        >
          <path :d="icon" />
        </svg>
      </slot>
    </div>

    <div :class="mainWrapper()">
      <div v-if="props.title" :class="title()">
        {{ props.title }}
      </div>
      <slot v-else />

      <div v-if="props.description" :class="description()">
        {{ props.description }}
      </div>
      <slot v-else name="description" />
    </div>

    <slot name="endContent" />

    <Button v-if="props.isClosable" @click="onClose">close</Button>
  </div>
</template>

<style scoped></style>
