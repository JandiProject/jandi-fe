import styled from "@emotion/styled";

export const Cell = styled.button<{
  $variant: "empty" | "filled";
  $color: string | null;
  $selected?: boolean;
  $clickable?: boolean;
  $disabled?: boolean;
}>`
  aspect-ratio: 1;
  border-radius: 6px;
  border: none;
  background: ${({ $variant, $color, $disabled, theme }) =>
    $disabled
      ? theme.gray[100]
      : $variant === "filled" && $color
        ? $color
        : theme.gray[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 0.625rem;
  font-weight: 500;
  color: ${({ $variant, $color }) =>
    $variant === "filled" && $color ? "white" : "inherit"};
  text-shadow: ${({ $variant, $color }) =>
    $variant === "filled" && $color ? "0 0 1px rgba(0, 0, 0, 0.5)" : "none"};
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "not-allowed")};
  padding: 0;

  &:hover {
    opacity: ${({ $clickable }) => ($clickable ? 0.9 : 1)};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.gray[700]};
    outline-offset: 2px;
  }
`;
