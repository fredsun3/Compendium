# 中药养生小助手项目规范

## 项目概述

**项目名称**: 药食同源中药名录  
**项目描述**: 展示药食同源中药材的名录网站，包含名称、图片、疗效及药用价值  
**技术栈**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS + shadcn/ui

## 项目结构

```
/workspace/projects/
├── src/
│   ├── app/
│   │   ├── page.tsx           # 中药名录主页面
│   │   ├── layout.tsx         # 页面布局
│   │   ├── globals.css        # 全局样式
│   │   └── favicon.ico        # 网站图标
│   ├── components/
│   │   └── ui/                # shadcn/ui 组件库
│   ├── data/
│   │   └── herbs.ts           # 中药数据及类型定义
│   ├── hooks/                 # 自定义 Hooks
│   └── lib/
│       └── utils.ts           # 工具函数
├── public/                    # 静态资源
├── package.json
├── tsconfig.json
└── .coze                      # 项目配置文件
```

## 核心数据

### 中药数据结构 (herbs.ts)

```typescript
interface Herb {
  id: string;              // 唯一标识
  name: string;            // 中文名称
  latinName: string;       // 拉丁名称
  category: HerbCategory;   // 分类
  aliases: string[];       // 别名
  description: string;      // 简介
  efficacy: string[];      // 功效列表
  medicinalValue: string;  // 药用价值
  edibleValue: string;     // 食用价值
  usage: string[];         // 服用方法
  contraindications: string[]; // 禁忌
  imageUrl: string;       // 图片URL
  color: string;           // 主色调
}
```

### 分类类别

- 补益药（补气、补血、补阳、补阴）
- 清热药（清热解毒、清热凉血）
- 理气药（行气、解郁）
- 消食药（消食化积）
- 利水渗湿药（利水消肿、祛湿）
- 活血化瘀药（活血通经）
- 止咳平喘药（化痰止咳）
- 其他

## 功能特性

### 1. 中药列表展示
- 网格布局展示中药卡片
- 卡片包含图片、名称、拉丁名、分类标签、简介和功效预览
- 悬停动画效果

### 2. 搜索功能
- 支持按名称搜索
- 支持按拉丁名搜索
- 支持按别名搜索
- 支持按功效关键词搜索

### 3. 分类筛选
- Tabs 组件切换不同分类
- 实时显示筛选结果数量

### 4. 详情模态框
- 点击卡片打开详情页
- 包含完整的药材信息
- 药用价值、食用价值分区展示
- 服用方法和禁忌说明

## 运行命令

```bash
# 安装依赖
pnpm install

# 开发环境
pnpm dev

# 生产构建
pnpm build

# 生产运行
pnpm start
```

## 开发规范

1. **组件规范**: 使用 shadcn/ui 组件库，遵循其设计规范
2. **样式规范**: 使用 Tailwind CSS，按需引入样式类
3. **类型规范**: 所有函数参数、返回值必须标注类型
4. **图片处理**: 使用外部图片 URL，配置 Next.js 图片域名白名单

## 环境变量

| 变量名 | 说明 | 示例值 |
|--------|------|--------|
| `COZE_PROJECT_ENV` | 开发环境 | `DEV` / `PROD` |
| `DEPLOY_RUN_PORT` | 服务端口 | `5000` |
