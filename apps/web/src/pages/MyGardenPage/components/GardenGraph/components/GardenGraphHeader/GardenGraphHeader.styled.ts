import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const HeaderLeft = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.gray[500]};
`;

export const HeaderRight = styled.div`
  flex-shrink: 0;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.gray[300]};
  border-radius: 8px;
  background: white;
  font-size: 0.875rem;
  cursor: pointer;
  color: inherit;

  &:hover {
    background: ${({ theme }) => theme.gray[100]};
  }
`;
