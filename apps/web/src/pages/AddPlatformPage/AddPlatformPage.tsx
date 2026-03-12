import { Button, InputField } from "@/components/common";
import { useState } from "react";
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

        <S.Card>
          {step === 1 ? (
            <>
              <S.SectionTitle>블로그 주소를 입력하세요</S.SectionTitle>

              <S.SectionBody>
                <InputField id="url" label="내 블로그" type="url"></InputField>
              </S.SectionBody>

              <S.Footer>
                <Button
                  height={48}
                  backgroundColor="#000"
                  onClick={handleBlogUrl}
                >
                  다음
                </Button>
              </S.Footer>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <S.SectionTitle>블로그 소유권 인증</S.SectionTitle>

              <S.SectionBody>
                <S.SectionDescription>
                  {
                    "인증 메일이 전송되었습니다.\n메일에서 인증을 완료한 뒤 다음 단계로 진행해 주세요."
                  }
                </S.SectionDescription>
              </S.SectionBody>

              <S.Footer>
                <Button
                  height={48}
                  backgroundColor="#000"
                  onClick={handleEmailConfirm}
                >
                  다음
                </Button>
              </S.Footer>
            </>
          ) : null}

          {step === 3 ? (
            <>
              <S.ResultTitle>
                {verificationComplete
                  ? "정원이 준비됐어요!"
                  : "아직 인증이 완료되지 않았습니다."}
              </S.ResultTitle>

              <S.SectionBody>
                <S.SectionDescription>
                  {verificationComplete
                    ? "플랫폼 등록이 완료되었습니다.\n이제 정원에서 활동을 확인할 수 있어요."
                    : "메일 인증을 마친 뒤 다시 확인해 주세요.\n인증 전까지는 플랫폼 등록이 보류됩니다."}
                </S.SectionDescription>
              </S.SectionBody>

              <S.Footer>
                <Button
                  height={48}
                  backgroundColor="#000"
                  onClick={
                    verificationComplete
                      ? handleMoveToGarden
                      : handleVerifyAgain
                  }
                >
                  {verificationComplete
                    ? "정원으로 이동"
                    : "인증 상태 다시 확인"}
                </Button>
              </S.Footer>
            </>
          ) : null}
        </S.Card>
      </S.Content>
    </S.Page>
  );
}
