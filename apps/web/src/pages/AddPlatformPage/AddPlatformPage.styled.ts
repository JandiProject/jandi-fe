import styled from "@emotion/styled";

export const Page = styled.div`
  min-height: calc(100vh - 65px);
  background: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: 96px 24px 120px;
`;

export const StepIndicator = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StepItem = styled.li`
  display: flex;
  align-items: center;
`;

export const StepCircle = styled.div<{
  $highlighted: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $highlighted }) => ($highlighted ? "#171717" : "#d4d4d4")};
  color: ${({ $highlighted }) => ($highlighted ? "#ffffff" : "#525252")};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const StepLine = styled.div`
  width: 64px;
  height: 2px;
  margin: 0 8px;
  background: #d4d4d4;
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: min(100%, 738px);
  min-height: 368px;
  padding: 32px;
  border-radius: 20px;
  background: #f0f0f0;
`;

export const SectionBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const SectionTitle = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

export const SectionDescription = styled.p`
  margin: 20px auto 0;
  color: #525252;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  padding-top: 20px;
`;

export const ResultTitle = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
`;
