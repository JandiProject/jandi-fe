import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  border-radius: 12px;
  background: white;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
`;
