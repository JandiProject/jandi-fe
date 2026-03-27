import type { DayCellData } from "../../gardenGraph.utils";
import { DayCell } from "@jandi-fe/ui";
import type { GardenFriend } from "../../GardenGraph.types";
import { LegendSection } from "../LegendSection";
import * as S from "./GardenCalendar.styled";

interface GardenCalendarProps {
  days: DayCellData[];
  monthName: string;
  selectedDay: number | null;
  gardenFriends: GardenFriend[];
  plantFriends: GardenFriend[];
  onDayClick: (day: number | null) => void;
}

export function GardenCalendar({
  days,
  monthName,
  selectedDay,
  gardenFriends,
  plantFriends,
  onDayClick,
}: GardenCalendarProps) {
  return (
    <>
      <S.GridWrapper>
        <S.Grid>
          {days.map((cell, i) => (
            <DayCell
              key={i}
              day={cell.day}
              category={cell.category}
              postCount={cell.postCount}
              color={cell.color}
              isDisabled={cell.isDisabled}
              selected={selectedDay === cell.day}
              onClick={() => onDayClick(cell.day)}
            />
          ))}
        </S.Grid>
      </S.GridWrapper>
      <S.Sidebar>
        <LegendSection
          title={`${monthName}의 정원 친구들`}
          friends={gardenFriends}
        />
        <LegendSection
          title={`${monthName}의 식물 친구들`}
          friends={plantFriends}
        />
      </S.Sidebar>
    </>
  );
}
