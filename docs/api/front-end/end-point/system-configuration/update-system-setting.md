---
sidebar_position: 2
---

# 시스템 설정 수정

설명: 시스템 설정을 업데이트합니다.

- 메서드: `PUT`
- URL: `/api/v1/settings`

#### 요청 바디:

```json
{
  "key": "theme",
  "value": "light"
}
```

#### 요청 예시:

```json
{
  "success": true,
  "data": {
    "key": "theme",
    "value": "light"
  },
  "error": null
}

```
