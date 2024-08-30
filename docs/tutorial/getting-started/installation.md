---
sidebar_position: 1
---

# Installation

## Requirements
[Node.js](https://nodejs.org/en/download/package-manager) version 20.17.0 또는 그 이상 


:::tip Node.js 버전관리
- `node -v` 명령어를 터미널에 입력하여 버전을 체크할 수 있습니다.
- [nvm](https://github.com/nvm-sh/nvm)등을 이용하여 로컬환경에 Node.js버전을 관리 할 수 있습니다
:::


## 설치하기

```bash npm2yarn
npm init axboot@latest
```

사이트 시작하기
```bash
cd my-website
npm run dev
```

## Project structure {#project-structure}

Assuming you chose the classic template and named your site `my-website`, you will see the following files generated under a new directory `my-website/`:

```bash
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

### Project structure rundown {#project-structure-rundown}

- `/blog/` - Contains the blog Markdown files. You can delete the directory if you've disabled the blog plugin, or you can change its name after setting the `path` option. More details can be found in the [blog guide](blog.mdx)
- `/docs/` - Contains the Markdown files for the docs. Customize the order of the docs sidebar in `sidebars.js`. You can delete the directory if you've disabled the docs plugin, or you can change its name after setting the `path` option. More details can be found in the [docs guide](./guides/docs/docs-introduction.mdx)
- `/src/` - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files here, but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing
  - `/src/pages` - Any JSX/TSX/MDX file within this directory will be converted into a website page. More details can be found in the [pages guide](guides/creating-pages.mdx)
- `/static/` - Static directory. Any contents inside here will be copied into the root of the final `build` directory
- `/docusaurus.config.js` - A config file containing the site configuration. This is the equivalent of `siteConfig.js` in Docusaurus v1
- `/package.json` - A Docusaurus website is a React app. You can install and use any npm packages you like in them
- `/sidebars.js` - Used by the documentation to specify the order of documents in the sidebar

## Problems? {#problems}

Ask for help on [Stack Overflow](https://stackoverflow.com/questions/tagged/docusaurus), on our [GitHub repository](https://github.com/facebook/docusaurus), our [Discord server](https://discordapp.com/invite/docusaurus), or [Twitter](https://twitter.com/docusaurus).
