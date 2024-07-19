import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  image: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    pro: boolean;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '빛 처럼 빠른 개발속도',
    image: "/img/astronaut_cr_1.png",
      pro: false,
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          액스부트는 프론트엔드 최신기술을 최적화하여 셋팅해 두었기 때문에
          개발자는 코드 작성에 따라 실시간으로 화면이 변화 되는 모습을 보면서 코딩이 가능합니다.
      </>
    ),
  },
  {
    title: '진화된 탭 프레임 시스템',
    image: "/img/astronaut_cr_3.png",
      pro: false,
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          액스부트의 탭 시스템은 탭프레임이 가진 장점과 일단 페이지 프레임이 가진 장점을 가지고 있습니다.
          또한 페이지 이동만 자유로운 것이 아니라. 탭내에 사용자 입력이나 UI조작 상태들도 브라우저 Indexed DB를 활용하여
          관리(압축/암호화)되어 CS프로그램을 사용하는 것 같은 UX를 제공합니다.
      </>
    ),
  },
  {
    title: '선택 가능한 레이아웃',
    image: "/img/astronaut_cr_4.png",
      pro: false,
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          액스부트는 사용자가 레이아웃 형태를 직접 결정해서 사용할 수 있습니다.
          왼쪽메뉴 상단 메뉴 툴바의 “탑메뉴 레이아웃” 버튼을 클릭하면 메뉴바가 오른쪽 그림과 같이 변하게 됩니다. 사용자가 한번 결정한 상태값은 브라우저에 저장되어 재접속 시에도 유지 됩니다.
      </>
    ),
  },
    {
        title: '선개발 후번역 다국어 시스템',
        image: "/img/astronaut_cr_5.png",
        pro: false,
        // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                액스부트의 다국어 시스템은 선개발 후번역 시스템을 사용하고 있어. 개발조직에서 사용하는 언어로 개발을 진행 하고 개발에 사용된 키 들을 추후 번역 관리 할 수 있습니다. 또한 언어 변경시 페이지 새로고침 없이 언어 변경이 되어 사용자에게 놀라운 사용 만족도를 제공합니다.
            </>
        ),
    },
    {
        title: '새로고침 없는 테마 변경',
        image: "/img/astronaut_cr_6.png",
        pro: false,
        // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                어플리케이션의 색상등의 값을 변수로 관리하며 페이지 새로고침 없는 테마 변경 시스템을 제공합니다.
            </>
        ),
    },
    {
        title: '간편한 프로그램 생성',
        image: "/img/astronaut_cr_2.png",
        level: false,
        // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                간단한 설정과 커멘드를 이용하여 준비된 템플릿을 이용하여 페이지를 자동 생성하는 기능을 제공합니다.
            </>
        ),
    },
    {
        title: '손쉬운 API 엔드 포인트 관리',
        image: "/img/astronaut_cr_7.png",
        pro: false,
        // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                프론트엔드 프로젝트에서 API엔드포인트를 제대로 관리 하는건 어렵습니다. 하지만 액스부트에선 쉽습니다.
            </>
        ),
    },
    {
        title: '빠른 API 코드 생성',
        image: "/img/astronaut_cr_8.png",
        pro: false,
        // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                기초 코드가 작성된 상태에선 손쉽게 Controller를 확장해 나아갈 수 있으므로 액스부트 서버 모듈에서는 API제작을 위한 기초코드를 자동 생성 할 수 있는 UI와 서비스를 함께 제공합니다.
            </>
        ),
    },
    {
        title: '안정적인 빅 데이터 렌더링',
        image: "/img/astronaut_cr_9.png",
        pro: false,
        // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                100,000건이 넘는 데이터를 한페이지에 랜더링 해도 문제 없는 데이터 그리드 기본 지원
            </>
        ),
    },
    {
        title: '완벽한 리액트 생태계를 위한 UI',
        image: "/img/astronaut_cr_10.png",
        pro: false,
        // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                기초 코드가 작성된 상태에선 손쉽게 Controller를 확장해 나아갈 수 있으므로 액스부트 서버 모듈에서는 API제작을 위한 기초코드를 자동 생성 할 수 있는 UI와 서비스를 함께 제공합니다.
            </>
        ),
    },
    {
        title: '권한관리 시스템',
        image: "/img/astronaut_cr_11.png",
        pro: true,
        // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                권한관리 시스템의 백엔드(JAVA Spring) & 프론트엔드 패키지를 제공합니다. 그외에도 파일 업로더, 엑셀 컨버터, 알림톡 / 이메일 등의 전송, PDF 변환, 주소 GPS 변환 등의 개발시 자주 쓰이는 모듈등이 작동하는 소스코드를 함께 제공합니다.
            </>
        ),
    },
];

// function Feature({title, Svg, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

function Feature({title, image, pro, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img
                    className={styles.featureSvg}
                    alt={title}
                    src={useBaseUrl(image)}
                />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3" className={styles.heading}><span>{title}</span>{pro && <span className={styles.pro}>PRO</span>}</Heading>
                <p className={styles.desc}>{description}</p>
            </div>
        </div>
    );
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
