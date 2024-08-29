---
sidebar_position: 4
---

# 템플릿으로 프로그램 만들기

## 프로그램 만들기
```bash
npm run make:program
```
위 명령어를 실행하면 프로그램을 생성할 수 있는 템플릿을 제공합니다.
생성할 프로그램 설정은 아래의 `src/makeProgramConfig.ts` 파일을 수정하여 사용할 수 있습니다.

```typescript title="src/makeProgramConfig.ts"
import { ProgramConfig } from "./@core/scripts/@types";

const programConfig: ProgramConfig = {
  pagesDir: "./src/pages",
  templateDir: "./src/@core/pages",
  programTypeFile: "./src/router/@programTypes.ts",
  pageRouteFile: "./src/router/PageRoute.tsx",
  routesFile: "./src/router/Routes.tsx",
  serviceMockUpDataFile: "./src/services/serviceMockUpData.ts",
  programs: [
    {
      code: "SRV_SALES_SHEET",
      name: ["salesSheet"],
      type: "LIST_AND_MODAL_MF",
      url: "salesSheet",
    },
  ],
};

export default programConfig;
```

programs에 추가하고 싶은 프로그램의 정보와 템플릿 타입을 설정 할 수 있고 필요에 따라서
여러개의 프로그램을 한번에 생성하거나 작업을 하는 도중에 한개씩 프로그램을 만들 수 도 있습니다.

`programConfig`에 대한 자세한 내용은 [여기](/docs/api/front-end/core-scripts/make-program.md)를 참고하세요.

## 모달 만들기

프로그램 생성뿐 아니라 모달또한 템플릿을 이용하여 빠르게 생성할 수 있습니다. 다음의 명령어를 이용해 모달을 생성할 수 있고 모달 생성 설정은 `src/makeModalProgramConfig.ts` 파일을 수정하여 사용할 수 있습니다.

```bash
npm run make:modal
```
