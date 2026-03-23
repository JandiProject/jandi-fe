import { DEFAULT_CATEGORY_COLORS } from "../../../../MyGardenPage.constants";
import type { DayRecordPost } from "../../GardenGraph.mocks";
import { DayRecordPosts } from "../DayRecordPosts";
import * as S from "./GardenDetail.styled";

interface GardenDetailProps {
  year: number;
  month: number;
  day: number;
  postsByCategory: Record<string, DayRecordPost[]>;
}

export function GardenDetail({
  year,
  month,
  day,
  postsByCategory,
}: GardenDetailProps) {
  const dateStr = `${year}년 ${month}월 ${day}일`;

  return (
    <S.Section>
      <S.GardenArea>
        <S.FunButton type="button">캐릭터를 놀아주는 버튼</S.FunButton>
      </S.GardenArea>
      <S.RecordArea>
        <S.RecordTitle>{dateStr}의 기록</S.RecordTitle>
        <S.RecordContent>
          <DayRecordPosts
            postsByCategory={postsByCategory}
            categoryColors={DEFAULT_CATEGORY_COLORS}
          />
        </S.RecordContent>
      </S.RecordArea>
    </S.Section>
  );
}
