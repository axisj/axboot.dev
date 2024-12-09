import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      items: [
        "tutorial/getting-started/installation",
        "tutorial/getting-started/development",
        "tutorial/getting-started/build",
      ],
    },
    {
      type: "category",
      label: "Front-End",
      items: [
        "tutorial/front-end/router",
        "tutorial/front-end/page-frame",
        "tutorial/front-end/program",
        "tutorial/front-end/program-store",
        "tutorial/front-end/template",
        "tutorial/front-end/service-repository",
        "tutorial/front-end/i18n",
        "tutorial/front-end/theme",
      ],
    },
    {
      type: "category",
      label: "Back-End",
      items: [
        "tutorial/back-end/dev-environment",
        "tutorial/back-end/spring-security",
        "tutorial/back-end/code-generation",
        "tutorial/back-end/create-api-interface",
        "tutorial/back-end/system-api-customizing",
      ],
    },
  ],
  standardSidebar: [
    "standard/intro",
    {
      type: "category",
      label: "개발 표준의 목적 및 범위",
      items: ["standard/development-standards/purpose", "standard/development-standards/scope"],
    },
    {
      type: "category",
      label: "프레임워크 공통 가이드",
      items: ["standard/framework-guidelines/project-structure", "standard/framework-guidelines/naming-convention"],
    },
    {
      type: "category",
      label: "리액트 컴포넌트 구현",
      items: [
        "standard/react-component-implementation/component-implementation",
        "standard/react-component-implementation/custom-hook-implementation",
        "standard/react-component-implementation/custom-hook-usage",
        "standard/react-component-implementation/api-repository-implementation",
        "standard/react-component-implementation/store-implementation",
      ],
    },
    {
      type: "category",
      label: "Next.js",
      items: [
        "standard/nextjs/layout",
        "standard/nextjs/page",
        "standard/nextjs/server-component",
        "standard/nextjs/client-component",
      ],
    },
    {
      type: "category",
      label: "테스트",
      items: [
        "standard/testing/playwright-setup",
        "standard/testing/url-e2e-test",
        "standard/testing/url-e2e-test-target",
      ],
    },
  ],
  apiSidebar: [
    {
      type: "category",
      label: "프론트엔드",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "시작하기",
          items: [
            "api/front-end/introduction/overview",
            "api/front-end/introduction/base-url",
            "api/front-end/introduction/authentication",
            "api/front-end/introduction/response-format",
          ],
        },
        {
          type: "category",
          label: "엔드포인트",
          items: [
            {
              type: "category",
              label: "사용자 관리",
              items: [
                "api/front-end/end-point/user-management/login",
                "api/front-end/end-point/user-management/logout",
                "api/front-end/end-point/user-management/get-user-profile",
                "api/front-end/end-point/user-management/update-user-info",
              ],
            },
            {
              type: "category",
              label: "메뉴 관리",
              items: [
                "api/front-end/end-point/menu-management/get-menu",
                "api/front-end/end-point/menu-management/create-menu",
                "api/front-end/end-point/menu-management/update-menu",
                "api/front-end/end-point/menu-management/delete-menu",
              ],
            },
            {
              type: "category",
              label: "파일 관리",
              items: [
                "api/front-end/end-point/file-management/upload-file",
                "api/front-end/end-point/file-management/download-file",
              ],
            },
            {
              type: "category",
              label: "시스템 설정",
              items: [
                "api/front-end/end-point/system-configuration/get-system-setting",
                "api/front-end/end-point/system-configuration/update-system-setting",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "오류 처리",
          items: [
            "api/front-end/error-handling/error-codes",
            "api/front-end/error-handling/error-responses",
            "api/front-end/error-handling/common-errors",
          ],
        },
        {
          type: "category",
          label: "목업 데이터",
          items: ["api/front-end/mock-data/purpose-of-mock-data", "api/front-end/mock-data/mock-data-usage-examples"],
        },
        {
          type: "category",
          label: "유틸리티",
          items: [
            "api/front-end/utilities/api-wrapper-overview",
            "api/front-end/utilities/axios-configuration-details",
          ],
        },
        {
          type: "category",
          label: "내부모듈",
          items: [
            "api/front-end/module-builtin/datagrid",
            "api/front-end/module-builtin/datagrid-editor",
            "api/front-end/module-builtin/drawer-store",
            "api/front-end/module-builtin/modal-store",
            "api/front-end/module-builtin/multifilter",
            "api/front-end/module-builtin/program-title",
            "api/front-end/module-builtin/search-params",
            "api/front-end/module-builtin/stat-table",
          ],
        },
        {
          type: "category",
          label: "외부모듈",
          items: ["api/front-end/module-additional/excel-converter"],
        },
        {
          type: "category",
          label: "부록",
          items: [
            "api/front-end/appendix/data-models-and-interfaces",
            "api/front-end/appendix/changelog",
            "api/front-end/appendix/faq",
          ],
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "백엔드",
    //   items: ["api/back-end/system-api", "api/back-end/system-api-specification"],
    // },
  ],
};

export default sidebars;
