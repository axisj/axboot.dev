import Star from "@site/src/components/Star";
import { gaussianRandom, getRandomInt } from "@site/src/components/utils/random";
import * as THREE from "three";

function spiral(x: number, y: number, z: number, offset: number, SPIRAL: number, ARM_X_DIST: number) {
  const r = Math.sqrt(x ** 2 + z ** 2);
  let theta = offset;
  theta += x > 0 ? Math.atan(z / x) : Math.atan(z / x) + Math.PI;
  theta += (r / ARM_X_DIST) * SPIRAL;
  return new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta));
}

export default function Galaxy() {
  const stars = [];
  const SPIRAL = 3.5;
  const ARM_X_MEAN = 1500;
  const ARM_X_DIST = 3000;
  const ARM_Z_MEAN = 900;
  const ARM_Z_DIST = 1000;
  const GALAXY_THICKNESS = 300;
  const NUM_STARS = 5000;
  const STAR_MIN_SIZE = 5;
  const STAR_MAX_SIZE = 15;
  const ARMS = 2;
  // const {
  //     SPIRAL,
  //     ARM_X_MEAN,
  //     ARM_X_DIST,
  //     ARM_Z_MEAN,
  //     ARM_Z_DIST,
  //     GALAXY_THICKNESS,
  //     NUM_STARS,
  //     STAR_MIN_SIZE,
  //     STAR_MAX_SIZE,
  //     ARMS,
  // } = useControls({
  //     SPIRAL: 3.5,
  //     ARM_X_MEAN: 1500,
  //     ARM_X_DIST: 3000,
  //     ARM_Z_MEAN: 900,
  //     ARM_Z_DIST: 1000,
  //     GALAXY_THICKNESS: 300,
  //     NUM_STARS: 5000,
  //     STAR_MIN_SIZE: 5,
  //     STAR_MAX_SIZE: 15,
  //     ARMS: 2,
  // });

  for (let arm = 0; arm < ARMS; arm++) {
    for (let star = 0; star < NUM_STARS / ARMS; star++) {
      const size = getRandomInt(STAR_MIN_SIZE, STAR_MAX_SIZE);
      const pos = spiral(
        gaussianRandom(ARM_X_MEAN, ARM_X_DIST),
        gaussianRandom(0, GALAXY_THICKNESS),
        gaussianRandom(ARM_Z_MEAN, ARM_Z_DIST),
        (arm * 2 * Math.PI) / ARMS,
        SPIRAL,
        ARM_X_DIST,
      );

      stars.push(<Star key={`${arm}=${star}`} position={pos} size={size} />);
    }
  }

  return <group>{stars}</group>;
}

export function BackgroundStars() {
  const stars = [];
  for (let i = 0; i < 500; i++) {
    const size = getRandomInt(15, 20);
    const pos = new THREE.Vector3(
      getRandomInt(-50000, 50000),
      getRandomInt(-50000, 50000),
      getRandomInt(-50000, 50000),
    );
    stars.push(<Star key={i} position={pos} size={size} />);
  }
  return stars;
}
