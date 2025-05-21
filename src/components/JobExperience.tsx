import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  useTheme,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animation";

interface JobExperienceProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  skills: string[];
}

const JobExperience: React.FC<{ experiences: JobExperienceProps[] }> = ({
  experiences,
}) => {
  const theme = useTheme();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const skillsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillChipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        component={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={fadeInUp}>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              fontWeight: "bold",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(45deg, #ba68c8 30%, #9c27b0 90%)"
                  : "linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Professional Journey
          </Typography>
        </motion.div>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {experiences.map((experience, index) => (
            <Card
              component={motion.div}
              variants={cardVariants}
              key={index}
              sx={{
                borderRadius: 2,
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 8px 24px rgba(0,0,0,0.3)"
                      : "0 8px 24px rgba(0,0,0,0.1)",
                },
                bgcolor: theme.palette.background.paper,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}
                >
                  <WorkIcon color="primary" />
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: "bold" }}
                  >
                    {experience.title}
                  </Typography>
                </Box>

                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{ mb: 1, fontWeight: "medium" }}
                >
                  {experience.company}
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  {experience.duration}
                </Typography>

                {experience.description.map((desc, idx) => (
                  <Typography
                    key={idx}
                    variant="body1"
                    sx={{
                      mb: 2,
                      lineHeight: 1.7,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {desc}
                  </Typography>
                ))}

                <Box
                  component={motion.div}
                  variants={skillsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3 }}
                >
                  {experience.skills.map((skill, idx) => (
                    <motion.div key={idx} variants={skillChipVariants}>
                      <Chip
                        label={skill}
                        color="primary"
                        variant="outlined"
                        sx={{
                          borderRadius: "16px",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.main + "1A",
                          },
                        }}
                      />
                    </motion.div>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default JobExperience;
