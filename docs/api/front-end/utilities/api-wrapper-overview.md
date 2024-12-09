---
sidebar_position: 1
---

# API Wrapper 개요

apiWrapper.ts는 Axboot API와의 통신을 표준화하고, 공통적인 기능(헤더 관리, 오류 처리, URL 설정 등)을 제공하는 유틸리티 모듈입니다. 이 모듈은 Axios 라이브러리를 기반으로 동작하며, 모든 API 호출에서 일관성을 유지합니다.

## 주요 기능:

### 1. 기본 URL 관리:

- 환경에 따라 적절한 API URL을 설정합니다.
- 예: 테스트 환경에서는 `VITE_TEST_API_URL`, 프로덕션 환경에서는 `VITE_API_URL` 사용.

### 2. 요청 헤더 자동화:

- 모든 요청에 인증 토큰을 포함합니다.
- 토큰이 없는 경우, 인증이 필요한 요청은 자동으로 실패합니다.

### 3. 오류 처리:

- 서버에서 반환된 오류를 ApiError 객체로 변환하여 클라이언트에서 쉽게 처리할 수 있도록 합니다.

### 4. 지연 시뮬레이션 (Delay):

- 개발 및 테스트 환경에서 네트워크 지연을 시뮬레이션할 수 있는 옵션 제공.

---

## API Wrapper의 주요 코드 예시

```typescript
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiError } from './ApiError';

export const API_URL = (() => {
  if (sessionStorage.getItem('isApiTest') === 'T') {
    return import.meta.env.VITE_TEST_API_URL; // 테스트 환경
  }
  return import.meta.env.VITE_API_URL ?? ''; // 기본 URL
})();

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 요청 타임아웃 (10초)
});

// 요청 인터셉터: 인증 헤더 추가
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = sessionStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 오류 처리
instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    throw new ApiError(error.response?.data?.error?.code, error.response?.data?.error?.message);
  }
);

export const api = instance;
```
