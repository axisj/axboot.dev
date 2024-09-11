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

`src/router/Routes.tsx` 파일에 라우터를 선언합니다. 라우터는 다음과 같은 형태로 선언합니다.
routes에 JsonObject형태로 라우터를 선언한 후 getRoutes 함수를 사용하여 라우터를 변환합니다. 변환은 부모의 path와 자식의 path를 합쳐서 path를 만들어 주기 위함입니다.

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

// 라우터
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
 
- ROUTES: 라우터 객체 (각 라우터마다 가진 path 값을 부모의 path와 합침 ex : /sample/list)
- ROUTES_LIST: 라우터 리스트 (평탄화된 라우터 리스트)

또한 템플릿 라우터인 EXAMPLES를 연결하고 있는데 이는 App에서 템플릿을 연결하기 위함입니다.

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
`ROUTES_LIST`는 라우터를 평탄화한 리스트이기 때문에 쉽고 빠르게 원하는 라우터를 찾을 수 있습니다.

## Routing

AXBoot는 React Router를 사용하여 라우팅을 처리합니다. 브라우저 URL에 맞는 페이지를 랜더링 하기 위해 사용됩니다.
라우팅 설정은 `src/router/PageRoute.tsx` 파일에서 설정합니다.

```typescript jsx title="src/router/PageRoute.tsx"
import React from "react";
import { ROUTES } from "./Routes";
import RequireAuth from "./RequireAuth";

const FrameDefault = React.lazy(() => import("pageFrame/FrameDefault"));
const FrameProgram = React.lazy(() => import("pageFrame/FrameProgram"));

// 번들 사이즈 최적화와 로딩 속도를 빠르게 하기 위해 페이지를 동적으로 로딩합니다.
const Home = React.lazy(() => import("pages/home/App"));
const SignIn = React.lazy(() => import("pages/signIn/App"));
const Error404 = React.lazy(() => import("pages/error/Error404"));

function PageRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route
          element={
            <RequireAuth> // 로그인이 필요한 페이지 용 컴포넌트
              <FrameProgram /> // 프로그램 프레임 (탭 + 메뉴)
            </RequireAuth>
          }
        >
          // highlight-start
          {/* ##INSERT_ROUTE_POSITION## */}
          // highlight-end
          <Route path={ROUTES.HOME.path} element={<Home />} />
        </Route>
        <Route
          element={
            <RestrictAuth> // 로그인되면 안되는 페이지용 컴포넌트
              <FrameDefault /> // 기본 프레임
            </RestrictAuth>
          }
        >
          <Route path={ROUTES.SIGN_IN.path} element={<SignIn />} />
        </Route>
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </React.Suspense>
  );
}

export default PageRoute;
```

### INSERT_ROUTE_POSITION
