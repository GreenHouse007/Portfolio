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
