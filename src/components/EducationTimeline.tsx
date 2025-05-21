import React from "react";
import { Box, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { Education } from "../utils/types";

interface EducationTimelineProps {
  education: Education[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ education }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {education.map((edu, index) => (
        <Box
          key={edu.degree}
          sx={{
            position: "relative",
            mb: index === education.length - 1 ? 0 : { xs: 6, sm: 8 },
            "&::after":
              index !== education.length - 1
                ? {
                    content: '""',
                    position: "absolute",
                    left: { xs: "50%", sm: "20px" },
                    bottom: { xs: "-40px", sm: "-60px" },
                    transform: { xs: "translateX(-50%)", sm: "none" },
                    width: { xs: "2px", sm: "2px" },
                    height: { xs: "40px", sm: "60px" },
                    bgcolor: "primary.main",
                    opacity: 0.3,
                  }
                : {},
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              bgcolor: "background.paper",
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: { xs: 2, sm: 3, md: 4 },
              position: "relative",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: `0 8px 24px ${theme.palette.primary.main}25`,
              },
            }}
          >
            {/* School Logo */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: "-20px", sm: "-30px" },
                right: { xs: "-20px", sm: "-30px" },
                bgcolor: "background.paper",
                borderRadius: "50%",
                width: { xs: 60, sm: 80 },
                height: { xs: 60, sm: 80 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid",
                borderColor: "primary.main",
                overflow: "hidden",
                p: 1,
                zIndex: 1,
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
                }}
              />
            </Box>

            <Box sx={{ pr: { xs: 5, sm: 8 } }}>
              <Typography
                variant="h5"
                color="primary"
                gutterBottom
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
                  fontWeight: 500,
                }}
              >
                {edu.school}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                  fontWeight: 500,
                  color: "text.primary",
                }}
              >
                {edu.degree}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  mb: 2,
                }}
              >
                {edu.period}
              </Typography>

              <Box sx={{ mt: { xs: 2, sm: 3 } }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.8rem", sm: "0.9rem" },
                    mb: 1,
                  }}
                >
                  Key Courses:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: { xs: 0.5, sm: 1 },
                    mt: 1,
                  }}
                >
                  {edu.courses.map((course) => (
                    <Paper
                      key={course}
                      elevation={0}
                      sx={{
                        px: { xs: 1.5, sm: 2 },
                        py: { xs: 0.5, sm: 1 },
                        bgcolor: "background.default",
                        border: "1px solid",
                        borderColor: "primary.light",
                        borderRadius: { xs: 1, sm: 2 },
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "primary.main",
                          color: "white",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: { xs: "0.75rem", sm: "0.85rem" },
                          whiteSpace: "nowrap",
                        }}
                      >
                        {course}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default EducationTimeline;
