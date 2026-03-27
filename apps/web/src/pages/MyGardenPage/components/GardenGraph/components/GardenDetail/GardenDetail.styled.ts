import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  gap: 1rem;
  width: 100%;
  min-height: 320px;
`;

export const GardenArea = styled.div`
  flex: 1;
  min-width: 0;
  padding: 1.5rem;
  background: ${({ theme }) => theme.gray[100]};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  position: relative;
`;

export const FunButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.gray[400]};
  border-radius: 8px;
  background: ${({ theme }) => theme.gray[500]};
  color: white;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.gray[600]};
  }
`;

export const RecordArea = styled.aside`
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const RecordTitle = styled.h3`
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
`;

export const RecordContent = styled.div`
  flex: 1;
  min-height: 200px;
  background: ${({ theme }) => theme.gray[100]};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  padding: 1rem;
  overflow-y: auto;
`;
