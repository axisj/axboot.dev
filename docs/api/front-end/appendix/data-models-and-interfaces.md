---
sidebar_position: 1
---

# 데이터 모델 및 인터페이스

Axboot API에서 사용하는 주요 데이터 모델과 인터페이스는 다음과 같습니다. 이 인터페이스는 TypeScript를 기준으로 작성되었습니다.

## 1. 사용자 모델 (User)

```typescript
interface User {
  id: number;               // 사용자 고유 ID
  name: string;             // 사용자 이름
  email: string;            // 이메일 주소
  roles: string[];          // 사용자 권한 목록
  language?: string;        // 선호 언어 (선택적)
}
```


## 2. 메뉴 모델 (Menu)

```typescript
interface Menu {
  id: number;               // 메뉴 ID
  name: string;             // 메뉴 이름
  roles: string[];          // 접근 권한이 있는 사용자 역할
  children: Menu[];         // 하위 메뉴
  multiLang?: {             // 다국어 지원
    [key: string]: string;  // 예: { ko: "대시보드", en: "Dashboard" }
  };
}
```

## 3. 파일 모델 (File)

```typescript
interface File {
  fileId: string;           // 파일 고유 ID
  fileName: string;         // 파일 이름
  fileUrl: string;          // 파일 다운로드 URL
  uploadedAt: string;       // 업로드 시간 (ISO 8601 포맷)
}
```


## 4. 시스템 설정 모델 (Settings)

```typescript
interface Settings {
  theme: string;            // 테마 설정 (예: "dark" 또는 "light")
  language: string;         // 언어 설정 (예: "ko", "en")
  [key: string]: any;       // 기타 설정 키-값 쌍
}
```
