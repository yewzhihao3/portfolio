import React, { useState } from "react";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

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
    },
  });

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const theme = getTheme(mode);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <Navbar toggleTheme={toggleTheme} mode={mode} />
        <Box component="main">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
