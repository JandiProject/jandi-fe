import * as S from "./DayCell.styled";

export interface DayCellProps {
  day: number | null;
  category: string | null;
  postCount?: number;
  color?: string | null;
  /** 조회 불가 여부 - 비활성화 */
  isDisabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function DayCell({
  day,
  category,
  postCount = 0,
  color = null,
  isDisabled = false,
  selected = false,
  onClick,
}: DayCellProps) {
  const variant = category && postCount > 0 ? "filled" : "empty";
  const clickable = day !== null && !isDisabled;

  return (
    <S.Cell
      type="button"
      disabled={!clickable}
      $variant={variant}
      $color={variant === "filled" ? color : null}
      $selected={selected}
      $clickable={clickable}
      $disabled={isDisabled}
      onClick={clickable ? onClick : undefined}
    />
  );
}
