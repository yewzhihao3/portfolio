import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EducationTimeline from "../components/EducationTimeline";
import Skills from "../components/Skills";
import { SCHOOL_LOGOS } from "../utils/types";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const education = [
    {
      school: "Universiti Tunku Abdul Rahman (Kampar)",
      degree: "Bachelor of Information Systems (Hons)",
      period: "October 2020 - June 2025",
      logoUrl: SCHOOL_LOGOS.UTAR,
      courses: [
        "Data Analysis",
        "Web Development",
        "Object-Oriented Programming with Java",
        "Database Management Systems",
        "Mobile Application Development",
        "Systems Analysis and Design",
        "Enterprise Systems Development",
      ],
    },
    {
      school: "Asia Pacific University of Technology and Innovation",
      degree: "Diploma in Software Engineering",
      period: "August 2018 - July 2020",
      logoUrl: SCHOOL_LOGOS.APU,
      courses: [
        "Web Development",
        "Object-Oriented Programming with Java",
        "Visual Basic",
        "Database Systems",
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            fontWeight: 300,
            mb: { xs: 4, sm: 6 },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(45deg, #ba68c8 30%, #9c27b0 90%)"
                : "linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            "&::after": {
              content: '""',
              display: "block",
              width: "60px",
              height: "3px",
              bgcolor: "primary.main",
              margin: "20px auto 0",
            },
          }}
        >
          About Me
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, sm: 4, md: 6 },
            mx: "auto",
            maxWidth: "100%",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              bgcolor: "background.paper",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              overflow: "hidden",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: theme.shadows[4],
              },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 500,
                textAlign: "center",
                color: "primary.main",
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                mb: { xs: 2, sm: 3, md: 4 },
              }}
            >
              Education Journey
            </Typography>

            <Box
              sx={{
                maxWidth: "100%",
                overflowX: "auto",
                overflowY: "hidden",
                pb: 1,
                "&::-webkit-scrollbar": {
                  height: "6px",
                },
                "&::-webkit-scrollbar-track": {
                  bgcolor: "background.default",
                  borderRadius: "3px",
                },
                "&::-webkit-scrollbar-thumb": {
                  bgcolor: "primary.main",
                  borderRadius: "3px",
                  opacity: 0.7,
                },
              }}
            >
              <Box
                sx={{
                  minWidth: isMobile ? "600px" : "auto",
                  px: { xs: 1, sm: 2 },
                }}
              >
                <EducationTimeline education={education} />
              </Box>
            </Box>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              bgcolor: "background.paper",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              overflow: "hidden",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: theme.shadows[4],
              },
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 500,
                textAlign: "center",
                color: "primary.main",
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                mb: { xs: 2, sm: 3, md: 4 },
              }}
            >
              Technical Skills
            </Typography>
            <Skills />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
