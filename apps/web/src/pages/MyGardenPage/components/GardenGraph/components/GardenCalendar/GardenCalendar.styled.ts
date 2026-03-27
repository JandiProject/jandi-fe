import styled from "@emotion/styled";

export const GridWrapper = styled.div`
  flex: 1;
  min-width: 0;
  padding: 1rem;
  background: ${({ theme }) => theme.gray[100]};
  border-radius: 8px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
`;

export const Sidebar = styled.aside`
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
