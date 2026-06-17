type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-8 max-w-2xl sm:mb-10 lg:mb-12 ${alignClass}`}>
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
