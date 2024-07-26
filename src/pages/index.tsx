import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Environment, Lightformer, OrbitControls, useGLTF, useTexture} from '@react-three/drei'
import {Canvas, extend} from '@react-three/fiber'
import {Physics} from '@react-three/rapier'
import {Band} from "@site/src/components/band/Band.js";
import Galaxy, {BackgroundStars} from "@site/src/components/Galaxy";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import {useControls} from 'leva'
import {MeshLineGeometry, MeshLineMaterial} from 'meshline'

import styles from './index.module.css';
import {Astronaut} from "@site/src/components/Astronaut";
import {Window} from "@site/src/components/Window";

extend({ MeshLineGeometry, MeshLineMaterial })
useGLTF.preload('/img/astronaut.glb')

import useBaseUrl from '@docusaurus/useBaseUrl';
import AXBLogo from '@theme/ThemedImage';


import HomepageTweets from "@site/src/components/HomepageTweets";
import HomepageExperts from "@site/src/components/HomepageExperts";

export default function App(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  // const { debug } = useControls({ debug: false })

  return (
      <Layout
          title={`Home`}
          description="Description will go into a meta tag in <head />">
          <header className={styles.heroContainer}>
              <div className={styles.heroLayer1}>
                  <Canvas
                      camera={{
                          position: [5000, 5000, 5000],
                          rotation: [-0.5, 0, 0],
                          far: 100000,
                      }}
                  >
                      <color attach="background" args={["#0f0f10"]}/>

                      <Astronaut/>

                      <ambientLight intensity={Math.PI}/>
                      {/*<axesHelper args={[20000]}/>*/}
                      <OrbitControls enableZoom={false}/>
                      <BackgroundStars/>
                      <Galaxy/>
                  </Canvas>
              </div>
              <div className={styles.heroLayer2}>
                  Float on the universe with AXBOOT
              </div>
          </header>
          <div className={styles.axbcWrapper}>
              <div className={styles.axbcFloater}>
              <div className="container" >
                  <div className="row">
                      <div className={clsx('col col--8')}>
                          <div className="text--center">
                              <img
                                  className={styles.axbcImg}
                                  alt={"대표 이미지"}
                                  src={"/img/axboot_c.png"}
                              />
                          </div>
                      </div>
                      <div className={clsx('col col--4')}>
                          <div className={styles.axbcDescBox}>
                              <AXBLogo
                                  className={styles.axbcLogo}
                                  alt={"AXBoot logo"}
                                  sources={{
                                      light: useBaseUrl('/img/axb_logo.svg'),
                                      dark: useBaseUrl('/img/axb_logo_dark.svg'),
                                  }}
                              />
                              <div>
                                  액스부트(AXBoot)는 확장성과 유지 관리 용이성을 갖춘 웹 애플리케이션 구축을 위해 다양한 내장 UI 구성 요소와 도구 및 라이브러리 세트를 제공하는 고도로 모듈화된 웹
                                  애플리케이션 프레임워크입(WAF)니다.
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>

          <main>
          <HomepageFeatures/>
            <HomepageTweets/>
              <HomepageExperts/>
          </main>
      </Layout>
  );
}

