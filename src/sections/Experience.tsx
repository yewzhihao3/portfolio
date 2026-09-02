import React from "react";
import { Box } from "@mui/material";
import JobExperience, { ExperienceItem } from "../components/JobExperience";

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Junior Software Developer",
      company: "Apexnova",
      duration: "Nov 2025 – Apr 2026",
      yearDisplay: "2025–2026",
      type: "Full-Time",
      description: [
        "Reduced page load time by ~90% (20s → 1–2s) by restructuring database schemas and implementing Redis caching with a cache warming strategy in a Python-based web system.",
        "Improved data processing accuracy and eliminated duplicate records by ~95% by developing an Android data extraction system using Kotlin and TypeScript (backend), applying keyword filtering and SBN keys validation.",
        "Enhanced data reliability and automation efficiency by ~40% by handling unstructured real-world data and integrating Telegram bots for daily logs and automated alerts.",
      ],
      skills: [
        "Python",
        "Redis",
        "Kotlin",
        "TypeScript",
        "Android",
        "Telegram Bot API",
        "Database Architecture",
        "Automation",
      ],
    },
    {
      title: "Front-end Web Developer Intern",
      company: "Vilor Berhad",
      duration: "Jan 2025 – Jun 2025",
      yearDisplay: "2025",
      type: "Internship",
      description: [
        "Developed and maintained admin & customer web portals using Vue 3, Nuxt 3, and TypeScript, refactoring core components to reduce load times by 40% and boost system stability by 35%.",
        "Upgraded the official website from Version 2 to Version 3 for both admin and customer portals, enhancing UI/UX with responsive design resulting in a 60% increase in user interaction.",
        "Debugged and resolved critical frontend issues to ensure seamless customer experience, boosting overall platform reliability by 35%.",
      ],
      skills: [
        "Vue 3",
        "Nuxt 3",
        "TypeScript",
        "Frontend Engineering",
        "UI/UX Design",
        "Performance Optimization",
        "Responsive Design",
      ],
    },
    {
      title: "Marketing Assistant & Data Analyst",
      company: "Comfort Rubber Glove Sdn Bhd",
      duration: "2022 – 2022",
      yearDisplay: "2022",
      type: "Contract",
      description: [
        "Specialized in data management and analytics, transforming raw operational datasets into actionable campaign insights using MS Excel and Python.",
        "Developed data cleaning, sorting, and validation workflows ensuring data integrity for marketing metrics.",
        "Self-taught Python scripts to automate repetitive data processing tasks, significantly improving workflow efficiency.",
      ],
      skills: [
        "Data Analytics",
        "MS Excel",
        "Python",
        "Data Visualization",
        "Data Cleaning",
        "Workflow Automation",
      ],
    },
  ];

  return (
    <Box component="section" id="experience" sx={{ bgcolor: "background.default" }}>
      <JobExperience experiences={experiences} />
    </Box>
  );
};

export default Experience;
