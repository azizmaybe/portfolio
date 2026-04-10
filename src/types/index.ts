export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  logoPath: string; // e.g. "/assets/companies/dalinovate.svg"
  highlights: string[];
}

export interface Skill {
  name: string;
  iconPath?: string; // e.g. "/assets/tech/flutter.svg"
  simpleIconSlug?: string; // fallback: simple-icons slug e.g. "flutter"
  category: "Language" | "Tool" | "Database" | "Framework";
}

export interface Project {
  title: string;
  description: string;
  imagePath: string; // e.g. "/assets/apps/app-blaze.png"
  techTags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  logoPath?: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  languages: string[];
  socials: {
    linkedin: string;
    github: string;
    email: string;
  };
  avatarPath: string;
}
