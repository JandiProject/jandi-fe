export interface RecentPost {
  id: string;
  title: string;
  url?: string;
  excerpt?: string;
  date?: string;
  category?: string;
}

export const MOCK_RECENT_POSTS: RecentPost[] = [
  {
    id: "1",
    title: "LLM 파인튜닝 가이드",
    url: "#",
    excerpt: "대규모 언어 모델을 나만의 데이터로 튜닝하는 방법을 소개합니다.",
    date: "2026.01.15",
    category: "AI",
  },
  {
    id: "2",
    title: "Spring Boot 3.2 새 기능",
    url: "#",
    excerpt: "Spring Boot 3.2에서 추가된 주요 기능들을 살펴봅니다.",
    date: "2026.01.12",
    category: "Backend",
  },
  {
    id: "3",
    title: "React 19 use() 훅",
    url: "#",
    excerpt: "React 19의 새로운 use 훅으로 비동기 컴포넌트를 다루는 방법.",
    date: "2026.01.08",
    category: "Frontend",
  },
];
