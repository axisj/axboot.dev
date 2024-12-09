---
sidebar_position: 1
---

# 프로젝트 구조

프로젝트는 Framework과 각 업무 영역을 위한 것으로 구분하여 생성하며 구성은 아래와 같다.

## 폴더 및 패키지 구조

| **폴더/파일**                   | **설명**                                        |
|----------------------------------|------------------------------------------------|
| **/@types/**                    | 패키지 타이핑 정의 폴더                         |
| **/public/**                    | 퍼블릭 에셋 모음                                |
| **/src/**                       | 소스코드 폴더                                   |
| **/src/@core/**                 | 코어 모듈 모음                                  |
| **/src/@types/**                | 프로젝트 타이핑 정의 폴더                       |
| **/src/components/**            | 컴포넌트 모음 폴더                              |
| **/src/hooks/**                 | 커스텀 훅 모음                                  |
| **/src/i18n/**                  | 다국어 정의 파일 모음                           |
| **/src/modals/**                | 모달 컴포넌트                                   |
| **/src/pageFrame/**             | 페이지 프레임 컴포넌트 모음                     |
| **/src/pages/**                 | 개별 프로그램 파일 모음                         |
| **/src/router/**                | 라우팅 정의 및 라우팅 연결                      |
| **/src/services/**              | API 서비스 정의                                 |
| **/src/stores/**                | 전역 상태 관리 저장소 모델                      |
| **/src/styles/**                | 스타일 관련 폴더                                |
| **/src/utils/**                 | JS 유틸리티                                     |
| **/src/App.tsx**                | 프로젝트 앱 시작점                              |
| **/src/customizeAntd.tsx**      | AntDesign 커스터마이징                          |
| **/src/main.tsx**               | 프로젝트 시작점                                 |
| **/src/makeModalProgramConfig.ts** | 모달 생성 코드 정의 파일 (모달 생성 CLI에 사용) |
| **/src/makeProgramConfig.ts**   | 프로그램 생성 코드 정의 파일 (프로그램 생성 CLI에 사용) |
| **/src/projectConfig.ts**       | 프로젝트 설정                                   |
| **/.env**                       | 사이트 설정이 포함된 구성 파일                  |
| **/.eslintrc.cjs**              | eslint 설정 (https://eslint.org/)              |
| **/package.json**               | 프로젝트 설정                                   |
| **/index.html**                 | 웹 페이지 시작 HTML                             |
| **/tsconfig.json**              | 타입스크립트 설정                               |
| **vite.config.ts**              | vite 설정                                       |
