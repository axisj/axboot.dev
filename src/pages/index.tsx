import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from '@react-three/rapier'

import styles from './index.module.css';

import * as THREE from "three";
import {getRandomInt, gaussianRandom} from "@site/src/components/utils/random";
import Star from "@site/src/components/Star";
import Galaxy from "@site/src/components/Galaxy";
import Astronaut from "@site/src/components/Astronaut";

function genBackgroundStars() {
    const stars = [];
    for (let i = 0; i < 500; i++) {
        const size = getRandomInt(15, 20);
        const pos = new THREE.Vector3(
            getRandomInt(-50000, 50000),
            getRandomInt(-50000, 50000),
            getRandomInt(-50000, 50000)
        );
        stars.push(<Star key={i} position={pos} size={size} />);
    }
    return stars;
}

export default function App(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="heroContainer" style={{width: "100vw", height: "80vh"}}>
              {/*<img*/}
              {/*    style={{*/}
              {/*      backgroundColor: "transparent",*/}
              {/*      position:"absolute",*/}
              {/*      zIndex:99,*/}
              {/*    }}*/}
              {/*    className={''}*/}
              {/*    alt={''}*/}
              {/*    src={'/img/astronaut_cr_12.png'}*/}
              {/*/>*/}
              <Canvas
                  camera={{
                      position: [5000, 2000, 1000],
                      rotation: [-1, 0, 0],
                      far: 100000,
                  }}
              >
                  <color attach="background" args={["#000"]}/>
                  <ambientLight color={"#fff"} intensity={5}/>
                  {/*<axesHelper args={[20000]} />*/}
                  <OrbitControls enableZoom={false}/> /* 마우스 스크롤을 위해 줌은 막습니다 */
                  {genBackgroundStars()}
                  <Galaxy/>

                  <Physics interpolate gravity={[0, -5, 0]} timeStep={1 / 60}>
                      <Astronaut />
                  </Physics>
              </Canvas>
          </div>
      </header>
        <main>
            <HomepageFeatures/>
        </main>
    </Layout>
  );
}
