export type Locale = "en" | "ja";

export interface NavItem {
  hash: string;
  label: string;
}

export interface Picture {
  src: string;
  alt: string;
}

export interface Slide extends Picture {
  kicker: string;
  caption: string;
}

export interface GalleryItem extends Picture {
  caption: string;
}

export interface Pillar extends Picture {
  number: string;
  title: string;
  summary: string;
}

export interface Programme extends Picture {
  title: string;
  summary?: string;
  points?: string[];
}

export interface StandingGathering {
  title: string;
  summary: string;
}

export interface Gathering extends Picture {
  title: string;
  when: string;
  place: string;
  summary: string;
}

export interface BulletinItem {
  title: string;
  date: string;
  summary: string;
}

export interface ImageBreak {
  src: string;
  alt: string;
  caption: string;
}

export interface SectionHeading {
  kicker: string;
  title: string;
}

export interface SiteContent {
  locale: Locale;
  forumName: string;
  tagline: string;
  year: number;
  description: string;
  brandMain: string;
  brandSub: string;
  nav: NavItem[];
  chrome: {
    skip: string;
    menu: string;
    close: string;
    primaryNav: string;
    footerNav: string;
    language: string;
    languageEnglish: string;
    languageJapanese: string;
    previousPhoto: string;
    nextPhoto: string;
  };
  slides: Slide[];
  galleryHeading: SectionHeading;
  gallery: GalleryItem[];
  hero: {
    lead: string;
    ctaHash: string;
    ctaLabel: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string;
    src: string;
    alt: string;
  };
  purpose: {
    kicker: string;
    title: string;
    missionLabel: string;
    visionLabel: string;
    mission: string;
    missionImage: Picture;
    vision: string;
    visionImage: Picture;
  };
  pillarsHeading: SectionHeading;
  pillars: Pillar[];
  programmesHeading: SectionHeading;
  programmes: Programme[];
  gatheringsHeading: SectionHeading & { body: string };
  standingGatherings: StandingGathering[];
  gatherings: Gathering[];
  partnership: {
    kicker: string;
    title: string;
    body: string;
    src: string;
    alt: string;
    with: string[];
  };
  bulletin: BulletinItem[];
  news: {
    kicker: string;
    title: string;
    body: string;
    src: string;
    alt: string;
  };
  contactEmail: string;
  joinEndpoint: string;
  joinForm: {
    submitLabel: string;
    thanksTitle: string;
    thanksBody: string;
    sendError: string;
    interestGeneral: string;
    nameLabel: string;
    emailLabel: string;
    affiliationLabel: string;
    interestLabel: string;
    interestPlaceholder: string;
    purposeLabel: string;
  };
  breakAfterProgrammes: ImageBreak;
  breakAfterEvents: ImageBreak;
  takePart: {
    kicker: string;
    title: string;
    body: string;
    src: string;
    alt: string;
  };
  closing: {
    title: string;
    pair: string;
    body: string;
  };
}

export type CopyProps = {
  copy: SiteContent;
};
