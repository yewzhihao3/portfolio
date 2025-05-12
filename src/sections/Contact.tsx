import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Paper,
  IconButton,
  Grid,
} from "@mui/material";
import type { GridProps } from "@mui/material";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      label: "Email",
      value: "yewzhihao3@gmail.com",
      link: "mailto:yewzhihao3@gmail.com",
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      label: "Phone",
      value: "+60-11-1107-5923",
      link: "tel:+60111107592",
    },
    {
      icon: <LocationOnIcon fontSize="large" />,
      label: "Location",
      value: "Bayan Lepas, Penang",
      link: null,
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      label: "LinkedIn",
      value: "linkedin.com/in/yewzhihao",
      link: "https://www.linkedin.com/in/yewzhihao/",
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
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              fontWeight: 300,
              mb: 6,
              "&::after": {
                content: '""',
                display: "block",
                width: "60px",
                height: "3px",
                bgcolor: "primary.main",
                margin: "20px auto 0",
              },
            }}
          >
            Get in Touch
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: "600px", mx: "auto", fontWeight: 300 }}
          >
            I'm always open to new opportunities and collaborations. Feel free
            to reach out through any of the following channels.
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={info.label}
              component="div"
              {...({} as GridProps)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    bgcolor: "background.paper",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <IconButton
                    color="primary"
                    sx={{
                      mb: 2,
                      transform: "scale(1.2)",
                      "&:hover": { transform: "scale(1.3)" },
                    }}
                    component={info.link ? Link : "button"}
                    href={info.link || undefined}
                    target={info.link ? "_blank" : undefined}
                  >
                    {info.icon}
                  </IconButton>
                  <Typography variant="h6" gutterBottom>
                    {info.label}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      "&:hover": {
                        color: info.link ? "primary.main" : "inherit",
                      },
                    }}
                  >
                    {info.value}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
