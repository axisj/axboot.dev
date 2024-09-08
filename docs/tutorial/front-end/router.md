---
sidebar_position: 1
---

# 라우터(Router)
AXBoot는 React Router를 사용하여 라우팅을 처리합니다. 라우터는 페이지를 이동할 때 사용되며, 페이지 이동에 따라 URL이 변경됩니다.
`src/router/Routes.tsx` 파일에 등록된 메뉴라면 Tab으로 열리고 TabStore에 추가 되지 않습니다.

:::info TabStore 란?
AXBoot를 사용하면 어프리케이션 탭 시스템을 별도의 설정 없이 사용할 수 있습니다.
TabStore는 페이지 이동에 따라 Tab을 추가하거나 제거하는 역할을 합니다. TabStore에 등록된 Tab은 페이지 이동에 따라 Tab이 추가되거나 제거됩니다.
:::

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

// routes 오브젝트 변환 
// highlight-start
export const ROUTES = getRoutes(routes, "/") as typeof routes;
export const ROUTES_LIST: RawRoute[] = getFlattedRoutes(ROUTES);
// highlight-end
```

routes를 보다 빠르고 편리하게 사용하기 위해 ROUTES, ROUTES_LIST로 만들어 사용합니다. 
- ROUTES: 라우터 객체 (각 라우터마다 가진 path 값을 부모의 path와 합침 ex : /sample/list)
- ROUTES_LIST: 라우터 리스트 (평탄화된 라우터 리스트)

또한 템플릿 라우터인 EXAMPLES를 연결하고 있는데 이는 App에서 템플릿을 출력하는 경우를 위해 사용됩니다.



### ROUTES 사용 예시
```typescript
const onClickItem = React.useCallback(
  (params: AXFDGClickParams<DtoItem>) => {
    linkByRoute(EXAMPLE_ROUTERS.DETAIL, { id: params.item.id });
  },
  [linkByRoute],
);
```
라우터의 정보를 알고 있는 경우 라우터 오브젝트의 사용하여 페이지 이동을 할 수 있습니다.

```typescript
function RestrictAuth({ children }: Props) {
  const location = useLocation();
  const me = useUserStore((s) => s.me);

  if (me) {
    return <Navigate to={ROUTES.HOME.path} state={{ from: location }} replace />;
  }

  return children;
}
```
로그인 한 사용자가 로그인 페이지에 접근하려고 할 때, 메인 페이지로 이동시키는 예시입니다.

### ROUTES_LIST 사용 예시
```typescript
  const currentRoute = React.useMemo(
    () =>
      ROUTES_LIST.find((route) => {
        return matchPath(route.path, location.pathname);
      }),
    [],
  );
```
라우터중에서 현재 페이지에 해당하는 라우터를 찾아서 사용할 수 있습니다.

## Routing

