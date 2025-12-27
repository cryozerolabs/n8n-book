---
sidebar_position: 1
slug: /n8n-basics/practical-cases/dingtalk-bot
---

# 钉钉机器人

> 📌 **本节目标**：打造一个自动发消息到钉钉群的工作流

## 场景描述

每天早上自动发送天气预报到钉钉群，或者当有新订单时自动通知团队。

## 前置准备

1. 一个钉钉群
2. 群机器人的 Webhook 地址

## 工作流设计

```
[Schedule Trigger] → [HTTP Request 获取数据] → [HTTP Request 发钉钉]
```

## 步骤详解

### 1. 创建钉钉机器人

1. 打开钉钉群设置
2. 点击「智能群助手」→「添加机器人」
3. 选择「自定义」机器人
4. 复制 Webhook 地址

### 2. 配置 n8n 工作流

（详细步骤待补充）

---

> 🔧 **模板下载**：可在 [模板仓库](/workflows) 直接导入

👉 **下一个案例**：[微信通知](/docs/n8n-basics/practical-cases/wechat-notify)
