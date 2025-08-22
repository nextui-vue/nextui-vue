import { defineConfig } from "tsdown";
import vue from "unplugin-vue/rolldown";

export default defineConfig({
  entry: ["src/index.ts", "src/heroui.ts"],
  plugins: [vue()],
  external: ["vue"],
  dts: {
    vue: true,
  },
});
