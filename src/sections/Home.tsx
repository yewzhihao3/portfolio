import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { fadeInUp, staggerContainer } from "../utils/animation";

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
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 4,
          }}
        >
          <motion.div variants={fadeInUp}>
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

          <motion.div variants={fadeInUp}>
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

          <motion.div variants={fadeInUp}>
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

          <motion.div variants={fadeInUp}>
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
