import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import useBaseUrl from "@docusaurus/useBaseUrl";

type StoreItem = {
  title?: string;
  subtitle?: string;
  image?: string;
  tag?: string;
  description?: JSX.Element;
  fmodules?: JSX.Element;
  bmodules?: JSX.Element;
  license?: JSX.Element;
};

export default function StoreBox({ title, subtitle, image, tag, description, fmodules, bmodules, license }: StoreItem) {
  return (
    <div className={styles.storeBox}>
      <div className={styles.storeLayerHeader}>
        {image ? <img className={styles.storeImg} alt={""} src={useBaseUrl(image)} /> : ""}
        {title ? <h2 className={styles.storeTitle}>{title}</h2> : ""}
        {subtitle ? <p className={styles.storeSubTitle}>{subtitle}</p> : ""}
        {tag ? <span className={styles.storeTag}>{tag}</span> : ""}
      </div>
      <div className={styles.storeLayer}>{description ? <p className={styles.storeDesc}>{description}</p> : ""}</div>
      <div className={styles.storeLayer}>
        {fmodules ? <div className={styles.descUL}>{fmodules}</div> : ""}
        {bmodules ? <div className={styles.descUL}>{bmodules}</div> : ""}
        {license ? <div className={styles.descUL}>{license}</div> : ""}
      </div>
    </div>
  );
}
