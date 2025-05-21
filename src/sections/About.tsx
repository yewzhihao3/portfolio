import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import EducationTimeline from "../components/EducationTimeline";
import Skills from "../components/Skills";
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
    <Box sx={{ py: 8, minHeight: "90vh" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 300,
            mb: 6,
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

        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: "background.paper",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 500,
                mx: 4,
                textAlign: "center",
                color: "primary.main",
              }}
            >
              Education Journey
            </Typography>

            <EducationTimeline education={education} />
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: "background.paper",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Skills />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
