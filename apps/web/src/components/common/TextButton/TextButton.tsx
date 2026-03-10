import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import * as S from "./TextButton.styled";

interface TextButtonProps
  extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
  fontWeight?: 400 | 500;
}

export function TextButton({
  children,
  fontWeight = 500,
  ...anchorProps
}: TextButtonProps) {
  return (
    <S.TextButton $fontWeight={fontWeight} {...anchorProps}>
      {children}
    </S.TextButton>
  );
}
