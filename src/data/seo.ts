import { heroSlides } from './images';

export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ?? 'https://valuedprogram.org';
export const SITE_NAME = 'ValuEd Program';
export const DEFAULT_OG_IMAGE = `${SITE_URL}${heroSlides[0]}`;

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

const page = (title: string, description: string, path: string, image?: string): PageSeoConfig => ({
  title: `${title} | ${SITE_NAME}`,
  description,
  path,
  image: image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_OG_IMAGE,
});

export const pageSeo: Record<string, PageSeoConfig> = {
  '/': page(
    'Shine to the World',
    'ValuEd empowers children and youth across Rwanda through value-based education, practical skills, entrepreneurship, and community programs aligned with Vision 2050.',
    '/',
  ),
  '/about': page(
    'About',
    'Learn how ValuEd bridges the gap between education and employment for young people in Rwanda through value-based transformation and real-world skills.',
    '/about',
  ),
  '/programs': page(
    'Programs',
    'Explore ValuEd\'s four core programs: VSEP, ValueXchange, Connect & Cheers, and InnovaKidz — building Rwanda\'s future leaders.',
    '/programs',
  ),
  '/programs/vsep': page(
    'VSEP',
    'ValuEd Schools Enrichment Program — multilingual digital learning embedded in schools, tracking student growth beyond the classroom.',
    '/programs/vsep',
  ),
  '/programs/valuexchange': page(
    'ValueXchange',
    'National youth empowerment workshops connecting industry professionals and mentors with young people across Rwanda.',
    '/programs/valuexchange',
  ),
  '/programs/connect-cheers': page(
    'Connect & Cheers',
    'A vibrant platform where ValuEd youth showcase skills, celebrate achievements, and connect with employers and community leaders.',
    '/programs/connect-cheers',
  ),
  '/programs/innovakidz': page(
    'InnovaKidz',
    'ValuEd\'s foundational program where children discover creativity, build confidence, and develop skills for the future.',
    '/programs/innovakidz',
  ),
  '/gallery': page(
    'Gallery',
    'Photos from ValuEd programs, workshops, performances, and community events across Rwanda.',
    '/gallery',
  ),
  '/impact': page(
    'Impact',
    'Stories and outcomes from ValuEd programs — youth trained, communities reached, and futures transformed across Rwanda.',
    '/impact',
  ),
  '/contact': page(
    'Contact',
    'Get in touch with ValuEd at Light Center Kabuga, Kigali. Email, phone, and social links for partnerships and inquiries.',
    '/contact',
  ),
  '/apply': page(
    'Apply',
    'Apply to ValuEd programs. Scholarships and opportunities for children and youth aged 8 to 25 in Rwanda.',
    '/apply',
  ),
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.webp`,
  description: pageSeo['/'].description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kabuga, Kigali',
    addressCountry: 'RW',
  },
  sameAs: [
    'https://www.instagram.com/vep__official',
    'https://x.com/ValuEdProgram',
    'https://www.linkedin.com/company/valued-program/',
  ],
};

export function getPageSeo(pathname: string): PageSeoConfig {
  return pageSeo[pathname] ?? pageSeo['/'];
}
