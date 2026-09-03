import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  useTheme,
  CardMedia,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const CARD_WIDTH = 420;
const CARD_GAP = 32;

const Projects = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  // maxTranslate = how far the track must move so the last card's right
  // edge aligns with the container's right edge (measured dynamically).
  const [maxTranslate, setMaxTranslate] = useState(0);

  const projects = [
    {
      number: "01",
      title: "Glove Buyer Intelligence GUI",
      category: "Desktop App",
      description:
        "A modern desktop application for managing international glove buyers and trade data analysis. Features HS code management, AI-powered buyer discovery via DeepSeek & Apollo APIs, comprehensive purchase history tracking, advanced analytics, and multi-format data export.",
      technologies: ["Python", "CustomTkinter", "DeepSeek AI", "Apollo API", "Pandas", "Matplotlib", "SQLite", "PyInstaller"],
      github: "https://github.com/yewzhihao3/glove_trade_system",
      image: "/images/glove_buyer.png",
      date: "2026",
    },
    {
      number: "02",
      title: "Email Complaints Automation System",
      category: "AI & Automation",
      description:
        "A Python automation tool that extracts complaint details from emails, classifies root causes using OpenAI API, generates structured response suggestions, and provides analytics charts.",
      technologies: ["Python", "OpenAI API", "Pandas", "Matplotlib", "NumPy"],
      github: "https://github.com/yewzhihao3/emailComplainAutomation",
      image: "/images/email-automation.png",
      date: "2025",
    },
    {
      number: "03",
      title: "Pet Care Mobile Application",
      category: "Full-Stack & Mobile",
      description:
        "Final Year Project: A mobile application built with React Native for pet care management, including booking services, pet health tracking, personal diary, and e-commerce marketplace integrated with FastAPI and MySQL backend.",
      technologies: ["React Native", "React", "FastAPI", "MySQL", "Node.js", "Google Maps API"],
      github: "https://github.com/yewzhihao3/PetPaw-React-Native",
      image: "/images/PetPaw.png",
      date: "2024–2025",
    },
    {
      number: "04",
      title: "Bike Sales Analytics Dashboard",
      category: "Data Analytics",
      description:
        "A data analytics project focused on analyzing bike sales data. Includes interactive visualizations for customer demographics, regional sales trends, revenue metrics, and sales forecasting.",
      technologies: ["Python", "Pandas", "Matplotlib", "Data Visualization", "Jupyter"],
      github: "https://github.com/yewzhihao3/Data-analytics",
      image: "/images/bike_sales.png",
      date: "2023",
    },
    {
      number: "05",
      title: "Online Pharmacy Management System",
      category: "Full-Stack & Mobile",
      description:
        "A web-based pharmacy management system for tracking inventory, managing prescriptions, recording sales, and handling automated reordering alerts.",
      technologies: ["Python", "OOP", "SQL"],
      github: "https://github.com/yewzhihao3/Side-Projects",
      image: "/images/pharmacy.jpg",
      date: "2023",
    },
    {
      number: "06",
      title: "Electric Bill Calculator",
      category: "AI & Automation",
      description:
        "A Python application for calculating monthly electric bill tariffs, tracking consumption history via CSV, and visualizing monthly usage trends.",
      technologies: ["Python", "Matplotlib", "CSV Data", "Data Visualization"],
      github: "https://github.com/yewzhihao3/Side-Projects",
      image: "/images/eleteric.webp",
      date: "2022",
    },
    {
      number: "07",
      title: "Python Banking System",
      category: "Full-Stack & Mobile",
      description:
        "An object-oriented banking application featuring account creation, fund deposits, withdrawals, transfers, and transaction history generation.",
      technologies: ["Python", "OOP", "File I/O"],
      github: "https://github.com/yewzhihao3/Side-Projects",
      image: "/images/bank.jpg",
      date: "2022",
    },
  ];

  const totalCards = projects.length;
  // Full track width (all cards + all gaps between them)
  const trackWidth = totalCards * CARD_WIDTH + (totalCards - 1) * CARD_GAP;

  // Recalculate how far the track can scroll whenever the window resizes.
  const recalcMax = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const style = window.getComputedStyle(container);
    const pl = parseFloat(style.paddingLeft) || 0;
    const pr = parseFloat(style.paddingRight) || 0;
    // The track starts at `pl` pixels from the container's left edge.
    // We want to stop when the last card's right edge is at
    //   (clientWidth - pr - EXTRA) from the container's left.
    // => maxTranslate = pl + trackWidth - (clientWidth - pr - EXTRA)
    //                 = trackWidth + pl + pr + EXTRA - clientWidth
    const EXTRA = 32; // extra breathing room on the right (px)
    const newMax = Math.max(0, trackWidth + pl + pr + EXTRA - container.clientWidth);
    setMaxTranslate(newMax);
  }, [trackWidth]);

  useEffect(() => {
    recalcMax();
    window.addEventListener("resize", recalcMax);
    return () => window.removeEventListener("resize", recalcMax);
  }, [recalcMax]);

  // Scroll → translateX mapping
  useEffect(() => {
    const getSectionTop = () => {
      const section = sectionRef.current;
      if (!section) return 0;
      return section.getBoundingClientRect().top + window.scrollY;
    };

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = getSectionTop();
      const progress = window.scrollY - sectionTop;

      if (progress < 0) {
        setTranslateX(0);
      } else if (progress > maxTranslate) {
        setTranslateX(maxTranslate);
      } else {
        setTranslateX(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const raf = requestAnimationFrame(handleScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxTranslate]);

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="projects"
      sx={{
        height: `calc(100vh + ${maxTranslate}px)`,
        position: "relative",
      }}
    >
      {/* Sticky viewport */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            pt: { xs: 6, md: 7 },
            pb: { xs: 2, md: 3 },
            flexShrink: 0,
          }}
        >
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
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1.5, opacity: 0.6, fontStyle: "italic" }}
          >
            Scroll down to explore →
          </Typography>
        </Box>

        {/* Horizontal scroll track */}
        <Box
          ref={containerRef}
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            px: { xs: 3, md: 6 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              transform: `translateX(-${translateX}px)`,
              willChange: "transform",
              transition: "transform 0.05s linear",
            }}
          >
            {projects.map((project, idx) => (
              <Paper
                key={project.number}
                elevation={0}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                sx={{
                  width: `${CARD_WIDTH}px`,
                  minWidth: `${CARD_WIDTH}px`,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  overflow: "hidden",
                  flexShrink: 0,
                  "&:hover": {
                    borderColor: "primary.main",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 8px 32px rgba(124,58,237,0.15)"
                        : "0 8px 32px rgba(124,58,237,0.12)",
                  },
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Image */}
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: "200px",
                      objectFit: "cover",
                      bgcolor: "background.default",
                      transition: "transform 0.4s ease",
                      "&:hover": { transform: "scale(1.04)" },
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
                    p: 3,
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
                        mb: 1,
                        fontSize: "1.15rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.65,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: "auto" }}>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7, mb: 2 }}>
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            borderRadius: "10px",
                            bgcolor:
                              theme.palette.mode === "dark"
                                ? "rgba(255, 255, 255, 0.05)"
                                : "rgba(0, 0, 0, 0.04)",
                            fontWeight: 500,
                            fontSize: "0.72rem",
                          }}
                        />
                      ))}
                      {project.technologies.length > 5 && (
                        <Chip
                          label={`+${project.technologies.length - 5}`}
                          size="small"
                          sx={{
                            borderRadius: "10px",
                            bgcolor: "primary.main",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "0.72rem",
                          }}
                        />
                      )}
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
                        py: 0.9,
                      }}
                    >
                      View GitHub
                    </Button>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Progress dot indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          {projects.map((_, i) => {
            const cardProgress = (CARD_WIDTH + CARD_GAP) * i;
            const halfStep = (CARD_WIDTH + CARD_GAP) / 2;
            const isActive = translateX >= cardProgress - halfStep;
            const isCurrent =
              translateX >= cardProgress - halfStep &&
              (i === projects.length - 1 || translateX < cardProgress + halfStep);
            return (
              <Box
                key={i}
                sx={{
                  width: isCurrent ? 20 : 6,
                  height: 6,
                  borderRadius: "3px",
                  bgcolor: isActive ? "primary.main" : "divider",
                  transition: "all 0.3s ease",
                  opacity: isActive ? 1 : 0.4,
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
