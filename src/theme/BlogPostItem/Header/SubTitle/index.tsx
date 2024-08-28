import { useBlogPost } from "@docusaurus/theme-common/internal";
import type { Props } from "@theme/BlogPostItem/Header/Title";
import clsx from "clsx";
import React from "react";

import styles from "./styles.module.css";

export default function BlogPostItemHeaderSubTitle({ className }: Props): JSX.Element {
  const { metadata, frontMatter, isBlogPostPage } = useBlogPost();
  return <div className={clsx(styles.subTitle, className)}>{frontMatter["sub_title"]}</div>;
}
