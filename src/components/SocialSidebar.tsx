import React from "react";
import { Box, IconButton, useTheme, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const SocialSidebar: React.FC = () => {
  const theme = useTheme();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yewzhihao3",
      icon: <GitHubIcon fontSize="small" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yewzhihao/",
      icon: <LinkedInIcon fontSize="small" />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/601111075923",
      icon: <WhatsAppIcon fontSize="small" />,
    },
    {
      name: "Email",
      url: "mailto:yewzhihao3@gmail.com",
      icon: <EmailIcon fontSize="small" />,
    },
  ];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      sx={{
        position: "fixed",
        bottom: 0,
        left: { xs: "12px", md: "24px" },
        zIndex: 100,
        display: { xs: "none", sm: "flex" },
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        "&::after": {
          content: '""',
          width: "1px",
          height: "80px",
          bgcolor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
          mt: 1,
        },
      }}
    >
      {socialLinks.map((social) => (
        <Tooltip key={social.name} title={social.name} placement="right" arrow>
          <IconButton
            component="a"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "text.secondary",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "primary.main",
                transform: "translateY(-3px)",
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(139, 92, 246, 0.15)"
                    : "rgba(139, 92, 246, 0.1)",
              },
            }}
          >
            {social.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialSidebar;
