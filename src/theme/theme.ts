import { createTheme, Theme } from "@mui/material/styles";
import {
  colors,
  getBackgroundColor,
  getTextColor,
  getGradientBackground,
} from "./colors";

export const createAppTheme = (mode: "light" | "dark"): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary.main,
        light: colors.primary.light,
        dark: colors.primary.dark,
      },
      secondary: {
        main: colors.secondary.main,
      },
      background: {
        default: getBackgroundColor("default", mode),
        paper: getBackgroundColor("paper", mode),
      },
      text: {
        primary: getTextColor("primary", mode),
        secondary: getTextColor("secondary", mode),
      },
      divider: mode === "light" ? colors.border.light : colors.border.dark,
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: "4.5rem",
        fontWeight: 200,
        letterSpacing: "-0.02em",
        "@media (max-width:960px)": {
          fontSize: "3.5rem",
        },
        "@media (max-width:600px)": {
          fontSize: "2.5rem",
        },
      },
      h2: {
        fontSize: "3.5rem",
        fontWeight: 300,
        "@media (max-width:960px)": {
          fontSize: "2.5rem",
        },
        "@media (max-width:600px)": {
          fontSize: "2rem",
        },
      },
      h3: {
        fontSize: "2.5rem",
        fontWeight: 400,
        "@media (max-width:960px)": {
          fontSize: "2rem",
        },
        "@media (max-width:600px)": {
          fontSize: "1.75rem",
        },
      },
      h4: {
        fontSize: "2rem",
        fontWeight: 500,
        "@media (max-width:960px)": {
          fontSize: "1.75rem",
        },
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: 400,
        lineHeight: 1.8,
        "@media (max-width:600px)": {
          fontSize: "1.25rem",
        },
      },
      h6: {
        fontSize: "1.25rem",
        fontWeight: 300,
        lineHeight: 1.8,
        "@media (max-width:600px)": {
          fontSize: "1.1rem",
        },
      },
      body1: {
        fontSize: "1.1rem",
        lineHeight: 1.8,
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
      body2: {
        fontSize: "1rem",
        lineHeight: 1.7,
        "@media (max-width:600px)": {
          fontSize: "0.875rem",
        },
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "24px",
            paddingRight: "24px",
            "@media (max-width:600px)": {
              paddingLeft: "16px",
              paddingRight: "16px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 400,
            letterSpacing: "0.5px",
            "@media (max-width:600px)": {
              fontSize: "0.875rem",
              padding: "6px 16px",
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    shadows: [
      "none",
      `0px 2px 1px -1px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 3px 1px -2px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 3px 3px -2px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 2px 4px -1px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 3px 5px -1px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 3px 5px -1px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 4px 5px -2px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 5px 5px -3px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 5px 6px -3px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 6px 6px -3px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 6px 7px -4px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 7px 8px -4px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 7px 8px -4px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 7px 9px -4px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 8px 9px -5px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 8px 10px -5px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 8px 11px -5px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 9px 11px -5px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 9px 12px -6px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 10px 13px -6px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 10px 13px -6px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 10px 14px -6px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 11px 14px -7px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
      `0px 11px 15px -7px ${
        mode === "light" ? colors.shadow.light : colors.shadow.dark
      }`,
    ],
  });
};

// Export the gradient background function for use in components
export { getGradientBackground };
