import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  Button,
  Snackbar,
  useTheme,
  Tooltip,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";

const Contact = () => {
  const theme = useTheme();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setSnackbarMessage(`${label} copied to clipboard!`);
    setSnackbarOpen(true);
  };

  const contactCards = [
    {
      icon: <EmailIcon color="primary" fontSize="large" />,
      title: "Email",
      value: "yewzhihao3@gmail.com",
      actionLabel: "Copy Email",
      onAction: () => handleCopy("yewzhihao3@gmail.com", "Email"),
    },
    {
      icon: <PhoneIcon color="primary" fontSize="large" />,
      title: "Phone / WhatsApp",
      value: "+(60) 11-1107-5923",
      actionLabel: "Chat on WhatsApp",
      onAction: () => window.open("https://wa.me/601111075923", "_blank"),
    },
    {
      icon: <LinkedInIcon color="primary" fontSize="large" />,
      title: "LinkedIn",
      value: "linkedin.com/in/yewzhihao",
      actionLabel: "View Profile",
      onAction: () =>
        window.open("https://www.linkedin.com/in/yewzhihao/", "_blank"),
    },
    {
      icon: <LocationOnIcon color="primary" fontSize="large" />,
      title: "Location",
      value: "Taiping, Perak / Penang, Malaysia",
      actionLabel: "Copy Location",
      onAction: () =>
        handleCopy("Taiping, Perak / Penang, Malaysia", "Location"),
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Contact
          </Typography>
          <Box
            sx={{
              width: "50px",
              height: "3px",
              borderRadius: "2px",
              bgcolor: "primary.main",
              mx: "auto",
              mt: 1.5,
            }}
          />
        </Box>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{
            mb: 6,
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Feel free to reach out via email or connect with me on LinkedIn.
        </Typography>

        {/* Contact Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
            mb: 6,
          }}
        >
          {contactCards.map((card, idx) => (
            <Paper
              key={idx}
              elevation={0}
              sx={{
                p: 3.5,
                height: "100%",
                borderRadius: 4,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <Box
                sx={{
                  p: 1.2,
                  borderRadius: "50%",
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(139, 92, 246, 0.15)"
                      : "rgba(139, 92, 246, 0.08)",
                }}
              >
                {card.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.05rem",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500, wordBreak: "break-word" }}
              >
                {card.value}
              </Typography>

              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={card.onAction}
                sx={{
                  mt: "auto",
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  px: 2,
                }}
              >
                {card.actionLabel}
              </Button>
            </Paper>
          ))}
        </Box>

        {/* Resume Button */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component="a"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DescriptionIcon />}
            sx={{
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              fontSize: "0.95rem",
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Download Resume PDF
          </Button>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            pt: 4,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Yew Zhi Hao. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                href="https://github.com/yewzhihao3"
                target="_blank"
                size="small"
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/yewzhihao/"
                target="_blank"
                size="small"
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="WhatsApp">
              <IconButton
                component="a"
                href="https://wa.me/601111075923"
                target="_blank"
                size="small"
                sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
              >
                <WhatsAppIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Container>
    </Box>
  );
};

export default Contact;
