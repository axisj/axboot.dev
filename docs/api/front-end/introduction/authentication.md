---
sidebar_position: 3
---

# 인증 방식

API는 인증이 필요한 요청과 그렇지 않은 요청으로 나뉩니다. 인증이 필요한 요청은 JWT 토큰을 사용하여 보호됩니다.

#### JWT 토큰:

사용자는 POST /api/v1/auth/login을 통해 로그인하면 서버로부터 토큰을 받습니다.
이후 요청 헤더에 토큰을 포함해야 합니다:

```bash
Authorization: Bearer <JWT 토큰>
```

#### 헤더 설정 예시:
```bash
GET /api/v1/users/me HTTP/1.1
Host: api.axboot.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### 토큰 유효성 검사:

서버는 모든 요청에서 토큰의 유효성을 확인하며, 유효하지 않은 토큰은 401 Unauthorized 오류를 반환합니다.


#### 인증 흐름:

클라이언트는 사용자 자격 증명을 사용해 로그인 요청 → 서버는 JWT 토큰 반환 → 클라이언트는 API 요청 시 토큰 포함.
