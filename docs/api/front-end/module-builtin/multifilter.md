---
sidebar_position: 5
---

# 멀티 필터

`Multifilter`는 Axboot 시스템에서 데이터를 필터링하기 위한 컴포넌트입니다. 여러 조건을 기반으로 데이터를 동적으로 필터링할 수 있도록 설계되었습니다.


## 기본 사용법

```typescript jsx
import Multifilter from "@/components/Multifilter";

<Multifilter
  filters={[
    { key: "status", label: "Status", type: "select", options: ["Active", "Inactive"] },
    { key: "date", label: "Date", type: "date" },
  ]}
  onChange={(filters) => console.log("Active Filters:", filters)}
/>;
```
---

## Props

##### Multifilter Props
| 이름       | 타입               | 필수 | 설명                                     |
|------------|--------------------|------|------------------------------------------|
| `filters`  | `Array<Filter>`    | ✅   | 필터 정의 배열.                          |
| `onChange` | `(filters) => void`| ✅   | 필터 값이 변경되었을 때 호출되는 콜백 함수. |


##### Filter 속성
| 이름       | 타입               | 필수 | 설명                                    |
|------------|--------------------|------|-----------------------------------------|
| `key`      | `string`           | ✅   | 필터를 식별하기 위한 고유 키.            |
| `label`    | `string`           | ✅   | 필터의 표시 이름.                        |
| `type`     | `string`           | ✅   | 필터 유형 (`text`, `select`, `date` 등). |
| `options`  | `Array<string>`    | ❌   | `select` 유형일 경우 선택 가능한 옵션.    |
| `default`  | `any`              | ❌   | 필터의 기본값.                           |


---

## 타입별 설명

### 1. Text Filter
텍스트 입력 필터.

```typescript jsx
<Multifilter
  filters={[
    { key: "name", label: "Name", type: "text" },
  ]}
  onChange={(filters) => console.log(filters)}
/>;
```

|속성	| 설명               |
|---|------------------|
|type	| text             |
|onChange	| 텍스트 입력값 변경 시 호출. |

---
### 2. Select Filter
드롭다운 선택 필터.

```typescript jsx
<Multifilter
  filters={[
    { key: "status", label: "Status", type: "select", options: ["Active", "Inactive"] },
  ]}
  onChange={(filters) => console.log(filters)}
/>;
```
|속성	| 설명              |
|---|-----------------|
|type	| select          |
|options	| 선택 가능한 옵션 배열.   |
|onChange	| 선택값 변경 시 호출.    |

---
### 3. Date Filter
날짜 선택 필터.

```typescript jsx
<Multifilter
  filters={[
    { key: "date", label: "Date", type: "date" },
  ]}
  onChange={(filters) => console.log(filters)}
/>;
```
|속성	| 설명              |
|---|-----------------|
|type	| date            |
|onChange	| 날짜 선택값 변경 시 호출. |

---

## 이벤트

### 주요 이벤트

|이름	|타입	|설명|
|---|---|---|
|`onChange`	|`(filters) => void`	|필터 값이 변경될 때 호출됨.|

---

## 사용 예제

### 여러 필터 조합
```typescript jsx
<Multifilter
  filters={[
    { key: "status", label: "Status", type: "select", options: ["Active", "Inactive"] },
    { key: "date", label: "Date", type: "date" },
    { key: "name", label: "Name", type: "text" },
  ]}
  onChange={(filters) => console.log("Current Filters:", filters)}
/>;
```
##### Props 요약
| 이름       | 타입               | 필수 | 설명                                     |
|------------|--------------------|------|------------------------------------------|
| `filters`  | `Array<Filter>`    | ✅   | 필터 정의 배열.                          |
| `onChange` | `(filters) => void`| ✅   | 필터 값이 변경되었을 때 호출되는 콜백 함수. |


##### Filter 속성 요약
| 이름       | 타입               | 필수 | 설명                                    |
|------------|--------------------|------|-----------------------------------------|
| `key`      | `string`           | ✅   | 필터를 식별하기 위한 고유 키.            |
| `label`    | `string`           | ✅   | 필터의 표시 이름.                        |
| `type`     | `string`           | ✅   | 필터 유형 (`text`, `select`, `date` 등). |
| `options`  | `Array<string>`    | ❌   | `select` 유형일 경우 선택 가능한 옵션.    |
| `default`  | `any`              | ❌   | 필터의 기본값.                           |

