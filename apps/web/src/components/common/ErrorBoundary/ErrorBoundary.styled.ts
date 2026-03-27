import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: ${({ theme }) => theme.gray[50]};
`;

export const Card = styled.div`
  max-width: 400px;
  padding: 2rem;
  border-radius: 12px;
  background: white;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  text-align: center;
`;

export const IconWrapper = styled.div<{
  $variant: "ClientError" | "ServerError" | "NetworkError" | "Error";
}>`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background: ${({ theme, $variant }) =>
    $variant === "ClientError"
      ? theme.gray[200]
      : $variant === "NetworkError"
        ? "#fef3c7"
        : $variant === "ServerError"
          ? "#fee2e2"
          : theme.gray[300]};
  color: ${({ theme, $variant }) =>
    $variant === "ClientError"
      ? theme.gray[600]
      : $variant === "NetworkError"
        ? "#b45309"
        : $variant === "ServerError"
          ? "#dc2626"
          : theme.gray[700]};
`;

export const Message = styled.p`
  margin: 0 0 1.5rem;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.gray[800]};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const PrimaryButton = styled(StyledButton)`
  background: ${({ theme }) => theme.gray[700]};
  color: white;
`;

export const SecondaryButton = styled(StyledButton)`
  background: ${({ theme }) => theme.gray[200]};
  color: ${({ theme }) => theme.gray[800]};
`;

export const DebugSection = styled.details`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.gray[200]};
  text-align: left;

  & summary {
    font-size: 12px;
    color: ${({ theme }) => theme.gray[500]};
    cursor: pointer;
    margin-bottom: 0.5rem;
  }

  & pre {
    margin: 0;
    font-size: 11px;
    font-family: monospace;
    white-space: pre-wrap;
    word-break: break-all;
    color: ${({ theme }) => theme.gray[600]};
  }
`;
