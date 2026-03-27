import * as S from "./SectionCard.styled";

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <S.Section>
      <S.Title>{title}</S.Title>
      {children}
    </S.Section>
  );
}
