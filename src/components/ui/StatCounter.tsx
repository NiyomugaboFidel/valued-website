import { useEffect, useRef, useState } from 'react';

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
  size?: 'default' | 'lg';
};

const valueSizeClasses = {
  default: 'text-2xl font-extrabold sm:text-3xl lg:text-4xl',
  lg: 'font-display text-4xl font-semibold sm:text-5xl lg:text-6xl',
} as const;

export function StatCounter({ value, suffix = '', label, light = false, size = 'default' }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;

        const duration = 1500;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(value);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center px-1">
      <div className={`${valueSizeClasses[size]} ${light ? 'text-white' : 'text-brand'}`}>
        {count}{suffix}
      </div>
      <div className={`mt-1 text-[11px] font-medium leading-snug sm:text-sm ${light ? 'text-red-100/70' : 'text-muted'}`}>
        {label}
      </div>
    </div>
  );
}
