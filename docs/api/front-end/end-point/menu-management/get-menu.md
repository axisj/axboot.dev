---
sidebar_position: 1
---

# 메뉴 목록 조회

전체 메뉴 목록을 조회합니다.

- 메서드: `GET`
- URL: `/api/v1/menus`

#### 응답 예시:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Dashboard",
      "roles": ["ROLE_ADMIN"],
      "children": []
    },
    {
      "id": 2,
      "name": "Settings",
      "roles": ["ROLE_USER"],
      "children": [
        {
          "id": 3,
          "name": "Profile",
          "roles": ["ROLE_USER"]
        }
      ]
    }
  ],
  "error": null
}
```
