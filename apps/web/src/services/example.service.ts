/**
 * API 호출 예시
 * 실제 엔드포인트 구현 시 이 패턴을 참고하여 services/ 하위에 추가
 * 1. safeRequest + useQuery (GET)
 * 2. safeRequest + useMutation (POST/PUT/DELETE)
 */

import { safeRequest } from "@jandi-fe/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib";

// ========== 타입 예시 ==========
type Post = { id: number; title: string };

// ========== GET 예시 ==========
function fetchPosts() {
  return safeRequest<Post[]>(api, "GET", "/posts");
}

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}

// ========== POST 예시 ==========
function createPost(body: { title: string }) {
  return safeRequest<Post>(api, "POST", "/posts", body);
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
