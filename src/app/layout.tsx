import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '药食同源中药名录 | 中药养生小助手',
    template: '%s | 中药养生小助手',
  },
  description:
    '药食同源中药名录，包含常用中药材的名称、图片、疗效及药用价值。传承千年中医智慧，探索中药的养生奥秘。',
  keywords: [
    '中药',
    '药食同源',
    '中药养生',
    '中药材',
    '中药功效',
    '中药药用价值',
    '中医养生',
    '食疗',
  ],
  authors: [{ name: '中药养生小助手' }],
  openGraph: {
    title: '药食同源中药名录 | 中药养生小助手',
    description: '传承千年中医智慧，探索中药的养生奥秘',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
