export interface TopicRatio {
  category: string;
  count: number;
  percentage: number;
}

export interface CategoryRatioResponse {
  total_posts: number;
  global_topic_ratios: TopicRatio[];
}

export const MOCK_CATEGORY_RATIO: CategoryRatioResponse = {
  total_posts: 28,
  global_topic_ratios: [
    { category: "AI", count: 8, percentage: 28.6 },
    { category: "Cloud", count: 6, percentage: 21.4 },
    { category: "Backend", count: 5, percentage: 17.9 },
    { category: "Frontend", count: 4, percentage: 14.3 },
    { category: "DevOps", count: 3, percentage: 10.7 },
    { category: "기타", count: 2, percentage: 7.1 },
  ],
};
