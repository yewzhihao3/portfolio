import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EducationTimeline from "../components/EducationTimeline";
import { SCHOOL_LOGOS } from "../utils/types";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Java",
    "HTML/CSS",
    "SQL",
    "Git",
    "Object-Oriented Programming",
    "Web Development",
    "Database Management",
    "Systems Analysis",
    "Mobile Development",
  ];

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
                  textAlign: "center",
                  color: "primary.main",
                  mb: 4,
                }}
              >
                Technical Skills
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  mt: 3,
                  justifyContent: "center",
                }}
              >
                {skills.map((skill) => (
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
                        bgcolor: "background.default",
                        border: "2px solid",
                        borderColor: "primary.main",
                        borderRadius: 2,
                        color: "text.primary",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "white",
                          transform: "translateY(-4px)",
                          boxShadow: (theme) =>
                            `0 8px 24px ${theme.palette.primary.main}25`,
                        },
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        {skill}
                      </Typography>
                    </Paper>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
