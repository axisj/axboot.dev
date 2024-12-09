---
sidebar_position: 3
---

# 사용자 프로필 조회

현재 로그인한 사용자의 프로필 정보를 반환합니다.

- 메서드: GET
- URL: `/api/v1/users/me`
- 요청 헤더: `Authorization: Bearer <JWT 토큰>`

#### 응답 예시:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "user@example.com",
    "roles": ["ROLE_USER"]
  },
  "error": null
}
```
