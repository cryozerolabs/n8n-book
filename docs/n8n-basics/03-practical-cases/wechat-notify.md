---
sidebar_position: 2
slug: /n8n-basics/practical-cases/wechat-notify
---

# 微信通知

> 📌 **本节目标**：实现微信消息自动推送

## 场景描述

- 订单状态变化时推送微信通知
- 重要事项提醒到微信
- 监控告警推送

## 方案选择

| 方案               | 适用场景     | 难度 |
| ------------------ | ------------ | ---- |
| **企业微信机器人** | 企业内部通知 | ⭐   |
| **Server 酱**      | 个人微信推送 | ⭐⭐ |
| **WxPusher**       | 个人微信推送 | ⭐⭐ |

## 企业微信机器人方案

### 1. 创建机器人

1. 在企业微信群中添加机器人
2. 获取 Webhook 地址

### 2. n8n 配置

使用 **HTTP Request** 节点发送消息：

```json
{
  "msgtype": "text",
  "text": {
    "content": "{{ $json.message }}"
  }
}
```

---

👉 **下一个案例**：[数据同步](/docs/n8n-basics/practical-cases/data-sync)
