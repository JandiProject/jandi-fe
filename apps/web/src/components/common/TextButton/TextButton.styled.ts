import styled from "@emotion/styled";

export const TextButton = styled.a<{ $fontWeight: 400 | 500 }>`
  color: #000;
  font-size: 14px;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  line-height: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
