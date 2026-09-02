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
  UTAR: "/Universiti_Tunku_Abdul_Rahman_Logo.jpg",
  APU: "/APU-Logo_Final_Vertical_V1_HR1-copy-1024x966.png",
} as const;

// Add more global interfaces here as needed
