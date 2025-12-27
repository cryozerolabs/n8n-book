import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import clsx from "clsx";
// 引入 Docusaurus 自带的分页样式（可选，或者自己写）
import styles from "./index.module.css";

// --- 模拟数据 (以后可以从 JSON 文件读取) ---
// 注意：这里绝对不要放 "jsonCode" 字段，只放元数据！
const WorkflowList = Array.from({ length: 50 }).map((_, i) => ({
  title: `n8n 实战案例 #${i + 1}`,
  description:
    i % 2 === 0
      ? "微信公众号自动回复系统，接入 DeepSeek AI。"
      : "钉钉销售战报自动推送，MySQL 数据源。",
  tags: i % 2 === 0 ? ["微信", "AI"] : ["钉钉", "办公"],
  link: "/docs/workflows/wechat-bot", // 这里的 link 指向具体的文档页
  image: "/img/logo.jpg",
}));

// --- 配置：每页显示多少个？ ---
const ITEMS_PER_PAGE = 9;

function WorkflowCard({ title, description, tags, link, image }) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div
        className="card"
        style={{ height: "100%", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
      >
        <div
          className="card__image"
          style={{ height: "160px", overflow: "hidden" }}
        >
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="card__body">
          <div style={{ marginBottom: "8px" }}>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="badge badge--secondary margin-right--xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>{title}</h3>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>{description}</p>
        </div>
        <div className="card__footer">
          {/* 这里只负责跳转详情页，不负责下载，保持轻量 */}
          <Link
            to={link}
            className="button button--primary button--block button--outline"
          >
            查看详情 & 获取代码
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function WorkflowsGallery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. 先过滤 (Search)
  const filteredWorkflows = WorkflowList.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  // 2. 再计算总页数
  const totalPages = Math.ceil(filteredWorkflows.length / ITEMS_PER_PAGE);

  // 3. 最后切片 (Slice) - 获取当前页的数据
  const currentItems = filteredWorkflows.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 当搜索词变化时，重置回第一页
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <Layout title="案例库" description="冰灵 n8n 实战案例仓库">
      <header className="hero hero--primary" style={{ padding: "1.5rem 0" }}>
        <div className="container">
          <div className="workflow-header">
            <div className="workflow-title-group">
              <h1 className="hero__title">n8n案例库</h1>
              <span className="hero__subtitle-small">
                收录 {filteredWorkflows.length} 个工作流
              </span>
            </div>
            <input
              type="text"
              placeholder="🔍 搜索 (微信, 钉钉...)"
              className="search-input"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="container margin-vert--xl">
        {/* 列表区域 */}
        <div className="row">
          {currentItems.length > 0 ? (
            currentItems.map((props, idx) => (
              <WorkflowCard key={idx} {...props} />
            ))
          ) : (
            <div className="col col--12 text--center padding--xl">
              <h3>🤷‍♂️ 没找到相关模版，换个词试试？</h3>
            </div>
          )}
        </div>

        {/* 分页控制器 */}
        {totalPages > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginTop: "40px",
              marginBottom: "40px",
            }}
          >
            {/* 上一页按钮 */}
            <button
              className="button button--outline button--primary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              style={{
                minWidth: "100px",
                borderRadius: "20px", // 圆角更现代
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                opacity: currentPage === 1 ? 0.5 : 1,
              }}
            >
              ← 上一页
            </button>

            {/* 页码指示器 */}
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                color: "var(--ifm-color-primary)", // 使用主题色
                fontFamily: "monospace", // 数字用等宽字体更好看
              }}
            >
              {currentPage} / {totalPages}
            </div>

            {/* 下一页按钮 */}
            <button
              className="button button--outline button--primary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              style={{
                minWidth: "100px",
                borderRadius: "20px",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                opacity: currentPage === totalPages ? 0.5 : 1,
              }}
            >
              下一页 →
            </button>
          </div>
        )}
      </main>
    </Layout>
  );
}
