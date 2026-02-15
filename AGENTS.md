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

## Project Structure & Module Organization

- `src/` contains app code: `main.tsx` bootstraps React, `App.tsx` is the root UI, styles live in `App.css` and `index.css`, and local assets are in `src/assets/`.
- `public/` stores static files served as-is.
- Root-level config files include `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`, and `.prettierrc`.
- Collaboration templates are in `.github/` (`PULL_REQUEST_TEMPLATE.md`, `ISSUE_TEMPLATE/`).

## Build, Test, and Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start the Vite development server.
- `npm run build`: run TypeScript project build (`tsc -b`) and create a production bundle.
- `npm run preview`: serve the built app locally.
- `npm run lint`: run ESLint across the repository.
- `npm run format`: apply Prettier formatting to all files.

## Coding Style & Naming Conventions

- Stack: React + TypeScript with functional components.
- Formatting is enforced by Prettier: 2-space indent, semicolons, single quotes, trailing commas (`es5`), 80-char print width.
- Use PascalCase for components/files (`ScheduleCard.tsx`), camelCase for functions/variables, and `useXxx` for hooks.
- Prefer descriptive, lowercase kebab-case names for assets (`timetable-grid.svg`).

## Testing Guidelines

- There is currently no dedicated test runner or `npm test` script.
- Before opening a PR, run at minimum: `npm run lint` and `npm run build`.
- If you add tests, place them near source files as `*.test.ts` or `*.test.tsx`, and document how to run them in the PR until a standard test command is introduced.

## Commit & Pull Request Guidelines

- Follow the repository commit prefixes: `feat`, `fix`, `mod`, `style`, `design`, `docs`, `refactor`, `chore`, `test`, `rename`, `remove`.
- Commit format: `type: summary` (keep summary under 50 chars, no trailing period, one concern per commit).
- Existing convention expects commit title/body in Korean and explains what changed and why.
- Branch naming pattern: `feature/<topic>`, `hotfix/<topic>`, `refactor/<topic>`, `infra/<topic>`.
- PRs should include: linked issue (e.g., `close #12`), work details, notable code explanation, and completed checklist items (behavior check, lint/format, testing status).
