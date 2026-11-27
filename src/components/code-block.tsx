"use cache";

import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import type { BundledLanguage } from "shiki";
import { codeToHast } from "shiki";
import styles from "./code-block.module.css";

interface Props {
  children: string;
  lang: BundledLanguage;
}

export default async function CodeBlock(props: Props) {
  const out = await codeToHast(props.children, {
    lang: props.lang,
    theme: "github-dark",
  });

  return (
    <div className={styles["code-block"]}>
      {toJsxRuntime(out, {
        Fragment,
        jsx,
        jsxs,
      })}
    </div>
  );
}
