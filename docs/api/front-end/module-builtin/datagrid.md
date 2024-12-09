---
sidebar_position: 1
---

# 데이터그리드

`Datagrid`는 고급 데이터 테이블 컴포넌트로, 데이터를 정렬, 필터링, 페이징 및 편집하는 기능을 제공합니다. 이 컴포넌트는 Axboot 시스템 내에서 효율적인 데이터 관리 및 표시를 위해 설계되었습니다.

#### 사용 방법:

```typescript jsx
import { DataGrid } from "@axboot/datagrid";

<DataGrid
  columns={[
    { key: "id", label: "ID", width: 50 },
    { key: "name", label: "Name", width: 150 },
    { key: "email", label: "Email", width: 200 },
  ]}
  data={[
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  ]}
  options={{
    rowHeight: 30,
    sortable: true,
    filterable: true,
  }}
/>;
```

#### Props:

| 이름        | 타입                      | 필수 | 설명                                         |
|-------------|---------------------------|------|----------------------------------------------|
| `columns`   | `Array<Column>`           | ✅   | 열 정의 배열. 각 열은 `key`, `label`, `width` 등을 포함. |
| `data`      | `Array<Object>`           | ✅   | 표시할 데이터 배열.                           |
| `options`   | `DataGridOptions`         | ❌   | 테이블 설정 옵션 (예: 정렬, 필터링).          |
| `onRowClick`| `(row: object) => void`   | ❌   | 특정 행을 클릭했을 때 실행되는 콜백 함수.     |


#### Column 속성 (열 정의)

| 이름         | 타입       | 필수 | 설명                                           |
|--------------|------------|------|------------------------------------------------|
| `key`        | `string`   | ✅   | 열을 식별하기 위한 고유 키.                     |
| `label`      | `string`   | ✅   | 열 제목 (헤더에 표시).                          |
| `width`      | `number`   | ❌   | 열의 너비. (픽셀 단위)                          |
| `editor`     | `Editor`   | ❌   | 셀 편집기 구성 (편집 가능한 셀에서 사용).        |
| `sortable`   | `boolean`  | ❌   | 열 정렬 가능 여부 (기본값: `false`).            |
| `filterable` | `boolean`  | ❌   | 열 필터링 가능 여부 (기본값: `false`).          |


#### DataGridOptions 속성 (옵션)

| 이름          | 타입      | 기본값  | 설명                                     |
|---------------|-----------|---------|------------------------------------------|
| `rowHeight`   | `number`  | `30`    | 행 높이.                                |
| `sortable`    | `boolean` | `false` | 모든 열에 대해 정렬을 활성화.            |
| `filterable`  | `boolean` | `false` | 모든 열에 대해 필터링을 활성화.          |
| `multiSelect` | `boolean` | `false` | 다중 선택 가능 여부.                     |
| `pagination`  | `boolean` | `false` | 페이징 활성화 여부.                      |


---

## Methods

### Datagrid Methods

`reloadData(data: Array<object>)`

- 설명: 테이블 데이터를 갱신합니다.
- 매개변수: `data (Array<object>)`: 새로운 데이터 배열.

```typescript jsx
gridRef.current.reloadData([
  { id: 3, name: "Alice", email: "alice@example.com" },
  { id: 4, name: "Bob", email: "bob@example.com" },
]);
```

---

`getSelectedRows()`

- 설명: 현재 선택된 행 데이터를 반환합니다.
- 매개변수: `Array<object>`: 선택된 데이터의 배열.

```typescript jsx
const selectedRows = gridRef.current.getSelectedRows();
console.log(selectedRows);
```
---

`clearSelection()`

- 설명: 모든 선택을 초기화합니다.

```typescript jsx
gridRef.current.clearSelection();
```

---

`addRow(row: object)`

- 설명: 새로운 행을 추가합니다.
- 매개변수: `row (object)`: 추가할 행 데이터

```typescript jsx
gridRef.current.addRow({ id: 5, name: "Charlie", email: "charlie@example.com" });
```

---

## Events

### Event Props

| 이름          | 타입                              | 설명                                   |
|---------------|-----------------------------------|----------------------------------------|
| `onRowClick`  | `(row: object) => void`          | 특정 행을 클릭했을 때 호출되는 콜백.   |
| `onRowSelect` | `(rows: Array<object>) => void`  | 행 선택 시 호출되는 콜백.             |

---

## 사용 예제

### 정렬 및 필터링 활성화

```typescript jsx
<DataGrid
  columns={[
    { key: "id", label: "ID", width: 50, sortable: true },
    { key: "name", label: "Name", width: 150, filterable: true },
    { key: "email", label: "Email", width: 200 },
  ]}
  data={[
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  ]}
  options={{
    rowHeight: 30,
    sortable: true,
    filterable: true,
  }}
/>;
```
---

### 다중 선택 활성화

```typescript jsx
<DataGrid
  columns={[
    { key: "id", label: "ID", width: 50 },
    { key: "name", label: "Name", width: 150 },
  ]}
  data={[
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]}
  options={{
    multiSelect: true,
  }}
  onRowSelect={(rows) => console.log("Selected Rows:", rows)}
/>;
```
