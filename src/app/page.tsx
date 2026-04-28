'use client';

import { useState } from 'react';
import { herbsData, herbCategories, type Herb, type HerbCategory } from '@/data/herbs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  Search,
  Leaf,
  Heart,
  Brain,
  Shield,
  Activity,
  Droplets,
  Sparkles
} from 'lucide-react';

// 中药图片URL映射（使用与药材匹配的公开图片）
const herbImages: Record<string, string> = {
  // 补益药
  dangshen: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop', // 根茎类
  huangqi: 'https://images.unsplash.com/photo-1550407834-7a3d4721594f?w=400&h=400&fit=crop', // 干燥根类
  gouqi: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop', // 枸杞
  baizhu: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', // 白术类
  baishao: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop', // 白芍
  gancao: 'https://images.unsplash.com/photo-1568386453619-84c3ff4b43c5?w=400&h=400&fit=crop', // 甘草
  dazao: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=400&h=400&fit=crop', // 红枣
  hongzao: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop', // 黑枣
  maidong: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&h=400&fit=crop', // 麦冬类
  heshouwu: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop', // 何首乌
  xiyangshen: 'https://images.unsplash.com/photo-1567331711402-509c12c41959?w=400&h=400&fit=crop', // 西洋参
  lianzi: 'https://images.unsplash.com/photo-1595981234058-a11e7f56b6cc?w=400&h=400&fit=crop', // 莲子
  
  // 清热药
  bohe: 'https://images.unsplash.com/photo-1603697945350-6ce5e4d9b74c?w=400&h=400&fit=crop', // 薄荷
  jinyinhua: 'https://images.unsplash.com/photo-1563208723-bf9be1b1415e?w=400&h=400&fit=crop', // 金银花
  juemingzi: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop', // 决明子
  
  // 理气药
  chenpi: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop', // 陈皮/橘皮
  
  // 消食药
  shanzha: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=400&fit=crop', // 山楂/红果
  
  // 利水渗湿药
  fuling: 'https://images.unsplash.com/photo-1594913122595-5aa67729456c?w=400&h=400&fit=crop', // 茯苓
  yiyiren: 'https://images.unsplash.com/photo-1508341421810-36b8fc06075c?w=400&h=400&fit=crop', // 薏米
  
  // 活血化瘀药
  honghua: 'https://images.unsplash.com/photo-1593520259328-9c89e4ec5bd4?w=400&h=400&fit=crop', // 红花
  
  // 止咳平喘药
  baiguo: 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403?w=400&h=400&fit=crop', // 白果/银杏
  kuxingren: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=400&h=400&fit=crop', // 杏仁
  
  // 其他
  shanyao: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop', // 山药
  shengjiang: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=400&h=400&fit=crop', // 生姜
};

// 分类图标映射
const categoryIcons: Record<HerbCategory, typeof Leaf> = {
  '补益药': Heart,
  '清热药': Brain,
  '理气药': Sparkles,
  '消食药': Activity,
  '利水渗湿药': Droplets,
  '活血化瘀药': Heart,
  '止咳平喘药': Brain,
  '其他': Shield
};

// 分类颜色
const categoryColors: Record<HerbCategory, string> = {
  '补益药': 'bg-red-100 text-red-800 border-red-200',
  '清热药': 'bg-green-100 text-green-800 border-green-200',
  '理气药': 'bg-orange-100 text-orange-800 border-orange-200',
  '消食药': 'bg-amber-100 text-amber-800 border-amber-200',
  '利水渗湿药': 'bg-blue-100 text-blue-800 border-blue-200',
  '活血化瘀药': 'bg-pink-100 text-pink-800 border-pink-200',
  '止咳平喘药': 'bg-purple-100 text-purple-800 border-purple-200',
  '其他': 'bg-gray-100 text-gray-800 border-gray-200'
};

// 中药卡片组件
function HerbCard({ herb, onClick }: { herb: Herb; onClick: () => void }) {
  const Icon = categoryIcons[herb.category];
  const imageUrl = herbImages[herb.id] || `https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&h=400&fit=crop`;

  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-emerald-200 overflow-hidden"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
        <img
          src={imageUrl}
          alt={herb.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&h=400&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge
          className={cn('absolute top-3 right-3', categoryColors[herb.category])}
          variant="outline"
        >
          <Icon className="w-3 h-3 mr-1" />
          {herb.category}
        </Badge>
        <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-xl font-bold text-shadow">{herb.name}</h3>
          <p className="text-sm opacity-90 italic">{herb.latinName}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{herb.description}</p>
        <div className="flex flex-wrap gap-1">
          {herb.efficacy.slice(0, 3).map((eff, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs bg-emerald-50 text-emerald-700">
              {eff}
            </Badge>
          ))}
          {herb.efficacy.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-gray-50 text-gray-600">
              +{herb.efficacy.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// 中药详情模态框
function HerbDetailModal({ herb, onClose }: { herb: Herb; onClose: () => void }) {
  const imageUrl = herbImages[herb.id] || `https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&h=400&fit=crop`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-80">
          <img src={imageUrl} alt={herb.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
          >
            ✕
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <Badge className={cn('mb-2', categoryColors[herb.category])} variant="outline">
              {herb.category}
            </Badge>
            <h2 className="text-3xl font-bold mb-1">{herb.name}</h2>
            <p className="text-lg italic opacity-90">{herb.latinName}</p>
            {herb.aliases.length > 0 && (
              <p className="text-sm opacity-80 mt-1">别名：{herb.aliases.join('、')}</p>
            )}
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* 简介 */}
          <section>
            <h3 className="text-lg font-semibold text-emerald-800 mb-2 flex items-center">
              <Leaf className="w-5 h-5 mr-2" />
              简介
            </h3>
            <p className="text-gray-700 leading-relaxed">{herb.description}</p>
          </section>

          {/* 功效 */}
          <section>
            <h3 className="text-lg font-semibold text-emerald-800 mb-3 flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              主要功效
            </h3>
            <div className="flex flex-wrap gap-2">
              {herb.efficacy.map((eff, idx) => (
                <Badge key={idx} className="bg-emerald-100 text-emerald-800 border-emerald-200 px-3 py-1">
                  {eff}
                </Badge>
              ))}
            </div>
          </section>

          {/* 药用价值 */}
          <section className="bg-amber-50 rounded-xl p-4 border border-amber-100">
            <h3 className="text-lg font-semibold text-amber-800 mb-2 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              药用价值
            </h3>
            <p className="text-gray-700 leading-relaxed">{herb.medicinalValue}</p>
          </section>

          {/* 食用价值 */}
          <section className="bg-green-50 rounded-xl p-4 border border-green-100">
            <h3 className="text-lg font-semibold text-green-800 mb-2 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              食用价值
            </h3>
            <p className="text-gray-700 leading-relaxed">{herb.edibleValue}</p>
          </section>

          {/* 服用方法 */}
          <section>
            <h3 className="text-lg font-semibold text-emerald-800 mb-2">服用方法</h3>
            <div className="flex flex-wrap gap-2">
              {herb.usage.map((use, idx) => (
                <Badge key={idx} variant="outline" className="border-emerald-300 text-emerald-700">
                  {use}
                </Badge>
              ))}
            </div>
          </section>

          {/* 禁忌 */}
          {herb.contraindications.length > 0 && (
            <section className="bg-red-50 rounded-xl p-4 border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-2">注意事项</h3>
              <ul className="space-y-1">
                {herb.contraindications.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HerbsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<HerbCategory | '全部'>('全部');
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);

  // 过滤中药
  const filteredHerbs = herbsData.filter((herb) => {
    const matchesSearch =
      searchQuery === '' ||
      herb.name.includes(searchQuery) ||
      herb.latinName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      herb.aliases.some(alias => alias.includes(searchQuery)) ||
      herb.efficacy.some(e => e.includes(searchQuery));

    const matchesCategory = selectedCategory === '全部' || herb.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      {/* 头部 */}
      <header className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="w-12 h-12 mr-4 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold">药食同源中药名录</h1>
            <Leaf className="w-12 h-12 ml-4 animate-pulse" />
          </div>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            传承千年中医智慧，探索中药的养生奥秘
          </p>
          <div className="mt-6 flex justify-center gap-4 text-sm">
            <Badge className="bg-white/20 text-white border-white/30">
              共 {herbsData.length} 种药材
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              {herbCategories.length} 大分类
            </Badge>
          </div>
        </div>
      </header>

      {/* 搜索和筛选 */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="搜索药材名称、功效..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg border-2 border-emerald-200 focus:border-emerald-500 rounded-xl"
              />
            </div>
            <Tabs value={selectedCategory} onValueChange={(v) => setSelectedCategory(v as HerbCategory | '全部')}>
              <TabsList className="bg-emerald-50 h-auto p-1 rounded-xl flex flex-wrap">
                <TabsTrigger value="全部" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-2">
                  全部
                </TabsTrigger>
                {herbCategories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg px-3 py-2 text-sm"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {/* 中药列表 */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {filteredHerbs.length === 0 ? (
          <div className="text-center py-16">
            <Leaf className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">未找到匹配的中药材</p>
            <p className="text-gray-400 text-sm mt-2">尝试调整搜索条件或浏览其他分类</p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 mb-6">
              共找到 <span className="font-semibold text-emerald-600">{filteredHerbs.length}</span> 种药材
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredHerbs.map((herb) => (
                <HerbCard key={herb.id} herb={herb} onClick={() => setSelectedHerb(herb)} />
              ))}
            </div>
          </>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-emerald-900 text-emerald-100 py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-80">
            温馨提示：中药材使用请遵医嘱，本文仅供参考
          </p>
          <p className="text-xs mt-2 opacity-60">
            © 2024 药食同源中药名录 · 传承中医智慧
          </p>
        </div>
      </footer>

      {/* 详情模态框 */}
      {selectedHerb && (
        <HerbDetailModal herb={selectedHerb} onClose={() => setSelectedHerb(null)} />
      )}
    </div>
  );
}
