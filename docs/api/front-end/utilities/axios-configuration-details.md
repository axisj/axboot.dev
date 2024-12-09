---
sidebar_position: 2
---

# Axios 설정 상세 정보

Axios는 HTTP 요청을 처리하기 위한 라이브러리로, Axboot API에서 다음과 같은 방식으로 설정됩니다.

## 1. 기본 설정

- Base URL: 환경 변수(`VITE_API_URL`)를 통해 설정.
- Timeout: 10초로 설정. 네트워크 지연 또는 서버 응답이 늦을 경우 오류 반환.
- Content-Type: 기본적으로 `application/json`으로 설정.

## 2. 요청 인터셉터

- 요청을 전송하기 전에 실행됩니다.
- JWT 토큰을 Authorization 헤더에 자동으로 추가:

```typescript
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = sessionStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
```

## 3. 응답 인터셉터

- 서버 응답을 처리하거나 오류를 캡처합니다.
- 모든 오류는 ApiError 객체로 변환:

```typescript
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    throw new ApiError(
      error.response?.data?.error?.code,
      error.response?.data?.error?.message
    );
  }
);
```

## 4. 기본 헤더

- 모든 요청에 기본 헤더를 추가합니다:

```typescript
{
  'Content-Type': 'application/json',
    'Authorization': 'Bearer <JWT 토큰>'
}
```

---

## 5. Axios를 활용한 API 호출 예시

#### GET 요청:

```typescript
const fetchUserProfile = async () => {
  try {
    const response = await api.get('/users/me');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
```

#### POST 요청:

```typescript
const login = async (username: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
```


#### PUT 요청:

```typescript
const updateUserProfile = async (profileData: object) => {
  try {
    const response = await api.put('/users/me', profileData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
```
