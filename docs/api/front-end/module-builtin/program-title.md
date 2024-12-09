---
sidebar_position: 6
---

# 프로그램 제목

`ProgramTitle`은 Axboot 애플리케이션에서 페이지 상단에 현재 프로그램의 제목과 설명을 표시하기 위한 컴포넌트입니다. 사용자에게 현재 페이지의 목적과 기능을 명확히 전달하는 역할을 합니다.

## 기본 사용법

```tsx
import ProgramTitle from "@/components/ProgramTitle";

<ProgramTitle title="Dashboard" description="Overview of system performance" />;
```

---

## Props

### ProgramTitle Props

| 이름          | 타입      | 필수 | 설명                                |
|---------------|-----------|------|-------------------------------------|
| `title`       | `string`  | ✅   | 프로그램의 제목.                    |
| `description` | `string`  | ❌   | 프로그램의 설명 (선택적).            |


---

## 사용 예제

### 기본 사용 예제
```tsx
<ProgramTitle title="User Management" />;
```
결과: 
페이지 상단에 "User Management"라는 제목이 표시됩니다.

---

### 제목과 설명 포함 예제
```tsx
<ProgramTitle
  title="Sales Dashboard"
  description="Track your team's sales performance"
/>;
```
결과:
- 제목: "Sales Dashboard"
- 설명: "Track your team's sales performance"

---

### 동적 제목과 설명 설정

```tsx
const pageTitle = "Reports";
const pageDescription = "Detailed analysis and reports";

<ProgramTitle title={pageTitle} description={pageDescription} />;
```
##### Props 요약

| 이름          | 타입      | 필수 | 설명                                |
|---------------|-----------|------|-------------------------------------|
| `title`       | `string`  | ✅   | 프로그램의 제목.                    |
| `description` | `string`  | ❌   | 프로그램의 설명 (선택적).            |
