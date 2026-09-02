import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Chip,
  useTheme,
  CardMedia,
  Tabs,
  Tab,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      number: "01",
      title: "Pet Care Mobile Application",
      category: "Full-Stack & Mobile",
      categoryKey: "mobile",
      description:
        "Final Year Project: A mobile application built with React Native for pet care management, including booking services, pet health tracking, personal diary, and e-commerce marketplace integrated with FastAPI and MySQL backend.",
      technologies: ["React Native", "React", "FastAPI", "MySQL", "Node.js", "Google Maps API"],
      github: "https://github.com/yewzhihao3/PetPaw-React-Native",
      image: "/images/PetPaw.png",
      date: "2024–2025",
    },
    {
      number: "02",
      title: "Email Complaints Automation System",
      category: "AI & Automation",
      categoryKey: "automation",
      description:
        "A Python automation tool that extracts complaint details from emails, classifies root causes using OpenAI API, generates structured response suggestions, and provides analytics charts.",
      technologies: ["Python", "OpenAI API", "Pandas", "Matplotlib", "NumPy"],
      github: "https://github.com/yewzhihao3/emailComplainAutomation",
      image: "/images/email-automation.png",
      date: "2025",
    },
    {
      number: "03",
      title: "Bike Sales Analytics Dashboard",
      category: "Data Analytics",
      categoryKey: "analytics",
      description:
        "A data analytics project focused on analyzing bike sales data. Includes interactive visualizations for customer demographics, regional sales trends, revenue metrics, and sales forecasting.",
      technologies: ["Python", "Pandas", "Matplotlib", "Data Visualization", "Jupyter"],
      github: "https://github.com/yewzhihao3/Data-analytics",
      image: "/images/bike_sales.png",
      date: "2023",
    },
    {
      number: "04",
      title: "Online Pharmacy Management System",
      category: "Full-Stack & Mobile",
      categoryKey: "web",
      description:
        "A web-based pharmacy management system for tracking inventory, managing prescriptions, recording sales, and handling automated reordering alerts.",
      technologies: ["Python", "OOP", "SQL"],
      github: "https://github.com/yewzhihao3/Side-Projects",
      image: "/images/pharmacy.jpg",
      date: "2023",
    },
    {
      number: "05",
      title: "Electric Bill Calculator",
      category: "AI & Automation",
      categoryKey: "automation",
      description:
        "A Python application for calculating monthly electric bill tariffs, tracking consumption history via CSV, and visualizing monthly usage trends.",
      technologies: ["Python", "Matplotlib", "CSV Data", "Data Visualization"],
      github: "https://github.com/yewzhihao3/Side-Projects",
      image: "/images/eleteric.webp",
      date: "2022",
    },
    {
      number: "06",
      title: "Python Banking System",
      category: "Full-Stack & Mobile",
      categoryKey: "web",
      description:
        "An object-oriented banking application featuring account creation, fund deposits, withdrawals, transfers, and transaction history generation.",
      technologies: ["Python", "OOP", "File I/O"],
      github: "https://github.com/yewzhihao3/Side-Projects",
      image: "/images/bank.jpg",
      date: "2022",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categoryKey === activeCategory);

  return (
    <Box
      component="section"
      id="projects"
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
            Projects
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

        {/* Category Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
          <Tabs
            value={activeCategory}
            onChange={(_, newValue) => setActiveCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              bgcolor: "background.paper",
              borderRadius: "30px",
              p: 0.5,
              border: "1px solid",
              borderColor: "divider",
              "& .MuiTabs-indicator": {
                bgcolor: "primary.main",
                height: "100%",
                borderRadius: "25px",
                opacity: 0.15,
              },
            }}
          >
            <Tab label="All Projects" value="all" sx={{ fontWeight: 600, px: 2.5, textTransform: "none" }} />
            <Tab label="Full-Stack & Mobile" value="mobile" sx={{ fontWeight: 600, px: 2.5, textTransform: "none" }} />
            <Tab label="AI & Automation" value="automation" sx={{ fontWeight: 600, px: 2.5, textTransform: "none" }} />
            <Tab label="Data Analytics" value="analytics" sx={{ fontWeight: 600, px: 2.5, textTransform: "none" }} />
          </Tabs>
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <Paper
                key={project.number}
                elevation={0}
                component={motion.div}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                {/* Image */}
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: { xs: "200px", sm: "240px" },
                      objectFit: "cover",
                      bgcolor: "background.default",
                    }}
                  />

                  {/* Number Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      px: 1.8,
                      py: 0.4,
                      borderRadius: "14px",
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "rgba(9, 9, 11, 0.85)"
                          : "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        color: "primary.main",
                      }}
                    >
                      {project.number}
                    </Typography>
                  </Box>

                  {/* Date Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 14,
                      right: 14,
                      px: 1.8,
                      py: 0.4,
                      borderRadius: "14px",
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "rgba(9, 9, 11, 0.85)"
                          : "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {project.date}
                    </Typography>
                  </Box>
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={project.category}
                      size="small"
                      color="primary"
                      variant="outlined"
                      sx={{ borderRadius: "12px", fontWeight: 600, mb: 1.5 }}
                    />
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        fontFamily: "'Space Grotesk', sans-serif",
                        mb: 1.5,
                        fontSize: { xs: "1.2rem", sm: "1.4rem" },
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7, mb: 2.5 }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: "auto" }}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 2.5 }}>
                      {project.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            borderRadius: "10px",
                            bgcolor:
                              theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.05)"
                                : "rgba(0, 0, 0, 0.04)",
                            fontWeight: 500,
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </Box>

                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      sx={{
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: 600,
                        py: 1,
                      }}
                    >
                      View GitHub
                    </Button>
                  </Box>
                </Box>
              </Paper>
            ))}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
