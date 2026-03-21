import type { ReactNode } from "react";
import * as S from "./PlatformStepCard.styled";

interface PlatformStepCardProps {
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export function PlatformStepCard({
  header,
  children,
  footer,
}: PlatformStepCardProps) {
  return (
    <S.Card>
      <S.Header>{header}</S.Header>
      <S.Body>{children}</S.Body>
      <S.Footer>{footer}</S.Footer>
    </S.Card>
  );
}
