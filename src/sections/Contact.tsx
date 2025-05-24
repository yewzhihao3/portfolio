import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Paper,
  IconButton,
  Snackbar,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Contact = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setSnackbarMessage(`${label} copied to clipboard!`);
    setSnackbarOpen(true);
  };

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      label: "Email",
      value: "yewzhihao3@gmail.com",
      link: null,
      copyable: true,
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      label: "Phone",
      value: "+60 111-1075923",
      link: "https://wa.me/601111075923",
      copyable: true,
    },
    {
      icon: <LocationOnIcon fontSize="large" />,
      label: "Location",
      value: "Bayan Lepas, Penang",
      link: null,
      copyable: true,
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      label: "LinkedIn",
      value: "linkedin.com/in/yewzhihao",
      link: "https://www.linkedin.com/in/yewzhihao/",
      copyable: true,
    },
  ];

  return (
    <Box
      sx={{
        py: 12,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            fontWeight: 300,
            mb: 6,
            color: "text.primary",
            "&::after": {
              content: '""',
              display: "block",
              width: "40px",
              height: "2px",
              bgcolor: "primary.main",
              margin: "20px auto 0",
              opacity: 0.7,
            },
          }}
        >
          Get in Touch
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{
            mb: 8,
            maxWidth: "800px",
            mx: "auto",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          I'm always open to new opportunities and collaborations. Feel free to
          reach out through any of the following channels.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {contactInfo.map((info, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                bgcolor: "background.paper",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 2,
                }}
              >
                {info.icon}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 500, color: "primary.main" }}
                >
                  {info.label}
                </Typography>
                {info.link ? (
                  <Link
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "text.primary",
                      textDecoration: "none",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    <Typography variant="body1">{info.value}</Typography>
                  </Link>
                ) : (
                  <Typography variant="body1" color="text.primary">
                    {info.value}
                  </Typography>
                )}
                {info.copyable && (
                  <IconButton
                    onClick={() => handleCopy(info.value, info.label)}
                    size="small"
                    sx={{
                      mt: 1,
                      color: "text.secondary",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                )}
              </Box>
            </Paper>
          ))}
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
