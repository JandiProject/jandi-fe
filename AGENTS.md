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
  - 공통 컴포넌트는 UI 표현과 상호작용에 집중하고, 도메인/API 의존 로직은 페이지 또는 상위 컨테이너에서 처리
  - 특정 페이지에서만 사용하는 UI는 해당 페이지 폴더 내부 또는 인접한 `components/`에 배치하고, 2개 이상 화면에서 재사용될 때 공통 컴포넌트로 승격
  - 한 컴포넌트는 하나의 책임에 집중하고, 지나치게 많은 variant/flag prop으로 분기되는 구조는 지양
  - 외부에서 직접 import할 수 있도록 각 컴포넌트 폴더의 `index.ts`에서 명시적으로 export

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

## Available Common Components

- 공통 컴포넌트를 새로 만들기 전에 먼저 `apps/web/src/components/common`과 해당 폴더의 `index.ts` export를 확인합니다.
- 기존 컴포넌트로 해결 가능한 경우에는 새 UI를 중복 구현하지 말고 공통 컴포넌트를 우선 재사용합니다.
- 공통 컴포넌트 import는 개별 파일 직접 경로보다 `components/common` export 사용을 우선합니다.

- `Button`
  - 기본 액션 버튼 컴포넌트입니다.
  - `children`을 버튼 텍스트/내용으로 받고, 기본 `type`은 `"button"`입니다.
  - `width`, `height`, `backgroundColor` props로 크기와 배경색을 조정할 수 있습니다.
  - 저장, 제출, 확인, 다음 단계 이동처럼 클릭 액션이 필요한 경우 우선 사용합니다.

- `InputField`
  - 라벨과 기본 input이 함께 포함된 텍스트 입력 컴포넌트입니다.
  - `id`와 `label`이 필수이며, 나머지 `input` 속성은 그대로 전달됩니다.
  - 일반 텍스트, 이메일, 비밀번호 등 단일 라인 입력 UI가 필요할 때 우선 사용합니다.
  - 별도 디자인 요구가 없다면 label/input 조합을 직접 만들기보다 이 컴포넌트를 먼저 검토합니다.

- `CheckboxField`
  - 체크박스와 라벨이 결합된 입력 컴포넌트입니다.
  - `label`을 필수로 받고, 기본 `type`은 `"checkbox"`입니다.
  - 약관 동의, 설정 토글, boolean 선택값 입력에 사용합니다.

- `TextButton`
  - 링크처럼 보이는 텍스트 액션 컴포넌트입니다.
  - 내부적으로 anchor 태그를 사용하며 `fontWeight`로 텍스트 강조 정도를 조절할 수 있습니다.
  - 회원가입 이동, 로그인 이동, 보조 액션 링크처럼 버튼보다 가벼운 인터랙션에 사용합니다.

- `Layout`
  - 웹 앱의 기본 레이아웃 컴포넌트입니다.
  - 상단 네비게이션과 `Outlet` 렌더링 영역을 포함합니다.
  - 라우트 레벨 레이아웃이 필요할 때 직접 중복 구현하지 말고 현재 `Layout` 구조를 우선 기준으로 사용합니다.

- 새로운 공통 컴포넌트를 추가할 때는 기존 `Button`, `InputField`, `CheckboxField`, `TextButton` 조합으로 해결 가능한지 먼저 확인합니다.
- 기존 공통 컴포넌트를 확장할 때는 현재 사용처를 깨지 않는 범위에서 props를 추가하고, breaking change가 필요한 경우에는 새 컴포넌트 분리를 우선 검토합니다.

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
