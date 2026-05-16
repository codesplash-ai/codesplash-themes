import tsparser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";
import obsidianmd from "eslint-plugin-obsidianmd";

export default defineConfig([
  ...obsidianmd.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: { project: "./tsconfig.json" },
      globals: {
        activeDocument: "readonly",
        Blob: "readonly",
        createEl: "readonly",
        DOMParser: "readonly",
        document: "readonly",
        MutationObserver: "readonly",
        URL: "readonly",
        window: "readonly",
      },
    },

    // You can add your own configuration to override or add rules
    rules: {

    },
  },
]);
