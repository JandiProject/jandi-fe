import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import { baseConfig } from "./base.js";

/**
 * Vite + React 앱용 ESLint 설정 (web, widget)
 * base + react-hooks + react-refresh
 * @type {import("eslint").Linter.Config[]}
 */
export const reactViteConfig = [
  globalIgnores(["dist"]),
  ...baseConfig,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    files: ["**/main.tsx", "**/main.ts"],
    rules: { "react-refresh/only-export-components": "off" },
  },
];

export default defineConfig(reactViteConfig);
