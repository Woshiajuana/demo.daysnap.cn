import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

console.log('111', tseslint.configs.recommended)

export default defineConfig([
  { ignores: ['**/node_modules/**', '**/*.config.js'] },
  { files: ['src/**/*.{js,ts}']},
  // { files: ["**/*.{js,mjs,cjs,ts,vue}"], languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  tseslint.configs.recommended,
]);