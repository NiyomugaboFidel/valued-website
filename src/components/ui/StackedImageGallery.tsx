import { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyImage } from './LazyImage';

type StackItem = {
  src: string;
  alt: string;
};

type StackedImageGalleryProps = {
  items: readonly StackItem[];
  className?: string;
};

const stackOffsets = [
  { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 30 },
  { x: 18, y: 10, rotate: 5, scale: 0.94, zIndex: 20 },
  { x: -14, y: 16, rotate: -4, scale: 0.88, zIndex: 10 },
] as const;

function getStackPosition(index: number, activeIndex: number, total: number) {
  const depth = (index - activeIndex + total) % total;
  return stackOffsets[depth] ?? stackOffsets[stackOffsets.length - 1];
}

export function StackedImageGallery({ items, className = '' }: StackedImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative mx-auto aspect-[4/5] w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-10">
        {items.map((item, index) => {
          const position = getStackPosition(index, activeIndex, items.length);
          const isActive = index === activeIndex;

          return (
            <motion.button
              key={item.src}
              type="button"
              aria-label={`View ${item.alt}${isActive ? ' (selected)' : ''}`}
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
              initial={false}
              animate={{
                x: position.x,
                y: position.y,
                rotate: position.rotate,
                scale: position.scale,
                zIndex: position.zIndex,
              }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className={`absolute inset-0 overflow-hidden rounded-2xl shadow-lg outline-none ${
                isActive
                  ? 'cursor-default ring-2 ring-brand/80 ring-offset-2 ring-offset-white'
                  : 'cursor-pointer hover:brightness-105'
              }`}
              style={{ zIndex: position.zIndex }}
            >
              <LazyImage
                src={item.src}
                alt={item.alt}
                className="h-full w-full rounded-2xl object-cover"
              />
              {!isActive && (
                <span className="absolute inset-0 bg-brand-dark/15 transition-colors hover:bg-brand-dark/5" />
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={`dot-${item.src}`}
            type="button"
            aria-label={`Show ${item.alt}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? 'w-6 bg-brand' : 'w-2 bg-slate-300 hover:bg-brand/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
