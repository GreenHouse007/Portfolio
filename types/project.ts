export type HubItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  icon: string;
  accentColor?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  cover: string;
  links: {
    demo: string | null;
    code?: string | null;
    caseStudy?: string | null;
  };
};
