<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import { useDark } from "@vueuse/core";
import { Repl } from "@vue/repl";
import Monaco from "@vue/repl/monaco-editor";

const loading = ref(false);
const replRef = ref<InstanceType<typeof Repl>>();

const AUTO_SAVE_KEY = "auto-save-state";
function getAutoSaveState() {
    return JSON.parse(localStorage.getItem(AUTO_SAVE_KEY) || "true");
}
function setAutoSaveState(value: boolean) {
    localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(value));
}

const autoSave = ref(getAutoSaveState());

const previewOptions = {
    headHTML: `
    <script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"><\/script>
    <script>
      window.__unocss = {
        rules: [],
        presets: [],
      }
    <\/script>
  `,
};

const dark = useDark();

const theme = new URLSearchParams(location.search).get("theme");
if (theme === "dark") {
    dark.value = true;
}

const handleKeydown = (evt: KeyboardEvent) => {
    if ((evt.ctrlKey || evt.metaKey) && evt.code === "KeyS") {
        evt.preventDefault();
        return;
    }
};

// persist state
// watchEffect(() =>
//     history.replaceState(
//         {},
//         "",
//         `${location.origin}${location.pathname}#${store.serialize()}`,
//     ),
// );

const refreshPreview = () => {
    replRef.value?.reload();
};

watch(autoSave, setAutoSaveState);
</script>

<template>
    <div v-if="!loading" antialiased>
        <!-- <Header :store="store" @refresh="refreshPreview" /> -->
        <Repl
            ref="replRef"
            v-model="autoSave"
            :theme="dark ? 'dark' : 'light'"
            :preview-theme="true"
            :editor="Monaco"
            :preview-options="previewOptions"
            :clear-console="false"
            @keydown="handleKeydown"
        />
    </div>
    <template v-else>
        <div class="h-100vh">Loading...</div>
    </template>
</template>

<style>
body {
    --at-apply: m-none text-13px;
    font-family:
        -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
        Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --base: #444;
    --nav-height: 50px;
}

.vue-repl {
    height: calc(100vh - var(--nav-height)) !important;
}

.dark .vue-repl,
.vue-repl {
    --color-branding: var(--el-color-primary) !important;
}

.dark body {
    background-color: #1a1a1a;
}
</style>
