'use client';

import { useState, useMemo, useCallback } from 'react';
import { Search, X, Leaf, BookOpen, Filter, ChevronDown } from 'lucide-react';
import { herbsData, categories, type Herb, type HerbCategory } from '@/data/herbs';

// 虚拟滚动配置
const CARD_HEIGHT = 380;
const CARD_MARGIN = 16;
const VISIBLE_BUFFER = 3;

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<HerbCategory | '全部'>('全部');
  const [selectedHerb, setSelectedHerb] = useState<Herb | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['全部']));
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 });

  // 过滤药材
  const filteredHerbs = useMemo(() => {
    let result = herbsData;
    
    if (selectedCategory !== '全部') {
      result = result.filter(herb => herb.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(herb => 
        herb.name.toLowerCase().includes(query) ||
        herb.latinName.toLowerCase().includes(query) ||
        herb.aliases.some(alias => alias.toLowerCase().includes(query)) ||
        herb.efficacy.some(eff => eff.toLowerCase().includes(query))
      );
    }
    
    return result;
  }, [selectedCategory, searchQuery]);

  // 切换分类展开/收起
  const toggleCategory = useCallback((category: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  }, []);

  // 滚动处理（虚拟滚动优化）
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    
    const start = Math.max(0, Math.floor(scrollTop / (CARD_HEIGHT + CARD_MARGIN)) - VISIBLE_BUFFER);
    const end = Math.min(
      filteredHerbs.length,
      Math.ceil((scrollTop + containerHeight) / (CARD_HEIGHT + CARD_MARGIN)) + VISIBLE_BUFFER
    );
    
    setVisibleRange({ start, end });
  }, [filteredHerbs.length]);

  // 按分类分组显示
  const groupedHerbs = useMemo(() => {
    const groups: Record<string, Herb[]> = {};
    
    if (selectedCategory === '全部') {
      categories.forEach(cat => {
        const herbs = filteredHerbs.filter(h => h.category === cat.name);
        if (herbs.length > 0) {
          groups[cat.name] = herbs;
        }
      });
    } else {
      const category = categories.find(c => c.name === selectedCategory);
      if (category) {
        category.subcategories.forEach(sub => {
          const herbs = filteredHerbs.filter(h => h.subcategory === sub);
          if (herbs.length > 0) {
            groups[sub] = herbs;
          }
        });
      }
    }
    
    return groups;
  }, [filteredHerbs, selectedCategory]);

  // 渲染药材卡片
  const renderHerbCard = (herb: Herb, index: number) => {
    const isVisible = index >= visibleRange.start && index < visibleRange.end;
    
    if (!isVisible) {
      return <div key={herb.id} style={{ height: CARD_HEIGHT + CARD_MARGIN }} />;
    }

    return (
      <div
        key={herb.id}
        className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-stone-100"
        style={{ height: CARD_HEIGHT }}
        onClick={() => setSelectedHerb(herb)}
      >
        {/* 图片区域 */}
        <div className="relative h-36 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
          {herb.imageUrl ? (
            <img
              src={herb.imageUrl}
              alt={herb.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-100">
              <Leaf className="w-16 h-16 text-emerald-300" />
            </div>
          )}
          {/* 分类标签 */}
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-emerald-700 rounded-full shadow-sm">
              {herb.subcategory || herb.category}
            </span>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="p-4 flex flex-col h-[calc(100%-144px)]">
          {/* 名称 */}
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-stone-800 group-hover:text-emerald-700 transition-colors">
              {herb.name}
            </h3>
            <p className="text-xs text-stone-500 italic">{herb.latinName}</p>
          </div>

          {/* 别名 */}
          {herb.aliases.length > 0 && (
            <p className="text-xs text-stone-400 mb-2 truncate">
              别名：{herb.aliases.slice(0, 2).join('、')}
              {herb.aliases.length > 2 && '...'}
            </p>
          )}

          {/* 功效预览 */}
          <div className="flex-1 overflow-hidden">
            <div className="flex flex-wrap gap-1">
              {herb.efficacy.slice(0, 3).map((eff, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-xs bg-emerald-50 text-emerald-700 rounded-full"
                >
                  {eff}
                </span>
              ))}
            </div>
          </div>

          {/* 来源 */}
          <p className="text-xs text-stone-400 mt-2 border-t border-stone-100 pt-2">
            出自《{herb.source.replace('《本草纲目》', '')}》
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-emerald-50 to-teal-50">
      {/* 头部 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-200">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-stone-800">本草纲目</h1>
                <p className="text-xs text-stone-500">中药名录数据库 · 共收录 {herbsData.length} 种药材</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-emerald-600">{filteredHerbs.length}</p>
              <p className="text-xs text-stone-500">当前显示</p>
            </div>
          </div>

          {/* 搜索框 */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              placeholder="搜索药材名称、拉丁名、别名或功效..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-3 bg-stone-100 rounded-xl border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-stone-300 hover:bg-stone-400 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 分类标签 */}
      <div className="sticky top-[132px] z-40 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('全部')}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === '全部'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                  : 'bg-stone-100 text-stone-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              全部药材
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name as HerbCategory)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.name
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'bg-stone-100 text-stone-600 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {selectedCategory === '全部' ? (
          // 按分类显示
          <div className="space-y-8">
            {Object.entries(groupedHerbs).map(([groupName, herbs]) => (
              <section key={groupName}>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-stone-800 flex items-center gap-2">
                    <span className="w-1 h-6 bg-emerald-500 rounded-full" />
                    {groupName}
                    <span className="text-sm font-normal text-stone-400">({herbs.length}种)</span>
                  </h2>
                  <button
                    onClick={() => toggleCategory(groupName)}
                    className="flex items-center gap-1 text-sm text-emerald-600 hover:text-emerald-700"
                  >
                    {expandedCategories.has(groupName) ? '收起' : '展开'}
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedCategories.has(groupName) ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {expandedCategories.has(groupName) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {herbs.map((herb) => renderHerbCard(herb, herbs.indexOf(herb)))}
                  </div>
                )}
              </section>
            ))}
          </div>
        ) : (
          // 网格显示
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredHerbs.map((herb, index) => renderHerbCard(herb, index))}
          </div>
        )}

        {filteredHerbs.length === 0 && (
          <div className="text-center py-20">
            <Leaf className="w-16 h-16 text-stone-300 mx-auto mb-4" />
            <p className="text-stone-500">未找到匹配的药材</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('全部'); }}
              className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              清除筛选
            </button>
          </div>
        )}
      </main>

      {/* 详情模态框 */}
      {selectedHerb && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedHerb(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 头部图片 */}
            <div className="relative h-48 bg-gradient-to-br from-emerald-400 to-teal-500">
              {selectedHerb.imageUrl ? (
                <img
                  src={selectedHerb.imageUrl}
                  alt={selectedHerb.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Leaf className="w-20 h-20 text-white/50" />
                </div>
              )}
              <button
                onClick={() => setSelectedHerb(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-700">
                  {selectedHerb.subcategory || selectedHerb.category}
                </span>
              </div>
            </div>

            {/* 内容 */}
            <div className="p-6">
              {/* 名称 */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-stone-800 mb-1">{selectedHerb.name}</h2>
                <p className="text-stone-500 italic">{selectedHerb.latinName}</p>
                {selectedHerb.aliases.length > 0 && (
                  <p className="text-sm text-stone-400 mt-2">
                    别名：{selectedHerb.aliases.join('、')}
                  </p>
                )}
              </div>

              {/* 简介 */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-stone-600 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  简介
                </h3>
                <p className="text-stone-700 leading-relaxed">{selectedHerb.description}</p>
              </div>

              {/* 功效 */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-stone-600 mb-2">功效</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedHerb.efficacy.map((eff, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                    >
                      {eff}
                    </span>
                  ))}
                </div>
              </div>

              {/* 药用价值 */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-stone-600 mb-2">药用价值</h3>
                <p className="text-stone-700 leading-relaxed">{selectedHerb.medicinalValue}</p>
              </div>

              {/* 食用价值 */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-stone-600 mb-2">食用价值</h3>
                <p className="text-stone-700 leading-relaxed">{selectedHerb.edibleValue}</p>
              </div>

              {/* 服用方法 */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-stone-600 mb-2">服用方法</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedHerb.usage.map((use, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* 禁忌 */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-stone-600 mb-2">注意事项</h3>
                <div className="space-y-1">
                  {selectedHerb.contraindications.map((con, i) => (
                    <p key={i} className="text-red-600 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      {con}
                    </p>
                  ))}
                </div>
              </div>

              {/* 来源 */}
              <div className="pt-4 border-t border-stone-200">
                <p className="text-sm text-stone-500">{selectedHerb.source}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
