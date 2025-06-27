import React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { Education } from "../utils/types";
import { colors } from "../theme/colors";

interface EducationTimelineProps {
  education: Education[];
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({ education }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", px: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem" },
          fontWeight: 600,
          textAlign: "center",
          color: "primary.main",
          mb: { xs: 4, sm: 6 },
        }}
      >
        Education Journey
      </Typography>

      <Box
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: "20px",
            top: 0,
            bottom: 0,
            width: "3px",
            bgcolor: "primary.main",
            opacity: 0.2,
          },
        }}
      >
        {education.map((edu, index) => (
          <Box
            key={edu.degree}
            sx={{
              position: "relative",
              mb: index === education.length - 1 ? 0 : 6,
              ml: "48px",
            }}
          >
            {/* Timeline Dot */}
            <Box
              sx={{
                position: "absolute",
                left: "-38px",
                top: "24px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                bgcolor: "primary.main",
                zIndex: 1,
              }}
            />

            <Paper
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                boxShadow:
                  theme.palette.mode === "dark"
                    ? `0 2px 12px ${colors.shadow.dark}`
                    : `0 2px 12px ${colors.shadow.light}`,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  p: { xs: 2.5, sm: 3 },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "flex-start", mb: 2.5 }}
                >
                  <Box
                    sx={{
                      width: { xs: 50, sm: 60 },
                      height: { xs: 50, sm: 60 },
                      borderRadius: 2,
                      overflow: "hidden",
                      mr: 2,
                      border: "1px solid",
                      borderColor: "divider",
                      bgcolor: "background.default",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={edu.logoUrl}
                      alt={`${edu.school} logo`}
                      sx={{
                        width: "80%",
                        height: "80%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      color="primary.main"
                      sx={{
                        fontSize: { xs: "1.1rem", sm: "1.25rem" },
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {edu.school}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        color: "text.primary",
                        mb: 0.5,
                      }}
                    >
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary.main"
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                      }}
                    >
                      {edu.period}
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      fontWeight: 500,
                      mb: 1.5,
                      color: "text.primary",
                    }}
                  >
                    Key Courses
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mx: -0.5,
                    }}
                  >
                    {edu.courses.map((course) => (
                      <Box
                        key={course}
                        sx={{
                          px: 1.5,
                          py: 0.75,
                          bgcolor: "background.default",
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: 1.5,
                          fontSize: { xs: "0.8rem", sm: "0.875rem" },
                          color: "text.primary",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                            borderColor: "primary.main",
                          },
                        }}
                      >
                        {course}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EducationTimeline;
