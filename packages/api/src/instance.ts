import axios, { type AxiosInstance } from "axios";

/**
 * API 클라이언트 인스턴스 생성(기본)
 */
export function createInstance(baseURL: string): AxiosInstance {
  return axios.create({
    baseURL,
    headers: { "Content-Type": "application/json" },
  });
}
