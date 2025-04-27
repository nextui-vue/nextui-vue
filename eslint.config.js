import antfu from "@antfu/eslint-config";

export default antfu({
  type: "lib",
  vue: true,
  typescript: true,
  rules: {
    "no-console": "off",
  },
  stylistic: {
    quotes: "single",
  },
});
