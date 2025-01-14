<script lang="ts" setup>
import { Button } from "@vue-nextui/button"

console.log(Button)

const accordionItems = [
  {
    value: '第一项',
    title: '标题1',
    content: '内容内容内容内容内容内容内容',
  },
  {
    value: '第二项',
    title: '标题2',
    content: '内容内容内容内容内容内容内容',
  },
  {
    value: '第三项',
    title: '标题3',
    content: '内容内容内容内容内容内容内容',
  },
]
</script>

<template>
  <div class="h-svh flex">
    <div class="m-auto w-[500px] h-[500px]">
      <Button type="solid">
        Test
      </Button>

      <!-- <NVAccordion>
        <template
          v-for="(item, index) in accordionItems"
          :key="index"
        >
          <NVAccordionItem v-bind="item">
            <span>{{ item.content }}</span>
          </NVAccordionItem>
        </template>
      </NVAccordion> -->
    </div>
  </div>
</template>

<style scoped>

</style>
