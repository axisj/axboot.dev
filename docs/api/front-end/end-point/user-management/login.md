---
sidebar_position: 1
---

# 로그인

사용자 인증을 위한 로그인 API.

- 메서드: POST
- URL: `/api/v1/auth/login`
- 요청 헤더: `Content-Type: application/json`

#### 요청 바디:
```json
{
    "username": "user@example.com",
    "password": "example_password"
}
```

#### 응답 예시:
```json
{
  "success": true,
  "data": {
    "token": "jwt_token",
    "user": {
      "id": 1,
      "name": "John Doe",
      "roles": ["ROLE_USER"]
    }
  },
  "error": null
}
```

#### 오류 응답:
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": 401,
    "message": "Invalid credentials"
  }
}
```
