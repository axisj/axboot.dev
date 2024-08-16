import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";

import StoreBox from "@site/src/components/storeBox";
import styles from "./index.module.css";

type StoreItem = {
  title?: string;
  subtitle?: string;
  image?: string;
  tag?: string;
  description?: string;
  fmodules?: JSX.Element;
  bmodules?: JSX.Element;
  license?: JSX.Element;
};

const StoreList1: StoreItem[] = [
  {
    title: "AXBoot Basic",
    subtitle: "스타트업 개발자를 위한 최고의 선택",
    image: "/img/axbootbox_basic.png",
    tag: "무료",
    description: "AXBoot 프론트엔드 코어, NodeJS 기본 API를 제공합니다",
    fmodules: (
      <>
        <h3>Front-End Modules</h3>
        <ul>
          <li>로그인페이지</li>
          <li>
            어드민 유니버설 레이아웃
            <br />
            어드민 유니버설 레이아웃
          </li>
          <li>탭관리시스템</li>
          <li>메뉴관리 시스템</li>
          <li>다국어 지원</li>
          <li>멀티테마 지원</li>
          <li>프로그램 생성 CLI</li>
          <li>모달 생성 CLI 프로그램</li>
          <li>생성 템플릿 10종</li>
        </ul>
      </>
    ),
    bmodules: (
      <>
        <h3>Back-End Modules</h3>
        <ul>
          <li>프론트엔드 호환 목업 API 제공</li>
        </ul>
      </>
    ),
    license: (
      <>
        <h3>License</h3>
        <ul>
          <li>개발자 1명</li>
          <li>무제한 프로젝트 생성</li>
        </ul>
      </>
    ),
  },
  {
    title: "AXBoot Pro",
    subtitle: "즐거운 개발을 위한 놀라운 선택",
    image: "/img/axbootbox_pro.png",
    tag: "5백만원",
    description: "AXBoot의 완벽한 기능을 팀원과 함께 나눌 수 있는 프로페셔널 패키지입니다.",
    fmodules: (
      <>
        <h3>Front-End Modules</h3>
        <ul>
          <li>
            <strong>AXBoot Basic 모듈 전부</strong>
          </li>
          <li>axios wrapper / service class / env 설정</li>
          <li>
            시스템관리 관련 UI (시스템사용자관리, 사용자 그룹관리, 프로그램관리, 프로그램 메뉴관리, 공통코드 관리)
          </li>
        </ul>
      </>
    ),
    bmodules: (
      <>
        <h3>Back-End Modules</h3>
        <ul>
          <li>
            시스템관리패키지(시스템사용자관리, 사용자그룹관리, 프로그램관리, 프로그램메뉴, 공통코드 관리)
            <br /> -프론트엔드 연동 모듈
            <br />
            -API 코드 제네레이터 CLI
            <br />
            -프론트엔드용 API 인터페이스 제네레이터 CLI (JAVA + Spring Boot 3)
          </li>
        </ul>
      </>
    ),
    license: (
      <>
        <h3>License</h3>
        <ul>
          <li>개발팀 1팀</li>
          <li>무제한 프로젝트 생성</li>
        </ul>
      </>
    ),
  },
  {
    title: "AXBoot Embedded",
    subtitle: "임베디드 시스템을 위한 맞춤 선택",
    image: "/img/axbootbox_embeded.png",
    tag: "무료",
    description: "인트라넷이나 폐쇄된 네트워크를 사용하는 시스템에 최적화된 솔루션을 제공합니다.",
    fmodules: (
      <>
        <h3>Front-End Modules</h3>
        <ul>
          <li>
            <strong>AXBoot Pro 모듈 전부</strong>
          </li>
          <li>맞춤형 모듈 개발</li>
        </ul>
      </>
    ),
    bmodules: (
      <>
        <h3>Back-End Modules</h3>
        <ul>
          <li>
            <strong>AXBoot Pro 모듈 전부</strong>
          </li>
          <li>맞춤형 모듈 개발</li>
        </ul>
      </>
    ),
    license: (
      <>
        <h3>License</h3>
        <ul>
          <li>1Project</li>
          <li>1Cpu 4Core private server</li>
          <li>
            1Sub-Domain <br />
            (추가 Sub-Domain 별도 산정)
          </li>
        </ul>
      </>
    ),
  },
];
const StoreList2: StoreItem[] = [
  {
    title: "엑셀(Excel) 유틸리티 패키지",
    image: "/img/service_utils.png",
    tag: "1백만원 / Pack",
    description:
      "엑셀파일안에 데이터들을 시스템에 저장하거나 내보내는 기능을 추사화하여 다양한 프로그램에서 재사용이 용이하도록 구현 된 패키지 입니다.",
    fmodules: (
      <>
        <h3>Front-End Modules</h3>
        <ul>
          <li>로그인페이지</li>
          <li>엑셀 Import UI, 엑셀 Export UI</li>
        </ul>
      </>
    ),
    bmodules: (
      <>
        <h3>Back-End Modules</h3>
        <ul>
          <li>
            엑셀 Import 관련 API 패키지, 엑셀 Export 관련 API 패키지 <br />
            (JAVA + Spring Boot 3)
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "대시보드(DashBoard) 패키지",
    image: "/img/service_dashboard.png",
    tag: "2백만원 / Pack",
    description: "대시보드 화면 편집 및 원하는 쿼리로 대시보드 카드를 관리할 수 있는 기능을 제공하는 패키지 입니다.",
    fmodules: (
      <>
        <h3>Front-End Modules</h3>
        <ul>
          <li>대시보드 UI, 대시보드 카드 등록 UI</li>
        </ul>
      </>
    ),
    bmodules: (
      <>
        <h3>Back-End Modules</h3>
        <ul>
          <li>대시보드 관련 API 패키지 (JAVA + Spring Boot 3)</li>
        </ul>
      </>
    ),
  },
  {
    title: "할일(Todo) 패키지",
    image: "/img/service_todo.png",
    tag: "3백만원 / Pack",
    description: "사용자들의 할일을 관리할 수 있는 프로그램 패키지 입니다.",
    fmodules: (
      <>
        <h3>Front-End Modules</h3>
        <ul>
          <li>TODO 관리 UI, 보고서 UI</li>
        </ul>
      </>
    ),
    bmodules: (
      <>
        <h3>Back-End Modules</h3>
        <ul>
          <li>TODO 관련 API 패키지 (JAVA + Spring Boot 3)</li>
        </ul>
      </>
    ),
  },
  {
    title: "게시판 / 팝업알림 패키지",
    image: "/img/service_popup.png",
    tag: "2백만원 / Pack",
    description: "시스템에서 게시판을 사용할 수 있는 프로그램 패키지 입니다.",
    fmodules: (
      <>
        <h3>Front-End Modules</h3>
        <ul>
          <li>
            게시판 관리 UI <br />
            컨텐츠 에디터(CKEditor 4), 멀티파일 업로드 지원, 댓글 모듈(대댓글 지원 안함)
          </li>
        </ul>
      </>
    ),
    bmodules: (
      <>
        <h3>Back-End Modules</h3>
        <ul>
          <li>게시판 관련 API 패키지 (JAVA + Spring Boot 3)</li>
        </ul>
      </>
    ),
  },
];
const StoreList3: StoreItem[] = [];

export default function App(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description='Description will go into a meta tag in <head />'>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className='container'>PRICING</div>
      </header>
      <main>
        <div className='container'>
          <h2 className='margin-bottom--lg text--center'>PRODUCTS</h2>
          <div className='row'>
            {StoreList1.map((props, idx) => (
              <div className={clsx("col col--4")}>
                <StoreBox key={idx} {...props} />
              </div>
            ))}
          </div>
          <h2 className='margin-bottom--lg text--center'>PACKAGES</h2>
          <div className='row'>
            {StoreList2.map((props, idx) => (
              <div className={clsx("col col--3")}>
                <StoreBox key={idx} {...props} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
