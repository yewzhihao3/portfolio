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
  CardMedia,
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
      title: "PetPaw - Comprehensive Pet Care Platform",
      description:
        "A feature-rich mobile application built with React Native that serves as an all-in-one pet care solution. Features include pet hotel booking, grooming services, pet taxi, interactive blog platform, personal pet diary, and a dedicated e-commerce marketplace. The app integrates multiple payment gateways, real-time booking systems, and location-based services to provide a seamless experience for pet owners.",
      technologies: [
        "React Native",
        "Node.js",
        "Python FastAPI",
        "MYSQL",
        "Google Maps API",
      ],
      github: "https://github.com/yewzhihao3/PetPaw-React-Native",
      image: "/images/PetPaw.png",
    },
    {
      title: "Electric Bill Calculator",
      description:
        "An interactive Python application for calculating and analyzing monthly electric bills. Features include consumption-based tariff calculation, data persistence using CSV, monthly bill tracking, and data visualization with matplotlib. The system implements a multi-tier pricing structure and includes a green energy tariff calculator.",
      technologies: [
        "Python",
        "Matplotlib",
        "CSV Data Management",
        "Data Visualization",
      ],
      github: "https://github.com/yewzhihao3/Side-Projects",
      image: "/images/eleteric.webp",
    },
    {
      title: "Python Banking System",
      description:
        "A robust banking system implementation featuring account management, transactions, and security measures. Includes features for deposits, withdrawals, transfers, and account statement generation with proper error handling and data persistence.",
      technologies: ["Python", "Object-Oriented Programming"],
      github: "https://github.com/yewzhihao3/Side-Projects",
      image: "/images/bank.jpg",
    },
    {
      title: "Bike Sales Analytics Dashboard",
      description:
        "A comprehensive data analytics project focused on bike sales analysis. Developed interactive dashboards to visualize sales trends, customer demographics, and revenue metrics. Implemented predictive analytics for sales forecasting.",
      technologies: ["Python", "Pandas", "Data Visualization"],
      github: "https://github.com/yewzhihao3/Data-analytics",
      image: "/images/bike_sales.png",
    },
    {
      title: "Online Pharmacy Management System",
      description:
        "A web-based pharmacy management system that handles inventory, prescriptions, and sales. Features include medication tracking, prescription validation, stock management, and automated reordering system.",
      technologies: ["Python", "Object-Oriented Programming"],
      github: "https://github.com/yewzhihao3/Side-Projects",
      image: "/images/pharmacy.jpg",
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
                    <CardMedia
                      component="img"
                      height="400"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: "contain",
                        bgcolor: "background.default",
                        p: 2,
                        "&:hover": {
                          transform: "scale(1.02)",
                          transition: "transform 0.3s ease-in-out",
                        },
                      }}
                    />
                    <Box
                      className="project-number"
                      sx={{
                        position: "absolute",
                        top: 32,
                        right: 32,
                        fontSize: "6rem",
                        fontWeight: 700,
                        opacity: 0.06,
                        lineHeight: 1,
                        transition: "color 0.3s ease",
                        color: "#fff",
                        zIndex: 1,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Box>
                    <CardContent
                      sx={{
                        p: 5,
                        pb: 3,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: "2rem", md: "2.25rem" },
                          lineHeight: 1.2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.8,
                          fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 2,
                          mt: "auto",
                        }}
                      >
                        {project.technologies.map((tech) => (
                          <Typography
                            key={tech}
                            variant="body2"
                            sx={{
                              px: 2.5,
                              py: 1,
                              bgcolor: "background.default",
                              borderRadius: 2,
                              color: "primary.main",
                              fontWeight: 500,
                              fontSize: "0.95rem",
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions
                      sx={{
                        p: 5,
                        pt: 3,
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
                          py: 2,
                          fontSize: "1.1rem",
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
