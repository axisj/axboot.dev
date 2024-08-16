import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import useBaseUrl from "@docusaurus/useBaseUrl";

type StoreItem = {
  title?: string;
  subtitle?: string;
  image?: string;
  tag?: string;
  description?: string;
  fmodules?: JSX.Element;
  bmodules?: JSX.Element;
  license?: JSX.Element;
};

export default function StoreBox({ title, subtitle, image, tag, description, fmodules, bmodules, license }: StoreItem) {
  return (
    <div className={styles.storeBox}>
      <div className={styles.storeLayer}>
        <img className={styles.storeImg} alt={""} src={useBaseUrl(image)} />
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : ""}
        <span className={styles.storeTag}>{tag}</span>
      </div>
      <div className={styles.storeLayer}>
        <p>{description}</p>
      </div>
      <div className={styles.storeLayer}>
        <div className={styles.descUL}>{fmodules}</div>
        <div className={styles.descUL}>{bmodules}</div>
        {license ? <div className={styles.descUL}>{license}</div> : ""}
      </div>
    </div>
  );
}
