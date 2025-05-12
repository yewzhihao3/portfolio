import React from "react";
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

interface NavbarProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, mode }) => {
  const theme = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            color: mode === "light" ? "text.primary" : "inherit",
            fontWeight: 500,
            "&:hover": { color: "primary.main" },
          }}
          onClick={() => scrollToSection("home")}
        >
          Yew Zhi Hao
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            color={mode === "light" ? "primary" : "inherit"}
            onClick={() => scrollToSection("home")}
            sx={{
              fontWeight: 500,
              "&:hover": { color: "primary.main" },
            }}
          >
            Home
          </Button>
          <Button
            color={mode === "light" ? "primary" : "inherit"}
            onClick={() => scrollToSection("about")}
            sx={{
              fontWeight: 500,
              "&:hover": { color: "primary.main" },
            }}
          >
            About
          </Button>
          <Button
            color={mode === "light" ? "primary" : "inherit"}
            onClick={() => scrollToSection("projects")}
            sx={{
              fontWeight: 500,
              "&:hover": { color: "primary.main" },
            }}
          >
            Projects
          </Button>
          <Button
            color={mode === "light" ? "primary" : "inherit"}
            onClick={() => scrollToSection("contact")}
            sx={{
              fontWeight: 500,
              "&:hover": { color: "primary.main" },
            }}
          >
            Contact
          </Button>
          <IconButton
            sx={{
              ml: 1,
              color: mode === "light" ? "text.primary" : "inherit",
              "&:hover": { color: "primary.main" },
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
