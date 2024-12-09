---
sidebar_position: 1
---


# 목업 데이터 활용 예시

AXBoot 프로젝트에서는 `services/repository/mock` 디렉토리에 목업 데이터를 저장하여 활용합니다. 

주요 목업 데이터와 예시는 다음과 같습니다:

---

## 1. 로그인 목업 데이터 (LoginRepositoryMock.ts)

- 목적: 사용자 인증 및 프로필 데이터를 반환.

#### 구조: 

```typescript
export const signInMockData = {
  usrNm: "시스템사용자",
  usrLoginId: "system",
  useLangKncd: "en",
  roleList: ["ROLE_ADMIN", "ROLE_ASP", "ROLE_USER"],
  programList: ["EXAMPLE_PROGRAM", "SETTINGS", "DASHBOARD"]
};
```

#### 활용 예시:
로그인 요청 시 항상 이 데이터를 반환하여 UI 렌더링 테스트 가능.

##### 예제코드
```typescript
const login = async () => {
  const response = signInMockData;
  console.log(response.usrNm); // "시스템사용자"
};
```

---

## 2. 메뉴 목업 데이터 (MenuRepositoryMock.ts)

- 목적: 메뉴 구성 데이터를 제공하여 다국어 지원 및 권한 테스트.

#### 구조: 

```typescript
export const menuMockData = [
  {
    menuGroupId: "_",
    multiLang: { ko: "대시보드", en: "Dashboard" },
    children: [],
    userGroup: ["ROLE_ADMIN", "ROLE_USER"]
  },
  {
    menuGroupId: "SETTINGS",
    multiLang: { ko: "설정", en: "Settings" },
    children: [
      {
        menuGroupId: "PROFILE",
        multiLang: { ko: "프로필", en: "Profile" },
        children: [],
        userGroup: ["ROLE_USER"]
      }
    ],
    userGroup: ["ROLE_ADMIN"]
  }
];
```
#### 활용 예시:
메뉴 UI 구성 시 권한별 메뉴 표시를 테스트 가능.

##### 예제코드
```typescript
const menus = menuMockData.filter(menu =>
  menu.userGroup.includes("ROLE_USER")
);
console.log(menus); // ROLE_USER가 접근 가능한 메뉴만 표시
```
---

## 3. 파일 업로드 목업 데이터 (FileUploadMock.ts)

- 목적: 파일 업로드 결과를 시뮬레이션.

#### 구조:

```typescript
export const fileUploadMockData = {
  success: true,
  data: {
    fileId: "12345",
    fileName: "example.png",
    fileUrl: "/uploads/example.png"
  },
  error: null
};
```
#### 활용 예시:
파일 업로드 후 반환된 데이터로 UI 업데이트.

##### 예제코드
```typescript
const uploadFile = async () => {
  const response = fileUploadMockData;
  console.log(response.data.fileUrl); // "/uploads/example.png"
};
```
---


## 3. 시스템 설정 목업 데이터 (SettingsMock.ts)

- 목적: 시스템 설정 데이터를 반환.

#### 구조:

```typescript
export const settingsMockData = {
  theme: "dark",
  language: "ko"
};
```

#### 활용 예시:
UI에서 다크 모드와 언어 설정을 테스트 가능.

##### 예제코드
```typescript
const settings = settingsMockData;
console.log(settings.theme); // "dark"
```
---

## 목업 데이터 관리 방법

- 파일 경로: 모든 목업 데이터는 services/repository/mock 폴더에 저장합니다.
- 구조 유지: 실제 API 응답과 동일한 데이터 구조를 사용하여 이후 통합 시 오류를 최소화합니다.
- 테스트 분리: 실제 API 호출과 목업 데이터를 쉽게 전환할 수 있도록 설정 파일이나 환경 변수를 활용합니다.
