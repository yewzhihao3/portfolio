import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  CardContent,
  CardActions,
  Button,
  useTheme,
  Paper,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { fadeInUp, staggerContainer, scaleIn } from "../utils/animation";

const Projects = () => {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React, TypeScript, and Material-UI. Features smooth animations and dark mode support.",
      technologies: ["React", "TypeScript", "Material-UI"],
      github: "#",
    },
    {
      title: "Project Management System",
      description:
        "A comprehensive project management system with task tracking, team collaboration, and progress monitoring features.",
      technologies: ["Java", "MySQL", "Spring Boot"],
      github: "#",
    },
    {
      title: "Mobile Learning App",
      description:
        "An educational mobile application designed to help students learn programming concepts through interactive exercises.",
      technologies: ["React Native", "Node.js", "MongoDB"],
      github: "#",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, currentIndex - 1)
        : Math.min(projects.length - 1, currentIndex + 1);

    setCurrentIndex(newIndex);

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: scrollAmount * newIndex,
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: scrollAmount * index,
        behavior: "smooth",
      });
    }
  };

  // Update currentIndex on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScrollEnd = () => {
      const newIndex = Math.round(container.scrollLeft / container.clientWidth);
      setCurrentIndex(newIndex);
    };

    container.addEventListener("scrollend", handleScrollEnd);
    return () => container.removeEventListener("scrollend", handleScrollEnd);
  }, []);

  return (
    <Box
      component={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{ py: 12, minHeight: "100vh", bgcolor: "background.default" }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <motion.div variants={fadeInUp}>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              fontWeight: 300,
              mb: 8,
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

        <Box sx={{ position: "relative" }}>
          {/* Left Arrow */}
          <IconButton
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
            sx={{
              position: "absolute",
              left: { xs: -16, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "background.paper",
              boxShadow: theme.shadows[2],
              "&:hover": {
                bgcolor: "background.paper",
              },
              "&.Mui-disabled": {
                opacity: 0,
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={() => handleScroll("right")}
            disabled={currentIndex === projects.length - 1}
            sx={{
              position: "absolute",
              right: { xs: -16, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "background.paper",
              boxShadow: theme.shadows[2],
              "&:hover": {
                bgcolor: "background.paper",
              },
              "&.Mui-disabled": {
                opacity: 0,
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Scrollable Container */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: "flex",
              overflowX: "hidden",
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE and Edge
            }}
          >
            {projects.map((project, index) => (
              <Box
                key={project.title}
                sx={{
                  minWidth: "100%",
                  scrollSnapAlign: "start",
                }}
              >
                <motion.div
                  variants={scaleIn}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    padding: "0 4px", // Small padding to prevent box-shadow cut-off
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      bgcolor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 3,
                      overflow: "hidden",
                      position: "relative",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: theme.shadows[4],
                        "& .project-number": {
                          color: "primary.main",
                        },
                      },
                    }}
                  >
                    <Box
                      className="project-number"
                      sx={{
                        position: "absolute",
                        top: 24,
                        right: 24,
                        fontSize: "5rem",
                        fontWeight: 700,
                        opacity: 0.06,
                        lineHeight: 1,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Box>
                    <CardContent
                      sx={{
                        p: 4,
                        pb: 2,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "1.75rem", md: "2rem" },
                          lineHeight: 1.2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1.5,
                          mt: "auto",
                        }}
                      >
                        {project.technologies.map((tech) => (
                          <Typography
                            key={tech}
                            variant="body2"
                            sx={{
                              px: 2,
                              py: 0.75,
                              bgcolor: "background.default",
                              borderRadius: 2,
                              color: "primary.main",
                              fontWeight: 500,
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        p: 4,
                        pt: 2,
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        fullWidth
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          py: 1.5,
                          fontSize: "1rem",
                        }}
                      >
                        View on GitHub
                      </Button>
                    </CardActions>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>

          {/* Pagination Dots */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 4,
            }}
          >
            {projects.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor: currentIndex === index ? "primary.main" : "divider",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
