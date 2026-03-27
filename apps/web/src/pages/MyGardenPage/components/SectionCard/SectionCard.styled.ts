import styled from "@emotion/styled";

export const Section = styled.section`
  flex: 1;
  min-width: 0;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  border-radius: 12px;
  background: white;
`;

export const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
`;
