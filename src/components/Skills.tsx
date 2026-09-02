import React from "react";
import { Container, Typography, Box, Paper, useTheme, Rating } from "@mui/material";
import { motion } from "framer-motion";

const Skills = () => {
  const theme = useTheme();

  const skillGroups = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "C#"],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        "React Native",
        "React.js",
        "Vue 3",
        "Nuxt 3",
        "FastAPI",
        "Django",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        "Git & GitHub",
        "MySQL",
        "Redis",
        "MS Excel",
        "Data Mining",
        "Data Visualization",
        "Unit Testing",
        "Telegram Bot API",
      ],
    },
  ];

  const languages = [
    { name: "English", proficiency: 5, detail: "Full Professional / Working" },
    { name: "Bahasa Melayu (Malay)", proficiency: 4, detail: "Professional Competency" },
    { name: "Mandarin", proficiency: 3, detail: "Conversational Competency" },
  ];

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "background.default",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Skills &amp; Technologies
          </Typography>
          <Box
            sx={{
              width: "50px",
              height: "3px",
              borderRadius: "2px",
              bgcolor: "primary.main",
              mx: "auto",
              mt: 1.5,
            }}
          />
        </Box>

        {/* Tech Skill Badges Grid using CSS Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mb: 8,
          }}
        >
          {skillGroups.map((group, gIdx) => (
            <Paper
              key={gIdx}
              elevation={0}
              component={motion.div}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 4,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "primary.main",
                }}
              >
                {group.category}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2 }}>
                {group.skills.map((skill, sIdx) => (
                  <Paper
                    key={sIdx}
                    elevation={0}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: "14px",
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.03)",
                      border: "1px solid",
                      borderColor: "divider",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "primary.main",
                        color: "primary.main",
                        transform: "translateY(-2px)",
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "rgba(139, 92, 246, 0.15)"
                            : "rgba(139, 92, 246, 0.08)",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {skill}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Languages Proficiency Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              fontFamily: "'Space Grotesk', sans-serif",
              textAlign: "center",
            }}
          >
            Language Proficiencies
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {languages.map((lang, idx) => (
              <Box
                key={idx}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.03)"
                      : "rgba(0, 0, 0, 0.02)",
                  border: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {lang.name}
                </Typography>

                <Rating
                  value={lang.proficiency}
                  readOnly
                  max={5}
                  sx={{
                    "& .MuiRating-icon": {
                      color: "primary.main",
                    },
                  }}
                />

                <Typography variant="caption" color="text.secondary">
                  {lang.detail}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Skills;
