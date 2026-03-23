import styled from "@emotion/styled";

export const Section = styled.div``;

export const SectionTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Icon = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.gray[200]};
  flex-shrink: 0;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const ItemName = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
`;

export const ItemSub = styled.span`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.gray[500]};
`;
