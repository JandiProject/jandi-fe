import type { GardenFriend } from "../../GardenGraph.types";
import * as S from "./LegendSection.styled";

interface LegendSectionProps {
  title: string;
  friends: GardenFriend[];
}

export function LegendSection({ title, friends }: LegendSectionProps) {
  return (
    <S.Section>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.List>
        {friends.map((friend) => (
          <S.Item key={friend.name}>
            <S.Icon />
            <S.ItemContent>
              <S.ItemName>{friend.name}</S.ItemName>
              <S.ItemSub>{friend.category}</S.ItemSub>
            </S.ItemContent>
          </S.Item>
        ))}
      </S.List>
    </S.Section>
  );
}
