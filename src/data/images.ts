/** Central image map   only 12 optimized assets (~1.5 MB total) */
export const images = {
  logo: '/images/logo.webp',
  hero: '/images/hero.webp',
  culture: '/images/culture.webp',
  workshop: '/images/workshop.webp',
  sports: '/images/sports.jpg',
  community: '/images/community.webp',
  campus: '/images/campus.webp',
  team: {
    axel: '/images/team-axel.png',
    gihana: '/images/team-gihana.webp',
    patrick: '/images/team-patrick.jpg',
  },
  partners: {
    umurenge: '/images/partner-ummurenge.png',
    ama: '/images/partner-ama.webp',
  },
} as const;

/** Reuse a small set   no duplicate file loads */
export const galleryImages = [
  images.hero,
  images.culture,
  images.workshop,
  images.campus,
  images.sports,
  images.community,
] as const;

/** Rotating hero background slides on the home page */
export const heroSlides = [
  images.hero,
  images.culture,
  images.workshop,
  images.sports,
  images.community,
] as const;
