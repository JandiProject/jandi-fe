export interface UserSummary {
  total_posts: number;
  total_active_days: number;
  current_streak: number;
  max_streak: number;
  color_theme: string;
}

export interface JandiItem {
  date: string;
  post_count: number;
  category: string;
}

export interface JandiPeriod {
  start: string;
  end: string;
}

export interface MyGardenPageData {
  user_summary: UserSummary;
  period: JandiPeriod;
  jandi_data: JandiItem[];
}

export const MOCK_MY_GARDEN_PAGE: MyGardenPageData = {
  user_summary: {
    total_posts: 28,
    total_active_days: 28,
    current_streak: 15,
    max_streak: 23,
    color_theme: "#64748b",
  },
  period: {
    start: "2026-01-01",
    end: "2026-03-31",
  },
  jandi_data: [
    { date: "2026-01-01", post_count: 1, category: "AI" },
    { date: "2026-01-04", post_count: 1, category: "Backend" },
    { date: "2026-01-06", post_count: 1, category: "DevOps" },
    { date: "2026-01-09", post_count: 1, category: "Cloud" },
    { date: "2026-01-12", post_count: 1, category: "Frontend" },
    { date: "2026-01-14", post_count: 1, category: "AI" },
    { date: "2026-01-17", post_count: 1, category: "Backend" },
    { date: "2026-01-20", post_count: 1, category: "Frontend" },
    { date: "2026-01-22", post_count: 1, category: "AI" },
    { date: "2026-01-25", post_count: 1, category: "Backend" },
    { date: "2026-01-28", post_count: 1, category: "기타" },
    { date: "2026-01-31", post_count: 1, category: "Cloud" },
    { date: "2026-02-01", post_count: 1, category: "Backend" },
    { date: "2026-02-04", post_count: 1, category: "Frontend" },
    { date: "2026-02-07", post_count: 1, category: "AI" },
    { date: "2026-02-10", post_count: 1, category: "DevOps" },
    { date: "2026-02-13", post_count: 1, category: "Cloud" },
    { date: "2026-02-16", post_count: 1, category: "Backend" },
    { date: "2026-02-19", post_count: 1, category: "Frontend" },
    { date: "2026-02-22", post_count: 1, category: "AI" },
    { date: "2026-02-25", post_count: 1, category: "기타" },
    { date: "2026-02-28", post_count: 1, category: "Cloud" },
    { date: "2026-03-03", post_count: 1, category: "AI" },
    { date: "2026-03-08", post_count: 1, category: "Backend" },
    { date: "2026-03-12", post_count: 1, category: "Frontend" },
    { date: "2026-03-15", post_count: 1, category: "DevOps" },
    { date: "2026-03-20", post_count: 1, category: "Cloud" },
    { date: "2026-03-25", post_count: 1, category: "기타" },
  ],
};
