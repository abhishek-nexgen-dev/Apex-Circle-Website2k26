import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  accentColor?: 'primary' | 'secondary' | 'tertiary';
}

export default function FilterBar({
  categories,
  activeCategory,
  setActiveCategory,
  accentColor = 'primary',
}: FilterBarProps) {
  const accentClasses = {
    primary: 'bg-primary text-black',
    secondary: 'bg-secondary text-black',
    tertiary: 'bg-tertiary text-black',
  };

  return (
    <div className="flex flex-nowrap lg:flex-wrap items-center gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            'px-12 py-5 text-[12px] font-black rounded-lg uppercase tracking-[0.2em] transition-all border-2 border-yellow-500/30 hover:border-yellow-400 bg-blue-950/40 backdrop-blur-md shadow-[0_0_20px_rgba(250,204,21,0.1)]',
            activeCategory === category
              ? cn(
                  accentClasses[accentColor],
                  'border-yellow-400 border-2 shadow-[0_0_30px_rgba(250,204,21,0.5)] scale-105',
                )
              : 'text-slate-500 hover:text-white hover:bg-white/10 hover:shadow-[0_0_25px_rgba(250,204,21,0.2)]',
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
