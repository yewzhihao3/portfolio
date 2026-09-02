import React, { useState } from "react";
import { ThemeProvider, Box, CssBaseline, GlobalStyles } from "@mui/material";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import ResumeSidebar from "./components/ResumeSidebar";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./components/Skills";
import Contact from "./sections/Contact";
import { motion, AnimatePresence } from "framer-motion";
import { createAppTheme } from "./theme/theme";

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
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
            background: mode === "dark" ? "#09090b" : "#f8fafc",
          },
          "*::-webkit-scrollbar-thumb": {
            background: mode === "dark" ? "#27272a" : "#cbd5e1",
            borderRadius: "4px",
            "&:hover": {
              background: "#8b5cf6",
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
          bgcolor: "background.default",
          color: "text.primary",
          position: "relative",
        }}
      >
        {/* Fixed Top Navbar */}
        <Navbar toggleTheme={toggleTheme} mode={mode} />

        {/* Fixed Sidebars for Desktop */}
        <SocialSidebar />
        <ResumeSidebar />

        {/* Main Content Sections */}
        <AnimatePresence>
          <Box component="main">
            <motion.section
              id="home"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Home />
            </motion.section>

            <motion.section
              id="about"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <About />
            </motion.section>

            <motion.section
              id="experience"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Experience />
            </motion.section>

            <motion.section
              id="projects"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Projects />
            </motion.section>

            <motion.section
              id="skills"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Skills />
            </motion.section>

            <motion.section
              id="contact"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
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
