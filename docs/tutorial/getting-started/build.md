---
sidebar_position: 1
---

# Build
로컬환경에서 테스트한 코드를 웹서버에에 업로드 하기 위해서는 빌드를 해야합니다.
AXBoot 빌드를 위해서는 다음의 명령어를 실행합니다.
```shell
npm run build
```

![build-result.png](..%2Fimages%2Fbuild-result.png)

명령을 실행하면 `dist` 디렉토리가 생성되고, 해당 디렉토리에 빌드된 파일이 저장됩니다.

## 빌드 파일 압축하기
다음의 build.sh 파일을 이용하여 빌드된 결과물을 압축하여 서버에 업로드 할 수 있습니다. CI/CD 파이프라인 구축하기 어려운 경우라면 이 방법을 사용할 수 있습니다.
  
```shell title="build.sh"
#!/bin/bash
today=`date +%y%m%d`;
mkdir -p ./build/$today

npm run build:beta
tar -C ./dist -cvzf ./build/$today/beta-dist.tar.gz .
npm run build
tar -C ./dist -cvzf ./build/$today/production-dist.tar.gz .
```

## 서비스 연결
빌드된 파일을 서버에 업로드하고 서비스를 시작합니다. 서버에는 Nginx, Apache, IIS 등의 웹서버를 사용할 수 있습니다.
AXBoot의 결과물은 SPA(Single Page Application)이므로 서버 설정에 따라 라우팅 설정이 필요할 수 있습니다.
