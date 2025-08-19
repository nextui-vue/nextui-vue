<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useDark, useToggle } from "@vueuse/core";
import { Button } from "nextui-vue";

const emits = defineEmits<{
  (e: "refresh"): void;
}>();

const dark = useDark();
console.log(dark.value);
const toggleDark = useToggle(dark);
</script>

<template>
  <div class="vue-repl sticky top-0 z-10 max-h-fit">
    <div
      class="border-b border-b-[var(--border)] bg-[var(--bg)] flex justify-between items-center py-2 px-4 dark:text-white"
    >
      <header class="flex items-center gap-x-4">
        <img
          src="../assets/logo.png"
          width="40"
          height="40"
          alt="NextUI Vue Logo"
        />
        <h1 class="text-xl font-bold">Nextui Vue Playground</h1>
      </header>

      <section class="flex items-center gap-x-4">
        <Button
          title="Refresh sandbox"
          color="default"
          variant="light"
          size="sm"
          radius="full"
          disable-ripple
          is-icon-only
          @click="emits('refresh')"
          ><Icon icon="material-symbols:refresh" width="24" height="24"
        /></Button>
        <Button
          title="Refresh sandbox"
          color="default"
          variant="light"
          size="sm"
          radius="full"
          disable-ripple
          is-icon-only
          @click="toggleDark()"
        >
          <Icon v-if="dark" icon="tdesign:mode-dark" width="24" height="24" />
          <Icon v-else icon="iconamoon:mode-light" width="24" height="24"
        /></Button>
        <a
          href="https://github.com/nextui-vue/nextui-vue"
          target="_blank"
          title="View on github"
        >
          <Icon icon="mdi:github" width="24" height="24" />
        </a>
      </section>
    </div>
  </div>
</template>
