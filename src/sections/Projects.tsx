import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import type { GridProps } from "@mui/material";

const Projects = () => {
  const theme = useTheme();

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React, TypeScript, and Material-UI. Features smooth animations and dark mode support.",
      image: "https://via.placeholder.com/400x250",
      technologies: ["React", "TypeScript", "Material-UI"],
      github: "#",
      demo: "#",
    },
    {
      title: "Project Management System",
      description:
        "A comprehensive project management system with task tracking, team collaboration, and progress monitoring features.",
      image: "https://via.placeholder.com/400x250",
      technologies: ["Java", "MySQL", "Spring Boot"],
      github: "#",
      demo: "#",
    },
    {
      title: "Mobile Learning App",
      description:
        "An educational mobile application designed to help students learn programming concepts through interactive exercises.",
      image: "https://via.placeholder.com/400x250",
      technologies: ["React Native", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <Box sx={{ py: 12, minHeight: "100vh", bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
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
            My Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid
              item
              key={project.title}
              xs={12}
              md={4}
              component="div"
              {...({} as GridProps)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}
                    >
                      {project.technologies.map((tech) => (
                        <Typography
                          key={tech}
                          variant="caption"
                          sx={{
                            px: 1,
                            py: 0.5,
                            bgcolor: "background.default",
                            borderRadius: 1,
                            color: "primary.main",
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                    >
                      Code
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<LaunchIcon />}
                      href={project.demo}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
