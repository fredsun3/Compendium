# 本草纲目 · 中药名录 (Compendium of Materia Medica)

一个展示《本草纲目》收录中药材名录的网站，包含名称、图片、疗效及药用价值等完整信息。

## 项目简介

本项目基于李时珍《本草纲目》收录的中药材数据，提供便捷的查询与浏览功能，帮助用户了解中药的功效、药用价值、食用方法及禁忌等知识。

### 特色功能

- 🌿 **500+ 种精选药材**：覆盖本草纲目主要分类（草部、谷部、菜部、果部、木部、虫部、鳞部、介部、禽部、兽部、人部、水部、火部、土部、金石部等）
- 🔍 **智能搜索**：支持按中文名、拉丁名、别名、功效关键词搜索
- 📚 **分类浏览**：按本草纲目19部分类体系分组展示
- 💊 **详细信息**：每种药材包含功效、药用价值、食用价值、服用方法、禁忌等完整信息
- 🖼️ **精美配图**：每种药材配有高清图片
- 📱 **响应式设计**：完美适配桌面端和移动端

## 技术栈

- **框架**：Next.js 16 (App Router) + React 19
- **语言**：TypeScript 5
- **样式**：Tailwind CSS 4
- **UI 组件**：shadcn/ui (基于 Radix UI)
- **包管理器**：pnpm

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

启动后在浏览器中打开 [http://localhost:5000](http://localhost:5000) 查看应用。

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 项目结构

```
.
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 主页面
│   │   ├── layout.tsx         # 根布局
│   │   └── globals.css        # 全局样式
│   ├── components/
│   │   └── ui/                # shadcn/ui 组件库
│   ├── data/
│   │   └── herbs.ts           # 中药数据及类型定义
│   └── lib/
│       └── utils.ts           # 工具函数
├── public/                    # 静态资源
├── package.json
├── tsconfig.json
└── .coze                      # 项目配置
```

## 数据结构

```typescript
interface Herb {
  id: string;              // 唯一标识
  name: string;            // 中文名称
  latinName: string;       // 拉丁名称
  category: HerbCategory;   // 分类
  subcategory?: string;     // 子分类
  aliases: string[];        // 别名
  description: string;      // 简介
  efficacy: string[];       // 功效列表
  medicinalValue: string;   // 药用价值
  edibleValue: string;      // 食用价值
  usage: string[];          // 服用方法
  contraindications: string[]; // 禁忌
  source: string;           // 出处
  imageUrl?: string;        // 图片URL
  color: string;            // 主色调
}
```

## 分类体系

《本草纲目》共分为 19 部：

- **草部**：山草类、隰草类、芳草类、毒草类、蔓草类、水草类、石草类、苔类、杂草类
- **谷部**：稻类、麦类、粟类、菽类、麻类、酿造类
- **菜部**：荤菜类、柔滑类、瓜菜类、水菜类、熏造类、蓏类
- **果部**：水果类、山果类、夷果类、味果类、蓏类
- **木部**：乔木类、灌木类、香木类、寓木类、杂木类
- **虫部**：虫类、湿生类
- **鳞部**：龙类、蛇类、鱼类、无鳞鱼类
- **介部**：龟鳖类、蛤蚌类
- **禽部**：山禽类、原禽类、林禽类、水禽类
- **兽部**：走兽类、鼠类、寓怪类
- **人部**
- **水部**
- **火部**
- **土部**
- **金石部**
- **卤石部**
- **服器部**
- **器物部**
- **图谱部**

## License

MIT

---

> 本项目仅供学习参考，中药使用请遵医嘱。
