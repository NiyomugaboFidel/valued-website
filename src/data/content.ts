import { galleryImages, images } from './images';

export const heroContent = {
  headline: "Building Rwanda's Future Through",
  highlight: 'Value-Based Education',
  
  primaryCta: { label: 'Explore Programs', to: '/programs' },
  secondaryCta: { label: 'Apply Now', to: '/apply' },
} as const;

export const heroStats = [
  { value: 160, suffix: '+', label: 'Children trained annually' },
  { value: 4, suffix: '', label: 'Core programs' },
  { value: 500, suffix: '+', label: 'Youth reached per year' },
  { value: 7, suffix: '', label: 'Partner organizations' },
  { value: 2050, suffix: '', label: 'Aligned with Vision 2050' },
] as const;

export const stats = heroStats;

export const aboutSummary = {
  kicker: 'Who We Are',
  title: 'Bridging Education and Real Opportunity',
  description:
    'Rwanda has come a long way in building access to education, but access alone does not guarantee opportunity. ValuEd was born to close that gap   a movement for value-based transformation that connects practical skills, entrepreneurial mindsets, and ethical values with real-world application for young people aged 8 to 25, aligned with Rwanda\'s Vision 2050.',
} as const;

export const aboutStory = {
  paragraphs: [
    'Rwanda has come a long way in building access to education. But access alone doesn\'t guarantee opportunity. Too many young people leave school without the practical tools they need to find work, start businesses, or contribute meaningfully to their communities. ValuEd was born to close that gap.',
    'We are more than a training program   we are a movement for value-based transformation. Drawing lessons from the Africa Mission Alliance, which educated over 7,000 learners but saw its greatest impact from technically skilled graduates, ValuEd intentionally connects education with real-world application, innovation, and entrepreneurship. Our approach reaches children as young as 8, all the way through to young adults at 25, meeting them wherever they are in their journey.',
  ],
} as const;

export const aboutVision = {
  title: 'Our Vision',
  description:
    'A Rwanda where every young person   regardless of background   graduates with the confidence, skills, and values to create their own opportunities and drive national prosperity. We envision a knowledge economy where youth are not just job seekers, but job creators and community leaders aligned with Rwanda\'s Vision 2050.',
} as const;

export const aboutMission = {
  title: 'Our Mission',
  description:
    'To empower children and youth in Rwanda with practical skills, entrepreneurial mindsets, and ethical values   bridging the gap between education and employment through structured programs, mentorship, industry partnerships, and innovation platforms that create real and lasting impact.',
} as const;

export const aboutValues = [
  {
    title: 'Practicality',
    description: 'Every program is designed around skills participants can use immediately in real life.',
  },
  {
    title: 'Ethics & Integrity',
    description: 'We believe character is the foundation of lasting success. Every activity is grounded in responsibility and community care.',
  },
  {
    title: 'Entrepreneurship',
    description: 'We cultivate a mindset that turns challenges into opportunities and ideas into impact.',
  },
  {
    title: 'Empowerment',
    description: 'Our goal is always to increase capacity, confidence, and agency   not dependency.',
  },
  {
    title: 'Community Impact',
    description: 'The measure of success is not individual achievement alone, but the ripple effect on families, neighborhoods, and Rwanda as a whole.',
  },
] as const;

export const aboutGalleryImages = [
  images.culture,
  images.workshop,
  images.community,
] as const;

export const programsOverview = {
  kicker: 'Our Programs',
  title: 'Four Interconnected Initiatives',
} as const;

export type ProgramArticleSection = {
  heading: string;
  paragraphs: readonly string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  imagePosition?: 'above' | 'below' | 'left' | 'right' | 'full';
};

export type Program = {
  id: string;
  slug: string;
  category: string;
  cardTitle: string;
  title: string;
  shortDescription: string;
  image: string;
  heroImage: string;
  icon: 'school' | 'globe' | 'users' | 'sparkles';
  readTime: string;
  quote: { text: string; attribution: string };
  sections: readonly ProgramArticleSection[];
  highlights: readonly string[];
};

export const programs: readonly Program[] = [
  {
    id: 'vsep',
    slug: '/programs/vsep',
    category: 'School-Embedded Platform',
    cardTitle: 'VSEP',
    title: 'VSEP — ValuEd Schools Enrichment Program',
    shortDescription:
      'A multilingual digital learning platform embedded in schools, connecting students, teachers, and parents while tracking progress beyond the classroom.',
    image: images.campus,
    heroImage: images.campus,
    icon: 'school',
    readTime: '6 min read',
    quote: {
      text: 'VSEP does not replace the classroom — it completes it. Every student deserves a record of growth that goes far beyond a grade on a report card.',
      attribution: 'ValuEd Program Team',
    },
    sections: [
      {
        heading: 'Why Schools Need More Than Curriculum',
        paragraphs: [
          "Walk into any school in Rwanda and you'll find students who are bright, eager, and full of potential. Yet formal education alone rarely captures the full picture of who a young person is becoming — their creativity, leadership, discipline, and entrepreneurial instincts often develop outside standard subjects.",
          'VSEP was built to enrich formal education by delivering structured extra-curricular learning inside schools and tracking every student\'s progress in one unified system. Teachers gain visibility. Parents stay connected. Students build portfolios of real achievement.',
        ],
        image: { src: images.campus, alt: 'Students at a ValuEd campus session', caption: 'VSEP brings enrichment directly into the school environment.' },
        imagePosition: 'full',
      },
      {
        heading: 'What Students Learn',
        paragraphs: [
          'The program covers digital and creative skills, entrepreneurship, leadership, ethics, life skills, sports, and applied learning — all aligned with Rwanda\'s national development priorities and Vision 2050.',
          'Sessions are designed to be practical from day one. A student might learn basic financial literacy in the morning, practice public speaking in the afternoon, and close the week with a small team project that mirrors real workplace collaboration.',
        ],
        image: { src: images.workshop, alt: 'Hands-on ValuEd workshop', caption: 'Workshops blend instruction with immediate application.' },
        imagePosition: 'right',
      },
      {
        heading: 'A Platform That Connects Everyone',
        paragraphs: [
          'VSEP\'s multilingual digital platform links students, teachers, and parents in one place. Attendance, milestones, certificates, and progress reports are no longer scattered across notebooks and informal conversations.',
          'School administrators can see which enrichment tracks are working, where students are thriving, and where additional support is needed. This data-driven approach helps schools invest resources where they matter most.',
        ],
        image: { src: images.hero, alt: 'ValuEd community gathering', caption: 'Parents and teachers stay informed through the VSEP platform.' },
        imagePosition: 'left',
      },
      {
        heading: 'Filling a Long-Standing Gap',
        paragraphs: [
          'For years, schools across Rwanda have struggled with a consistent challenge: how to run structured extra-curricular programs and reliably track student development beyond grades. VSEP was designed specifically to solve this.',
          'Whether a student excels in arts, sports, entrepreneurship, or leadership, their growth is documented, celebrated, and visible — creating a fuller picture of readiness for higher education, employment, or self-employment.',
        ],
        image: { src: images.culture, alt: 'Cultural enrichment activity', caption: 'Arts and culture are core pillars of the VSEP enrichment model.' },
        imagePosition: 'below',
      },
      {
        heading: 'Who VSEP Is For',
        paragraphs: [
          'VSEP serves school-aged youth embedded in partner institutions, with pathways designed for different age groups and skill levels. Schools interested in partnership can contact ValuEd to explore onboarding, teacher training, and platform setup.',
          'The goal is simple: every graduate leaves school not only with academic credentials, but with demonstrated skills, documented achievements, and the confidence to create their own path forward.',
        ],
      },
    ],
    highlights: [
      'Digital skills',
      'Entrepreneurship',
      'Leadership & ethics',
      'Sports & arts',
      'Progress tracking',
      'Multilingual platform',
    ],
  },
  {
    id: 'valuexchange',
    slug: '/programs/valuexchange',
    category: 'National Youth Initiative',
    cardTitle: 'ValueXchange',
    title: 'ValueXchange Workshops',
    shortDescription:
      'National youth empowerment workshops bringing industry professionals and mentors directly to young people across Rwanda.',
    image: images.workshop,
    heroImage: images.workshop,
    icon: 'globe',
    readTime: '5 min read',
    quote: {
      text: 'A workshop should be a launchpad, not a lecture. Young people should leave with something they can use the very same week.',
      attribution: 'ValueXchange Facilitators',
    },
    sections: [
      {
        heading: 'Closing the Access Gap',
        paragraphs: [
          'Rwanda\'s youth have ideas — bold, creative, and urgently needed. What they often lack is access: mentors who have walked the path, industry insiders who understand the market, and practical knowledge that turns a good idea into a viable business.',
          'ValueXchange Workshops were created to be that access point. By bringing professionals directly to young people — in community hubs, schools, and partner venues — ValuEd removes the barriers that keep talent from meeting opportunity.',
        ],
        image: { src: images.workshop, alt: 'ValueXchange workshop in session', caption: 'Industry professionals lead hands-on ValueXchange sessions.' },
        imagePosition: 'full',
      },
      {
        heading: 'How a Workshop Runs',
        paragraphs: [
          'Each ValueXchange session follows a launchpad format: a short expert introduction, an interactive exercise, group work, and a takeaway assignment participants complete in their own communities or businesses within days.',
          'There are no passive audiences. Facilitators expect questions, debate, and real prototypes — whether that means a basic business plan, a tourism pitch, or a digital marketing strategy for a local product.',
        ],
        image: { src: images.community, alt: 'Youth networking at a ValuEd event', caption: 'Participants collaborate and network throughout every session.' },
        imagePosition: 'left',
      },
      {
        heading: 'Industries We Cover',
        paragraphs: [
          'Workshops rotate across sectors critical to Rwanda\'s economy: agriculture and agribusiness, tourism and hospitality, finance and banking, taxation, insurance, technology, and the creative industries.',
          'The long-term vision is a national calendar of ValueXchange events — so a young person in any district can find a session relevant to their ambitions, whether they want to farm smarter, build a brand, or launch a tech startup.',
        ],
        image: { src: images.sports, alt: 'Youth sports and teamwork activity', caption: 'Teamwork and discipline learned in sports translate directly to business.' },
        imagePosition: 'right',
      },
      {
        heading: 'From Session to Real Outcome',
        paragraphs: [
          'ValueXchange alumni have gone on to start small enterprises, secure internships, and join ValuEd\'s Connect & Cheers showcase events where their projects meet employers and investors.',
          'Monthly workshops keep the pipeline active. Mentor office hours and follow-up sessions ensure that one afternoon of training becomes a sustained relationship — not a one-off event that fades from memory.',
        ],
      },
    ],
    highlights: [
      'Monthly workshops',
      'Industry-driven',
      'Agriculture',
      'Finance & tech',
      'Creative economy',
      'Mentor access',
    ],
  },
  {
    id: 'connect-cheers',
    slug: '/programs/connect-cheers',
    category: 'Youth Ecosystem Activation',
    cardTitle: 'Connect & Cheers',
    title: 'Connect & Cheers',
    shortDescription:
      'A vibrant platform where skills are showcased, celebrated, and transformed into real opportunities through events and networking.',
    image: images.community,
    heroImage: images.community,
    icon: 'users',
    readTime: '5 min read',
    quote: {
      text: 'This is where valuation happens — where the value created through education becomes visible, tangible, and celebrated.',
      attribution: 'Connect & Cheers',
    },
    sections: [
      {
        heading: 'Where Skills Meet the Spotlight',
        paragraphs: [
          'Connect & Cheers is the final activation point in the ValuEd ecosystem — the stage where skills gained through VSEP, ValueXchange, and InnovaKidz are showcased, celebrated, and transformed into real opportunities.',
          'Participants present projects, perform on stage, network with peers, and interact directly with industry leaders and potential employers. It is part talent show, part career fair, and part community festival.',
        ],
        image: { src: images.community, alt: 'Connect & Cheers community event', caption: 'Monthly events bring together youth, families, and industry guests.' },
        imagePosition: 'full',
      },
      {
        heading: 'Monthly Events, Lasting Connections',
        paragraphs: [
          'Every month, Connect & Cheers hosts gatherings that mix performance, exhibition, and networking. Football screenings, cultural nights, talent showcases, and project expos rotate through the calendar so there is always something new to experience.',
          'These events are deliberately inclusive — families, school groups, and community members are welcome. The atmosphere is celebratory, but the underlying purpose is serious: connecting young talent to people who can open doors.',
        ],
        image: { src: images.culture, alt: 'Cultural performance at ValuEd event', caption: 'Traditional and contemporary talent share the same stage.' },
        imagePosition: 'right',
      },
      {
        heading: 'Community Project Showcases',
        paragraphs: [
          'Beyond headline performances, Connect & Cheers features community project showcases — bringing innovative solutions developed through ValuEd programs into the national spotlight.',
          'A team might present a waste-management initiative, a youth-led media project, or a small business born from a ValueXchange workshop. Judges, mentors, and guests provide feedback, encouragement, and in some cases, pathways to funding or employment.',
        ],
        image: { src: images.workshop, alt: 'Project presentation at ValuEd', caption: 'Young innovators present solutions to real community challenges.' },
        imagePosition: 'left',
      },
      {
        heading: 'The ValuEd Ecosystem in Action',
        paragraphs: [
          'Connect & Cheers does not exist in isolation. It is the visible culmination of everything that happens upstream — classroom enrichment, industry workshops, and early childhood creativity all converge here.',
          'For participants, it is a moment of pride. For partners and employers, it is a curated window into Rwanda\'s next generation of job creators and community leaders.',
        ],
      },
    ],
    highlights: [
      'Monthly events',
      'Networking',
      'Project showcase',
      'Employer connections',
      'Community celebration',
    ],
  },
  {
    id: 'innovakidz',
    slug: '/programs/innovakidz',
    category: 'Children & Early Youth',
    cardTitle: 'InnovaKidz',
    title: 'InnovaKidz',
    shortDescription:
      "ValuEd's foundational program where the youngest members discover creativity, build confidence, and develop skills for the future.",
    image: images.culture,
    heroImage: images.culture,
    icon: 'sparkles',
    readTime: '5 min read',
    quote: {
      text: 'Every child is born creative. InnovaKidz exists to make sure that creativity has room to grow before the world tells them to narrow down.',
      attribution: 'InnovaKidz Coaches',
    },
    sections: [
      {
        heading: 'Where the Journey Begins',
        paragraphs: [
          'Every child is born creative. InnovaKidz exists to make sure that creativity doesn\'t get squeezed out before it has a chance to grow. As ValuEd\'s foundational program, it serves children and early youth at the most formative stage of development.',
          'More than 160 children engage in structured InnovaKidz training every year at Light Center and partner venues — building habits of curiosity, discipline, and self-expression that carry forward into every other ValuEd program.',
        ],
        image: { src: images.culture, alt: 'InnovaKidz cultural activities', caption: 'Children explore creativity through culture, arts, and performance.' },
        imagePosition: 'full',
      },
      {
        heading: 'Hands-On Learning Tracks',
        paragraphs: [
          'InnovaKidz offers structured tracks across photography, drama and theatre, public speaking, sports, and audio and media technology. Each track is taught by coaches who blend instruction with play — because learning at this age must feel alive.',
          'Children rotate through activities that build fine motor skills, confidence on stage, teamwork on the field, and technical comfort with cameras and microphones. No prior experience is required; enthusiasm is the only prerequisite.',
        ],
        image: { src: images.campus, alt: 'Children learning at Light Center', caption: 'Light Center hosts InnovaKidz sessions year-round.' },
        imagePosition: 'left',
      },
      {
        heading: 'Creativity Meets Heritage',
        paragraphs: [
          'What sets InnovaKidz apart is its integration of creativity and culture. Rwandan children are the proud inheritors of a rich cultural tradition — dance, music, storytelling, and visual arts that have defined communities for generations.',
          'InnovaKidz honors that heritage while equipping participants with tools for the modern world. A child might learn traditional Intore dance one week and basic video editing the next, understanding that both are expressions of the same creative spirit.',
        ],
        image: { src: images.workshop, alt: 'Creative workshop for young learners', caption: 'Traditional culture and modern media skills go hand in hand.' },
        imagePosition: 'right',
      },
      {
        heading: 'Building Confidence for Life',
        paragraphs: [
          'The outcomes of InnovaKidz extend far beyond any single skill. Parents and teachers report increased confidence, better communication, stronger peer relationships, and a willingness to try new things.',
          'Many InnovaKidz graduates transition into VSEP school programs and later ValueXchange workshops — carrying with them a foundation of creativity and courage that makes every next step easier.',
        ],
        image: { src: images.sports, alt: 'Youth sports activity', caption: 'Sports build teamwork and resilience alongside artistic tracks.' },
        imagePosition: 'below',
      },
      {
        heading: 'Join InnovaKidz',
        paragraphs: [
          'Enrollment opens annually with sessions running throughout the school calendar. Families in the Kigali area can visit Light Center in Kabuga, Gasabo to learn more about upcoming intakes and track availability.',
          'ValuEd believes the investment in a child\'s creative years pays dividends for decades — for the individual, their family, and Rwanda as a whole.',
        ],
      },
    ],
    highlights: [
      '160+ children/year',
      'Photography',
      'Drama & theatre',
      'Public speaking',
      'Sports',
      'Audio & media tech',
    ],
  },
] as const;

/** @deprecated Use `programs` instead */
export const corePrograms = programs.map((p) => ({
  id: p.id,
  title: p.title.split('   ')[0] === p.title ? p.title : p.title.split('   ')[0],
  description: p.shortDescription,
  image: p.image,
  icon: p.icon,
  link: p.slug,
}));

export const innovakidzTracks = [
  { title: 'Traditional Dance', image: images.culture, description: 'Heritage, rhythm, and storytelling through Rwanda\'s cultural arts.' },
  { title: 'Modern Dance', image: images.workshop, description: 'Hip-hop, contemporary, and afrobeat with professional choreography.' },
  { title: 'Football', image: images.sports, description: 'Discipline, teamwork, and competitive play on and off the field.' },
  { title: 'Arts & Fashion', image: images.community, description: 'Creative expression, styling, and confidence on the runway.' },
] as const;

export const whyChoose = [
  {
    title: 'Holistic Development',
    description: 'We go beyond skills training   building character, confidence, and a sense of belonging in every participant.',
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
  { quote: 'The mentorship was life-changing   I found my voice as a leader in my community.', author: 'Grace', role: 'Leadership Track' },
  { quote: 'Our campus workshops opened doors I never thought possible for young people in Kabuga.', author: 'Eric', role: 'Workshop Alumni' },
] as const;

export const howItWorks = [
  { step: '01', title: 'Apply Online', description: 'Choose your track, share your goals, and tell us why you want to join VALUED.' },
  { step: '02', title: 'Train & Grow', description: 'Attend weekly sessions, workshops, and mentorship circles led by experienced coaches.' },
  { step: '03', title: 'Perform & Connect', description: 'Showcase your talent at competitions, events, and community gatherings.' },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  whatsapp?: string;
  instagram?: string;
};

export const team: readonly TeamMember[] = [
  {
    name: 'Itangiteka Axel',
    role: 'Program Creator   Activity Director',
    image: images.team.axel,
    whatsapp: '250786759641',
    instagram: 'https://www.instagram.com/iam__tvan?igsh=MXF6Zmd5bmQ5bXZmdQ==',
  },
  {
    name: 'Gihana Nyamihana',
    role: 'Mentorship Lead   Financial Organizer',
    image: images.team.gihana,
    whatsapp: '250788298064',
  },
  {
    name: 'Kwizera Patrick',
    role: 'Community Coordinator   IT Operator',
    image: images.team.patrick,
    whatsapp: '250795454671',
    instagram: 'https://www.instagram.com/pthe_producer?igsh=MWZlcmg0ZGk2ZXFlMw==',
  },
];

export const missionCards = [
  { title: 'Inspire', description: 'Ignite ambition in young minds through mentorship, creativity, and positive role models.' },
  { title: 'Empower', description: 'Equip youth with practical skills, resources, and platforms to lead their own journeys.' },
  { title: 'Impact', description: 'Create lasting change in families and communities across Rwanda and beyond.' },
] as const;

export const programDetails = [
  { title: 'Modern Dance', image: images.workshop, description: 'Contemporary, hip-hop, and freestyle training with choreography, stage presence, and teamwork built into every session.' },
  { title: 'Traditional Dance', image: images.culture, description: 'Connect to Rwanda\'s roots through Intore-inspired movement, drumming, costumes, and the stories behind each performance.' },
  { title: 'Football Skills', image: images.sports, description: 'Technical training, match strategy, and leadership on the pitch   building discipline, fitness, and lifelong friendships.' },
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
  { question: 'Where are sessions held?', answer: 'At Light Center in Kabuga, Gasabo, Kigali   with select programs and events across community hubs in Rwanda.' },
] as const;

export { galleryImages };

export type Partner = {
  name: string;
  logo?: string;
  span: 'sm' | 'md' | 'lg';
};

export const partners: readonly Partner[] = [
  { name: 'Umurenge', logo: images.partners.umurenge, span: 'lg' },
  { name: 'AMA', logo: images.partners.ama, span: 'md' },
  { name: 'Light Center', span: 'md' },
  { name: 'MINEDUC', span: 'sm' },
  { name: 'RDB', span: 'sm' },
  { name: 'RGB', span: 'sm' },
  { name: 'Youth Connekt', span: 'md' },
  { name: 'GIZ Rwanda', span: 'sm' },
  { name: 'UNICEF Rwanda', span: 'md' },
  { name: 'Private Sector Federation', span: 'lg' },
];

export const applyBenefits = [
  { title: 'Scholarships', description: 'Financial support available for qualifying participants.', icon: 'graduation' },
  { title: 'Expert Mentorship', description: 'Learn directly from coaches and industry professionals.', icon: 'lightbulb' },
  { title: 'Real Performance Stages', description: 'Competitions, showcases, and events that build your portfolio.', icon: 'network' },
  { title: 'Future-Ready Skills', description: 'Communication, teamwork, and creativity that employers value.', icon: 'rocket' },
] as const;

export const ctaBand = {
  title: 'Ready to invest in the next generation?',
  description: 'Whether you are a parent, partner, or young talent   VALUED has a place for you.',
  primary: { label: 'Apply Now', to: '/apply' },
  secondary: { label: 'Become a Partner', to: '/contact' },
} as const;

export const pageHeroImages = {
  about: images.hero,
  programs: images.workshop,
  campus: images.campus,
  impact: images.sports,
  contact: images.community,
  apply: images.hero,
} as const;
