import styled from "@emotion/styled";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 14px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: #c6c6c6;
  color: #1a1a1a;
  font-size: 14px;

  &::placeholder {
    color: rgba(26, 26, 26, 0.48);
  }

  &:focus {
    outline: none;
    border-color: rgba(26, 26, 26, 0.25);
    background: #d1d1d1;
  }
`;
