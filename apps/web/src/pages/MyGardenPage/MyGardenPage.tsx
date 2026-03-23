import { useState } from "react";
import {
  CategoryRatio,
  GardenGraph,
  RecentPosts,
  SummaryCards,
} from "./components";
import { MOCK_MY_GARDEN_PAGE } from "./MyGardenPage.mocks";
import * as S from "./MyGardenPage.styled";
import { useGardenGraph } from "./components/GardenGraph/useGardenGraph";

export function MyGardenPage() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const { user_summary, jandi_data, period } = MOCK_MY_GARDEN_PAGE;

  const gardenGraph = useGardenGraph({
    year,
    month,
    jandiData: jandi_data,
    period,
  });

  return (
    <S.Page>
      <S.Header>
        <S.TitleGroup>
          <S.Title>나의 정원</S.Title>
          <S.Subtitle>블로그 활동을 한눈에 확인하세요</S.Subtitle>
        </S.TitleGroup>
      </S.Header>
      <SummaryCards userSummary={user_summary} />
      <GardenGraph
        key={`${year}-${month}`}
        year={year}
        month={month}
        onYearChange={setYear}
        onMonthChange={setMonth}
        {...gardenGraph}
      />
      <S.BottomSection>
        <S.BottomRow>
          <CategoryRatio />
          <RecentPosts />
        </S.BottomRow>
      </S.BottomSection>
    </S.Page>
  );
}
