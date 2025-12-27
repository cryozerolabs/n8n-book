---
sidebar_position: 3
---

# 生产部署

> 📌 **本节目标**：将 n8n 部署到生产环境

## 生产环境 vs 开发环境

| 对比项     | 开发环境 | 生产环境 |
| ---------- | -------- | -------- |
| 数据持久化 | 可选     | 必须     |
| HTTPS      | 可选     | 必须     |
| 备份       | 不需要   | 必须     |
| 监控       | 不需要   | 建议     |

## Docker Compose 部署

```yaml
version: "3"
services:
  n8n:
    image: n8nio/n8n
    ports:
      - "5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=your_password
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
```

## 关键配置

### 1. 数据库

生产环境建议使用 PostgreSQL：

```
DB_TYPE=postgresdb
DB_POSTGRESDB_HOST=localhost
```

### 2. HTTPS

使用 Nginx 反向代理 + Let's Encrypt 证书

### 3. 备份

定期备份 `/home/node/.n8n` 目录

---

> 🎉 **恭喜！你已经掌握了 n8n 的核心知识！**

继续探索 [模板仓库](/workflows) 获取更多灵感！
