import type { ReactNode } from "react";
import { PlatformStepCard } from "../PlatformStepCard";
import * as S from "../PlatformStepCard/PlatformStepCard.styled";

interface VerificationResultStepProps {
  verificationComplete: boolean;
  actionButton: ReactNode;
}

export function VerificationResultStep({
  verificationComplete,
  actionButton,
}: VerificationResultStepProps) {
  return (
    <PlatformStepCard
      header={
        <S.ResultTitle>
          {verificationComplete
            ? "정원이 준비됐어요!"
            : "아직 인증이 완료되지 않았습니다."}
        </S.ResultTitle>
      }
      footer={actionButton}
    >
      <S.SectionDescription>
        {verificationComplete
          ? "플랫폼 등록이 완료되었습니다.\n이제 정원에서 활동을 확인할 수 있어요."
          : "메일 인증을 마친 뒤 다시 확인해 주세요.\n인증 전까지는 플랫폼 등록이 보류됩니다."}
      </S.SectionDescription>
    </PlatformStepCard>
  );
}
