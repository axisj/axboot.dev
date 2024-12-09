---
sidebar_position: 2
---

# url e2e 테스트

```typescript title="playwright.config.ts"
import { test, expect } from "@playwright/test";


test("should navigate to the 디자인 page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'About' and click on it
  await page.click("text=디자인");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/design");
  // The new page should contain an h1 with "About"
  await expect(page.locator("h2")).toContainText("디자인");
});
```

playwright를 이용한 e2e테스트를 수행하는 방법입니다. e2e폴더 하위에 spec파일을 기술 합니다. 각 spec파일에 test함수를 실행하여 테스트를 수항하며 세부 작성법은 다음의 링크를 참조 합니다. https://playwright.dev/docs/writing-tests

터미널에 다음의 커멘드를 입력하면 `npm run test:e2e` 콘솔에 테스트 결과가 보여지게 됩니다.

![콘솔 결과](/img/standard_e2e_test_1.png)
*e2e 콘솔 결과*
