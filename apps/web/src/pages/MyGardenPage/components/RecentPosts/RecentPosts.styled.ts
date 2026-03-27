import styled from "@emotion/styled";

export const PostList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PostCard = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  border-radius: 8px;
  overflow: hidden;
  background: white;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.gray[300]};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    width: 100%;
  }
`;

export const CategoryDot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  min-width: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

export const CategoryName = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.gray[500]};
  flex-shrink: 0;
`;

export const CardContent = styled.div`
  flex: 1;
  min-width: 0;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CardTitle = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
`;

export const CardDate = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.gray[500]};
  flex-shrink: 0;
`;

export const PostCardPlaceholder = styled.li`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.gray[100]};
  border-radius: 8px;
  border: 1px dashed ${({ theme }) => theme.gray[300]};
`;
