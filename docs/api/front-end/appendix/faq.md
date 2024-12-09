---
sidebar_position: 3
---

# 자주 묻는 질문 (FAQ)

Q1. API 요청 시 `401 Unauthorized` 오류가 발생합니다.

A:
- 인증 토큰이 없거나 유효하지 않을 가능성이 있습니다.
- 요청 헤더에 아래와 같이 올바른 토큰이 포함되었는지 확인하세요:

```bash
Authorization: Bearer <JWT 토큰>
```
---

Q2. 파일 업로드 시 `413 Payload Too Large` 오류가 발생합니다.

A:
- 업로드 파일의 크기가 서버에서 허용된 한도를 초과했을 수 있습니다.
- API에서 지원하는 파일 크기 한도를 확인하고 파일을 압축하거나 크기를 줄여 업로드하세요.

--- 

Q3. 다국어 지원을 추가하고 싶습니다.

A:
- 메뉴 데이터(`/menus`)의 `multiLang` 필드를 사용하여 다국어를 설정할 수 있습니다.
- 예를 들어, 아래와 같은 데이터를 전송하면 다국어 메뉴를 구성할 수 있습니다:

---

Q4. 테스트 환경에서 목업 데이터를 사용하려면 어떻게 해야 하나요?

A:
환경 변수 `VITE_API_URL` 대신`VITE_TEST_API_URL`을 설정하여 테스트 환경으로 전환합니다.
또는 `services/repository/mock` 폴더의 목업 데이터를 직접 참조하여 개발을 진행할 수 있습니다.

---

Q5. 사용자 역할에 따라 다른 메뉴를 표시하려면 어떻게 해야 하나요?

A:
Menu 모델의 roles 필드를 확인하여 해당 역할이 포함된 메뉴만 필터링하세요:
```typescript
const accessibleMenus = menuData.filter(menu =>
  menu.roles.includes(currentUserRole)
);
```
