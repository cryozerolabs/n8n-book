import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "零基础可学",
    emoji: "🚀",
    description: (
      <>
        从安装部署到实战应用，一步步带你入门 n8n。
        无需编程经验，跟着教程就能搭建自动化工作流。
      </>
    ),
  },
  {
    title: "真实业务场景",
    emoji: "💼",
    description: (
      <>
        钉钉、微信、企业微信、飞书等国内平台自动化案例。
        覆盖日报汇总、客户跟进、数据同步等常见需求。
      </>
    ),
  },
  {
    title: "即用模板库",
    emoji: "📦",
    description: (
      <>
        精选可直接导入的工作流模板，开箱即用。 复制 JSON 即可在你的 n8n
        中运行，省时省力。
      </>
    ),
  },
];

function Feature({ title, emoji, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div
        className="text--center"
        style={{ fontSize: "4rem", marginBottom: "1rem" }}
      >
        {emoji}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
