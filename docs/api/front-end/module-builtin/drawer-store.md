---
sidebar_position: 3
---

# 서랍 스토어

`DrawerStore`는 Axboot 시스템에서 드로어(Drawer) 상태를 관리하기 위한 상태 관리 유틸리티입니다. 드로어의 열기, 닫기 및 데이터 전달을 처리하며, 모듈화된 UI 구현을 지원합니다.

## 주요 메서드

### 1. openDrawer(config)

드로어를 열고, 전달된 구성 요소를 렌더링합니다.

##### 매개변수
| 이름       | 타입           | 필수 | 설명                        |
  |------------|----------------|------|-----------------------------|
| `config`   | `DrawerConfig` | ✅   | 드로어 구성 객체.            |

##### DrawerConfig 속성
| 이름        | 타입        | 필수 | 설명                                   |
  |-------------|-------------|------|----------------------------------------|
| `title`     | `string`    | ✅   | 드로어의 제목.                         |
| `content`   | `ReactNode` | ✅   | 드로어에 렌더링될 내용.                |
| `width`     | `string`    | ❌   | 드로어의 너비 (예: `400px`, `50%`).    |
| `onClose`   | `() => void` | ❌   | 드로어가 닫힐 때 호출되는 콜백 함수.    |

##### 예제

```typescript jsx
import { DrawerStore } from "@/stores";

const { openDrawer } = DrawerStore();

openDrawer({
    title: "Example Drawer",
    content: <div>Drawer Content Here</div>,
    width: "50%",
    onClose: () => console.log("Drawer Closed"),
});
```
---

### 2. closeDrawer()

현재 열려 있는 드로어를 닫습니다.

##### 예제

```typescript jsx
import { DrawerStore } from "@/stores";

const { closeDrawer } = DrawerStore();

closeDrawer();
```

---

## 사용 예제

### 기본 드로어 열기와 닫기

```typescript jsx
import { DrawerStore } from "@/stores";

const { openDrawer, closeDrawer } = DrawerStore();

const openMyDrawer = () => {
  openDrawer({
    title: "My Drawer",
    content: <div>My Drawer Content</div>,
    width: "400px",
  });
};

const closeMyDrawer = () => {
  closeDrawer();
};
```

---

### 닫기 콜백 활용

```typescript jsx
import { DrawerStore } from "@/stores";

const { openDrawer } = DrawerStore();

openDrawer({
  title: "Custom Drawer",
  content: <div>Custom Content</div>,
  onClose: () => {
    console.log("Drawer has been closed!");
  },
});
```

##### 메서드 요약
| 메서드        | 설명                                 |
|---------------|--------------------------------------|
| `openDrawer`  | 드로어를 열고, 구성 요소를 렌더링.    |
| `closeDrawer` | 현재 열려 있는 드로어를 닫음.         |


##### DrawerConfig 속성 요약

| 이름       | 타입        | 필수 | 설명                                   |
|------------|-------------|------|----------------------------------------|
| `title`    | `string`    | ✅   | 드로어의 제목.                         |
| `content`  | `ReactNode` | ✅   | 드로어에 렌더링될 내용.                |
| `width`    | `string`    | ❌   | 드로어의 너비 (예: `400px`, `50%`).    |
| `onClose`  | `() => void`| ❌   | 드로어가 닫힐 때 호출되는 콜백 함수.    |
