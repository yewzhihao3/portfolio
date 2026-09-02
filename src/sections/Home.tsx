import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DescriptionIcon from "@mui/icons-material/Description";

const Home = () => {
  const theme = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tickerItems = [
    "SOFTWARE DEVELOPER",
    "DATA ANALYST",
    "PYTHON",
    "REACT NATIVE",
    "REACT",
    "VUE 3",
    "NUXT 3",
    "TYPESCRIPT",
    "FASTAPI",
  ];

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        pt: { xs: 12, md: 10 },
        pb: { xs: 8, md: 6 },
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "300px", md: "600px" },
          height: { xs: "300px", md: "600px" },
          borderRadius: "50%",
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(9,9,11,0) 70%)"
              : "radial-gradient(circle, rgba(139,92,246,0.08) 0%, rgba(248,250,252,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: 3,
          }}
        >
          {/* Greeting */}
          <Typography
            variant="caption"
            sx={{
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "primary.main",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            WELCOME TO MY PORTFOLIO
          </Typography>

          {/* Main Name */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.8rem", sm: "4.5rem", md: "6rem", lg: "6.5rem" },
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              fontFamily: "'Inter', sans-serif",
              color: "text.primary",
            }}
          >
            YEW ZHI HAO
          </Typography>

          {/* Role */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.3rem", sm: "2.2rem", md: "2.8rem" },
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: "primary.main",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Software Developer &amp; Data Analyst
          </Typography>

          {/* Simple Intro */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              lineHeight: 1.8,
              color: "text.secondary",
              fontSize: { xs: "1rem", sm: "1.15rem" },
              maxWidth: "680px",
              mt: 1,
            }}
          >
            Passionate about building web and mobile applications, optimizing system performance, and transforming data into meaningful insights.
          </Typography>

          {/* CTAs */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => scrollToSection("projects")}
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: "30px",
                px: 3.5,
                py: 1.5,
                fontSize: "0.95rem",
                fontWeight: 600,
                textTransform: "none",
                letterSpacing: "0.02em",
                boxShadow: `0 6px 20px ${
                  theme.palette.mode === "dark"
                    ? "rgba(139, 92, 246, 0.35)"
                    : "rgba(139, 92, 246, 0.2)"
                }`,
              }}
            >
              View Projects
            </Button>

            <Button
              variant="outlined"
              color="primary"
              size="large"
              component="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DescriptionIcon />}
              sx={{
                borderRadius: "30px",
                px: 3.5,
                py: 1.5,
                fontSize: "0.95rem",
                fontWeight: 600,
                textTransform: "none",
                letterSpacing: "0.02em",
              }}
            >
              Resume PDF
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Marquee Ticker */}
      <Box
        sx={{
          width: "100%",
          mt: { xs: 6, md: 8 },
          py: 2,
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(18, 18, 24, 0.7)"
              : "rgba(241, 245, 249, 0.8)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="animate-marquee">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                mx: 3,
                whiteSpace: "nowrap",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  letterSpacing: "0.15em",
                  color: "text.primary",
                  opacity: 0.8,
                }}
              >
                {item}
              </Typography>
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                }}
              />
            </Box>
          ))}
        </div>
      </Box>

      {/* Scroll Down */}
      <Box
        onClick={() => scrollToSection("about")}
        component={motion.div}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          mt: { xs: 4, md: 5 },
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          cursor: "pointer",
          opacity: 0.7,
          transition: "opacity 0.3s ease",
          "&:hover": { opacity: 1 },
          zIndex: 1,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: "0.7rem",
            fontWeight: 600,
          }}
        >
          SCROLL DOWN
        </Typography>
        <KeyboardArrowDownIcon color="primary" />
      </Box>
    </Box>
  );
};

export default Home;
