import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  useTheme,
  Paper,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { motion } from "framer-motion";

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  yearDisplay: string;
  type: string;
  description: string[];
  skills: string[];
}

const JobExperience: React.FC<{ experiences: ExperienceItem[] }> = ({
  experiences,
}) => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      {/* Section Title */}
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
          Work Experience
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

      {/* 3-Column Timeline Layout using CSS Grid */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
        }}
      >
        {experiences.map((exp, index) => (
          <Paper
            key={index}
            elevation={0}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              borderRadius: 4,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "primary.main",
                transform: "translateY(-4px)",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 12px 30px rgba(139, 92, 246, 0.2)"
                    : "0 12px 30px rgba(139, 92, 246, 0.1)",
              },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "4fr 3fr 5fr" },
                gap: { xs: 3, md: 4 },
                alignItems: "flex-start",
              }}
            >
              {/* Left Column: Role & Company */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: { xs: "1.25rem", sm: "1.4rem" },
                  }}
                >
                  {exp.title}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                  }}
                >
                  <WorkIcon fontSize="small" />
                  {exp.company}
                </Typography>

                <Chip
                  label={exp.type}
                  size="small"
                  sx={{
                    alignSelf: "flex-start",
                    mt: 0.5,
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "rgba(139, 92, 246, 0.15)"
                        : "rgba(139, 92, 246, 0.08)",
                    color: "primary.main",
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                />
              </Box>

              {/* Center Column: Year & Duration Badge */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  borderLeft: { md: "2px solid" },
                  borderColor: { md: "primary.main" },
                  pl: { md: 2.5 },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: { xs: "1.8rem", sm: "2.2rem" },
                    color: "text.primary",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {exp.yearDisplay}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {exp.duration}
                </Typography>
              </Box>

              {/* Right Column: Achievements & Bullet Points */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {exp.description.map((desc, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      fontSize: { xs: "0.9rem", sm: "0.95rem" },
                      position: "relative",
                      pl: 2,
                      "&::before": {
                        content: '"•"',
                        position: "absolute",
                        left: 0,
                        color: "primary.main",
                        fontWeight: "bold",
                      },
                    }}
                  >
                    {desc}
                  </Typography>
                ))}

                {/* Skills Chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mt: 1.5 }}>
                  {exp.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderRadius: "14px",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        borderColor: "divider",
                        "&:hover": {
                          borderColor: "primary.main",
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? "rgba(139, 92, 246, 0.1)"
                              : "rgba(139, 92, 246, 0.05)",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default JobExperience;
