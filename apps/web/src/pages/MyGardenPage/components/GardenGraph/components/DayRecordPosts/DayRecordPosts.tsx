import * as S from "./DayRecordPosts.styled";

export interface Post {
  id: string;
  title: string;
  url?: string;
  category: string;
}

interface DayRecordPostsProps {
  postsByCategory: Record<string, Post[]>;
  categoryColors: Record<string, string>;
}

export function DayRecordPosts({
  postsByCategory,
  categoryColors,
}: DayRecordPostsProps) {
  const categories = Object.keys(postsByCategory).sort();
  const totalPosts = categories.reduce(
    (sum, cat) => sum + postsByCategory[cat].length,
    0
  );

  if (totalPosts === 0) {
    return (
      <S.Section>
        <S.EmptyMessage>이 날 작성한 글이 없습니다.</S.EmptyMessage>
      </S.Section>
    );
  }

  return (
    <S.Section>
      {categories.map((category) => {
        const posts = postsByCategory[category];
        const color = categoryColors[category] ?? "#94a3b8";
        return (
          <S.CategoryBlock key={category}>
            <S.CategoryHeader>
              <S.CategoryBadge $color={color} />
              <span>{category}</span>
              <S.CategoryCount>({posts.length}편)</S.CategoryCount>
            </S.CategoryHeader>
            <S.PostList>
              {posts.map((post) => (
                <S.PostItem key={post.id}>
                  {post.url ? <a href={post.url}>{post.title}</a> : post.title}
                </S.PostItem>
              ))}
            </S.PostList>
          </S.CategoryBlock>
        );
      })}
    </S.Section>
  );
}
