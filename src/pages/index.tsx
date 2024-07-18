import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import styles from './index.module.css';

import * as THREE from "three";
import {getRandomInt, gaussianRandom} from "@site/src/components/utils/random";
import Star from "@site/src/components/Star";
import Galaxy from "@site/src/components/Galaxy";

function genBackgroundStars() {
    const stars = [];
    for (let i = 0; i < 500; i++) {
        const size = getRandomInt(15, 20);
        const pos = new THREE.Vector3(
            getRandomInt(-50000, 50000),
            getRandomInt(-50000, 50000),
            getRandomInt(-50000, 50000)
        );
        stars.push(<Star position={pos} size={size} />);
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
        <div className="heroContainer" style={{ width: "100vw", height: "80vh" }}>
            <Canvas
                camera={{
                    position: [10000, 10000, 10000],
                    rotation: [-0.5, 0, 0],
                    far: 100000,
                }}
            >
                <color attach="background" args={["#000"]} />
                <ambientLight color={"#fff"} intensity={5} />
                {/*<axesHelper args={[20000]} />*/}
                <OrbitControls />
                {genBackgroundStars()}
                <Galaxy />
            </Canvas>

          {/*<Heading as="h1" className="hero__title">*/}
          {/*  {siteConfig.title}*/}
          {/*</Heading>*/}

          {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
          {/*<div className={styles.buttons}>*/}
          {/*  <Link*/}
          {/*    className="button button--secondary button--lg"*/}
          {/*    to="/docs/intro">*/}
          {/*    AXBoot Tutorial - 5min ⏱️*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
      </header>
      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
