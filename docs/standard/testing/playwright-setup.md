---
sidebar_position: 1
---

# playwright 설정

e2e테스트를 진행하기 위한 설정정보를 관리합니다. 초기 설정은 e2e폴더에 있는 *.spec.ts 파일을 실행하여 테스트 대상이 되는 디바이스에서 수행하고 그 결과를 콘솔과 test-results 폴더에 남기게 됩니다.

```typescript title="playwright.config.ts"
import { defineConfig, devices } from "@playwright/test";
import path from "path";


const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;


export default defineConfig({
  // Timeout per test
  timeout: 30 * 1000,
  // Test directory
  testDir: path.join(__dirname, "e2e"),
  // If a test fails, retry it additional 2 times
  retries: 2,
  // Artifacts folder where screenshots, videos, and traces are stored.
  outputDir: "test-results/",
  webServer: {
    command: "npm run dev",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },


  use: {
    baseURL,
    trace: "retry-with-trace",
  },


  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

  ],
});
```
