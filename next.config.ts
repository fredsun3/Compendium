import type { NextConfig } from 'next';

const repoName = 'Compendium';

const nextConfig: NextConfig = {
  // 静态导出，用于 GitHub Pages 部署
  output: 'export',
  // 项目站点部署在 https://fredsun3.github.io/Compendium/，需要设置 basePath 与 assetPrefix
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  // 静态导出不支持 Next.js 图片优化服务
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
  // 将静态资源输出到 out 目录
  distDir: 'out',
  // 确保 trailing slash 一致，避免 GitHub Pages 子路径资源 404
  trailingSlash: true,
  allowedDevOrigins: ['*.dev.coze.site'],
};

export default nextConfig;
