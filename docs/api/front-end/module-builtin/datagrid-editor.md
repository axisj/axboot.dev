---
sidebar_position: 2
---

# 데이터그리드 에디터

`AXBoot DataGrid Editor`는 `DataGrid` 컴포넌트의 셀 편집을 지원하는 모듈입니다. 셀 데이터를 입력, 수정, 확인할 수 있는 다양한 편집 도구를 제공합니다.

#### 사용 방법:

```typescript jsx
<DataGrid
  columns={[
    {
      key: "price",
      label: "Price",
      width: 100,
      editor: {
        type: "text",
        onCommit: (value, rowData) => {
          console.log("New Value:", value);
        },
      },
    },
  ]}
  data={[
    { price: 100 },
    { price: 200 },
  ]}
/>;
```

#### Props:
| 이름       | 타입                        | 필수 | 설명                                       |
|------------|-----------------------------|------|--------------------------------------------|
| `type`     | `string`                    | ✅   | 에디터 유형 (`text`, `number`, `select` 등). |
| `options`  | `Array<string>`             | ❌   | `select` 유형에서 사용할 선택 옵션.         |
| `onCommit` | `(value, rowData) => void`  | ✅   | 셀 값이 변경된 후 호출되는 콜백 함수.       |
| `readOnly` | `boolean`                   | ❌   | 셀을 읽기 전용으로 설정 (기본값: `false`).   |

---

## 타입별 설명

### 1. Text Editor

텍스트 입력을 지원하는 기본 에디터.

```typescript jsx
<DataGrid
  columns={[
    {
      key: "name",
      label: "Name",
      editor: {
        type: "text",
        onCommit: (value, rowData) => console.log("Updated Name:", value),
      },
    },
  ]}
  data={[
    { name: "John Doe" },
    { name: "Jane Smith" },
  ]}
/>;
```

|속성	| 설명              |
|------|-----------------|
|type	| text            |
|onCommit	| 값 변경 후 호출되는 콜백. |

---

### 2. Number Editor

숫자 입력을 위한 에디터.

```typescript jsx
<DataGrid
  columns={[
    {
      key: "price",
      label: "Price",
      editor: {
        type: "number",
        onCommit: (value, rowData) => console.log("Updated Price:", value),
      },
    },
  ]}
  data={[
    { price: 100 },
    { price: 200 },
  ]}
/>;
```

|속성	| 설명               |
|---|------------------|
|type	| number           |
|onCommit	| 값 변경 후 호출되는 콜백.  |

---

### 3. Select Editor

드롭다운 선택을 지원하는 에디터.

```typescript jsx
<DataGrid
  columns={[
    {
      key: "status",
      label: "Status",
      editor: {
        type: "select",
        options: ["Active", "Inactive"],
        onCommit: (value, rowData) => console.log("Updated Status:", value),
      },
    },
  ]}
  data={[
    { status: "Active" },
    { status: "Inactive" },
  ]}
/>;
```

|속성	| 설명              |
|---|-----------------|
|type	| select          |
|options	| 선택 가능한 옵션 배열.   |
|onCommit	| 값 변경 후 호출되는 콜백. |

---

### 4. Read-Only Editor

읽기 전용 셀을 위한 설정.

```typescript jsx
<DataGrid
  columns={[
    {
      key: "id",
      label: "ID",
      editor: {
        readOnly: true,
      },
    },
  ]}
  data={[
    { id: 1 },
    { id: 2 },
  ]}
/>;
```

|속성	| 설명             |
|---|----------------|
|readOnly	| 셀을 읽기 전용으로 설정. |

---

## 이벤트

### 주요 이벤트

| 이름       | 타입                       | 설명                                    |
|------------|----------------------------|-----------------------------------------|
| `onCommit` | `(value, rowData) => void` | 셀 편집 후 값이 변경되었을 때 호출됨.     |
| `onFocus`  | `() => void`               | 에디터가 활성화될 때 호출됨.             |
| `onBlur`   | `() => void`               | 에디터가 비활성화될 때 호출됨.           |


---

## 사용 예제

### 텍스트 입력과 드롭다운 혼합

```typescript jsx
<DataGrid
  columns={[
    {
      key: "name",
      label: "Name",
      editor: {
        type: "text",
        onCommit: (value) => console.log("Updated Name:", value),
      },
    },
    {
      key: "status",
      label: "Status",
      editor: {
        type: "select",
        options: ["Active", "Inactive"],
        onCommit: (value) => console.log("Updated Status:", value),
      },
    },
  ]}
  data={[
    { name: "John Doe", status: "Active" },
    { name: "Jane Smith", status: "Inactive" },
  ]}
/>;
```
