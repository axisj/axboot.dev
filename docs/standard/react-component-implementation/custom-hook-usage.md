---
sidebar_position: 3
---

# 커스텀 후크 사용

```typescript
import styled from "@emotion/styled";
import { useSystemProgramService } from "../../hooks";


interface Props {}


export function NewComponent({}: Props) {
  const { list } = useSystemProgramService(); // API코드를 재활용
  return (
    <Div>
      {list.map((item, index) => {
          return <div key={index}>{item.progNm}</div>;
        })}
    </Div>
  );
}


const Div = styled.div``;
```
