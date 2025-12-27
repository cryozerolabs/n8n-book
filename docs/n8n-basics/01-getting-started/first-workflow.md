---
sidebar_position: 3
slug: /n8n-basics/getting-started/first-workflow
---

# 第一个工作流

> 📌 **本节目标**：动手创建你人生中第一个 n8n 工作流

## 我们要做什么

创建一个简单的工作流：**定时触发 → 获取天气 → 发送通知**

## 步骤 1：创建新工作流

1. 登录 n8n 后台
2. 点击右上角 **"New Workflow"**
3. 给工作流命名，比如 "我的第一个工作流"

## 步骤 2：添加触发节点

1. 点击画布中的 **"+"** 按钮
2. 搜索 **"Schedule Trigger"**
3. 设置每小时执行一次

## 步骤 3：添加 HTTP 请求

1. 再次点击 **"+"**
2. 搜索 **"HTTP Request"**
3. 配置一个天气 API（后续章节详解）

## 步骤 4：测试运行

点击右上角 **"Execute Workflow"** 按钮，查看执行结果。

---

🎉 **恭喜！你已经完成了第一个工作流！**

👉 **下一章**：[核心概念](/docs/n8n-basics/core-concepts/nodes)
