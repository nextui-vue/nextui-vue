<script setup lang="ts">
import { computed } from 'vue'
import { AccordionRoot } from 'radix-vue'
import { accordion, type AccordionItemVariantProps } from '@nextui-org/theme'
import type { AccordionRootProps } from 'radix-vue'

export interface AccordionProps extends AccordionRootProps {
  ui?: AccordionItemVariantProps
}

const props = defineProps<AccordionProps>()

const className = computed(() => {
  const config: AccordionItemVariantProps = {
    ...props.ui,
  }
  return accordion(config)
})
</script>

<template>
  <AccordionRoot
    :class="className"
    default-value="item-1"
    type="single"
    :collapsible="true"
  >
    <slot />
  </AccordionRoot>
</template>
