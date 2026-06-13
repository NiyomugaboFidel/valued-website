import { useState } from 'react';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function LazyImage({ src, alt, className = '', priority = false }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
    />
  );
}
