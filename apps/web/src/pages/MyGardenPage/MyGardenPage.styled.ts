import styled from "@emotion/styled";

export const Page = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const TitleGroup = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  margin: 0 0 0.25rem 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.gray[500]};
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BottomRow = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
