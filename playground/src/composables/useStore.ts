import { ref, computed } from "vue";
import {
  useStore as useReplStore,
  useVueImportMap,
  mergeImportMap,
  type ImportMap,
} from "@vue/repl";

export function useStore() {
  const defaultImportMap = ref<ImportMap>({
    imports: {
      "nextui-vue":
        "https://cdn.jsdelivr.net/npm/nextui-vue@0.0.14/dist/index.js",
    },
  });
  const { importMap } = useVueImportMap();

  const builtinImportMap = computed(() => {
    return mergeImportMap(defaultImportMap.value, importMap.value);
  });

  return useReplStore({ builtinImportMap });
}
