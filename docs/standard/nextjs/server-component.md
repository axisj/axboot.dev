---
sidebar_position: 3
---

# 서버 컴포넌트

서버컴포넌트 페이지 머리에 “use server”를 입력하거나 아무선언이 없으면 Next.js에서 서버컴포넌트로 처리 하게 됩니다. 서버컴포넌트내에서 API요청결과를 사용하는 경우 컴포넌트를 async로 만들고 함수 내부에서 await키워드를 사용하여 API요청을 처리 할 수 있습니다.



```typescript title="/src/components/server/SampleList"
import { SampleService } from "@/services";


interface Props {}


export async function SampleList({}: Props) {
  const { ds } = await SampleService.get({});


  return (
    <div>
      <h2>SampleList</h2>


    <ul>
    {ds.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
    </div>
  );
}
```
