import { PeriodSelector } from "../PeriodSelector";
import * as S from "./GardenGraphHeader.styled";

interface GardenGraphHeaderProps {
  year: number;
  month: number;
  monthName: string;
  isDetailView: boolean;
  selectedDay: number | null;
  bounds: {
    minYear: number;
    minMonth: number;
    maxYear: number;
    maxMonth: number;
  };
  onCloseDetail: () => void;
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: number) => void;
}

export function GardenGraphHeader({
  year,
  month,
  monthName,
  isDetailView,
  selectedDay,
  bounds,
  onCloseDetail,
  onYearChange,
  onMonthChange,
}: GardenGraphHeaderProps) {
  return (
    <S.Header>
      <S.HeaderLeft>
        <S.Title>
          {year}년 {monthName}
          {isDetailView ? ` ${selectedDay}일의` : ""} 잔디밭
        </S.Title>
        <S.Subtitle>
          {isDetailView ? "comment" : "정원이 무성하게 자라고 있습니다"}
        </S.Subtitle>
      </S.HeaderLeft>
      <S.HeaderRight>
        {isDetailView ? (
          <S.BackButton
            type="button"
            onClick={onCloseDetail}
            aria-label="달력 보기"
          >
            ← 달력 보기
          </S.BackButton>
        ) : (
          <PeriodSelector
            year={year}
            month={month}
            minYear={bounds.minYear}
            minMonth={bounds.minMonth}
            maxYear={bounds.maxYear}
            maxMonth={bounds.maxMonth}
            onYearChange={onYearChange}
            onMonthChange={onMonthChange}
          />
        )}
      </S.HeaderRight>
    </S.Header>
  );
}
