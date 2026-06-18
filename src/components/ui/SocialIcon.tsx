import { Icon, Linkedin, X, type IconNode, type LucideProps } from 'lucide-react';

export type SocialPlatform = 'instagram' | 'x' | 'whatsapp' | 'linkedin';

const instagramIcon: IconNode = [
  ['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5', key: '0' }],
  ['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: '1' }],
  ['line', { x1: '17.5', y1: '6.5', x2: '17.51', y2: '6.5', key: '2' }],
];

const whatsappIcon: IconNode = [
  ['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z', key: '0' }],
  ['path', { d: 'M8 12.5a4 4 0 0 0 4 4', key: '1' }],
];

type SocialIconProps = LucideProps & {
  platform: SocialPlatform;
};

export function SocialIcon({ platform, size = 18, strokeWidth = 2, ...props }: SocialIconProps) {
  if (platform === 'x') {
    return <X size={size} strokeWidth={strokeWidth} {...props} />;
  }

  if (platform === 'linkedin') {
    return <Linkedin size={size} strokeWidth={strokeWidth} {...props} />;
  }

  if (platform === 'instagram') {
    return <Icon iconNode={instagramIcon} size={size} strokeWidth={strokeWidth} {...props} />;
  }

  return <Icon iconNode={whatsappIcon} size={size} strokeWidth={strokeWidth} {...props} />;
}

export function detectSocialPlatform(url: string): SocialPlatform {
  if (/instagram\.com/i.test(url)) return 'instagram';
  if (/linkedin\.com/i.test(url)) return 'linkedin';
  if (/wa\.me|whatsapp/i.test(url)) return 'whatsapp';
  if (/x\.com|twitter\.com/i.test(url)) return 'x';
  return 'x';
}

type SocialLinkButtonProps = {
  href: string;
  label: string;
  platform: SocialPlatform;
  variant?: 'light' | 'dark' | 'brand' | 'outline';
  className?: string;
};

const variantClasses = {
  light:
    'border border-white/20 bg-white/5 text-white hover:bg-white/15',
  dark:
    'border border-slate-200 bg-white text-slate-700 hover:border-brand/30 hover:bg-brand-muted hover:text-brand',
  brand:
    'bg-brand text-white hover:bg-brand-dark',
  outline:
    'border border-brand/25 bg-brand-muted text-brand hover:bg-brand hover:text-white',
};

export function SocialLinkButton({
  href,
  label,
  platform,
  variant = 'dark',
  className = '',
}: SocialLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center transition-colors ${variantClasses[variant]} ${className}`}
    >
      <SocialIcon platform={platform} size={18} />
      <span className="sr-only">{label}</span>
    </a>
  );
}
