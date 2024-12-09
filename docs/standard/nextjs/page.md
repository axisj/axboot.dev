---
sidebar_position: 2
---

# 페이지

page컴포넌트는 미들웨에서 랜더링 되어 SSR모드로 클라이언트에 결과를 반환하게 됩니다. SEO에 필요한 메타데이터 는 generateMetadata함수에 리턴값으로 표시되게 되는데. API를 통해 관리 할 수 있도록 공통의 함수에서 관리 합니다. 예외의 경우 서버 요청없이 title, description을 반환 할 수 있습니다.


```typescript title="/src/app/page.tsx"
import { getPageMetaData } from "@/utils/metadata/getPageMetaData";


export default function Home() {
  return <div className={"page-container"}>TEST</div>;
}


// metadata
export async function generateMetadata() {
  return await getPageMetaData({ pageRoutePath: "index" });
}
```
