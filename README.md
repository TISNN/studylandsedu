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

`npm run preview` 会读取构建后的 `dist/`，这是本地检查线上效果的正确方式。

## 部署说明

- 这个仓库根目录的 [index.html](/Users/evanxu/Desktop/xueyu.github.io-main/index.html) 是 Vite 开发入口，里面会直接引用 `/src/main.tsx`。
- 不要把仓库根目录直接当成静态站点发布，否则服务器会原样返回 `.tsx`，浏览器就会报 `Expected a JavaScript-or-Wasm module script` 这类 MIME 错误。
- 正确做法是先执行 `npm run build`，再发布构建产物 `dist/`。
- 仓库已补充 GitHub Pages 工作流 [.github/workflows/deploy-pages.yml](/Users/evanxu/Desktop/xueyu.github.io-main/.github/workflows/deploy-pages.yml)，推送到 `main` 或 `master` 时会自动构建并部署 `dist/`。
- 当前生产站点 `https://www.studylandsedu.com` 实际跑在 Lighthouse `42.192.108.224`，Caddy 已经指向 `/opt/xueyu/dist`。
- 生产机当前没有可直接使用的 `npm`，所以推荐发布路径是“本地构建 + rsync 上传 dist”。

### Lighthouse 发布

```bash
npm run deploy:lighthouse
```

- 这个命令会先本地执行 `npm run build`，再把 `dist/` 同步到 `root@42.192.108.224:/opt/xueyu/dist/`。
- 发布后脚本会检查首页不再引用 `/src/main.tsx`，并验证主 JS 资源返回的是 JavaScript MIME。
- 如需覆盖默认配置，可在命令前设置环境变量：`LIGHTHOUSE_HOST`、`LIGHTHOUSE_DIST_DIR`、`SITE_URL`、`SKIP_BUILD=1`。

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
