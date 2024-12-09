---
sidebar_position: 5
---

# 스토어 구현

## ProgramStore 구현

- MetaData : 스토어에서 사용자가 재 방문하거나. 새로고침시에도 상태를 유지 해야 하는 상태 키 정의
- States : 스토어 상태
- Actions : 스토어 상태 조작 함수 인터페이스
- createState : 스토어 상태 기본값
- createActions : 스토어 상태 조작함수 정의
- create : 스토어 생성
- subscribe : 스토어 상태 변경 감지
- pageStoreActions : 프로그램 스토어의 기본 함수 모음 (init, reset 등)


```typescript title="@core/pages/EMPTY"
import { EXAMPLE_ROUTERS } from "@core/router/exampleRouter";
import { pageStoreActions } from "@core/stores/pageStoreActions";
import { PageStoreActions, StoreActions } from "@core/stores/types";
import { getTabStoreListener } from "@core/stores/usePageTabStore";
import { ProgramFn } from "@types";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { shallow } from "zustand/shallow";


interface MetaData {
  programFn?: ProgramFn;
}


interface States extends MetaData {
  routePath: string; // initialized Store;
}


interface Actions extends PageStoreActions<States> {}


// create states
const createState: States = {
  routePath: EXAMPLE_ROUTERS.EMPTY.path,
};


// create actions
const createActions: StoreActions<States & Actions, Actions> = (set, get) => ({
  onMountApp: async () => {},
  syncMetadata: (s = createState) => set(s),


  ...pageStoreActions(set, get, { createState }),
});


// ---------------- exports
export interface $EMPTY$Store extends States, Actions, PageStoreActions<States> {}


export const use$EMPTY$Store = create(
  subscribeWithSelector<$EMPTY$Store>((set, get) => ({
    ...createState,
    ...createActions(set, get),
  })),
);


use$EMPTY$Store.subscribe(
  (s): MetaData => ({
    programFn: s.programFn,
  }),
  getTabStoreListener<MetaData>(createState.routePath),
  { equalityFn: shallow },
);
```

---
## 전역 Store 구현

- MetaData : 스토어에서 사용자가 재 방문하거나. 새로고침시에도 상태를 유지 해야 하는 상태 키 정의
- States : 스토어 상태
- Actions : 스토어 상태 조작 함수 인터페이스
- createState : 스토어 상태 기본값
- createActions : 스토어 상태 조작함수 정의
- create : 스토어 생성
- subscribe : 스토어 상태 변경 감지

- 프로그램 스토어와 전역스토어는 그 사용 범위에 따라 나누어 생각할 수 있습니다. 전역스토어는 모든 프로그램에서 접근 및 사용이 가능합니다. 전역스토어를 응용하면 특정 독립모듈에 사용 할 수 있습니다. (ex : A, B프로그램에서 동시에 사용되는 컴포넌트 등)


```typescript title="src/stores/useAppStore.ts"
import buildStore from "@core/stores/buildStore";
import { StoreActions } from "@core/stores/types";
import { Tooltip } from "antd";
import i18n, { LanguageType } from "i18n";
import { themePalette, ThemeType } from "styles/theme";
import { AppMenuGroup, AppService } from "../services";


export type NavPosition = {
  top: "top";
  left: "left";
};


export interface AppModel {
  loaded: boolean;
  currentLanguage: LanguageType;
  theme: ThemeType;
  sideMenuOpened: boolean;
  sideBoxOpened: boolean;
  width: number;
  height: number;
  appMenuGroups: AppMenuGroup[];
  appMenuGroupSpinning: boolean;
  appMenuGroupLoaded: boolean;
  fullScreen: boolean;
  navPosition: keyof NavPosition;
}


export interface AppActions {
  setLanguage: (language: LanguageType) => void;
  setTheme: (theme: ThemeType) => void;
  setLoaded: (loaded: boolean) => void;
  setSideMenuOpened: (sideMenuOpened: boolean) => void;
  setWidthHeight: (width: number, height: number) => void;
  setSideBoxOpened: (sideBoxOpened: boolean) => void;
  callAppMenu: () => Promise<void>;
  setFullScreen: (fullScreen: boolean) => void;
  setNavPosition: (navPosition: keyof NavPosition) => void;
}


export interface AppStore extends AppModel, AppActions {}


export const appInitialState: AppModel = {
  loaded: false,
  currentLanguage: "ko",
  theme: "light",
  sideMenuOpened: true,
  sideBoxOpened: true,
  width: 0,
  height: 0,
  appMenuGroups: [],
  appMenuGroupSpinning: false,
  appMenuGroupLoaded: false,
  fullScreen: false,
  navPosition: "left",
};


const getAppStoreActions: StoreActions<AppModel & AppActions, AppActions> = (set, get) => ({
  setLanguage: (language: LanguageType) => set({ currentLanguage: language }),
  setTheme: (theme: ThemeType) => {
    set({ theme });
    if (Tooltip.defaultProps) {
      Tooltip.defaultProps.color = themePalette[theme].tooltip_bg;
    }
  },
  setLoaded: (loaded: boolean) => set({ loaded }),
  setSideMenuOpened: (sideMenuOpened: boolean) => set({ sideMenuOpened }),
  setWidthHeight: (width, height) => set({ width, height }),
  callAppMenu: async () => {
    set({ appMenuGroupSpinning: true });
    try {
      const data = await AppService.getAppMenu({});
      set({ appMenuGroups: data.ds, appMenuGroupLoaded: true });
    } finally {
      set({ appMenuGroupSpinning: false });
    }
  },
  setFullScreen: (fullScreen: boolean) => set({ fullScreen }),
  setSideBoxOpened: (sideBoxOpened: boolean) => set({ sideBoxOpened }),
  setNavPosition: (navPosition: keyof NavPosition) => set({ navPosition }),
});


export const useAppStore = buildStore<AppStore>("app", 1, (set, get) => ({
  ...appInitialState,
  ...getAppStoreActions(set, get),
}));


useAppStore.persist.onFinishHydration((state) => {
  state.appMenuGroupLoaded = false;


  i18n.changeLanguage(state.currentLanguage);


  if (!state.loaded) {
    state.setLoaded(true);
  }
});


window["appStore"] = useAppStore;
```
