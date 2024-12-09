---
sidebar_position: 2
---

# 메뉴 생성

새로운 메뉴를 생성합니다.

- 메서드: `POST`
- URL: `/api/v1/menus`
- 요청 헤더: `Content-Type: application/json`

#### 요청 바디:
```json
{
  "name": "New Menu",
  "parentId": null,
  "roles": ["ROLE_ADMIN"]
}

```

#### 응답 예시:
```json
{
  "success": true,
  "data": {
    "id": 4,
    "name": "New Menu",
    "roles": ["ROLE_ADMIN"]
  },
  "error": null
}
```

