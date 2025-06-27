import React, { useState } from "react";
import { ThemeProvider, Box, CssBaseline, GlobalStyles } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import { motion, AnimatePresence } from "framer-motion";
import { createAppTheme, getGradientBackground } from "./theme/theme";

// Animation variants for sections
const pageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = createAppTheme(mode);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*::-webkit-scrollbar": {
            width: "8px",
            "@media (max-width: 600px)": {
              display: "none",
            },
          },
          "*::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            "@media (max-width: 600px)": {
              display: "none",
            },
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px",
            "&:hover": {
              background: "#555",
            },
            "@media (max-width: 600px)": {
              display: "none",
            },
          },
          body: {
            "@media (max-width: 600px)": {
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
              "&::-webkit-scrollbar": {
                // Chrome/Safari/Opera
                display: "none",
              },
            },
          },
          html: {
            "@media (max-width: 600px)": {
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            },
          },
        }}
      />
      <Box
        component={motion.div}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        sx={{
          minHeight: "100vh",
          background: theme.palette.background.default,
        }}
      >
        <Navbar toggleTheme={toggleTheme} mode={mode} />
        <AnimatePresence>
          <Box component="main">
            <motion.section
              id="home"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Home />
            </motion.section>

            <motion.section
              id="about"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <About />
            </motion.section>

            <motion.section
              id="experience"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Experience />
            </motion.section>

            <motion.section
              id="projects"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Projects />
            </motion.section>

            <motion.section
              id="contact"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Contact />
            </motion.section>
          </Box>
        </AnimatePresence>
      </Box>
    </ThemeProvider>
  );
}

export default App;
