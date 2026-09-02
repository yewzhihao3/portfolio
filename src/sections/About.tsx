import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import EducationTimeline from "../components/EducationTimeline";
import { SCHOOL_LOGOS } from "../utils/types";

const About = () => {

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
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
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
            About Me
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

        {/* Simple Profile Grid */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            borderRadius: 4,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            mb: 8,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "320px 1fr" },
              gap: { xs: 4, md: 5 },
              alignItems: "center",
            }}
          >
            {/* Simple Profile Image */}
            <Box
              component="img"
              src="/images/profile.jpg"
              alt="Yew Zhi Hao"
              sx={{
                width: "100%",
                maxWidth: { xs: "280px", md: "320px" },
                height: { xs: "320px", md: "380px" },
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: 3,
                mx: "auto",
                border: "1px solid",
                borderColor: "divider",
              }}
            />

            {/* Simple Bio Text */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.4rem", sm: "1.8rem" },
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "text.primary",
                }}
              >
                Hi, I'm Yew Zhi Hao
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                }}
              >
                I hold a Bachelor of Information Systems (Hons) from Universiti Tunku Abdul Rahman (UTAR) and a Diploma in Software Engineering from Asia Pacific University (APU).
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                }}
              >
                My background includes full-stack web and mobile development (React, React Native, Vue 3, Nuxt 3, TypeScript), backend API development (FastAPI, Python), database optimization with Redis, and data analytics.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.8,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                }}
              >
                I enjoy building practical applications, improving code efficiency, and exploring new technologies.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Education Timeline Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 5 },
            bgcolor: "background.paper",
            borderRadius: 4,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: { xs: "1.5rem", sm: "1.8rem" },
            }}
          >
            Education
          </Typography>

          <EducationTimeline education={education} />
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
