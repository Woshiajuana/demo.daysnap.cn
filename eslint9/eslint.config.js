import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  { ignores: [] },
  // { ignores: ['**/node_modules/**', '**/*.config.js'] },
  { name: '全部', files: ['src/**/*.{js,ts}'] },
  // { files: ["**/*.{js,mjs,cjs,ts,vue}"], languageOptions: { globals: globals.browser } },
  // js.configs.recommended,
  // tseslint.configs.recommended,
]);