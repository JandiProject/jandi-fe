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

  const dateText = day !== null ? `${day}일` : "";
  const ariaLabel =
    day !== null
      ? postCount > 0
        ? `${dateText}, ${postCount}개`
        : dateText
      : undefined;

  return (
    <S.Cell
      type="button"
      aria-label={ariaLabel}
      aria-hidden={day === null}
      aria-pressed={clickable ? selected : undefined}
      disabled={!clickable}
      $variant={variant}
      $color={variant === "filled" ? color : null}
      $selected={selected}
      $clickable={clickable}
      $disabled={!clickable}
      onClick={onClick}
    />
  );
}
