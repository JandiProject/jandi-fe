import type { JandiItem, JandiPeriod } from "../../MyGardenPage.mocks";

export interface DayCellData {
  day: number | null;
  category: string | null;
  postCount: number;
  color: string | null;
  isFuture?: boolean;
  /** 조회 불가 여부 */
  isDisabled?: boolean;
}

/**
 * PeriodSelector에서 사용할 수 있는 년/월 범위를 계산합니다.
 * - max: 항상 오늘
 * - min: jandiData 최초 날짜 > period.start > 오늘(데이터 없을 때)
 */
export function getMinMaxBounds(
  jandiData: JandiItem[],
  period: JandiPeriod | undefined
): { minYear: number; minMonth: number; maxYear: number; maxMonth: number } {
  const now = new Date();
  const maxYear = now.getFullYear();
  const maxMonth = now.getMonth() + 1;

  let minYear: number;
  let minMonth: number;
  if (jandiData.length > 0) {
    const sorted = [...jandiData].sort((a, b) => a.date.localeCompare(b.date));
    const [y, m] = sorted[0].date.split("-").map(Number);
    minYear = y;
    minMonth = m;
  } else if (period) {
    const [y, m] = period.start.split("-").map(Number);
    minYear = y;
    minMonth = m;
  } else {
    minYear = maxYear;
    minMonth = maxMonth;
  }

  if (minYear > maxYear || (minYear === maxYear && minMonth > maxMonth)) {
    minYear = maxYear;
    minMonth = maxMonth;
  }
  return { minYear, minMonth, maxYear, maxMonth };
}

/** 조회 가능한 가장 이른 날짜 (jandiData 최초 또는 period.start) */
export function getFirstDate(
  jandiData: JandiItem[],
  period: JandiPeriod | undefined
): string | null {
  if (jandiData.length > 0) {
    const sorted = [...jandiData].sort((a, b) => a.date.localeCompare(b.date));
    return sorted[0].date;
  }
  return period?.start ?? null;
}

/** (year, month, day)가 firstDate보다 이전인지 비교 */
export function isBeforeFirstDate(
  year: number,
  month: number,
  day: number,
  firstDate: string | null
): boolean {
  if (!firstDate) return false;
  const [fy, fm, fd] = firstDate.split("-").map(Number);
  if (year < fy) return true;
  if (year > fy) return false;
  if (month < fm) return true;
  if (month > fm) return false;
  return day < fd;
}

/** (year, month, day)가 오늘보다 나중인지 비교 */
export function isFutureDate(
  year: number,
  month: number,
  day: number
): boolean {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  if (year > y) return true;
  if (year < y) return false;
  if (month > m) return true;
  if (month < m) return false;
  return day > d;
}

/**
 * 달력 그리드용 셀 배열을 생성합니다.
 * - 앞쪽: firstDay만큼 패딩(day: null)으로 요일 정렬
 * - isDisabled: 클릭 불가, 배경색으로 비활성 표시
 */
export function buildDayCells(
  year: number,
  month: number,
  jandiData: JandiItem[],
  categoryColors: Record<string, string>,
  firstDate: string | null
): DayCellData[] {
  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  const cells: DayCellData[] = [];
  const dataByDate = new Map(
    jandiData.filter((j) => j.post_count > 0).map((j) => [j.date, j])
  );

  // 1일이 시작되는 요일까지 빈 셀(패딩) 추가
  for (let i = 0; i < firstDay; i++) {
    cells.push({
      day: null,
      category: null,
      postCount: 0,
      color: null,
    });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const item = dataByDate.get(dateStr);
    const category = item?.category ?? null;
    const postCount = item?.post_count ?? 0;
    const color = category ? (categoryColors[category] ?? null) : null;
    const isFuture = isFutureDate(year, month, d);
    const isBeforeFirst = isBeforeFirstDate(year, month, d, firstDate);
    const isDisabled = isFuture || isBeforeFirst;
    cells.push({
      day: d,
      category: isDisabled ? null : category,
      postCount: isDisabled ? 0 : postCount,
      color: isDisabled ? null : color,
      isFuture,
      isDisabled,
    });
  }

  return cells;
}

/** 포스트 배열을 category 키로 그룹화 (DayRecordPosts 등에서 사용) */
export function groupPostsByCategory<T extends { category: string }>(
  posts: T[]
): Record<string, T[]> {
  const map: Record<string, T[]> = {};
  for (const p of posts) {
    if (!map[p.category]) map[p.category] = [];
    map[p.category].push(p);
  }
  return map;
}
