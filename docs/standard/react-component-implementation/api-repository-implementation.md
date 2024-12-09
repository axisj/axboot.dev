---
sidebar_position: 4
---

# API 리포지토리 구현

```typescript
import { apiWrapper } from "services/apiWrapper";
import {
  GetSystemProgramResponse,
  PutSystemProgramResponse,
  SystemProgramRepositoryInterface,
} from "./SystemProgramRepositoryInterface";


// SystemProgramRepositoryInterface를 구현 하는 코드를 apiWrapper를 활용 하여 작성합니다.
export class SystemProgramRepository implements SystemProgramRepositoryInterface {
  async getSystemProgram(params): Promise<GetSystemProgramResponse> {
    const { data } = await apiWrapper<GetSystemProgramResponse>("get", "/system/program", params);
    return data;
  }


  async putSystemProgram(params): Promise<PutSystemProgramResponse> {
    await apiWrapper<PutSystemProgramResponse>("put", "/system/program", params);
    return {};
  }
}
```

---
모든 API는 Service로 감싸서 사용함을 권장합니다. 서비스는 RepositoryInterface에서 정의하고 Repository에서 구현합니다. 구현된 Repository는 Service로 Export하여 프로그램들에서 사용 되게 합니다.

![API Endpoint 시스템 개요](/img/standard_api_repo_1.png)
*API Endpoint 시스템 개요*
