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

Assuming you chose the classic template and named your site `my-app`, you will see the following files generated under a new directory `my-app/`:

```bash
my-app
├── @types
├── public
├── src
│    ├── @core
│    ├── @types
│    ├── components
│    ├── hooks
│    ├── i18n
│    ├── modals
│    ├── pageFrame
│    ├── pages
│    ├── router
│    ├── services
│    ├── stores
│    ├── styles
│    ├── utils
│    ├── App.tsx
│    ├── customizeAntd.tsx
│    ├── main.tsx
│    ├── makeModalProgramConfig.ts
│    ├── makeProgramConfig.ts
│    ├── projectConfig.ts
│    └── vite-env.d.ts
├── .env
├── .env.alpha
├── .env.beta
├── .env.dev
├── .eslintrc.cjs
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Project structure rundown {#project-structure-rundown}

- `/@types/` - 
- `/public/` - 
- `/src/` -
  - `/src/@core` -
  - `/src/@types` -
  - `/src/components` -
  - `/src/hooks` -
  - `/src/i18n` -
  - `/src/modals` -
  - `/src/pageFrame` -
  - `/src/pages` -
  - `/src/router` -
  - `/src/services` -
  - `/src/stores` -
  - `/src/styles` -
  - `/src/utils` -
  - `/src/App.tsx` -
  - `/src/customizeAntd.tsx` -
  - `/src/main.tsx` -
  - `/src/makeModalProgramConfig.ts` -
  - `/src/makeProgramConfig.ts` -
  - `/src/projectConfig.ts` -
  - `/src/vite-env.d.ts` -
- `/.env` - A config file containing the site configuration. This is the equivalent of `siteConfig.js` in Docusaurus v1
- `/.eslintrc.cjs` -
- `/package.json` -
- `index.html` - 
- `package.json` - 
- `README.md` - 
- `tsconfig.json` - 
- `tsconfig.node.json` - 
- `vite.config.ts` - 

## Problems? {#problems}

질문이 있으신 경우 [Stack Overflow](https://stackoverflow.com/questions/tagged/axboot), 
[GitHub repository](https://github.com/axisj/axboot) 또는 
[Discord server](https://discordapp.com/invite/axboot)를 이용해주세요.
