import { Button, InputField } from "@/components/common";
import { useState } from "react";
import {
  BlogUrlStep,
  BlogVerificationStep,
  VerificationResultStep,
} from "./components";
import * as S from "./AddPlatformPage.styled";

type Step = 1 | 2 | 3;

export function AddPlatformPage() {
  const [step, setStep] = useState<Step>(1);
  const [verificationComplete, setVerificationComplete] = useState(false);

  // 임시
  const handleBlogUrl = () => {
    setStep(2);
  };

  const handleEmailConfirm = () => {
    setStep(3);
  };

  const handleVerifyAgain = () => {
    setVerificationComplete(true);
  };

  const handleMoveToGarden = () => {};

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <BlogUrlStep
            input={
              <InputField id="url" label="내 블로그" type="url"></InputField>
            }
            actionButton={
              <Button
                height={48}
                backgroundColor="#000"
                onClick={handleBlogUrl}
              >
                다음
              </Button>
            }
          />
        );
      case 2:
        return (
          <BlogVerificationStep
            actionButton={
              <Button
                height={48}
                backgroundColor="#000"
                onClick={handleEmailConfirm}
              >
                다음
              </Button>
            }
          />
        );
      case 3:
        return (
          <VerificationResultStep
            verificationComplete={verificationComplete}
            actionButton={
              <Button
                height={48}
                backgroundColor="#000"
                onClick={
                  verificationComplete ? handleMoveToGarden : handleVerifyAgain
                }
              >
                {verificationComplete ? "정원으로 이동" : "인증 상태 다시 확인"}
              </Button>
            }
          />
        );
    }
  };

  return (
    <S.Page>
      <S.Content>
        <S.StepIndicator aria-label="플랫폼 등록 단계">
          {[1, 2, 3].map((item, index) => {
            const stepNumber = item as Step;
            const isHighlighted = step >= stepNumber;

            return (
              <S.StepItem key={item}>
                <S.StepCircle $highlighted={isHighlighted}>{item}</S.StepCircle>
                {index < 2 ? <S.StepLine aria-hidden="true" /> : null}
              </S.StepItem>
            );
          })}
        </S.StepIndicator>

        {renderStepContent()}
      </S.Content>
    </S.Page>
  );
}
