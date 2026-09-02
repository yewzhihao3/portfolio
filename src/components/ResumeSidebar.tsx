import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { motion } from "framer-motion";

const ResumeSidebar: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      sx={{
        position: "fixed",
        bottom: 0,
        right: { xs: "12px", md: "24px" },
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
      <Button
        component="a"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<DescriptionIcon fontSize="small" />}
        sx={{
          writingMode: "vertical-rl",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontWeight: 600,
          fontSize: "0.75rem",
          py: 2,
          px: 1,
          borderRadius: 2,
          color: "text.primary",
          border: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.15)"
              : "rgba(0,0,0,0.15)"
          }`,
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(18, 18, 24, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(8px)",
          transition: "all 0.3s ease",
          "&:hover": {
            color: "primary.main",
            borderColor: "primary.main",
            transform: "translateY(-4px)",
            boxShadow: `0 4px 14px ${
              theme.palette.mode === "dark"
                ? "rgba(139, 92, 246, 0.3)"
                : "rgba(139, 92, 246, 0.2)"
            }`,
          },
        }}
      >
        RESUME
      </Button>
    </Box>
  );
};

export default ResumeSidebar;
