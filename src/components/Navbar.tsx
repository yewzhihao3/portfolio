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
  Tooltip,
  Snackbar,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import TimelineIcon from "@mui/icons-material/Timeline";
import CodeIcon from "@mui/icons-material/Code";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

interface NavbarProps {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, mode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { id: "home", label: "HOME", icon: <HomeIcon fontSize="small" /> },
    { id: "about", label: "ABOUT", icon: <PersonIcon fontSize="small" /> },
    { id: "experience", label: "JOURNEY", icon: <TimelineIcon fontSize="small" /> },
    { id: "projects", label: "PROJECTS", icon: <WorkIcon fontSize="small" /> },
    { id: "skills", label: "SKILLS", icon: <CodeIcon fontSize="small" /> },
    { id: "contact", label: "CONTACT", icon: <EmailIcon fontSize="small" /> },
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yewzhihao3@gmail.com");
    setSnackbarOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const currentSection = sections.find((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawer = (
    <List sx={{ pt: 6 }}>
      {navItems.map((item) => (
        <ListItem
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          sx={{
            color: activeSection === item.id ? "primary.main" : "text.primary",
            cursor: "pointer",
            py: 1.5,
            px: 3,
            "&:hover": {
              bgcolor:
                mode === "light"
                  ? "rgba(139, 92, 246, 0.08)"
                  : "rgba(139, 92, 246, 0.15)",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: activeSection === item.id ? "primary.main" : "inherit",
              minWidth: "36px",
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{
              fontWeight: activeSection === item.id ? 700 : 500,
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor:
            mode === "light"
              ? "rgba(248, 250, 252, 0.85)"
              : "rgba(9, 9, 11, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid",
          borderColor: "divider",
          px: { xs: 1, sm: 3, md: 5 },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "70px" }}>
          {/* Logo */}
          <Box
            onClick={() => scrollToSection("home")}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.02em",
                fontFamily: "'Space Grotesk', sans-serif",
                background:
                  mode === "dark"
                    ? "linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)"
                    : "linear-gradient(135deg, #0f172a 0%, #6d28d9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
              }}
            >
              YZH <span style={{ color: theme.palette.primary.main }}>/&gt;</span>
            </Typography>
          </Box>

          {/* Email quick pill (Desktop) */}
          {!isMobile && (
            <Tooltip title="Click to copy email" arrow>
              <Box
                onClick={handleCopyEmail}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.6,
                  borderRadius: "20px",
                  bgcolor:
                    mode === "light"
                      ? "rgba(0,0,0,0.04)"
                      : "rgba(255,255,255,0.05)",
                  border: `1px solid ${
                    mode === "light"
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(255,255,255,0.08)"
                  }`,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor:
                      mode === "light"
                        ? "rgba(139, 92, 246, 0.08)"
                        : "rgba(139, 92, 246, 0.15)",
                    transform: "scale(1.02)",
                  },
                }}
              >
                <EmailIcon fontSize="small" color="primary" />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    color: "text.primary",
                  }}
                >
                  yewzhihao3@gmail.com
                </Typography>
                <ContentCopyIcon sx={{ fontSize: "14px", color: "text.secondary" }} />
              </Box>
            </Tooltip>
          )}

          {/* Navigation Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      fontWeight: activeSection === item.id ? 700 : 500,
                      fontSize: "0.8rem",
                      letterSpacing: "0.08em",
                      px: 2,
                      py: 0.8,
                      borderRadius: 2,
                      color:
                        activeSection === item.id
                          ? "primary.main"
                          : "text.primary",
                      transition: "all 0.3s ease",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform:
                          activeSection === item.id
                            ? "translateX(-50%)"
                            : "translateX(-50%) scaleX(0)",
                        height: "2px",
                        width: "60%",
                        backgroundColor: "primary.main",
                        borderRadius: "2px",
                        transition: "transform 0.3s ease",
                      },
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor:
                          mode === "light"
                            ? "rgba(139, 92, 246, 0.08)"
                            : "rgba(139, 92, 246, 0.15)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Theme Toggle Button */}
            <Tooltip title={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: mode === "light" ? "text.primary" : "#ffffff",
                  ml: 1,
                  border: `1px solid ${
                    mode === "light"
                      ? "rgba(0, 0, 0, 0.12)"
                      : "rgba(255, 255, 255, 0.12)"
                  }`,
                  borderRadius: 2,
                  p: 1,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "primary.main",
                    borderColor: "primary.main",
                    transform: "rotate(15deg)",
                  },
                }}
              >
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1, color: "text.primary" }}
              >
                <MenuIcon />
              </IconButton>
            )}
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
                width: 260,
                bgcolor:
                  mode === "light" ? "background.paper" : "background.default",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </AppBar>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        message="Email copied to clipboard!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </>
  );
};

export default Navbar;
