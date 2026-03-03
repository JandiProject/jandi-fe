import { colors } from "./colors";
import { fontFamily, fontSize, fontWeight, lineHeight } from "./fonts";

export const theme = {
  ...colors,
  fonts: {
    family: fontFamily,
    size: fontSize,
    weight: fontWeight,
    lineHeight,
  },
} as const;

export type Theme = typeof theme;
