---
sidebar_position: 8
---

# 스탯 테이블

`StatTable`은 Axboot 애플리케이션에서 간단한 통계 데이터를 시각적으로 표시하기 위한 컴포넌트입니다. 각 통계 항목은 레이블과 값을 포함하며, 직관적인 데이터 표시를 제공합니다.


## 기본 사용법
```tsx
import StatTable from "@/components/StatTable";

<StatTable
  stats={[
    { label: "Total Users", value: 1234 },
    { label: "Active Users", value: 567 },
  ]}
/>;
```
---

## Props

### StatTable Props
| 이름   | 타입            | 필수 | 설명                          |
|--------|-----------------|------|-------------------------------|
| `stats`| `Array<Stat>`   | ✅   | 표시할 통계 데이터 배열.        |


### Stat 속성
| 이름     | 타입      | 필수 | 설명                      |
|----------|-----------|------|---------------------------|
| `label`  | `string`  | ✅   | 통계 항목의 이름.          |
| `value`  | `number`  | ✅   | 통계 항목의 값.            |



---

## 사용 예제

### 간단한 통계 표시
```tsx
<StatTable
  stats={[
    { label: "Total Sales", value: 1000 },
    { label: "Pending Orders", value: 25 },
  ]}
/>;
```

---

### 동적 데이터 사용

```tsx
const statsData = [
  { label: "New Users", value: 50 },
  { label: "Churn Rate", value: 5 },
];

<StatTable stats={statsData} />;
```

---

### 동복잡한 데이터 표시

```tsx
<StatTable
  stats={[
    { label: "Completed Tasks", value: 150 },
    { label: "Open Tasks", value: 20 },
    { label: "Overdue Tasks", value: 5 },
  ]}
/>;
```

##### Props 요약
| 이름   | 타입            | 필수 | 설명                          |
|--------|-----------------|------|-------------------------------|
| `stats`| `Array<Stat>`   | ✅   | 표시할 통계 데이터 배열.        |


##### Stat 속성 요약
| 이름     | 타입      | 필수 | 설명                      |
|----------|-----------|------|---------------------------|
| `label`  | `string`  | ✅   | 통계 항목의 이름.          |
| `value`  | `number`  | ✅   | 통계 항목의 값.            |

