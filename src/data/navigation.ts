export type NavChildLink = {
  label: string;
  path: string;
};

export type NavLinkItem =
  | { label: string; path: string; children?: never }
  | { label: string; path: string; children: readonly NavChildLink[] };

export const navLinks: readonly NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Programs',
    path: '/programs',
    children: [
      { label: 'VSEP', path: '/programs/vsep' },
      { label: 'ValueXchange', path: '/programs/valuexchange' },
      { label: 'Connect & Cheers', path: '/programs/connect-cheers' },
      { label: 'InnovaKidz', path: '/programs/innovakidz' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Impact', path: '/impact' },
  { label: 'Contact', path: '/contact' },
];

export const programLinks =
  navLinks.find((link): link is Extract<NavLinkItem, { children: readonly NavChildLink[] }> =>
    'children' in link && !!link.children,
  )!.children;

export type SocialPlatform = 'instagram' | 'x' | 'linkedin';

export const socialLinks = [
  {
    label: 'Instagram',
    platform: 'instagram' as SocialPlatform,
    href: 'https://www.instagram.com/vep__official?igsh=bnR1dHk4dXBpaXZw',
  },
  {
    label: 'X',
    platform: 'x' as SocialPlatform,
    href: 'https://x.com/ValuEdProgram?t=u4OvuyxFNX9H7B3Ue9M4nw&s=09',
  },
  {
    label: 'LinkedIn',
    platform: 'linkedin' as SocialPlatform,
    href: 'https://www.linkedin.com/company/valued-program/',
  },
];

export const contactInfo = {
  email: 'info@valedprogram.com',
  phones: ['+250 795 454 671', '+250 786 759 641'],
  address: '26G9 + 6H9, Light Center Kabuga, Kigali, Rwanda',
} as const;

export function isNavActive(pathname: string, link: NavLinkItem): boolean {
  if ('children' in link && link.children) {
    return pathname === link.path || link.children.some((child) => pathname === child.path);
  }
  return pathname === link.path;
}
