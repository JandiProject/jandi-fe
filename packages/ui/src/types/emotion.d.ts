import "@emotion/react";
import type { Theme as JandiTheme } from "../tokens/theme";

declare module "@emotion/react" {
  export type Theme = JandiTheme;
}
