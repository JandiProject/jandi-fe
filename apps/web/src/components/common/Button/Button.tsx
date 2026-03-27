import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as S from "./Button.styled";

interface ButtonProps
  extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
}

export function Button({
  children,
  width = "100%",
  height = 40,
  backgroundColor,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  return (
    <S.Button
      type={type}
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor}
      {...buttonProps}
    >
      {children}
    </S.Button>
  );
}
