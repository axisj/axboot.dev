---
sidebar_position: 2
---

# 커스텀 후크 구현

```typescript
import { useCallback, useEffect, useState } from "react";
import { SystemProgram, SystemProgramService } from "../services";
import { errorHandling } from "../utils";


export function useSystemProgramService() {
 const [list, setList] = useState<SystemProgram[]>([]);
 const [spinning, setSpinning] = useState(false);


 const getList = useCallback(async () => {
   setSpinning(true);
   try {
     const data = await SystemProgramService.getSystemProgram({
       pageSize: 9999,
     });
     setList(data.ds);
   } catch (err) {
     await errorHandling(err);
   } finally {
     setSpinning(false);
   }
 }, []);


 useEffect(() => {
   getList().then();
 }, [getList]);


 return {
   list,
   spinning,
   getList,
 };
}
```
