import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import { Education } from "../utils/types";

interface EducationTimelineProps {
  education: Education[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ education }) => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {education.map((edu, index) => (
        <Box
          key={edu.degree}
          sx={{
            position: "relative",
            mb: index === education.length - 1 ? 0 : 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                bgcolor: "background.paper",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: 4,
                position: "relative",
                "&:hover": {
                  transform: "translateY(-8px)",
                  transition: "transform 0.3s ease",
                  boxShadow: (theme) =>
                    `0 8px 24px ${theme.palette.primary.main}25`,
                },
              }}
            >
              {/* School Logo */}
              <Box
                sx={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  bgcolor: "background.paper",
                  borderRadius: "50%",
                  width: 80,
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid",
                  borderColor: "primary.main",
                  overflow: "hidden",
                  p: 1,
                }}
              >
                <Box
                  component="img"
                  src={edu.logoUrl}
                  alt={`${edu.school} logo`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = "";
                    e.currentTarget.style.display = "none";
                    const icon = document.createElement("div");
                    icon.innerHTML = "<svg>...</svg>";
                    e.currentTarget.parentElement?.appendChild(icon);
                  }}
                />
              </Box>

              <Typography
                variant="h5"
                color="primary"
                gutterBottom
                sx={{ mr: 6 }}
              >
                {edu.school}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
                {edu.degree}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {edu.period}
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  Key Courses:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  {edu.courses.map((course) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          px: 2,
                          py: 1,
                          bgcolor: "background.default",
                          border: "1px solid",
                          borderColor: "primary.light",
                          borderRadius: 2,
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                            transform: "translateY(-2px)",
                            transition: "all 0.3s ease",
                          },
                        }}
                      >
                        <Typography variant="body2">{course}</Typography>
                      </Paper>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      ))}
    </Box>
  );
};

export default EducationTimeline;
