import type { ReactNode } from "react";
import { PlatformStepCard } from "../PlatformStepCard";
import * as S from "../PlatformStepCard/PlatformStepCard.styled";

interface BlogUrlStepProps {
  input: ReactNode;
  actionButton: ReactNode;
}

export function BlogUrlStep({ input, actionButton }: BlogUrlStepProps) {
  return (
    <PlatformStepCard
      header={<S.SectionTitle>블로그 주소를 입력하세요</S.SectionTitle>}
      footer={actionButton}
    >
      {input}
    </PlatformStepCard>
  );
}
