import styled from "@emotion/styled";

export const Card = styled.article`
  flex: 1;
  min-width: 0;
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  border-radius: 12px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.gray[500]};
`;

export const Value = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Description = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.gray[500]};
`;

export const IconPlaceholder = styled.span`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.gray[200]};
`;
