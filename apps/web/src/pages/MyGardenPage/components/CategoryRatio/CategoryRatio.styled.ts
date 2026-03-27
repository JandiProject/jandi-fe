import styled from "@emotion/styled";

export const ChartPlaceholder = styled.div`
  width: 100%;
  min-height: 120px;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const ChartBarContainer = styled.div`
  display: flex;
  height: 100%;
  min-height: 100px;
  border-radius: 6px;
  overflow: hidden;
`;

export const ChartBar = styled.div<{ $width: number; $color: string }>`
  flex: ${({ $width }) => $width} 1 0;
  min-width: 4px;
  background: ${({ $color }) => $color};
`;

export const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

export const CategoryDot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;
