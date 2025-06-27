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
import { colors } from "../theme/colors";

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

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
              ? `linear-gradient(45deg, ${colors.primary.light} 30%, ${colors.primary.main} 90%)`
              : `linear-gradient(45deg, ${colors.primary.dark} 30%, ${colors.primary.main} 90%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Professional Journey
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {experiences.map((experience, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 2,
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? `0 8px 24px ${colors.shadow.dark}`
                    : `0 8px 24px ${colors.shadow.light}`,
              },
              bgcolor: "background.paper",
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
                    color: "text.secondary",
                  }}
                >
                  {desc}
                </Typography>
              ))}

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 3 }}>
                {experience.skills.map((skill, idx) => (
                  <Chip
                    key={idx}
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
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default JobExperience;
