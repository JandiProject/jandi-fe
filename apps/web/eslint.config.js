import path from "path";
import { fileURLToPath } from "url";
import { reactViteConfig } from "@jandi-fe/eslint-config/react-vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  ...reactViteConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
];
