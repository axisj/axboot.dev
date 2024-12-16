import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { Astronaut } from "@site/src/components/Astronaut";
import Galaxy, { BackgroundStars } from "@site/src/components/Galaxy";
import HomepageExperts from "@site/src/components/HomepageExperts";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import HomepageTweets from "@site/src/components/HomepageTweets";
import Layout from "@theme/Layout";
import AXBLogo from "@theme/ThemedImage";
import clsx from "clsx";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./index.module.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload("/img/astronaut.glb");

export default function App(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  // const { debug } = useControls({ debug: false })

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <Layout title={`Home`} description='Description will go into a meta tag in <head />'>
      <header className={styles.heroContainer}>
        <div className={styles.heroLayer1}>
          <Canvas
            camera={{
              position: [5000, 5000, 5000],
              rotation: [-0.5, 0, 0],
              far: 100000,
            }}
          >
            <color attach='background' args={["#0f0f10"]} />

            <Astronaut />

            <ambientLight intensity={Math.PI} />
            {/*<axesHelper args={[20000]}/>*/}
            <OrbitControls enableZoom={false} />
            <BackgroundStars />
            <Galaxy />
          </Canvas>
        </div>
        <div className={styles.heroLayer2}>
          <div className={`${styles.heroTypoWrap} ${styles.gradientBorder}`}>
            <div
              style={{
                fontFamily: "Fira Code",
                fontOpticalSizing: "auto",
                fontWeight: 100,
                fontStyle: "normal",
                margin: 0,
                padding: 0,
                fontSize: "1rem",
              }}
            >{`{/* Hook into the universe with */}`}</div>
            <div
              style={{
                fontFamily: "Fira Code",
                fontOpticalSizing: "auto",
                fontWeight: 700,
                fontStyle: "normal",
                margin: 0,
                padding: 0,
                fontSize: "2rem",
              }}
            >
              {`<AXBOOT />︎`}
              <span
                style={{
                  fontFamily: "Noto Emoji",
                  fontOpticalSizing: "auto",
                  fontWeight: 400,
                  fontStyle: "normal",
                  margin: 0,
                  padding: 0,
                  fontSize: "2rem",
                }}
              >
                ✌
              </span>
            </div>
          </div>
          {/*<span>*/}
          {/*<span className={styles.brandName}>*/}
          {/*  <b>AXB</b>OOT*/}
          {/*</span>*/}
          {/*</span>*/}
        </div>
      </header>

      <div className={styles.axbcWrapper}>
        <div className={styles.axbcFloater}>
          <div className='container'>
            <div className='row'>
              <div className={clsx("col col--8")}>
                <div className='text--center'>
                  <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className={styles.axbcImgDiv}
                  >
                    <SwiperSlide>
                      <img className={styles.axbcImg} alt={"대표 이미지"} src={"/img/axboot_c_1.png"} loading='lazy' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className={styles.axbcImg} alt={"대표 이미지"} src={"/img/axboot_c_2.png"} loading='lazy' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className={styles.axbcImg} alt={"대표 이미지"} src={"/img/axboot_c_3.png"} loading='lazy' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className={styles.axbcImg} alt={"대표 이미지"} src={"/img/axboot_c_4.png"} loading='lazy' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className={styles.axbcImg} alt={"대표 이미지"} src={"/img/axboot_c_5.png"} loading='lazy' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className={styles.axbcImg} alt={"대표 이미지"} src={"/img/axboot_c_6.png"} loading='lazy' />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className={styles.axbcImg} alt={"대표 이미지"} src={"/img/axboot_c_7.png"} loading='lazy' />
                    </SwiperSlide>

                    <div className='autoplay-progress' slot='container-end'>
                      <svg viewBox='0 0 48 48' ref={progressCircle}>
                        <circle cx='24' cy='24' r='20'></circle>
                      </svg>
                      <span ref={progressContent}></span>
                    </div>
                  </Swiper>
                </div>
              </div>
              <div className={clsx("col col--4")}>
                <div className={styles.axbcDescBox}>
                  <AXBLogo
                    className={styles.axbcLogo}
                    alt={"AXBoot logo"}
                    sources={{
                      light: useBaseUrl("/img/axb_logo.svg"),
                      dark: useBaseUrl("/img/axb_logo_dark.svg"),
                    }}
                  />
                  <div>
                    액스부트(AXBoot)는 확장성과 유지 관리 용이성을 갖춘 웹 애플리케이션 구축을 위해 다양한 내장 UI 구성
                    요소와 도구 및 라이브러리 세트를 제공하는 고도로 모듈화된 웹 애플리케이션 프레임워크입(WAF)니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <HomepageFeatures />
        <HomepageTweets />
        <HomepageExperts />
      </main>
    </Layout>
  );
}
