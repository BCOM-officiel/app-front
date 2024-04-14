export interface Card {
  id: number;
  firstname: string;
  lastname: string;
  jobs: any; // Change 'any' to the appropriate type if 'jobs' should have a specific type
  places: {
    id: number;
    name: string;
  }[];
}

export interface Headline {
  id: number;
  title: string;
  subtitle: string | null;
  picture: Picture;
}

export interface Picture {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: ImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any | null; // Change 'any' to the appropriate type if needed
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Social {
  id: number;
  link: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
}

export interface PortfolioItem {
  id: number;
  link: string;
  description: string | null;
  image: Picture;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  about: string;
  card: Card;
  headline: Headline;
  socials: Social[];
  skills: Skill[];
  portfolio: PortfolioItem[];
}

export interface Profile {
  id: number;
  attributes: Attributes;
}
