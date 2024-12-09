---
sidebar_position: 1
---

# 컴포넌트 구현

```typescript
import styled from "@emotion/styled";

// 컴포넌트 Props 인터페이스
interface Props {}

// 컴포넌트 export는 기본으로 named export를 사용합니다.
// 필요한경우 default 키워드 사용하여 lasy처리 합니다.
export function NewComponent({}: Props) {
  return <Div>NewComponent</Div>;
}

const Div = styled.div``;
// 컴포넌트 스타일링 (width StyeldComponents)
```
