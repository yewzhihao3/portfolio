import React from "react";
import { Box } from "@mui/material";
import JobExperience from "../components/JobExperience";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Vilor Berhad",
      duration: "Jan 2025 - Jun 2025",
      description: [
        "Developed and maintained web applications for both admin and customer interfaces using Vue 3, NuxtJS, and TypeScript.",
        "Optimized frontend performance, reducing load times by 40% through code refactoring and lazy loading techniques.",
        "Improved UI/UX by implementing responsive designs, enhancing user engagement by 60%.",
        "Debugged and resolved frontend issues, improving system stability by 35%.",
      ],
      skills: [
        "Vue 3",
        "NuxtJS",
        "TypeScript",
        "Frontend Development",
        "UI/UX Design",
        "Performance Optimization",
        "Responsive Design",
        "Debugging",
      ],
    },
    {
      title: "Marketing Assistant",
      company: "Comfort Rubber Glove Sdn Bhd",
      duration: "2022 - 2022",
      description: [
        "Specialized in data management and analysis, focusing on transforming raw data into actionable insights using MS Excel and Python.",
        "Developed expertise in data cleaning and sorting techniques, ensuring data accuracy and reliability for marketing campaigns.",
        "Created comprehensive data visualizations that helped improve decision-making processes and campaign effectiveness.",
        "Self-taught Python programming to automate repetitive data processing tasks, significantly improving workflow efficiency.",
        "Collaborated with marketing team members to identify trends and patterns in customer behavior through data analysis.",
      ],
      skills: [
        "Data Analysis",
        "MS Excel",
        "Python",
        "Data Visualization",
        "Data Cleaning",
        "Data Sorting",
        "Marketing Analytics",
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      <JobExperience experiences={experiences} />
    </Box>
  );
};

export default Experience;
