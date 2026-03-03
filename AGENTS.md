# Repository Guidelines

## Project Overview

- 서비스는 사용자가 등록한 블로그 활동을 수집해, GitHub Contribution Graph(잔디)처럼 포스트 작성 횟수와 빈도를 시각화합니다.

## Core Features

1. 로그인/회원가입
   - 이메일/비밀번호 기반 인증
   - JWT 토큰 기반 로그인 처리
2. 블로그 소유권 인증
   - 네이버, 티스토리 등 플랫폼 블로그 대상
   - `<script>` 및 JavaScript를 활용해 사용자 소유 여부 확인
3. 잔디밭 시각화
   - 사용자의 포스트 작성 횟수와 카테고리 기준으로 표시
   - `iframe` 임베드 형태로 블로그 위젯 배포 지원
4. 활동 요약 지표
   - 총 작성 글 수 표시
   - 활동 일수 표시
5. 주제 비율 분석
   - 블로그에 작성한 주제(카테고리)별 글 비율 표시

## Tech Stack

- Turborepo + pnpm
- React 19 + TypeScript + Vite
- Emotion (`@emotion/react`, `@emotion/styled`) for styling
- React Router DOM for routing
- Zustand for global state (auth 등)
- TanStack Query for server state (API 캐시, 페칭)
- Axios + `@jandi-fe/api` for API 호출

## Project Structure & Module Organization

- **Monorepo** (pnpm + Turborepo)
  - `apps/web`: 메인 웹 앱
  - `apps/widget`: 임베드용 위젯
  - `packages/ui`: 공통 UI, 스타일 토큰, GlobalStyles
  - `packages/api`: API 클라이언트 (instance, safeRequest, 에러 처리)
  - `packages/eslint-config`, `packages/typescript-config`: 공유 설정

- **페이지 구조** (`apps/web/src/pages/`)
  - 각 페이지는 `[Name]Page/` 폴더에 `[Name]Page.tsx`, `[Name]Page.styled.ts`, `index.ts` 3개 파일로 구성
  - 스타일은 항상 `.styled.ts` 파일로 분리

- **컴포넌트 구조**
  - `components/common/`: 공통 레이아웃 (Layout 등)
  - 컴포넌트도 동일하게 `[Name].tsx`, `[Name].styled.ts`, `index.ts` 패턴 권장

- **API 호출**
  - `packages/api`의 `createInstance`로 클라이언트 생성, `safeRequest`로 요청
  - 에러는 `ClientError`, `ServerError`, `NetworkError`로 통일

## Build, Test, and Development Commands

- `pnpm install`: 의존성 설치
- `pnpm dev`: 개발 서버 실행 (turbo로 web, widget 동시)
- `pnpm build`: 프로덕션 빌드
- `pnpm lint`: ESLint 실행
- `pnpm format`: Prettier 포맷팅

## Coding Style & Naming Conventions

- Stack: React + TypeScript with functional components.
- Formatting is enforced by Prettier: 2-space indent, semicolons, single quotes, trailing commas (`es5`), 80-char print width.
- Use PascalCase for components/files (`ScheduleCard.tsx`), camelCase for functions/variables, and `useXxx` for hooks.
- Prefer descriptive, lowercase kebab-case names for assets (`timetable-grid.svg`).

## Testing Guidelines

- There is currently no dedicated test runner or `npm test` script.
- Before opening a PR, run at minimum: `pnpm lint` and `pnpm build`.
- If you add tests, place them near source files as `*.test.ts` or `*.test.tsx`, and document how to run them in the PR until a standard test command is introduced.

## Commit & Pull Request Guidelines

- Follow the repository commit prefixes: `feat`, `fix`, `mod`, `style`, `design`, `docs`, `refactor`, `chore`, `test`, `rename`, `remove`.
- Commit format: `type: summary` (keep summary under 50 chars, no trailing period, one concern per commit).
- Existing convention expects commit title/body in Korean and explains what changed and why.
- Branch naming pattern: `feature/<topic>`, `hotfix/<topic>`, `refactor/<topic>`, `infra/<topic>`.
- PRs should include: linked issue (e.g., `close #12`), work details, notable code explanation, and completed checklist items (behavior check, lint/format, testing status).
