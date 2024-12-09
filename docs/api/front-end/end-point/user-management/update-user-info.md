---
sidebar_position: 4
---

# 사용자 정보 수정

사용자 정보를 업데이트합니다.

- 메서드: PUT
- URL: `/api/v1/users/me`
- 요청 헤더:
  `Authorization: Bearer <JWT 토큰>`
  `Content-Type: application/json`

#### 요청 바디:
```json
{
  "name": "Updated User",
  "email": "updated_email@example.com"
}
```

#### 응답 예시:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Updated User",
    "email": "updated_email@example.com"
  },
  "error": null
}
```
