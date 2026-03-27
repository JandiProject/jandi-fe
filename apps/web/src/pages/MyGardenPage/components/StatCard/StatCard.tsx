import * as S from "./StatCard.styled";

interface StatCardProps {
  label: string;
  value: string | number;
  description: string;
}

export function StatCard({ label, value, description }: StatCardProps) {
  return (
    <S.Card>
      <S.Content>
        <S.Label>{label}</S.Label>
        <S.Value>{value}</S.Value>
        <S.Description>{description}</S.Description>
      </S.Content>
      <S.IconPlaceholder />
    </S.Card>
  );
}
