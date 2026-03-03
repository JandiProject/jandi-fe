/**
 * 폰트 스타일 토큰
 * TODO: 추후 피그마 디자인 토큰에 맞게 수정이 필요합니다.
 * @author 이정선
 */
export const fontFamily = {
  sans: "system-ui, Avenir, Helvetica, Arial, sans-serif",
} as const;

export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
} as const;

export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeight = {
  tight: 1.1,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;
