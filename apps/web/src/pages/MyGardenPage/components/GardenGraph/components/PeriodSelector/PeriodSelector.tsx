import * as S from "./PeriodSelector.styled";

interface PeriodSelectorProps {
  year: number;
  month: number;
  minYear: number;
  minMonth: number;
  maxYear: number;
  maxMonth: number;
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: number) => void;
}

/** (y, m)이 (refY, refM) 이전 또는 같은 지 비교 */
function isBeforeOrEqual(
  y: number,
  m: number,
  refY: number,
  refM: number
): boolean {
  return y < refY || (y === refY && m <= refM);
}

/** (y, m)이 (refY, refM) 이후 또는 같은 지 비교 */
function isAfterOrEqual(
  y: number,
  m: number,
  refY: number,
  refM: number
): boolean {
  return y > refY || (y === refY && m >= refM);
}

export function PeriodSelector({
  year,
  month,
  minYear,
  minMonth,
  maxYear,
  maxMonth,
  onYearChange,
  onMonthChange,
}: PeriodSelectorProps) {
  const isAtMin = isBeforeOrEqual(year, month, minYear, minMonth);
  const isAtMax = isAfterOrEqual(year, month, maxYear, maxMonth);

  // 1월 이전: 전년 12월로, 12월 다음: 다음해 1월로
  const handlePrev = () => {
    if (isAtMin) return;
    if (month === 1) {
      onYearChange?.(year - 1);
      onMonthChange?.(12);
    } else {
      onMonthChange?.(month - 1);
    }
  };

  const handleNext = () => {
    if (isAtMax) return;
    if (month === 12) {
      onYearChange?.(year + 1);
      onMonthChange?.(1);
    } else {
      onMonthChange?.(month + 1);
    }
  };

  return (
    <S.Wrapper>
      <S.ArrowButton
        type="button"
        onClick={handlePrev}
        aria-label="이전 달"
        disabled={isAtMin}
      >
        &lt;
      </S.ArrowButton>
      <S.PeriodText>
        {year}년 {month}월
      </S.PeriodText>
      <S.ArrowButton
        type="button"
        onClick={handleNext}
        aria-label="다음 달"
        disabled={isAtMax}
      >
        &gt;
      </S.ArrowButton>
    </S.Wrapper>
  );
}
