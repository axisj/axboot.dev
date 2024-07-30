import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";

type ExpertItem = {
    name: string;
    pos: String;
    image: string;
    // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const ExpertList: ExpertItem[] = [
    {
        name: 'Tom',
        pos: 'AXBoot 총괄 개발자이사',
        image: "/img/pro_tom.jpg",
        description: (
            <>
                저는 AXBoot를 개발하면서 이 프레임워크가 웹 애플리케이션 개발에 필요한 모든 것을 제공한다는 자부심을 가지고 있습니다. AXBoot는 확장성과 유지 관리 용이성을 갖춘 웹 애플리케이션 구축을 위해 다양한 내장 UI 구성 요소와 도구 및 라이브러리 세트를 제공하는 고도로 모듈화된 웹 애플리케이션 프레임워크입니다. 이를 통해 개발자들은 복잡한 비즈니스 로직을 손쉽게 처리하고, 시간을 절약하며, 고품질의 웹 애플리케이션을 만들 수 있습니다.
            </>
        ),
    },
    {
        name: 'Kyle',
        pos: 'AXBoot 백엔드 기술이사',
        image: "/img/pro_kyle.jpg",
        description: (
            <>
                AXBoot는 다양한 백엔드 환경을 지원하도록 개발되었습니다. 지금 바로 사업을 시작한 스타트업부터 안정성과 신뢰성이 바탕이 되는 대규모 시스템까지 하나의 관리자 시스템으로 구축이 가능합니다. 또한 아키텍처를 구현할 때 99% 이상 환경설정이 준비되어 있으며 모듈화된 구조는 개발 속도향상과 효율성을 크게 높여줍니다.
            </>
        ),
    },
    {
        name: 'Jowrney',
        pos: 'AXBoot 프론트엔드 시니어 개발자',
        image: "/img/pro_jowrney.jpg",
        description: (
            <>
                AXBoot는 완성도 높은 디자인과 컴포넌트를 제공합니다. 이를 통해 디자인을 심리스하게 통일할 수 있으며, 유연한 확장성을 제공합니다. 한번도 안 써본 사람은 있어도 한번만 써본 사람은 없다는 AXBoot! 지금 바로 시작해보세요. 
            </>
        ),
    },
];


function Expert({name, pos, image, description}: ExpertItem) {
    return (
        <div className={clsx('col col--4', styles.expertMsg)}>
            <div className={styles.expert__header}>
                <div className={styles.avatar}>
                    <img
                        className={styles.avatar__image}
                        alt={name}
                        src={useBaseUrl(image)}
                    />
                    <div className={styles.avatar__name}>
                        {name}
                    </div>
                    <div className={styles.avatar__pos}>
                        {pos}
                    </div>
                </div>
            </div>
            <div className={styles.expert__body}>
                {description}
            </div>
        </div>
    );
}


export default function HomepageExperts(): JSX.Element {
    return (
        <section className={styles.expertSection}>
            <div className="container">
                <div className="row">
                    {ExpertList.map((props, idx) => (
                        <Expert key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
