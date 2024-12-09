---
sidebar_position: 7
---

# 시스템 API 사용자화


## 1.프론트엔드와 연동
프론트엔드에서 인터페이스를 호출하여 데이터를 동적으로 처리합니다.
 
```ts title="UserService.ts"
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = async () => {
const response = await axios.get(`${API_URL}/users`);
return response.data;
};
```
