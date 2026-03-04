import path from "path";
import { fileURLToPath } from "url";
import { baseConfig } from "@jandi-fe/eslint-config/base";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
  },
];
