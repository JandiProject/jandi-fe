import styled from "@emotion/styled";

export const Page = styled.div`
  position: relative;
  min-height: calc(100vh - 65px);
  overflow: hidden;
  background: ${({ theme }) => theme.gray[100]};
`;

export const SplitBackground = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
`;

export const LeftBackground = styled.div`
  background: #efefef;
`;

export const RightBackground = styled.div`
  background: #767676;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 140px);
  padding: 80px 0;
`;

export const FormSection = styled.section`
  width: 100%;
  max-width: 448px;
  padding-top: 8px;
  justify-self: center;
`;

export const WelcomeTitle = styled.h1`
  margin: 0;
  color: #1a1a1a;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
`;

export const WelcomeDescription = styled.p`
  margin: 8px 0 0;
  color: #6b6b6b;
  font-size: 16px;
  line-height: 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
`;

export const OptionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const SignupText = styled.p`
  margin: 28px 0 0;
  color: #6b6b6b;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;
