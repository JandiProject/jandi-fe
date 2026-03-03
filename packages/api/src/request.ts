import type { AxiosInstance, AxiosRequestConfig, Method } from "axios";
import type { ApiResponseType } from "./types";
import { parseError } from "./error";

/**
 * API 요청 함수
 * - ApiResponse 래핑 시 data 추출
 * - 에러 시 ClientError/ServerError/NetworkError로 변환
 * @author 이정선
 */
export async function safeRequest<T = unknown, D = unknown>(
  instance: AxiosInstance,
  method: Method,
  url: string,
  data?: D,
  headers?: Record<string, string>
): Promise<T> {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers,
      ...(method.toUpperCase() === "GET" ? { params: data } : { data }),
    };
    const response = await instance.request(config);
    const responseData = response.data;

    if (
      responseData &&
      typeof responseData === "object" &&
      "status" in responseData
    ) {
      const apiResponse = responseData as ApiResponseType<T>;
      if (apiResponse.data !== undefined) {
        return apiResponse.data as T;
      }
      throw new Error(apiResponse.message ?? "API request failed");
    }
    return responseData as T;
  } catch (error: unknown) {
    return parseError(error);
  }
}
