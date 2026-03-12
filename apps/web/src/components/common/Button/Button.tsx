import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as S from "./Button.styled";

interface ButtonProps
  extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
}

export function Button({
  children,
  width = "100%",
  type = "button",
  ...buttonProps
}: ButtonProps) {
  return (
    <S.Button type={type} $width={width} {...buttonProps}>
      {children}
    </S.Button>
  );
}
