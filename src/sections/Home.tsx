import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        pt: 8, // Account for fixed navbar
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "3rem", md: "4.5rem" },
                fontWeight: 300,
                mb: 2,
              }}
            >
              Yew Zhi Hao
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              color="primary"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 300,
                mb: 4,
              }}
            >
              Software Developer
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: "800px",
                mb: 6,
                fontWeight: 300,
              }}
            >
              Passionate about creating elegant solutions through code.
              Specializing in web development and software engineering.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => scrollToSection("about")}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                borderRadius: 2,
                px: 4,
                py: 1.5,
                borderWidth: 2,
                "&:hover": {
                  borderWidth: 2,
                },
              }}
            >
              Explore My Work
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
