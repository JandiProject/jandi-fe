import { DEFAULT_CATEGORY_COLORS } from "../../MyGardenPage.constants";
import { SectionCard } from "../SectionCard";
import { type RecentPost, MOCK_RECENT_POSTS } from "./RecentPosts.mocks";
import * as S from "./RecentPosts.styled";

interface RecentPostsProps {
  posts?: RecentPost[];
}

const PLACEHOLDER_COUNT = 3;

export function RecentPosts({ posts = MOCK_RECENT_POSTS }: RecentPostsProps) {
  const displayCount = posts.length > 0 ? posts.length : PLACEHOLDER_COUNT;

  return (
    <SectionCard title="최근 포스트">
      <S.PostList>
        {posts.length > 0
          ? posts.map((post) => {
              const color =
                post.category && DEFAULT_CATEGORY_COLORS[post.category]
                  ? DEFAULT_CATEGORY_COLORS[post.category]
                  : "#94a3b8";
              const content = (
                <S.CardContent>
                  <S.CategoryDot $color={color} />
                  {post.category && (
                    <S.CategoryName>{post.category}</S.CategoryName>
                  )}
                  <S.CardTitle>{post.title}</S.CardTitle>
                  {post.date && <S.CardDate>{post.date}</S.CardDate>}
                </S.CardContent>
              );
              return (
                <S.PostCard key={post.id}>
                  {post.url ? <a href={post.url}>{content}</a> : content}
                </S.PostCard>
              );
            })
          : Array.from({ length: displayCount }).map((_, i) => (
              <S.PostCardPlaceholder key={i} />
            ))}
      </S.PostList>
    </SectionCard>
  );
}
