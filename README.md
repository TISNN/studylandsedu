# StudylandsEdu Website

基于 Vite + React + TypeScript + Tailwind 的企业官网项目。

## 运行项目

```bash
npm install
npm run dev
```

默认本地地址：`http://localhost:5173/`

## 构建与预览

```bash
npm run build
npm run preview
```

## 主要目录结构

```text
.
├── public/
│   └── assets/images/        # 图片静态资源
├── src/
│   ├── components/
│   │   ├── layout/           # 统一 Header / Footer / Layout
│   │   ├── home/             # 首页模块化区块
│   │   ├── common/           # 通用页面组件
│   │   └── ui/               # 可复用基础 UI 组件
│   ├── pages/                # 路由页面（home/about/mentor/contact）
│   ├── data/                 # 站点文案与结构化数据
│   ├── lib/                  # 工具函数
│   ├── App.tsx               # 路由入口
│   └── main.tsx              # 应用挂载入口
├── index.html
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

## 路由说明

- `/`：主页
- `/about`：关于学屿
- `/mentor`：导师团队
- `/contact`：联系我们

## 说明

- 旧版静态站点文件（多页 `.html`、`mail.php`、旧 `assets/partials` 等）已移除。
- 当前仓库以 React 单页应用为唯一主线，便于后续持续维护与自动化部署。
