import styled from "@emotion/styled";

export const Button = styled.button<{
  $width: string | number;
  $height: string | number;
  $backgroundColor?: string;
}>`
  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width};
  height: ${({ $height }) =>
    typeof $height === "number" ? `${$height}px` : $height};
  padding: 0 16px;
  border: 0;
  border-radius: 10px;
  background: ${({ $backgroundColor }) => $backgroundColor ?? "#676767"};
  color: #fdfcfa;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background: #5d5d5d;
  }
`;
