import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          玩转 n8n：小白也能学会的自动化
        </Heading>
        <p className="hero__subtitle">
          零代码实现自动化工作流，遇到代码让 AI 帮你写，真正的小白也能做！
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/books/intro"
          >
            🚀 开始学习
          </Link>
          <Link
            className="button button--outline button--primary button--lg"
            to="/workflows"
            style={{ marginLeft: "1rem" }}
          >
            📦 浏览模板库
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="玩转 n8n - 小白也能学会的自动化"
      description="零代码实现自动化工作流，遇到代码让 AI 帮你写。从入门到精通的 n8n 中文教程，适合小白、白领、中小企业主。"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
