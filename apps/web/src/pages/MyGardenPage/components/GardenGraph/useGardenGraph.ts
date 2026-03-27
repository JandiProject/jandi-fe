import { useMemo, useState } from "react";
import type { JandiItem, JandiPeriod } from "../../MyGardenPage.mocks";
import { DEFAULT_CATEGORY_COLORS } from "../../MyGardenPage.constants";
import {
  buildDayCells,
  getFirstDate,
  getMinMaxBounds,
  groupPostsByCategory,
} from "./gardenGraph.utils";
import { MOCK_DAY_RECORD_POSTS } from "./GardenGraph.mocks";

interface UseGardenGraphParams {
  year: number;
  month: number;
  jandiData: JandiItem[];
  period?: JandiPeriod;
}

export function useGardenGraph({
  year,
  month,
  jandiData,
  period,
}: UseGardenGraphParams) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const bounds = useMemo(
    () => getMinMaxBounds(jandiData, period),
    [jandiData, period]
  );
  const firstDate = useMemo(
    () => getFirstDate(jandiData, period),
    [jandiData, period]
  );
  const days = useMemo(
    () =>
      buildDayCells(year, month, jandiData, DEFAULT_CATEGORY_COLORS, firstDate),
    [year, month, jandiData, firstDate]
  );
  const postsByCategory = useMemo(
    () => groupPostsByCategory(MOCK_DAY_RECORD_POSTS),
    []
  );

  // 같은 날짜 클릭 시 토글(다시 클릭하면 선택 해제)
  const handleDayClick = (day: number | null) => {
    if (day === null) return;
    setSelectedDay((prev) => (prev === day ? null : day));
  };

  const handleCloseDetail = () => setSelectedDay(null);

  const isDetailView = selectedDay !== null;
  const monthName = `${month}월`;

  return {
    selectedDay,
    isDetailView,
    bounds,
    days,
    monthName,
    postsByCategory,
    handleDayClick,
    handleCloseDetail,
  };
}
