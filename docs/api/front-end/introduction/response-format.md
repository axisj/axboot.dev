---
sidebar_position: 4
---

# 응답 포맷

모든 API 응답은 JSON 형식으로 제공되며, 다음과 같은 공통 구조를 가집니다:

#### 성공 응답:

```json
{
  "success": true,
  "data": {
    "key": "value"
  },
  "error": null
}
```
- **success** : 요청 성공 여부 (boolean).
- **data** : 요청 결과 데이터 (object).
- **error** : 에러 정보가 없을 경우 null.

---

#### 에러 응답:

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": 401,
    "message": "Unauthorized"
  }
}
```

- **success** : 요청 실패를 나타냄.
- **data** : 실패한 요청은 항상 null.
- **error** : 에러 코드 및 메시지를 포함.

---

#### 예시:

##### 성공: 
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "roles": ["ROLE_USER"]
    }
  },
  "error": null
}
```

##### 실패:
```json
{
"success": false,
"data": null,
"error": {
"code": 404,
"message": "Resource not found"
}
}
```

이 표준 구조는 클라이언트가 API 응답을 쉽게 파싱하고 처리할 수 있도록 설계되었습니다.

