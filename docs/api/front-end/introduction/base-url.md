---
sidebar_position: 2
---

# 기본 URL

API는 다음과 같은 환경에 따라 다르게 설정된 기본 URL을 사용합니다:

#### 프로덕션 환경 (Production):

```bash
https://api.axboot.com
```

#### 테스트 환경 (Testing):

```bash
https://test-api.axboot.com
```

#### 개발 환경 (Development):

```bash
http://localhost:3000
```



요청 URL은 기본 URL에 엔드포인트를 추가하여 구성됩니다. 

예를 들어, 사용자 로그인 엔드포인트는 `POST /api/v1/auth/login`입니다.
