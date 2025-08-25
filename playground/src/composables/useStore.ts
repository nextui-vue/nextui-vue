import { ref, computed } from "vue";
import {
  useStore as useReplStore,
  useVueImportMap,
  mergeImportMap,
  type ImportMap,
} from "@vue/repl";
import welcomeSFCCode from "../template/Welcome.vue?raw";

export function useStore() {
  const defaultImportMap = ref<ImportMap>({
    imports: {
      "heroui-vue":
        "https://cdn.jsdelivr.net/npm/heroui-vue@0.0.17/dist/index.js",
    },
  });
  const { importMap } = useVueImportMap();

  const builtinImportMap = computed(() => {
    return mergeImportMap(defaultImportMap.value, importMap.value);
  });
  const template = ref({
    welcomeSFC: welcomeSFCCode,
    // newSFC: "App.vue",
  });

  return useReplStore({
    builtinImportMap,
    template,
  });
}
