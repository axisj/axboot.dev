---
sidebar_position: 1
---

# 라우터(Router)
AXBoot는 React Router를 사용하여 라우팅을 처리합니다. 라우터는 페이지를 이동할 때 사용되며, 페이지 이동에 따라 URL이 변경됩니다.
`src/router/Routes.tsx` 파일에 등록된 메뉴라면 Tab으로 열리고 TabStore에 추가 되지 않습니다.

## 라우터 패스 선언
```typescript title="src/router/Routes.tsx"
import React from "react";
import { getFlattedRoutes } from "@core/utils/store/getFlattedRoutes";
import { PROGRAM_TYPES } from "./@programTypes";
import { example_router, getRoutes } from "../@core/router/exampleRouter";

export interface RawRoute {
  key?: string;
  path: string;
  program_type?: PROGRAM_TYPES;
  icon?: React.ReactNode;
  children?: RawRoutes;
  hideTab?: boolean;
}

export type RawRoutes = Record<string, RawRoute>;

const routes = {
  SIGN_IN: {
    path: "sign-in",
    hideTab: true,
  },
  HOME: {
    path: "",
    hideTab: true,
  },
  // highlight-start
  SAMPLE: {
    program_type: PROGRAM_TYPES.SAMPLE,
    path: "sample",
  },
  // highlight-end

  /* ##INSERT_ROUTE_POSITION## */
};

// 템플릿을 위한 라우터
routes["EXAMPLES"] = {
  path: "examples",
  children: example_router,
};

// 라우터 오브젝트 변환 (각 라우터마다 가진 path 값을 부모의 path와 합침 ex : /sample/list)
// highlight-start
export const ROUTES = getRoutes(routes, "/") as typeof routes;
export const ROUTES_LIST: RawRoute[] = getFlattedRoutes(ROUTES);
// highlight-end
```

라우터 값을 객체 형태로 관리하기 위해 라우터를 선언하여 사용하는 방식을 사용합니다. 메뉴에 접근해야 하거나 정보를 가져와야 하는 경우에는 `ROUTES`를 사용합니다.
- ROUTES: 라우터 객체
- ROUTES_LIST: 라우터 리스트 (평탄화된 라우터 리스트)

## Routing

