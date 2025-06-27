import React from "react";
import { Typography, Box, Paper, Rating, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { SkillCategory, Language } from "../utils/types";
import { colors } from "../theme/colors";

const Skills = () => {
  const theme = useTheme();

  const technicalSkills: SkillCategory[] = [
    {
      name: "Proficient",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "Vue 3",
        "Next.js",
        "NuxtJS",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "MySQL",
        "Data Analytics",
        "React Native",
      ],
    },
    {
      name: "Familiar",
      skills: [
        "Git",
        "MS Excel",
        "Java",
        "C++",
        "UI/UX Design",
        "Performance Optimization",
        "Frontend Development",
        "Responsive Design",
        "Debugging",
      ],
    },
  ];

  const languages: Language[] = [
    { name: "English", proficiency: 5 },
    { name: "Bahasa Melayu (Malay)", proficiency: 4 },
    { name: "Mandarin", proficiency: 3 },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {/* Technical Skills Section */}
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 500,
            color: "primary.main",
            mb: 3,
          }}
        >
          Technical Skills
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {technicalSkills.map((category) => (
            <Box key={category.name}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  color: "text.secondary",
                }}
              >
                {category.name}:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        px: 3,
                        py: 1.5,
                        bgcolor: "background.paper",
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "primary.main",
                          transform: "translateY(-2px)",
                          boxShadow:
                            theme.palette.mode === "dark"
                              ? `0 4px 20px ${colors.shadow.dark}`
                              : `0 4px 20px ${colors.shadow.light}`,
                        },
                      }}
                    >
                      <Typography variant="body2">{skill}</Typography>
                    </Paper>
                  </motion.div>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Languages Section */}
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 500,
            color: "primary.main",
            mb: 3,
          }}
        >
          Languages
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {languages.map((language) => (
            <Box
              key={language.name}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                bgcolor: "background.paper",
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="body1">{language.name}</Typography>
              <Rating
                value={language.proficiency}
                readOnly
                max={5}
                sx={{
                  "& .MuiRating-icon": {
                    color: "primary.main",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
