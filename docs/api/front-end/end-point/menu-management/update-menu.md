---
sidebar_position: 3
---

# 메뉴 수정

기존 메뉴를 수정합니다.

- 메서드: `PUT`
- URL: `/api/v1/menus/{id}`

#### 요청 바디:
```json
{
  "name": "Updated Menu",
  "roles": ["ROLE_USER"]
}

```


#### 응답 예시:
```json
{
  "success": true,
  "data": {
    "id": 4,
    "name": "Updated Menu",
    "roles": ["ROLE_USER"]
  },
  "error": null
}
```
