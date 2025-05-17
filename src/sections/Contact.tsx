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
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideIn,
} from "../utils/animation";

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
      value: "+60-11-1107-5923",
      link: "https://wa.me/60111107592",
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
      component={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      sx={{
        py: 12,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <motion.div variants={fadeInUp}>
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
        </motion.div>

        <motion.div variants={fadeInUp}>
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
            I'm always open to new opportunities and collaborations. Feel free
            to reach out through any of the following channels.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2, sm: 3, md: 4 },
            maxWidth: "1600px",
            mx: "auto",
            px: { xs: 1, sm: 2, md: 4 },
          }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              variants={slideIn}
              style={{ width: "100%" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2, sm: 2.5, md: 3 },
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  bgcolor: "background.paper",
                  borderRadius: { xs: 2, sm: 3, md: 4 },
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                  "&:hover": {
                    transform: {
                      xs: "translateY(-2px)",
                      md: "translateY(-4px)",
                    },
                    boxShadow: "0 8px 32px rgba(147,51,234,0.15)",
                  },
                }}
              >
                <Box
                  sx={{
                    mb: { xs: 1, sm: 1.5, md: 2 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      transform: { xs: "scale(1)", md: "scale(1.1)" },
                      transition: "all 0.3s ease",
                      background: "rgba(147,51,234,0.05)",
                      "&:hover": {
                        transform: { xs: "scale(1.1)", md: "scale(1.2)" },
                        background: "rgba(147,51,234,0.1)",
                      },
                      color: "primary.main",
                      "&.Mui-disabled": {
                        color: "primary.main",
                      },
                      p: { xs: 1.5, sm: 1.75, md: 2 },
                    }}
                    component={info.link ? Link : "button"}
                    href={info.link || undefined}
                    target={info.link ? "_blank" : undefined}
                    disabled={!info.link}
                  >
                    {info.icon}
                  </IconButton>
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 500,
                    mb: { xs: 0.5, sm: 0.75, md: 1 },
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                    letterSpacing: "0.5px",
                  }}
                >
                  {info.label}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: { xs: 0.5, sm: 0.75, md: 1 },
                    minHeight: { xs: "20px", sm: "22px", md: "24px" },
                    width: "100%",
                  }}
                >
                  <Typography
                    component={info.link ? Link : "div"}
                    href={info.link || undefined}
                    target={info.link ? "_blank" : undefined}
                    color="text.secondary"
                    sx={{
                      textDecoration: "none",
                      fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.9rem" },
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: info.link ? "primary.main" : "inherit",
                        cursor: info.link ? "pointer" : "default",
                      },
                    }}
                  >
                    {info.value}
                  </Typography>
                  {info.copyable && (
                    <IconButton
                      size="small"
                      onClick={() => handleCopy(info.value, info.label)}
                      sx={{
                        color: "primary.main",
                        opacity: 0.8,
                        flexShrink: 0,
                        padding: { xs: 0.5, sm: 0.75, md: 1 },
                        transition: "all 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                          transform: "scale(1.1)",
                          background: "rgba(147,51,234,0.1)",
                        },
                      }}
                    >
                      <ContentCopyIcon
                        sx={{
                          fontSize: {
                            xs: "0.9rem",
                            sm: "1rem",
                            md: "1.1rem",
                          },
                        }}
                      />
                    </IconButton>
                  )}
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          sx={{
            "& .MuiSnackbarContent-root": {
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              py: { xs: 1, sm: 1.5 },
              px: { xs: 2, sm: 3 },
            },
          }}
        />
      </Container>
    </Box>
  );
};

export default Contact;
