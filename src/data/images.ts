import { galleryPictureFiles } from './gallery-files';

const WEBSITE = '/Website';

/** Encode each path segment for public/Website assets (spaces, parentheses, etc.) */
export function websiteAsset(...parts: string[]): string {
  return `${WEBSITE}/${parts.map(encodeURIComponent).join('/')}`;
}

const homePageDir = 'display Home Page';
const galleryDir = 'Galary-Pictures';
const programIconDir = 'Our Program Icone Image';
const programDir = 'Our Program';
const partnersDir = 'Partners';

const homeSlideFiles = [
  '1. LYN PHOTO STUDIO.._59.JPG',
  '2. LYN PHOTO STUDIO.._51.JPG',
  '3. LYNARTSTUDIO(43).jpg',
  '4. LYNARTSTUDIO(42).jpg',
  '7. 3C5A3502.JPG',
  '8. 3C5A3509.JPG',
  '9. LYN PHOTO STUDIO..(24).jpg',
  '10. LYN PHOTO STUDIO..(25).jpg',
  'LYNARTSTUDIO(26).jpg',
] as const;

const galleryFiles = galleryPictureFiles;

const vsepFiles = [
  '_88A6246.jpg',
  '_88A6264 (1).jpg',
  '_88A6360.jpg',
  '_88A6411.jpg',
  '_88A6412.jpg',
  '_88A6423 (1).jpg',
] as const;

const valuexchangeFiles = [
  '3C5A3146.JPG',
  '3C5A3150.JPG',
  '3C5A3205.JPG',
  '3C5A3410.JPG',
  '3C5A3414.JPG',
  '3C5A3490.JPG',
  '3C5A3509.JPG',
] as const;

const connectCheersFiles = [
  'LYNARTSTUDIO(2).jpg',
  'LYNARTSTUDIO(3).jpg',
  'LYNARTSTUDIO(5).jpg',
  'LYNARTSTUDIO(6).jpg',
  'LYNARTSTUDIO(12).jpg',
  'LYNARTSTUDIO(13) (1).jpg',
  'LYNARTSTUDIO(14).jpg',
  'LYNARTSTUDIO(16).jpg',
  'LYNARTSTUDIO(17) (1).jpg',
  'LYNARTSTUDIO(18) (1).jpg',
  'LYNARTSTUDIO(23) (1).jpg',
  'LYNARTSTUDIO(24).jpg',
  'LYNARTSTUDIO(26).jpg',
  'LYNARTSTUDIO(40).jpg',
  'LYNARTSTUDIO(41).jpg',
  'LYNARTSTUDIO(42).jpg',
  'LYNARTSTUDIO(43).jpg',
] as const;

const innovakidzFiles = [
  '2_4.JPG',
  '2_7.JPG',
  '2_8.JPG',
  '2_15.JPG',
  '2_19.JPG',
  '2_72.JPG',
  '2_77.JPG',
  '2_100.JPG',
  '2_112.JPG',
  '2_115.JPG',
  '2_116.JPG',
  '2_125.JPG',
  '2_131.JPG',
] as const;

function galleryPath(file: string) {
  return websiteAsset(galleryDir, file);
}

function programPath(folder: string, file: string) {
  return websiteAsset(programDir, folder, file);
}

export const heroSlides = homeSlideFiles.map((file) => websiteAsset(homePageDir, file));

/** Curated stack for the home About section */
export const homeAboutStackImages = [
  heroSlides[1],
  heroSlides[3],
  heroSlides[6],
] as const;

export const galleryImages = galleryFiles.map(galleryPath);

export const programMedia = {
  vsep: {
    card: websiteAsset(programIconDir, 'VSEP PROGRAM', '_88A6360.jpg'),
    hero: programPath('VSEP', vsepFiles[2]),
    photos: vsepFiles.map((file) => programPath('VSEP', file)),
  },
  valuexchange: {
    card: websiteAsset(programIconDir, 'Valuexchange', 'LYNARTSTUDIO(51) (2).jpg'),
    hero: programPath('Valuex change', valuexchangeFiles[4]),
    photos: valuexchangeFiles.map((file) => programPath('Valuex change', file)),
  },
  connectCheers: {
    card: websiteAsset(programIconDir, 'Connect & Cheers', 'LYNARTSTUDIO(40).jpg'),
    hero: programPath('cOONECT & cHEERS', connectCheersFiles[13]),
    photos: connectCheersFiles.map((file) => programPath('cOONECT & cHEERS', file)),
  },
  innovakidz: {
    card: websiteAsset(programIconDir, 'Innova Kidz', '3C5A3141.JPG'),
    hero: programPath('Innova Kidz', innovakidzFiles[0]),
    photos: innovakidzFiles.map((file) => programPath('Innova Kidz', file)),
  },
} as const;

/** Home page program cards — distinct from detail-page heroes */
export const homeProgramCardImages = {
  vsep: '/images/card5.jpeg',
  valuexchange: '/images/valuexchange.jpeg',
  'connect-cheers': '/images/connect-cheers.jpeg',
  innovakidz: '/images/Innova-kidz.jpeg',
} as const;

/** Program detail pages — images from public/images */
export const publicProgramImages = {
  connectCheers: {
    hero: '/images/connect-cheers.jpeg',
    photos: [
      '/images/connect-cheers.jpeg',
      '/images/conncect-cheers-our-program-picture.jpeg',
      '/images/conncect-cheers-our-program-picture3.jpeg',
    ],
  },
  valuexchange: {
    hero: '/images/workshop-picture-2.jpeg',
    photos: [
      '/images/workshop-picture-2.jpeg',
      '/images/workshop-picture-3.jpeg',
    ],
  },
} as const;

/** Shared image map — semantic keys used across pages */
export const images = {
  logo: '/images/logo.webp',
  hero: heroSlides[0],
  culture: programMedia.connectCheers.photos[7],
  workshop: programMedia.valuexchange.photos[4],
  sports: galleryPath('3C5A3107.JPG'),
  community: programMedia.connectCheers.photos[13],
  campus: galleryPath('_88A6360.jpg'),
  team: {
    axel: galleryPath('_88A6393.jpg'),
    gihana: galleryPath('LYNARTSTUDIO(69).jpg'),
    patrick: galleryPath('_88A6423 (1).jpg'),
  },
  partners: {
    coreGroupe: websiteAsset(partnersDir, 'core groupe', '1.png'),
    coreGroupeAlt: websiteAsset(partnersDir, 'core groupe', '2.png'),
    republicOfRwanda: websiteAsset(partnersDir, 'Repubique of Rwanda', 'republic oF Rwanda Logo.jpg'),
    devigo: websiteAsset(partnersDir, 'Devigo', 'devigo Logo.png'),
    codeMate: websiteAsset(partnersDir, 'Code mate', 'code mate logo.png'),
    judithSafaris: websiteAsset(partnersDir, 'Judith Safaris', 'Judith safaris Logo.jpg'),
  },
} as const;
