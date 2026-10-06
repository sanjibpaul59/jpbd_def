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
  { href: "/#gatherings", label: "Gatherings" },
  { href: "/#partnership", label: "Partnership" },
  { href: "/#news", label: "News" },
  { href: "/#take-part", label: "Take part" },
];

export const hero = {
  lead: "Building a stronger, richer, and more sustainable partnership between Japan and Bangladesh.",
  ctaHref: "/#pillars",
  ctaLabel: "The six pillars",
};

export const about = {
  title: "A bridge connecting two countries",
  body: "The Japan Bangladesh Development Exchange Forum is a non-profit human exchange organization dedicated to strengthening friendship and cooperation between Japan and Bangladesh. It connects governments, businesses, universities, research institutions, civil society, and younger generations to create opportunities for cooperation that foster mutual understanding and long-term development.",
};

export const purpose = {
  title: "Turning friendship into concrete action",
  mission:
    "To promote enduring friendship and cooperation between both nations through trade, education, culture, innovation, and people-to-people exchanges.",
  vision:
    "To aim for a future where Japan and Bangladesh grow together as trusted partners, achieving inclusive and sustainable co-prosperity for future generations.",
};

export interface Pillar {
  number: string;
  title: string;
  summary: string;
}

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Economic Cooperation",
    summary: "Trade, investment, and business collaboration.",
  },
  {
    number: "02",
    title: "Education and Human Resource Development",
    summary: "Scholarships, skill development, and academic exchanges.",
  },
  {
    number: "03",
    title: "Cultural and People-to-People Exchange",
    summary: "Exchanges that respect culture and diversity.",
  },
  {
    number: "04",
    title: "Technology and Innovation",
    summary: "Digitalization, green technology, and startups.",
  },
  {
    number: "05",
    title: "Youth Leadership",
    summary: "Fostering next-generation leaders.",
  },
  {
    number: "06",
    title: "Sustainable Development",
    summary: "An environmentally conscious, healthy, and resilient society.",
  },
];

export interface Programme {
  title: string;
  summary?: string;
  points?: string[];
}

export const programmes: Programme[] = [
  {
    title: "Connecting hearts and enriching lives",
    summary:
      "Through culture, arts, sports, community activities, and educational exchanges, the Forum shares common values between both countries, deepens interpersonal connections, and nurtures enduring friendships.",
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
  },
  {
    title: "Nurturing the next generation of leaders",
    summary:
      "Younger generations play a vital role in shaping the future of Japan–Bangladesh relations. The Forum promotes leadership training, youth forums and policy dialogues, entrepreneurship and startup support, cross-cultural exchanges, and next-generation professional networks.",
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

export interface Gathering {
  title: string;
  when: string;
  place: string;
  summary: string;
}

export const gatherings: Gathering[] = [];

export const partnership = {
  title: "A growing partnership",
  body: "Japan and Bangladesh have established a long-standing friendship built on mutual respect, trust, peace, development, and a shared dedication to human dignity. Together, both nations can build a stronger economy, deeper cultural connections, and a more inclusive, sustainable future.",
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
};

export const contactEmail: string = "";

export const takePart = {
  title: "A place in the exchange",
  body: "Together with government agencies, diplomats and embassy officials, businesses, universities, civil society organizations, and young leaders, the Forum builds a new chapter of friendship, cooperation, and co-prosperity.",
};

export const closing = {
  title: "Together toward a stronger future",
  pair: "Japan · Bangladesh",
  body: "The Forum builds a new chapter of friendship, cooperation, and co-prosperity.",
};
