import type { ReactNode } from "react";
import { PlatformStepCard } from "../PlatformStepCard";
import * as S from "../PlatformStepCard/PlatformStepCard.styled";

interface BlogVerificationStepProps {
  actionButton: ReactNode;
}

export function BlogVerificationStep({
  actionButton,
}: BlogVerificationStepProps) {
  return (
    <PlatformStepCard
      header={<S.SectionTitle>블로그 소유권 인증</S.SectionTitle>}
      footer={actionButton}
    >
      <S.SectionDescription>
        {
          "인증 메일이 전송되었습니다.\n메일에서 인증을 완료한 뒤 다음 단계로 진행해 주세요."
        }
      </S.SectionDescription>
    </PlatformStepCard>
  );
}
