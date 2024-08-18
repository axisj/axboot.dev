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
  description?: JSX.Element;
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
    description: <>AXBoot 프론트엔드 코어, NodeJS 기본 API를 제공합니다</>,
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
    description: <>AXBoot의 완벽한 기능을 팀원과 함께 나눌 수 있는 프로페셔널 패키지입니다.</>,
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
    description: <>인트라넷이나 폐쇄된 네트워크를 사용하는 시스템에 최적화된 솔루션을 제공합니다.</>,
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
    description: (
      <>
        엑셀파일안에 데이터들을 시스템에 저장하거나 내보내는 기능을 추사화하여 다양한 프로그램에서 재사용이 용이하도록
        구현 된 패키지 입니다.
      </>
    ),
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
    description: <>대시보드 화면 편집 및 원하는 쿼리로 대시보드 카드를 관리할 수 있는 기능을 제공하는 패키지 입니다.</>,
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
    description: <>사용자들의 할일을 관리할 수 있는 프로그램 패키지 입니다.</>,
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
    description: <>시스템에서 게시판을 사용할 수 있는 프로그램 패키지 입니다.</>,
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
const StoreList3: StoreItem[] = [
  {
    title: "맞춤 템플릿 작업",
    tag: "견적문의",
    description: (
      <>
        고객의 시스템을 분석하여 시스템에 맞는 최적화된 프로그램 레이아웃을 설계하고 개발자들이 재 생산 할 수 있도록
        지원합니다.
      </>
    ),
    fmodules: (
      <>
        <ul>
          <li>템플릿 사용 교육 포함</li>
          <li>난이도에 따른 공수산정</li>
        </ul>
      </>
    ),
  },
  {
    title: "사후관리 A/S",
    tag: "1백만원 / 월",
    description: <>온사이트에서 장애 대응시 문제 해결을 지원하고 프로그램 버그에 24시간안에 대응합니다.</>,
  },
  {
    title: "사용자 교육 및 자문",
    tag: "견적문의",
    description: <>기본 교육 / 고급 교육 / 자문 등의 서비스를 제공합니다.</>,
  },
  {
    title: "AXBoot 리셀러",
    tag: "견적문의",
    description: (
      <>
        SaaS 개발 프레임워크 AXBoot를 영업하실 리셀러 분을 모십니다. 우리는 혼자가기보다 함께 성장하길 바라는 많은
        분들의 지원을 환영합니다.
      </>
    ),
  },
];
const StoreList4: StoreItem[] = [
  {
    title: "서울도시주택공사",
    subtitle: "상담 관리 SasS",
    image: "/img/axbootbox_basic.png",
    tag: "AXBoot Embeded",
    description: (
      <>
        주거 취약계층 대상자 명단을 시스템에 업로드하고 대상자 명단의 상태를 변경하는 기능, 그리고 대상자의 주거취약
        상태에 대한 상담사의 보고서를 시스템에 업로드하는 기능입니다.
        <br />
        <br /> 고객 명단은 서울 각 권역별로 별도의 담당자가 효과적으로 관리할 수 있도록 설계되었으며, 전체 관리자는
        권역별 진행상황을 파악할 수 있도록 구현되었습니다. 뿐만 아니라, 사용자의 역할에 따라 권한 및 프로그램 제어에
        대한 연구와 개발이 진행되었습니다.
      </>
    ),
  },
  {
    title: "삼성",
    subtitle: "급식 관리 SasS",
    image: "/img/axbootbox_basic.png",
    tag: "AXBoot Embeded",
    description: (
      <>
        삼성전자 임직원들을 위한 삼성 그룹사 급식 관리 솔루션입니다.
        <br />
        <br /> 본 프로젝트는 ASP(급식업체 관리자) PORTAL(임직원 포털) 모바일APP로 구성되며 삼성그룹사 마다 별도의
        인스턴스를 구성해야 했기에 프로젝트 규모나 설치면에서 블록버스터 급이라 말할 수 있었습니다. AXBoot의 다양한
        기능들을 대규모 프로젝트에 적용해볼 수 있었고 다양한 사용자들이 사용하는 폐쇄망환경에서 AXBoot가 검증될 수
        있었던 좋은 기회 였습니다.
      </>
    ),
  },
  {
    title: "역도",
    subtitle: "경기 운영 관리 SasS",
    image: "/img/axbootbox_basic.png",
    tag: "AXBoot Pro",
    description: (
      <>
        액시스제이는 기존에 장애인 역도경기관리시스템을 개발하여 운영하고 있었습니다. 기존에 개발된
        장애인역도경기관리시스템을 기반으로 일반인 역도경기관리시스템을 개발하게 되었습니다.
        <br />
        <br />
        새로운 시스템은 기존에 불편했던 부분들을 AXBoot 도입으로 완전히 개선하였고. 웹소켓을 통신을 이용한 전광판,
        타이머, 심판판정 화면을 추가로 개발 하였습니다.
      </>
    ),
  },
  {
    title: "위포",
    subtitle: "영업 관리 SasS",
    image: "/img/axbootbox_basic.png",
    tag: "AXBoot Pro",
    description: (
      <>
        텔레마케팅을 위한 다양한 기능들을 제공하는 솔루션 입니다.
        <br />
        <br />
        주요기능으로는 텔레마케팅을 세그먼트 단위로 진행 할 수 있도록 하는 세그먼트 관리, 세그먼트에 고객명단을 업로드할
        수 있는 엑셀 컨버터, 고객마다 TM기록을 남길 수 있는 TM관리 기능등이 있습니다.
      </>
    ),
  },
];

export default function App(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description='Description will go into a meta tag in <head />'>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className='container'>PRICING</div>
      </header>
      <main>
        <section>
          <div className='container'>
            <h2 className='margin-bottom--lg text--center'>PRODUCTS</h2>
            <div className='row'>
              {StoreList1.map((props, idx) => (
                <div className={clsx("col col--4")}>
                  <StoreBox key={idx} {...props} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <h2 className='margin-bottom--lg text--center'>PACKAGES</h2>
            <div className='row'>
              {StoreList2.map((props, idx) => (
                <div className={clsx("col col--3")}>
                  <StoreBox key={idx} {...props} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <h2 className='margin-bottom--lg text--center'>SERVICE</h2>
            <div className='row'>
              {StoreList3.map((props, idx) => (
                <div className={clsx("col col--3")}>
                  <StoreBox key={idx} {...props} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <h2 className='margin-bottom--lg text--center'>Success Case</h2>
            <div className='row'>
              {StoreList4.map((props, idx) => (
                <div className={clsx("col col--3")}>
                  <StoreBox key={idx} {...props} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
