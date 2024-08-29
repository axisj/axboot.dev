import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

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
    'intro',
    {
      type: 'category',
      label: "Getting Started",
      items: [
        'tutorial/getting-started/installation',
        'tutorial/getting-started/development',
        'tutorial/getting-started/build'
      ]
    },
    {
      type: 'category',
      label: 'Front-End',
      items: [
        'tutorial/front-end/router',
        'tutorial/front-end/page-frame',
        'tutorial/front-end/program',
        'tutorial/front-end/program-store',
        'tutorial/front-end/template',
        'tutorial/front-end/service-repository',
        'tutorial/front-end/i18n',
        'tutorial/front-end/theme',
      ],
    },
    {
      type: 'category',
      label: 'Back-End',
      items: [
        'tutorial/back-end/dev-environment',
        'tutorial/back-end/spring-security',
        'tutorial/back-end/code-generation',
        'tutorial/back-end/create-api-interface',
        'tutorial/back-end/system-api-customizing',
      ],
    }
  ],
  apiSidebar: [
    {
      type: 'category',
      label: 'Back-End',
      items: [
        'api/back-end/system-api',
        'api/back-end/system-api-specification',
      ],
    },
    {
      type: 'category',
      label: 'Front-End',
      items: [
        {
          type: 'category',
          label: 'Components',
          items: [
            'api/front-end/core-component/datagrid',
            'api/front-end/core-component/datagrid-editor',
            'api/front-end/core-component/drawer-store',
            'api/front-end/core-component/modal-store',
            'api/front-end/core-component/MultiFilter',
            'api/front-end/core-component/program-title',
            'api/front-end/core-component/SearchParams',
            'api/front-end/core-component/StatTable',
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Internal Module',
      items: ['api/module-builtin/user'],
    },
    {
      type: 'category',
      label: 'External Module',
      items: ['api/module-additional/excel-converter'],
    }
  ],
};

export default sidebars;
