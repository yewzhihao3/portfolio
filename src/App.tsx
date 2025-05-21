import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Box,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import { motion, AnimatePresence } from "framer-motion";

const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#9c27b0", // Purple
        light: "#ba68c8",
        dark: "#7b1fa2",
      },
      secondary: {
        main: "#e1bee7", // Light Purple
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#f5f5f5" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#333333" : "#ffffff",
        secondary: mode === "light" ? "#666666" : "#b3b3b3",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: "4.5rem",
        "@media (max-width:960px)": {
          fontSize: "3.5rem",
        },
        "@media (max-width:600px)": {
          fontSize: "2.5rem",
        },
      },
      h2: {
        fontSize: "3.5rem",
        "@media (max-width:960px)": {
          fontSize: "2.5rem",
        },
        "@media (max-width:600px)": {
          fontSize: "2rem",
        },
      },
      h3: {
        fontSize: "2.5rem",
        "@media (max-width:960px)": {
          fontSize: "2rem",
        },
        "@media (max-width:600px)": {
          fontSize: "1.75rem",
        },
      },
      h4: {
        fontSize: "2rem",
        "@media (max-width:960px)": {
          fontSize: "1.75rem",
        },
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
      },
      body1: {
        fontSize: "1.1rem",
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
      body2: {
        fontSize: "1rem",
        "@media (max-width:600px)": {
          fontSize: "0.875rem",
        },
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "24px",
            paddingRight: "24px",
            "@media (max-width:600px)": {
              paddingLeft: "16px",
              paddingRight: "16px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "@media (max-width:600px)": {
              fontSize: "0.875rem",
              padding: "6px 16px",
            },
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

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
  const theme = getTheme(mode);

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
          background:
            mode === "light"
              ? "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(245,245,245,1) 100%)"
              : "linear-gradient(180deg, rgba(18,18,18,0) 0%, rgba(30,30,30,1) 100%)",
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
