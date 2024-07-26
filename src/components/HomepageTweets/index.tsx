import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import useBaseUrl from "@docusaurus/useBaseUrl";
import {gaussianRandom} from "@site/src/components/utils/random";
import {useState} from "react";

type TweetItem = {
    name: string;
    nick: string;
    image: string;
    date: string;
    description: JSX.Element;
};

const TweetList1: TweetItem[] = [
    {
        name: '김철수',
        nick: '@cheolsoo_kim',
        image: "/img/profile1.jpg",
        date: '2023년 10월 15일',
        description: (
            <>
                우리는 AXBoot를 사용하여 웹 애플리케이션을 구축했고, 그 결과에 매우 만족합니다. 다양한 UI 구성 요소와 도구들이 내장되어 있어 개발이 훨씬 수월해졌습니다.
            </>
        ),
    },
    {
        name: '박수미',
        nick: '@sumi_park',
        image: "/img/profile2.jpg",
        date: '2024년 1월 5일',
        description: (
            <>
                AXBoot는 확장성과 유지 관리 용이성을 갖춘 훌륭한 프레임워크입니다. 덕분에 우리는 더 나은 사용자 경험을 제공할 수 있었습니다.
            </>
        ),
    },
    {
        name: '박영수',
        nick: '@youngsoo_park',
        image: "/img/profile3.jpg",
        date: '2024년 7월 27일',
        description: (
            <>
                AXBoot는 우리의 개발 속도를 크게 향상시켜 주었습니다. 문서화와 버전 관리도 매우 편리하게 사용할 수 있어 정말 좋습니다.
            </>
        ),
    },
];
const TweetList2: TweetItem[] = [
    {
        name: '최준혁',
        nick: '@junhyuk_choi',
        image: "/img/profile4.jpg",
        date: '2023년 11월 2일',
        description: (
            <>
                올해 두 개의 웹사이트에 AXBoot를 사용했는데, v2에 매우 만족하고 있습니다. 설정이 간단하고, 결과물이 훌륭합니다.
            </>
        ),
    },
    {
        name: '이민지',
        nick: '@minji_lee',
        image: "/img/profile5.jpg",
        date: '2024년 2월 18일',
        description: (
            <>
                AXBoot 릴리스에 계속해서 감명받고 있습니다. 이미 사이드바 항목 생성기를 사용하여 모노레포 작업공간 개발자들이 별도의 설정 없이 자신의 문서 페이지를 만들 수 있도록 도와주고 있습니다.
            </>
        ),
    },
    {
        name: '한상우',
        nick: '@sangwoo_han',
        image: "/img/profile6.jpg",
        date: '2024년 3월 10일',
        description: (
            <>
                http://testing-library.com가 멋지게 업데이트되었습니다! @matanbobi, @TensorNo, @nickemccurdy 덕분에 최신 버전의 @AXBoot로 전환되었습니다 💙
                제가 가장 좋아하는 새로운 기능: 다크 모드!! 🌑/☀️
            </>
        ),
    },
];
const TweetList3: TweetItem[] = [
    {
        name: '김민수',
        nick: '@minsu_kim',
        image: "/img/profile7.jpg",
        date: '2021년 10월 26일',
        description: (
            <>
                AXBoot v2는 콘텐츠 중심 사이트를 위한 정말 멋진 정적 사이트 생성기 도구로서 매우 마음에 듭니다 👏
            </>
        ),
    },
    {
        name: '박지은',
        nick: '@jieun_park',
        image: "/img/profile8.jpg",
        date: '2021년 1월 20일',
        description: (
            <>
                최근 @AXBoot로 많은 작업을 했는데, 정말 재미있습니다. 정말 멋진 기능이 많아요. 마크다운 파일을 만들어 구성 요소로 가져올 수 있어 콘텐츠 재사용이 쉽다는 점이 마음에 듭니다. 🔥
            </>
        ),
    },
    {
        name: '이준영',
        nick: '@junyoung_lee',
        image: "/img/profile9.jpg",
        date: '2021년 1월 20일',
        description: (
            <>
                Temporal의 첫 오픈 소스 후원을 @AXBoot로 공유하게 되어 기쁩니다!

                @temporalio는 http://docs.temporal.io에 이를 사용하며, 문서 팀에 큰 도움이 되었습니다. @sebastienlorber는 프로젝트의 훌륭한 관리자로, 지원할 수 있다면 꼭 지원해주세요!
            </>
        ),
    },
];


function Tweet({name, nick, image, date, description}: TweetItem) {
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <div className={styles.avatar}>
                    <img
                        className={styles.avatar__img}
                        alt={name}
                        src={useBaseUrl(image)}
                    />
                    <div className={styles.avatar__intro}>
                        <strong className={styles.avatar__name}>{name}</strong>
                        <span>{nick}</span>
                    </div>
                </div>
            </div>
            <div className={styles.card__body}>
                {description}
            </div>
            <div className={styles.card__footer}>
                {date}
            </div>
        </div>
    );
}


export default function HomepageTweets(): JSX.Element {

    return (
        <section className={clsx('--ifm-color-emphasis-100', styles.tweetSection)}>
            <div className="container">
                <h2 className="margin-bottom--lg text--center">많은 개발자에게 사랑받는 이유 🥰</h2>
                <div className="row">
                    <div className={clsx('col col--4')}>
                        {TweetList1.map((props, idx) => (
                            <Tweet key={idx} {...props} />
                        ))}
                    </div>
                    <div className={clsx('col col--4')}>
                        {TweetList2.map((props, idx) => (
                            <Tweet key={idx} {...props} />
                        ))}
                    </div>
                    <div className={clsx('col col--4')}>
                        {TweetList3.map((props, idx) => (
                            <Tweet key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
