import styled from "@emotion/styled";

export const Section = styled.section`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

export const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 600;
`;

export const CategoryCount = styled.span`
  color: ${({ theme }) => theme.gray[500]};
  font-weight: 400;
`;

export const CategoryBadge = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`;

export const PostList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PostItem = styled.li`
  width: 100%;
  min-height: 40px;
  background: ${({ theme }) => theme.gray[100]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  font-size: 0.875rem;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const EmptyMessage = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.gray[500]};
`;
