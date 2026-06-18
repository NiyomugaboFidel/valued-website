type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: 'center' | 'left' | 'responsive-left';
  className?: string;
};

const alignClasses = {
  center: 'mx-auto max-w-2xl text-center',
  left: 'mx-0 max-w-none text-left',
  'responsive-left': 'mx-auto max-w-2xl text-center md:mx-0 md:max-w-none md:text-left',
} as const;

export function SectionHeading({
  kicker,
  title,
  description,
  light = false,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${alignClasses[align]} ${className}`}>
      {kicker && (
        <span className={`text-kicker mb-2 block ${light ? 'text-red-200' : 'text-brand'}`}>
          {kicker}
        </span>
      )}
      <h2 className={`font-display text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-sm leading-relaxed sm:text-base ${light ? 'text-red-100/75' : 'text-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
