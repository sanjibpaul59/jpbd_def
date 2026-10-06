export const forumName = "Japan Bangladesh Development Exchange Forum";

export const tagline = "Friendship · Cooperation · Co-prosperity";

export const year = 2026;

export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: "/#about", label: "About" },
  { href: "/#pillars", label: "Focus" },
  { href: "/#programmes", label: "Programmes" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#events", label: "Events" },
  { href: "/#partnership", label: "Partnership" },
  { href: "/#news", label: "News" },
  { href: "/#take-part", label: "Take part" },
];

export interface Picture {
  src: string;
  alt: string;
}

export interface Slide extends Picture {
  kicker: string;
  caption: string;
}

/** Placeholder photographs. Replace with photographs from the Forum. */
export const slides: Slide[] = [
  {
    src: "/images/carousel-friendship.jpg",
    alt: "Cherry blossoms beside still water in the morning",
    kicker: "Friendship",
    caption: "A long friendship, held in respect and trust.",
  },
  {
    src: "/images/carousel-lotus.jpg",
    alt: "A white lotus on a green pond at dusk",
    kicker: "Cooperation",
    caption: "Shared work across culture, learning, and public life.",
  },
  {
    src: "/images/carousel-exchange.jpg",
    alt: "Students walking a tree-lined university path",
    kicker: "Co-prosperity",
    caption: "The next generation, learning across both countries.",
  },
];

export interface GalleryItem extends Picture {
  caption: string;
}

/** Placeholder gallery. Replace with photographs from the Forum. */
export const gallery: GalleryItem[] = [
  {
    src: "/images/gallery-blossom.jpg",
    alt: "Pink and white cherry blossoms on a dark branch",
    caption: "Spring blossom",
  },
  {
    src: "/images/gallery-lotus.jpg",
    alt: "A white lotus floating on dark green water",
    caption: "Lotus on still water",
  },
  {
    src: "/images/gallery-dialogue.jpg",
    alt: "Hands sharing a closed folder across a wooden table",
    caption: "A working conversation",
  },
  {
    src: "/images/gallery-youth.jpg",
    alt: "Three people talking around a small table, seen from behind",
    caption: "A youth dialogue",
  },
  {
    src: "/images/gallery-energy.jpg",
    alt: "Solar panels beside tall green grass",
    caption: "Clean energy",
  },
  {
    src: "/images/gallery-craft.jpg",
    alt: "Folded silk in crimson, green, and gold",
    caption: "Textile and craft",
  },
];

export const hero = {
  lead: "Building a stronger, richer, and more sustainable partnership between Japan and Bangladesh.",
  ctaHref: "/#pillars",
  ctaLabel: "The six pillars",
};

export const about = {
  title: "A bridge connecting two countries",
  body: "The Japan Bangladesh Development Exchange Forum is a non-profit human exchange organization dedicated to strengthening friendship and cooperation between Japan and Bangladesh. It connects governments, businesses, universities, research institutions, civil society, and younger generations to create opportunities for cooperation that foster mutual understanding and long-term development.",
  src: "/images/about-bridge.jpg",
  alt: "A stone footbridge over still water, with green trees in the morning mist",
};

export const purpose = {
  title: "Turning friendship into concrete action",
  mission:
    "To promote enduring friendship and cooperation between both nations through trade, education, culture, innovation, and people-to-people exchanges.",
  missionImage: {
    src: "/images/purpose-mission.jpg",
    alt: "Two pairs of hands sharing a closed green book across a wooden table",
  },
  vision:
    "To aim for a future where Japan and Bangladesh grow together as trusted partners, achieving inclusive and sustainable co-prosperity for future generations.",
  visionImage: {
    src: "/images/purpose-vision.jpg",
    alt: "A calm river at dawn, with a tree-lined shore in the distance",
  },
};

export interface Pillar extends Picture {
  number: string;
  title: string;
  summary: string;
}

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Economic Cooperation",
    summary: "Trade, investment, and business collaboration.",
    src: "/images/pillar-economy.jpg",
    alt: "A quiet harbor at dawn, with ships far off and green hills beyond",
  },
  {
    number: "02",
    title: "Education and Human Resource Development",
    summary: "Scholarships, skill development, and academic exchanges.",
    src: "/images/pillar-education.jpg",
    alt: "Clothbound books and a closed notebook on a sunlit desk",
  },
  {
    number: "03",
    title: "Cultural and People-to-People Exchange",
    summary: "Exchanges that respect culture and diversity.",
    src: "/images/pillar-culture.jpg",
    alt: "Cherry blossom and a white lotus arranged on ivory cloth",
  },
  {
    number: "04",
    title: "Technology and Innovation",
    summary: "Digitalization, green technology, and startups.",
    src: "/images/pillar-technology.jpg",
    alt: "A closed laptop and a small plant on a clean desk",
  },
  {
    number: "05",
    title: "Youth Leadership",
    summary: "Fostering next-generation leaders.",
    src: "/images/pillar-youth.jpg",
    alt: "Four young people walking away along a tree-lined path",
  },
  {
    number: "06",
    title: "Sustainable Development",
    summary: "An environmentally conscious, healthy, and resilient society.",
    src: "/images/pillar-sustain.jpg",
    alt: "Mangrove trees along still water in the morning",
  },
];

export interface Programme extends Picture {
  title: string;
  summary?: string;
  points?: string[];
}

export const programmes: Programme[] = [
  {
    title: "Connecting hearts and enriching lives",
    summary:
      "Through culture, arts, sports, community activities, and educational exchanges, the Forum shares common values between both countries, deepens interpersonal connections, and nurtures enduring friendships.",
    src: "/images/programme-culture.jpg",
    alt: "An empty wooden stage in a courtyard, with glowing lanterns among the trees",
  },
  {
    title: "Investing in people, building the future",
    points: [
      "Exchanges between universities and educational institutions",
      "Scholarships and learning opportunities",
      "Japanese language proficiency and specialized skills",
      "Research and innovation cooperation",
      "Professional networks and knowledge sharing",
    ],
    src: "/images/programme-learning.jpg",
    alt: "A sunlit reading room with clothbound books on a long wooden table",
  },
  {
    title: "Nurturing the next generation of leaders",
    summary:
      "Younger generations play a vital role in shaping the future of Japan–Bangladesh relations. The Forum promotes leadership training, youth forums and policy dialogues, entrepreneurship and startup support, cross-cultural exchanges, and next-generation professional networks.",
    src: "/images/programme-youth.jpg",
    alt: "Three people walking away along a tree-lined path, seen from behind",
  },
  {
    title: "Toward a greener, healthier, and more resilient future",
    points: [
      "Clean energy and green technology",
      "Climate change countermeasures and resilience",
      "Smart and sustainable cities",
      "Environmental conservation",
      "Knowledge sharing and responsible innovation",
    ],
    src: "/images/programme-green.jpg",
    alt: "Mangrove trees along still water at sunrise",
  },
];

export interface StandingGathering {
  title: string;
  summary: string;
}

export const standingGatherings: StandingGathering[] = [
  {
    title: "Youth forums and policy dialogues",
    summary:
      "Leadership training, youth forums, policy dialogues, entrepreneurship support, and next-generation professional networks.",
  },
  {
    title: "University and professional exchange",
    summary:
      "Exchanges between universities and educational institutions, scholarships, Japanese language and specialized skills, and research cooperation.",
  },
  {
    title: "Cultural and community exchange",
    summary:
      "Culture, arts, sports, and community activities that share common values and nurture enduring friendships.",
  },
];

export interface Gathering extends Picture {
  title: string;
  when: string;
  place: string;
  summary: string;
}

/** Placeholder programme. Replace when the Forum publishes its schedule. */
export const gatherings: Gathering[] = [
  {
    title: "Cultural Evening",
    when: "18 November 2026",
    place: "Dhaka",
    summary:
      "A sample evening of culture, arts, and community exchange between both countries.",
    src: "/images/event-culture.jpg",
    alt: "An outdoor courtyard with glowing lanterns and a low wooden stage",
  },
  {
    title: "Youth Leadership Forum",
    when: "12 March 2027",
    place: "Dhaka",
    summary:
      "A sample gathering for leadership training, policy dialogue, and next-generation networks.",
    src: "/images/event-forum.jpg",
    alt: "An empty meeting room with pale chairs and tall windows",
  },
  {
    title: "University Exchange Dialogue",
    when: "4 June 2027",
    place: "Tokyo",
    summary:
      "A sample dialogue for scholarships, research cooperation, and academic exchange.",
    src: "/images/event-study.jpg",
    alt: "A quiet library reading room with wooden tables and green lamps",
  },
];

export const partnership = {
  title: "A growing partnership",
  body: "Japan and Bangladesh have established a long-standing friendship built on mutual respect, trust, peace, development, and a shared dedication to human dignity. Together, both nations can build a stronger economy, deeper cultural connections, and a more inclusive, sustainable future.",
  src: "/images/partnership-dialogue.jpg",
  alt: "An empty meeting table with two cups and a closed folder by tall windows",
  with: [
    "Government agencies",
    "Diplomats and embassy officials",
    "Businesses",
    "Universities",
    "Civil society organizations",
    "Young leaders",
  ],
};

export interface BulletinItem {
  title: string;
  date: string;
  summary: string;
}

export const bulletin: BulletinItem[] = [];

export const news = {
  title: "Knowledge shared between two countries",
  body: "Research and innovation cooperation, professional networks, and knowledge sharing are part of how the Forum connects Japan and Bangladesh.",
  src: "/images/news-study.jpg",
  alt: "A quiet library aisle of wooden shelves and clothbound books",
};

export const contactEmail: string = "";

/** Set this to a form-service URL when the Forum is ready to receive notes. */
export const joinEndpoint = "";

export const joinForm = {
  submitLabel: "Share your interest",
  thanksTitle: "Thank you",
  thanksBody: "Your interest has been noted.",
  sendError: "The note could not be sent. Please try again.",
  interestGeneral: "The exchange in general",
};

export interface ImageBreak {
  src: string;
  alt: string;
  caption: string;
}

export const breakAfterProgrammes: ImageBreak = {
  src: "/images/band-water.jpg",
  alt: "White lotus flowers on a quiet pond at dusk",
  caption: "Still water, shared ground.",
};

export const breakAfterEvents: ImageBreak = {
  src: "/images/band-path.jpg",
  alt: "An empty tree-lined path in the morning",
  caption: "A path held in common.",
};

export const takePart = {
  title: "A place in the exchange",
  body: "Together with government agencies, diplomats and embassy officials, businesses, universities, civil society organizations, and young leaders, the Forum builds a new chapter of friendship, cooperation, and co-prosperity.",
  src: "/images/takepart-open.jpg",
  alt: "An open wooden doorway looking onto a green garden path",
};

export const closing = {
  title: "Together toward a stronger future",
  pair: "Japan · Bangladesh",
  body: "The Forum builds a new chapter of friendship, cooperation, and co-prosperity.",
};
