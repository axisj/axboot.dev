---
sidebar_position: 4
---

# 모달 스토어

`ModalStore`는 Axboot 시스템에서 모달 창의 상태를 관리하기 위한 유틸리티입니다. 모달 창의 열기, 닫기, 데이터 전달 등의 기능을 제공합니다.

## 주요 메서드

### 1. openModal(config)

모달 창을 열고, 전달된 구성 요소를 렌더링합니다.

##### 매개변수
| 이름       | 타입           | 필수 | 설명                        |
  |------------|----------------|------|-----------------------------|
| `config`   | `ModalConfig`  | ✅   | 모달 구성 객체.              |

##### DrawerConfig 속성
| 이름        | 타입        | 필수 | 설명                                   |
  |-------------|-------------|------|----------------------------------------|
| `title`     | `string`    | ✅   | 모달의 제목.                           |
| `content`   | `ReactNode` | ✅   | 모달에 렌더링될 내용.                  |
| `size`      | `string`    | ❌   | 모달 크기 (예: `small`, `medium`, `large`). |
| `onClose`   | `() => void` | ❌   | 모달이 닫힐 때 호출되는 콜백 함수.      |

##### 예제

```typescript jsx
import { ModalStore } from "@/stores";

const { openModal } = ModalStore();

openModal({
  title: "Example Modal",
  content: <div>Modal Content Here</div>,
  size: "medium",
  onClose: () => console.log("Modal Closed"),
});
```
---

### 2. closeModal()

현재 열려 있는 모달 창을 닫습니다.

##### 예제

```typescript jsx
import { ModalStore } from "@/stores";

const { closeModal } = ModalStore();

closeModal();
```

---

## 사용 예제

### 기본 모달 열기와 닫기

```typescript jsx
import { ModalStore } from "@/stores";

const { openModal, closeModal } = ModalStore();

const openMyModal = () => {
  openModal({
    title: "My Modal",
    content: <div>My Modal Content</div>,
    size: "small",
  });
};

const closeMyModal = () => {
  closeModal();
};
```

---

### 닫기 콜백 활용

```typescript jsx
import { ModalStore } from "@/stores";

const { openModal } = ModalStore();

openModal({
  title: "Custom Modal",
  content: <div>Custom Content</div>,
  onClose: () => {
    console.log("Modal has been closed!");
  },
});
```

##### 메서드 요약
| 메서드        | 설명                                 |
|---------------|--------------------------------------|
| `openModal`   | 모달 창을 열고, 구성 요소를 렌더링.   |
| `closeModal`  | 현재 열려 있는 모달 창을 닫음.        |


##### ModalConfig 속성 요약

| 이름       | 타입        | 필수 | 설명                                   |
|------------|-------------|------|----------------------------------------|
| `title`    | `string`    | ✅   | 모달의 제목.                           |
| `content`  | `ReactNode` | ✅   | 모달에 렌더링될 내용.                  |
| `size`     | `string`    | ❌   | 모달 크기 (예: `small`, `medium`, `large`). |
| `onClose`  | `() => void`| ❌   | 모달이 닫힐 때 호출되는 콜백 함수.      |
