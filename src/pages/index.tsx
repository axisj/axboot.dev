import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Environment, Lightformer, OrbitControls, useGLTF, useTexture} from '@react-three/drei'
import {Canvas, extend} from '@react-three/fiber'
import {Physics} from '@react-three/rapier'
import {Band} from "@site/src/components/band/Band.js";
import Galaxy from "@site/src/components/Galaxy";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import {useControls} from 'leva'
import {MeshLineGeometry, MeshLineMaterial} from 'meshline'

import styles from './index.module.css';

extend({ MeshLineGeometry, MeshLineMaterial })
useGLTF.preload('/img/astronaut.glb')
useTexture.preload('/img/band.jpg')


export default function App(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const { debug } = useControls({ debug: false })

  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="heroContainer" style={{width: "100vw", height: "80vh"}}>

            <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
              <ambientLight intensity={Math.PI} />
              <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                <Band />
              </Physics>

              <OrbitControls enableZoom={false}/> /* 마우스 스크롤을 위해 줌은 막습니다 */
              <Galaxy/>

              <Environment background blur={0.75}>
                <color attach="background" args={['black']} />
                <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
              </Environment>
            </Canvas>

          </div>
      </header>
        <main>
            <HomepageFeatures/>
        </main>
    </Layout>
  );
}

