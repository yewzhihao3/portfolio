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
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Projects = () => {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const projects = [
    {
      title: "Email Complaints Automation System",
      description:
        "An intelligent Python automation system designed to handle customer complaint emails by extracting key details, identifying root causes, and suggesting appropriate solutions. The system supports keyword detection, automated tagging, and structured response generation. It streamlines support workflows and can be integrated with internal ticketing or knowledge base tools.",
      technologies: ["Python", "Pandas", "openai", "matplotlib", "NumPy"],
      github: "https://github.com/yewzhihao3/emailComplainAutomation",
      image: "/images/email-automation.png",
    },
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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
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
    <Box sx={{ py: 12, minHeight: "100vh", bgcolor: "background.default" }}>
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
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

        <Box sx={{ position: "relative" }}>
          {/* Left Arrow */}
          <IconButton
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
            sx={{
              position: "absolute",
              left: { xs: -8, sm: -12, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "background.paper",
              boxShadow: theme.shadows[2],
              width: { xs: 32, sm: 40, md: 48 },
              height: { xs: 32, sm: 40, md: 48 },
              "&:hover": {
                bgcolor: "background.paper",
              },
              "&.Mui-disabled": {
                opacity: 0,
              },
            }}
          >
            <ArrowBackIosNewIcon
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" } }}
            />
          </IconButton>

          {/* Right Arrow */}
          <IconButton
            onClick={() => handleScroll("right")}
            disabled={currentIndex === projects.length - 1}
            sx={{
              position: "absolute",
              right: { xs: -8, sm: -12, md: -20 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "background.paper",
              boxShadow: theme.shadows[2],
              width: { xs: 32, sm: 40, md: 48 },
              height: { xs: 32, sm: 40, md: 48 },
              "&:hover": {
                bgcolor: "background.paper",
              },
              "&.Mui-disabled": {
                opacity: 0,
              },
            }}
          >
            <ArrowForwardIosIcon
              sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" } }}
            />
          </IconButton>

          {/* Scrollable Container */}
          <Box
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
            sx={{
              display: "flex",
              overflowX: "hidden",
              scrollSnapType: "x mandatory",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
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
                  padding: "0 4px",
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
                      height: { xs: "250px", sm: "300px", md: "400px" },
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
                      top: { xs: 16, md: 32 },
                      right: { xs: 16, md: 32 },
                      fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
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
                      p: { xs: 3, sm: 4, md: 5 },
                      pb: { xs: 2, sm: 2.5, md: 3 },
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        fontSize: {
                          xs: "1.5rem",
                          sm: "1.75rem",
                          md: "2.25rem",
                        },
                        lineHeight: 1.2,
                        mb: 2,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.8,
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                        mb: 3,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: 1, sm: 1.5, md: 2 },
                        mt: 3,
                      }}
                    >
                      {project.technologies.map((tech, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            px: { xs: 1.5, sm: 2, md: 2.5 },
                            py: { xs: 0.5, sm: 0.75, md: 1 },
                            bgcolor: "background.default",
                            borderRadius: 2,
                            color: "primary.main",
                            fontWeight: 500,
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.85rem",
                              md: "0.95rem",
                            },
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{
                      p: { xs: 3, sm: 4, md: 5 },
                      pt: { xs: 2, sm: 2.5, md: 3 },
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
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                      }}
                    >
                      View on GitHub
                    </Button>
                  </CardActions>
                </Paper>
              </Box>
            ))}
          </Box>

          {/* Pagination Dots */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 0.75, sm: 1 },
              mt: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {projects.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: { xs: 8, sm: 10, md: 12 },
                  height: { xs: 8, sm: 10, md: 12 },
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
