import { galleryImages, images } from './images';

export const heroContent = {
  kicker: 'Youth Development Platform · Light Center, Kabuga',
  headline: 'Where Young Talent Becomes Lasting Impact',
  highlight: 'Lasting Impact',
  description:
    'VALUED is a Kigali-based youth program discovering, training, and showcasing talent in arts, sports, leadership, and technology — giving young people the confidence, skills, and real stages to grow.',
  primaryCta: { label: 'Explore Programs', to: '/programs' },
  secondaryCta: { label: 'Apply for a Spot', to: '/apply' },
  trustPoints: [
    '300+ children enrolled weekly',
    'Programs across 7 creative tracks',
    'Based at Light Center, Kabuga',
  ],
} as const;

export const stats = [
  { value: 500, suffix: '+', label: 'Youth Reached' },
  { value: 7, suffix: '', label: 'Active Tracks' },
  { value: 300, suffix: '+', label: 'Weekly Enrollees' },
  { value: 2, suffix: '+', label: 'Years of Impact' },
] as const;

export const aboutSummary = {
  kicker: 'Who We Are',
  title: 'Building Confident, Skilled Young Leaders',
  description:
    'Valued Education is an initiative of Light Center in Kabuga, Kigali. For over two years we have grown from a small community program into a vibrant hub serving 300+ children through academics, arts, sports, and life skills.',
  points: [
    'Child-centered learning with real mentorship',
    'Programs rooted in Rwandan culture and modern skills',
    'Safe, inclusive spaces for every young person',
    'Partnerships that open doors beyond the classroom',
  ],
} as const;

export const corePrograms = [
  {
    id: 'innovakidz',
    title: 'InnovaKidz',
    description: 'Weekly youth sessions in dance, football, fashion, arts, language, and drama — designed for ages 6–20.',
    image: images.culture,
    icon: 'sparkles',
    link: '/programs',
  },
  {
    id: 'rtic',
    title: 'Rwanda Talent & Innovation Competition',
    description: 'The Intercell Competition — dance, drama, arts, singing, poetry, comedy, and football on a national stage.',
    image: images.sports,
    icon: 'trophy',
    link: '/programs',
  },
  {
    id: 'valuexchange',
    title: 'ValueXchange Workshops',
    description: 'Practical workshops in tourism, banking, and taxation — connecting youth to Rwanda\'s growing industries.',
    image: images.workshop,
    icon: 'globe',
    link: '/programs',
  },
  {
    id: 'connect',
    title: 'Connect & Cheers',
    description: 'Monthly community events — talent nights, football screenings, cultural games, and movie nights.',
    image: images.community,
    icon: 'users',
    link: '/campus',
  },
] as const;

export const innovakidzTracks = [
  { title: 'Traditional Dance', image: images.culture, description: 'Heritage, rhythm, and storytelling through Rwanda\'s cultural arts.' },
  { title: 'Modern Dance', image: images.workshop, description: 'Hip-hop, contemporary, and afrobeat with professional choreography.' },
  { title: 'Football', image: images.sports, description: 'Discipline, teamwork, and competitive play on and off the field.' },
  { title: 'Arts & Fashion', image: images.community, description: 'Creative expression, styling, and confidence on the runway.' },
] as const;

export const whyChoose = [
  {
    title: 'Holistic Development',
    description: 'We go beyond skills training — building character, confidence, and a sense of belonging in every participant.',
    points: ['Growth Mindset', 'Life Skills', 'Peer Community', 'Mentorship'],
  },
  {
    title: 'Culture Meets Innovation',
    description: 'Programs honor Rwandan heritage while preparing youth for modern creative and professional opportunities.',
    points: ['Traditional Arts', 'Modern Performance', 'Sports Excellence', 'Showcase Events'],
  },
  {
    title: 'Proven Track Record',
    description: 'From government partnerships to nationwide competitions, VALUED delivers structured programs with measurable outcomes.',
    points: ['Expert Coaches', 'Real Stages', 'Partner Network', 'Ongoing Support'],
  },
] as const;

export const testimonials = [
  { quote: 'VALUED gave me the confidence to perform live and release my first EP.', author: 'Aline', role: 'Music Participant' },
  { quote: 'The traditional dance program helped me connect deeply with my culture and perform on stage.', author: 'Alice Kamanzi', role: 'Dance Track' },
  { quote: 'The mentorship was life-changing — I found my voice as a leader in my community.', author: 'Grace', role: 'Leadership Track' },
  { quote: 'Our campus workshops opened doors I never thought possible for young people in Kabuga.', author: 'Eric', role: 'Workshop Alumni' },
] as const;

export const howItWorks = [
  { step: '01', title: 'Apply Online', description: 'Choose your track, share your goals, and tell us why you want to join VALUED.' },
  { step: '02', title: 'Train & Grow', description: 'Attend weekly sessions, workshops, and mentorship circles led by experienced coaches.' },
  { step: '03', title: 'Perform & Connect', description: 'Showcase your talent at competitions, events, and community gatherings.' },
] as const;

export const team = [
  {
    name: 'Itangiteka Axel',
    role: 'Program Creator — Activity Director',
    image: images.team.axel,
    whatsapp: '250786759641',
    instagram: 'https://www.instagram.com/iam__tvan?igsh=MXF6Zmd5bmQ5bXZmdQ==',
  },
  {
    name: 'Gihana Nyamihana',
    role: 'Mentorship Lead — Financial Organizer',
    image: images.team.gihana,
    whatsapp: '250788298064',
  },
  {
    name: 'Kwizera Patrick',
    role: 'Community Coordinator — IT Operator',
    image: images.team.patrick,
    whatsapp: '250795454671',
    instagram: 'https://www.instagram.com/pthe_producer?igsh=MWZlcmg0ZGk2ZXFlMw==',
  },
] as const;

export const missionCards = [
  { title: 'Inspire', description: 'Ignite ambition in young minds through mentorship, creativity, and positive role models.' },
  { title: 'Empower', description: 'Equip youth with practical skills, resources, and platforms to lead their own journeys.' },
  { title: 'Impact', description: 'Create lasting change in families and communities across Rwanda and beyond.' },
] as const;

export const programDetails = [
  { title: 'Modern Dance', image: images.workshop, description: 'Contemporary, hip-hop, and freestyle training with choreography, stage presence, and teamwork built into every session.' },
  { title: 'Traditional Dance', image: images.culture, description: 'Connect to Rwanda\'s roots through Intore-inspired movement, drumming, costumes, and the stories behind each performance.' },
  { title: 'Football Skills', image: images.sports, description: 'Technical training, match strategy, and leadership on the pitch — building fitness, discipline, and lifelong friendships.' },
  { title: 'Arts & Crafts', image: images.community, description: 'Painting, drawing, and creative building projects that develop patience, imagination, and cultural pride.' },
] as const;

export const campusFeatures = [
  { title: 'Leadership Journey', image: images.campus, description: 'Structured activities that develop communication, vision, and community responsibility.' },
  { title: 'Innovation Workshops', image: images.workshop, description: 'Hands-on sessions in design thinking, entrepreneurship, and practical career skills.' },
  { title: 'Community Events', image: images.community, description: 'Regular gatherings that connect students, families, and local partners.' },
] as const;

export const impactHighlights = [
  { title: 'Intore Mu Biruhuko Partnership', image: images.culture, description: 'Government collaboration delivering cultural programs and youth talent showcases across Rwanda.' },
  { title: 'Nationwide Competitions', image: images.sports, description: 'Multi-discipline events in arts, sports, and performance with mentorship and prizes for winners.' },
  { title: 'Campus Workshops', image: images.workshop, description: 'Industry-led sessions in tourism, storytelling, leadership, and professional development.' },
] as const;

export const impactStats = [
  { value: 500, label: 'Youth Reached' },
  { value: 8, label: 'Workshops Delivered' },
  { value: 300, label: 'Active Participants' },
  { value: 2, label: 'Partner Organizations' },
] as const;

export const events = [
  { date: 'Jul 23 – Aug 29', title: 'Intore Mubiruhuko', location: 'Campus · 1:30 – 4:30 PM', tag: 'Culture' },
  { date: 'Aug 25 – Aug 29', title: 'Intercell Competition', location: 'Main Hall · 1:30 – 4:30 PM', tag: 'Competition' },
  { date: 'Every Sunday', title: 'InnovaKidz Sessions', location: 'Campus · 2:00 – 5:00 PM', tag: 'Weekly' },
  { date: 'Oct 05', title: 'In-Campus Workshop', location: 'Main Hall · 9:00 AM – 1:30 PM', tag: 'Workshop' },
] as const;

export const faqs = [
  { question: 'Who can join VALUED programs?', answer: 'Youth aged 6–20 with an interest in arts, sports, leadership, or creative activities. No prior experience is required for most tracks.' },
  { question: 'How do I apply?', answer: 'Click Apply Now, select your preferred track, and submit your details. Our team will contact you for a short orientation session.' },
  { question: 'Are scholarships available?', answer: 'Yes. Need-based and merit-based support is available through partner organizations. Mention your interest in the application form.' },
  { question: 'Where are sessions held?', answer: 'At Light Center in Kabuga, Gasabo, Kigali — with select programs and events across community hubs in Rwanda.' },
] as const;

export { galleryImages };

export const partners = [
  { name: 'Umurenge', logo: images.partners.umurenge },
  { name: 'AMA', logo: images.partners.ama },
] as const;

export const applyBenefits = [
  { title: 'Scholarships', description: 'Financial support available for qualifying participants.', icon: 'graduation' },
  { title: 'Expert Mentorship', description: 'Learn directly from coaches and industry professionals.', icon: 'lightbulb' },
  { title: 'Real Performance Stages', description: 'Competitions, showcases, and events that build your portfolio.', icon: 'network' },
  { title: 'Future-Ready Skills', description: 'Communication, teamwork, and creativity that employers value.', icon: 'rocket' },
] as const;

export const ctaBand = {
  title: 'Ready to invest in the next generation?',
  description: 'Whether you are a parent, partner, or young talent — VALUED has a place for you.',
  primary: { label: 'Apply Now', to: '/apply' },
  secondary: { label: 'Become a Partner', to: '/contact' },
} as const;
