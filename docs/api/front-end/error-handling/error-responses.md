---
sidebar_position: 2
---


# 오류 응답 포맷

API 오류 응답은 항상 다음과 같은 JSON 구조를 따릅니다:

#### 기본 포맷:

```json
{
  "success": false,
  "data": null,
  "error": {
    "code": <오류 코드>,
    "message": "<오류 메시지>"
  }
}
```

#### 필드 설명:
- success: 요청 성공 여부를 나타냅니다. 오류의 경우 항상 false.
- data: 실패한 요청이므로 항상 null.
- error:
  - code: 오류를 나타내는 고유 코드.
  - message: 사람이 읽을 수 있는 오류 설명.
