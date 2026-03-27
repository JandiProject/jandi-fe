import type { DayCellData } from "./gardenGraph.utils";
import type { DayRecordPost } from "./GardenGraph.mocks";

export interface GardenFriend {
  name: string;
  category: string;
}

export interface GardenGraphBounds {
  minYear: number;
  minMonth: number;
  maxYear: number;
  maxMonth: number;
}

export interface GardenGraphProps {
  year?: number;
  month?: number;
  onYearChange?: (year: number) => void;
  onMonthChange?: (month: number) => void;
  gardenFriends?: GardenFriend[];
  plantFriends?: GardenFriend[];
  selectedDay: number | null;
  isDetailView: boolean;
  bounds: GardenGraphBounds;
  days: DayCellData[];
  monthName: string;
  postsByCategory: Record<string, DayRecordPost[]>;
  handleDayClick: (day: number | null) => void;
  handleCloseDetail: () => void;
}

export const DEFAULT_GARDEN_FRIENDS: GardenFriend[] = [
  { name: "두더지", category: "category" },
  { name: "돌맹이", category: "category" },
  { name: "달팽이", category: "category" },
];

export const DEFAULT_PLANT_FRIENDS: GardenFriend[] = [
  { name: "당근", category: "category" },
  { name: "꽃", category: "category" },
  { name: "버섯", category: "category" },
];
