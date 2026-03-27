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
