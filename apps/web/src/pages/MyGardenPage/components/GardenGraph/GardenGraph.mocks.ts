export interface DayRecordPost {
  id: string;
  title: string;
  url?: string;
  category: string;
}

/** mock 포스트 */
export const MOCK_DAY_RECORD_POSTS: DayRecordPost[] = [
  { id: "p1", title: "LLM 파인튜닝 가이드", url: "#", category: "AI" },
  { id: "p2", title: "Spring Boot 3.2 새 기능", url: "#", category: "Backend" },
  { id: "p3", title: "React 19 use() 훅", url: "#", category: "Frontend" },
];
