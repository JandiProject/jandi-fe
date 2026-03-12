import {
  Button,
  CheckboxField,
  InputField,
  TextButton,
} from "@/components/common";
import * as S from "./LoginPage.styled";

export function LoginPage() {
  return (
    <S.Page>
      <S.SplitBackground aria-hidden="true">
        <S.LeftBackground />
        <S.RightBackground />
      </S.SplitBackground>

      <S.Content>
        <S.FormSection>
          <S.WelcomeTitle>다시 만나서 반가워요</S.WelcomeTitle>
          <S.WelcomeDescription>
            정원에 물을 주러 오셨군요!
          </S.WelcomeDescription>

          <S.Form>
            <InputField id="email" name="email" type="email" label="이메일" />

            <InputField
              id="password"
              name="password"
              type="password"
              label="비밀번호"
            />

            <S.OptionsRow>
              <CheckboxField label="로그인 상태 유지" name="remember" />

              <TextButton href="#" fontWeight={400}>
                비밀번호 찾기
              </TextButton>
            </S.OptionsRow>

            <Button type="submit">로그인</Button>
          </S.Form>

          <S.SignupText>
            아직 정원이 없으신가요? <TextButton href="#">회원가입</TextButton>
          </S.SignupText>
        </S.FormSection>
      </S.Content>
    </S.Page>
  );
}
