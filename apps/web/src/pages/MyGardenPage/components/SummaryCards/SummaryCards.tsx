import type { UserSummary } from "../../MyGardenPage.mocks";
import { StatCard } from "../StatCard";
import * as S from "./SummaryCards.styled";

interface SummaryCardsProps {
  userSummary: UserSummary;
}

export function SummaryCards({ userSummary }: SummaryCardsProps) {
  const totalPosts = userSummary.total_posts;
  const activeDays = userSummary.total_active_days;
  const currentStreak = userSummary.current_streak;
  const longestStreak = userSummary.max_streak;

  return (
    <S.Wrapper>
      <StatCard label="총 글 수" value={totalPosts} description="전체 포스팅" />
      <StatCard
        label="활동일수"
        value={activeDays}
        description="글 작성한 날"
      />
      <StatCard
        label="현재 기록"
        value={`${currentStreak}일`}
        description="연속 작성 중"
      />
      <StatCard
        label="최장 기록"
        value={`${longestStreak}일`}
        description="최고 기록"
      />
    </S.Wrapper>
  );
}
