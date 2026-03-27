import styled from "@emotion/styled";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: min(100%, 738px);
  min-height: 368px;
  padding: 32px;
  border-radius: 20px;
  background: #f0f0f0;
`;

export const Header = styled.div``;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: auto;
  padding-top: 20px;
`;

export const SectionTitle = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

export const ResultTitle = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: 600;
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
