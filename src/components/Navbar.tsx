import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import TimelineIcon from "@mui/icons-material/Timeline";

interface NavbarProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, mode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { id: "home", label: "Home", icon: <HomeIcon /> },
    { id: "about", label: "About", icon: <PersonIcon /> },
    { id: "experience", label: "Journey", icon: <TimelineIcon /> },
    { id: "projects", label: "Projects", icon: <WorkIcon /> },
    { id: "contact", label: "Contact", icon: <EmailIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const currentSection = sections.find((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const drawer = (
    <List sx={{ pt: 8 }}>
      {navItems.map((item) => (
        <ListItem
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          sx={{
            color: activeSection === item.id ? "primary.main" : "text.primary",
            cursor: "pointer",
            "&:hover": {
              bgcolor:
                mode === "light"
                  ? "rgba(0, 0, 0, 0.04)"
                  : "rgba(255, 255, 255, 0.08)",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: activeSection === item.id ? "primary.main" : "inherit",
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

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
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
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

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                        : "text.primary",
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
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: mode === "light" ? "text.primary" : "#ffffff",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <IconButton
            onClick={toggleTheme}
            sx={{
              color: mode === "light" ? "text.primary" : "#ffffff",
              ml: 2,
              "&:hover": {
                backgroundColor:
                  mode === "light"
                    ? "rgba(0, 0, 0, 0.04)"
                    : "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              bgcolor:
                mode === "light" ? "background.paper" : "background.default",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
