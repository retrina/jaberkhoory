export type Language = 'fa' | 'en';

export interface ProposalSection {
  id: string;
  title: {
    fa: string;
    en: string;
  };
  subtitle?: {
    fa: string;
    en: string;
  };
  intro?: {
    fa: string;
    en: string;
  };
  items: {
    fa: string;
    en: string;
    description?: {
      fa: string;
      en: string;
    };
  }[];
  categories?: {
    title: { fa: string; en: string };
    icon?: string;
    intro?: { fa: string; en: string };
    points: { fa: string; en: string }[];
    benefits?: { fa: string; en: string }[];
  }[];
  vision?: {
    title: { fa: string; en: string };
    content: { fa: string; en: string };
  };
  strategicVision?: {
    title: { fa: string; en: string };
    content: { fa: string; en: string };
  };
  steps?: { fa: string; en: string }[];
  segments?: {
    title: { fa: string; en: string };
    items: string[];
  };
  management?: {
    title: { fa: string; en: string };
    points: { fa: string; en: string }[];
    outcome: { fa: string; en: string };
  };
  closing?: {
    fa: string;
    en: string;
  };
}

export interface Translation {
  entryTitle: string;
  enterButton: string;
  proposalTitle: string;
  switchLanguage: string;
  backToTop: string;
}
