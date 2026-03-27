import { GardenCalendar, GardenDetail, GardenGraphHeader } from "./components";
import {
  DEFAULT_GARDEN_FRIENDS,
  DEFAULT_PLANT_FRIENDS,
  type GardenGraphProps,
} from "./GardenGraph.types";
import * as S from "./GardenGraph.styled";

export function GardenGraph({
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1,
  onYearChange,
  onMonthChange,
  gardenFriends = DEFAULT_GARDEN_FRIENDS,
  plantFriends = DEFAULT_PLANT_FRIENDS,
  selectedDay,
  isDetailView,
  bounds,
  days,
  monthName,
  postsByCategory,
  handleDayClick,
  handleCloseDetail,
}: GardenGraphProps) {
  return (
    <S.Section>
      <GardenGraphHeader
        year={year}
        month={month}
        monthName={monthName}
        isDetailView={isDetailView}
        selectedDay={selectedDay}
        bounds={bounds}
        onCloseDetail={handleCloseDetail}
        onYearChange={onYearChange}
        onMonthChange={onMonthChange}
      />
      <S.Content>
        {isDetailView ? (
          <GardenDetail
            year={year}
            month={month}
            day={selectedDay!}
            postsByCategory={postsByCategory}
          />
        ) : (
          <GardenCalendar
            days={days}
            monthName={monthName}
            selectedDay={selectedDay}
            gardenFriends={gardenFriends}
            plantFriends={plantFriends}
            onDayClick={handleDayClick}
          />
        )}
      </S.Content>
    </S.Section>
  );
}
