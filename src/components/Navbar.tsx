import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

interface NavbarProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, mode }) => {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 150;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: <HomeIcon /> },
    { id: "about", label: "About", icon: <PersonIcon /> },
    { id: "projects", label: "Projects", icon: <WorkIcon /> },
    { id: "contact", label: "Contact", icon: <EmailIcon /> },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor:
          mode === "light"
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(18, 18, 18, 0.8)",
        backdropFilter: "blur(8px)",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            color: mode === "light" ? "#000000" : "#ffffff",
            fontWeight: 600,
            letterSpacing: "0.5px",
            "&:hover": { color: "primary.main" },
            transition: "color 0.3s ease",
          }}
          onClick={() => scrollToSection("home")}
        >
          Yew Zhi Hao
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              sx={{
                fontWeight: 500,
                px: 2,
                py: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                position: "relative",
                color:
                  activeSection === item.id
                    ? "primary.main"
                    : mode === "light"
                    ? "#000000"
                    : "#ffffff",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform:
                    activeSection === item.id
                      ? "translateX(-50%)"
                      : "translateX(-50%) scaleX(0)",
                  height: "3px",
                  width: "80%",
                  backgroundColor: "primary.main",
                  transition: "transform 0.3s ease",
                },
                "&:hover": {
                  color: "primary.main",
                  backgroundColor:
                    mode === "light"
                      ? "rgba(0, 0, 0, 0.04)"
                      : "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
          <IconButton
            sx={{
              ml: 1,
              color: mode === "light" ? "#000000" : "#ffffff",
              "&:hover": { color: "primary.main" },
              transition: "color 0.3s ease",
            }}
            onClick={toggleTheme}
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
