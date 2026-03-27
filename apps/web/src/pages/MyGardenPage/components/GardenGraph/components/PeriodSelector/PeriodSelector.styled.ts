import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ArrowButton = styled.button`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.gray[300]};
  border-radius: 8px;
  background: white;
  font-size: 1rem;
  cursor: pointer;
  color: inherit;
  line-height: 1;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.gray[100]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PeriodText = styled.span`
  min-width: 7rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
`;
