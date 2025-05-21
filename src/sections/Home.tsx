import React from "react";
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component={motion.div}
      style={{ opacity }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        pt: 8,
        overflow: "hidden",
      }}
    >
      {/* Background subtle pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage:
            "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: 6,
            position: "relative",
          }}
        >
          <Box sx={{ width: "100%", mb: 4 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "5rem" },
                fontWeight: 200,
                letterSpacing: "-0.02em",
                mb: 3,
              }}
            >
              Yew Zhi Hao
            </Typography>

            <Typography
              variant="h2"
              color="primary"
              sx={{
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                fontWeight: 300,
                letterSpacing: "0.02em",
                opacity: 0.9,
              }}
            >
              Software Developer
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              position: "relative",
              my: 4,
            }}
          >
            <Divider sx={{ width: "40px", mb: 4 }} />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 300,
                lineHeight: 1.8,
                color: "text.secondary",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                maxWidth: "600px",
              }}
            >
              I believe in the art of efficient development — where strategic
              automation meets innovative problem-solving. Every line of code is
              an opportunity to create lasting impact through elegant solutions.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 3,
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => scrollToSection("about")}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 400,
                letterSpacing: "0.5px",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              Explore My Work
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => scrollToSection("contact")}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 2,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 400,
                letterSpacing: "0.5px",
                borderWidth: 1.5,
                "&:hover": {
                  borderWidth: 1.5,
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>

          {/* Scroll indicator */}
          <Box
            component={motion.div}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            sx={{
              position: "absolute",
              bottom: { xs: -100, md: -120 },
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              opacity: 0.6,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontSize: "0.75rem",
              }}
            >
              Scroll
            </Typography>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
