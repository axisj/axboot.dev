---
sidebar_position: 2
---

# 로그아웃

사용자 세션을 종료합니다.

- 메서드: POST
- URL: `/api/v1/auth/logout`
- 요청 헤더: `Authorization: Bearer <JWT 토큰>`

#### 응답 예시:
```json
{
  "success": true,
  "data": null,
  "error": null
}
```
