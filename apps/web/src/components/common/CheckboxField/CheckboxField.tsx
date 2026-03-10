import type { InputHTMLAttributes } from "react";
import * as S from "./CheckboxField.styled";

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function CheckboxField({
  label,
  type = "checkbox",
  ...inputProps
}: CheckboxFieldProps) {
  return (
    <S.Label>
      <S.Checkbox type={type} {...inputProps} />
      <span>{label}</span>
    </S.Label>
  );
}
