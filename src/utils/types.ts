export interface Course {
  name: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  courses: string[];
  logoUrl: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Language {
  name: string;
  proficiency: number;
}
// School logo URLs
export const SCHOOL_LOGOS = {
  UTAR: "https://upload.wikimedia.org/wikipedia/en/f/f1/Universiti_Tunku_Abdul_Rahman_Logo.jpg",
  APU: "https://ican-elementor.s3.amazonaws.com/uploads/elementor/thumbs/apu-pugiabkejjjrb3k2wtckud15pgkxzudcyar2ax2oeo.png",
} as const;

// Add more global interfaces here as needed
