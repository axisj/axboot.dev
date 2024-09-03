---
sidebar_position: 1
---

# Development
```json title="package.json"
{
  "name": "axboot",
  "version": "0.6.4",
  "scripts": {
    "prepare": "husky install",
    "lint:staged": "lint-staged",
    "make:program": "ts-node -T src/@core/scripts/makeProgram/index.ts",
    "make:modal": "ts-node -T src/@core/scripts/makeModalProgram/index.ts",
    "build:less": "ts-node -T src/@core/scripts/compile-less.ts",
    "watch": "run-p watch:*",
    "watch:less": "onchange -f change -d 1000 'src/styles/less' 'src/styles/theme.ts' -- run-s build:less",
    // highlight-next-line
    "dev": "npm run build:less && run-p start:dev watch",
    "alpha": "npm run build:less && run-p start:alpha watch",
    "beta": "npm run build:less && run-p start:beta watch",
    "build": "tsc && vite build --mode production",
    "build:alpha": "tsc && vite build --mode alpha",
    "build:beta": "tsc && vite build --mode beta",
    "lint": "eslint --cache --fix",
    "format": "prettier --write --cache .",
    "preview": "vite preview",
    "start:dev": "vite --mode dev --host --port 20241",
    "start:alpha": "vite --mode alpha --host --port 30241",
    "start:beta": "vite --mode beta --host --port 40241"
  }
}
```
package.json 파일은 프로젝트의 메타데이터와 프로젝트를 실행하기 위한 스크립트를 포함하고 있습니다.
`start:dev`, `start:alpha`, `start:beta`를 이용하여 개발 서버를 실행할 수 있습니다. 각각의 스크립트는 `.env.dev`, `.env.alpha`, `.env.beta` 파일을 사용합니다.

### Scripts
- **prepare**: husky를 설치합니다. husky는 git hook을 사용하여 코드를 커밋하기 전에 코드를 검사하거나 테스트를 실행할 수 있습니다.
- **lint**:staged: lint-staged를 실행합니다. lint-staged는 git에 staged된 파일에 대해서만 lint를 실행합니다.
- **make**:program: 프로그램을 생성합니다. makeProgramConfig.ts 파일을 참고하세요.
- **make**:modal: 모달 프로그램을 생성합니다. makeModalProgramConfig.ts 파일을 참고하세요.
- **dev**: 개발 서버를 실행합니다. (.env.dev 파일을 사용합니다.)
- **alpha**: alpha 서버를 실행합니다. (.env.alpha 파일을 사용합니다.)
- **beta**: beta 서버를 실행합니다. (.env.beta 파일을 사용합니다.)
- **build**: 프로덕션 빌드를 실행합니다.
- **build:alpha**: alpha 빌드를 실행합니다.
- **build:beta**: beta 빌드를 실행합니다.



## 환경변수 사용 방법
```env title=".env.dev"
VITE_API_URL=http://127.0.0.1:8080
VITE_TEST_API_URL=http://127.0.0.1:8090
VITE_TOKEN_REFRESH_ROUTER=/api/login/refresh
```
- `VITE_API_URL`: AXBoot의 모든 HTTP 요청에 사용되는 기본 API URL입니다.
- `VITE_TEST_API_URL`: 배포된 환경에서 `sessionStorage.getItem("isApiTest") === "T"`일 경우 사용되는 API URL입니다.
- `VITE_TOKEN_REFRESH_ROUTER`: 토큰 갱신 요청을 보내는 API endpoint입니다.

```typescript title="src/service/apiWrapper.ts"
export const API_URL = (() => {
  if (sessionStorage.getItem("isApiTest") === "T") {
    return import.meta.env.VITE_TEST_API_URL; // 백엔드 개발자용
  }

  return import.meta.env.VITE_API_URL ?? "";
})();

//
console.table(
  import.meta.env.MODE === "dev"
    ? {
        ...import.meta.env,
        API_URL,
      }
    : {
        API_URL,
      },
);
```


## Start development server

```shell
npm run dev
```

![run-dev.png](..%2Fimages%2Frun-dev.png)

정상적으로 실행되면 브라우저에서 `http://localhost:20241`로 접속할 수 있습니다.
