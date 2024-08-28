---
sidebar_position: 0
---

# AXBoot

AXBoot는 전문가들이 복잡하고 대용량의 웹 솔루션을 신속하게 구축할 수 있도록 설계된 React Admin 보일러플레이트 프로젝트입니다.

또한 AXBoot(액스부트)에는 애플리케이션 설계에 맞게 쉽게 사용자 지정할 수 있는 양식, 
테이블 및 차트와 같은 다양한 내장 UI 구성 요소가 포함되어 있으며, 백엔드 서비스와의 통합을 위한 
다양한 API와 개발 생산성을 향상 시켜줄 수 있는 다양한 도구들을 제공합니다.

## 들어가기 전에
AX : Application eXperience, Boot : Bootstrap의 합성어로, 최종 사용자에게는 빠르고 편리한 사용자 경험을 제공하고,
개발자에게는 빠르고 효율적인 개발 환경을 제공하는 것을 목표로 합니다.

## 할 수 있는 일들
### 빠르고 효율적인 백오피스 시스템 구축
기업의 IT 시스템은 다양하고 대용량의 데이터를 쉽게 다룰수 있어야 합니다. 
하지만 제대로된 백오피스 시스템을 개발하고 운영하는 것은 쉽지 않고 많은 시간과 비용이 소요됩니다. AXBoot는 이러한 문제를 해결하고자 개발되었습니다.
간결하고 잘 정리된 UI시스템과 빠른 반응속도를 제공하여 사용자들이 편리하게 사용할 수 있도록 도와주고 백오피스 환경에서 반드시 필요한 권한관리와 사용자 역할별 
메뉴 관리시스템을 사용 할 수 있어. 빠르고 효율적인 백오피스 시스템을 구축할 수 있습니다.

### 템플릿을 이용한 빠른 개발 (프로그램 만들기)
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

### 템플릿을 이용한 빠른 개발 (모달 만들기)

프로그램 생성뿐 아니라 모달또한 템플릿을 이용하여 빠르게 생성할 수 있습니다. 다음의 명령어를 이용해 모달을 생성할 수 있고 모달 생성 설정은 `src/makeModalProgramConfig.ts` 파일을 수정하여 사용할 수 있습니다.

```bash
npm run make:modal
```
