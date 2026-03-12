import styled from "@emotion/styled";

export const Button = styled.button<{ $width: string | number }>`
  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width};
  height: 40px;
  padding: 0 16px;
  border: 0;
  border-radius: 10px;
  background: #676767;
  color: #fdfcfa;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background: #5d5d5d;
  }
`;
