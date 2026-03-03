/**
 * 서버 API 응답 래퍼 형식
 * { status, message, data } 형태 응답 시 사용
 */
export type ApiResponseType<T> = {
  status: string;
  message?: string;
  data?: T;
};

/**
 * 네트워크/전송 계층 에러
 */
export class NetworkError extends Error {
  readonly name = "NetworkError";

  constructor(
    public readonly message: string,
    public readonly cause?: unknown
  ) {
    super(message);
  }
}

/**
 * 클라이언트 에러 (4xx)
 */
export class ClientError extends Error {
  readonly name = "ClientError";

  constructor(
    public readonly status: number,
    public readonly message: string,
    public readonly cause?: unknown
  ) {
    super(message);
  }
}

/**
 * 서버 에러 (5xx)
 */
export class ServerError extends Error {
  readonly name = "ServerError";

  constructor(
    public readonly status: number,
    public readonly message: string,
    public readonly cause?: unknown
  ) {
    super(message);
  }
}
