import type { InputHTMLAttributes } from "react";
import * as S from "./InputField.styled";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export function InputField({
  id,
  label,
  type = "text",
  ...inputProps
}: InputFieldProps) {
  return (
    <S.Field>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} type={type} {...inputProps} />
    </S.Field>
  );
}
