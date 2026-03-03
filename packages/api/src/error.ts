import axios from "axios";
import { ClientError, NetworkError, ServerError } from "./types";

const STATUS_MESSAGES: Record<number, string> = {
  400: "잘못된 요청입니다.",
  401: "인증이 필요합니다.",
  403: "접근 권한이 없습니다.",
  404: "요청한 리소스를 찾을 수 없습니다.",
  500: "서버 오류가 발생했습니다.",
};

function getMessageForStatus(status: number): string {
  return STATUS_MESSAGES[status] ?? `요청이 실패했습니다. (${status})`;
}

/**
 * API 에러를 프로젝트 에러 타입으로 변환
 * @author 이정선
 */
export function parseError(err: unknown): never {
  if (axios.isAxiosError(err)) {
    const status = err.response?.status;
    const data = err.response?.data;

    if (!err.response) {
      throw new NetworkError("네트워크 연결을 확인해주세요.", err);
    }
    if (typeof status === "number" && status >= 400 && status < 500) {
      throw new ClientError(status, getMessageForStatus(status), data);
    }
    if (typeof status === "number" && status >= 500) {
      throw new ServerError(status, getMessageForStatus(status), data);
    }
    throw new ClientError(status ?? 0, getMessageForStatus(status ?? 0), data);
  }
  if (err instanceof Error) {
    throw new NetworkError(err.message, err);
  }
  throw new NetworkError("Unknown error occurred", err);
}
