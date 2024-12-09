---
sidebar_position: 7
---

# 파리미터 검색

`SearchParams`는 Axboot 애플리케이션에서 URL 쿼리 파라미터를 동적으로 관리하고, 검색 조건을 저장하거나 불러오기 위해 설계된 유틸리티 클래스입니다. 이 클래스는 쿼리 문자열을 쉽게 생성, 업데이트, 변환할 수 있도록 돕습니다.

## 주요 메서드

### 1. constructor(initialParams: object)

초기 검색 파라미터를 설정합니다.

##### 매개변수

| 이름           | 타입      | 필수 | 설명                                    |
  |----------------|-----------|------|-----------------------------------------|
| `initialParams`| `object`  | ✅   | 초기 검색 조건 객체.                     |

##### 예제

```typescript
  const searchParams = new SearchParams({
    status: "active",
    page: 1,
  });
```

---

### 2. toString(): string

설정된 검색 파라미터를 URL 쿼리 문자열로 변환합니다.

- 반환값: `string` - URL 쿼리 문자열.

##### 예제:
```typescript
const searchParams = new SearchParams({ status: "active", page: 1 });
console.log(searchParams.toString()); // ?status=active&page=1
```

---
### 3. get(key: string): any

특정 키의 값을 반환합니다.
- 반환값: any - 해당 키의 값.

##### 매개변수:
|이름	|타입	|필수	|설명|
|---|---|---|---|
|`key`	|`string`	|✅	|검색 파라미터 키.|

```typescript
const searchParams = new SearchParams({ status: "active", page: 1 });
console.log(searchParams.get("status")); // "active"
```
---

### 4. set(key: string, value: any): void

특정 키의 값을 설정하거나 업데이트합니다.

##### 매개변수:
|이름	|타입	|필수	|설명|
|---|---|---|---|
|`key`	|`string`	|✅	|설정할 검색 파라미터 키.|
|`value`	|`any`	|✅	|설정할 값.|

```typescript
const searchParams = new SearchParams({ status: "active" });
searchParams.set("page", 2);
console.log(searchParams.toString()); // ?status=active&page=2
```

---
### 5. remove(key: string): void

특정 키를 검색 파라미터에서 제거합니다.

##### 매개변수:
|이름	|타입	|필수	|설명|
|---|---|---|---|
|`key`	|`string`	|✅	|삭제할 검색 파라미터 키.|

```typescript
const searchParams = new SearchParams({ status: "active", page: 1 });
searchParams.remove("status");
console.log(searchParams.toString()); // ?page=1
```

---
### 6. clear(): void

모든 검색 파라미터를 제거합니다.

```typescript
const searchParams = new SearchParams({ status: "active", page: 1 });
searchParams.clear();
console.log(searchParams.toString()); // ""
```

---

## 사용 예제

### 기본 사용

```typescript
const searchParams = new SearchParams({ status: "active", page: 1 });

// 기존 값 가져오기
console.log(searchParams.get("status")); // "active"

// 값 설정 및 쿼리 문자열 생성
searchParams.set("sort", "desc");
console.log(searchParams.toString()); // ?status=active&page=1&sort=desc

// 값 제거
searchParams.remove("page");
console.log(searchParams.toString()); // ?status=active&sort=desc
```

---

### URL 쿼리 문자열 관리

```typescript
const searchParams = new SearchParams({ status: "inactive" });

// 초기 상태
console.log(searchParams.toString()); // ?status=inactive

// 여러 값을 추가
searchParams.set("page", 2);
searchParams.set("sort", "asc");
console.log(searchParams.toString()); // ?status=inactive&page=2&sort=asc

// 초기화
searchParams.clear();
console.log(searchParams.toString()); // ""
```

##### 메서드 요약
| 메서드        | 설명                                     |
|---------------|------------------------------------------|
| `constructor` | 초기 검색 파라미터를 설정.               |
| `toString`    | 검색 파라미터를 URL 쿼리 문자열로 변환.   |
| `get`         | 특정 키의 값을 반환.                     |
| `set`         | 특정 키의 값을 설정하거나 업데이트.       |
| `remove`      | 특정 키를 검색 파라미터에서 제거.         |
| `clear`       | 모든 검색 파라미터를 제거.               |
