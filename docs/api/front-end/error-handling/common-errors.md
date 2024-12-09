---
sidebar_position: 3
---


# 공통 오류 사례

## 잘못된 요청 (400 Bad Request)

클라이언트가 잘못된 데이터를 전송한 경우 발생.

#### 예시 요청:
```json
{
  "username": "example",
  "password": ""
}
```

#### 응답 예시:
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": 1000,
    "message": "Password is required"
  }
}
```
---

## 인증 실패 (401 Unauthorized)

인증 토큰이 없거나 유효하지 않은 경우 발생.

- 헤더: `Authorization: Bearer <토큰>`

#### 응답 예시:
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": 1001,
    "message": "Invalid or expired token"
  }
}
```
---

## 권한 없음 (403 Forbidden)

요청한 리소스에 접근할 권한이 없는 경우 발생.

#### 응답 예시:
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": 1002,
    "message": "You do not have permission to access this resource"
  }
}
```
---

## 리소스 없음 (404 Not Found)

요청한 리소스가 존재하지 않을 때 발생.

#### 응답 예시:
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": 1003,
    "message": "Resource not found"
  }
}
```

---

## 데이터 충돌 (409 Conflict)

데이터 중복 또는 상태 충돌로 인해 요청이 실패.

#### 응답 예시:
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": 1004,
    "message": "Duplicate entry detected"
  }
}
```

---

## 서버 내부 오류 (500 Internal Server Error)

서버에서 예상치 못한 오류가 발생.

#### 응답 예시:
```json
{
  "success": false,
  "data": null,
  "error": {
    "code": 1005,
    "message": "An unexpected error occurred"
  }
}
```
