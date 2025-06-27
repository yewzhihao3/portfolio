// Unified color configuration for the portfolio
export const colors = {
  // Primary brand colors
  primary: {
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
  },

  // Secondary colors
  secondary: {
    main: "#e1bee7",
  },

  // Background colors - ensuring consistency
  background: {
    // Main page background
    default: {
      light: "#ffffff",
      dark: "#121212",
    },
    // Card/Paper background
    paper: {
      light: "#f8f9fa",
      dark: "#1e1e1e",
    },
    // Section background (slightly different for visual separation)
    section: {
      light: "#f5f5f5",
      dark: "#1a1a1a",
    },
    // Gradient backgrounds
    gradient: {
      light: {
        start: "rgba(255,255,255,0)",
        end: "rgba(245,245,245,1)",
      },
      dark: {
        start: "rgba(18,18,18,0)",
        end: "rgba(30,30,30,1)",
      },
    },
  },

  // Text colors
  text: {
    primary: {
      light: "#333333",
      dark: "#ffffff",
    },
    secondary: {
      light: "#666666",
      dark: "#b3b3b3",
    },
  },

  // Border colors
  border: {
    light: "rgba(0, 0, 0, 0.12)",
    dark: "rgba(255, 255, 255, 0.12)",
  },

  // Overlay colors for glassmorphism effects
  overlay: {
    light: "rgba(255, 255, 255, 0.95)",
    dark: "rgba(0, 0, 0, 0.7)",
    background: {
      light: "rgba(255, 255, 255, 0.95)",
      dark: "rgba(0, 0, 0, 0.7)",
    },
    border: {
      light: "rgba(255, 255, 255, 0.2)",
      dark: "rgba(255, 255, 255, 0.1)",
    },
    text: {
      light: "#333333",
      dark: "rgba(255, 255, 255, 0.9)",
    },
  },

  // Shadow colors
  shadow: {
    light: "rgba(0, 0, 0, 0.1)",
    dark: "rgba(0, 0, 0, 0.3)",
  },

  // Hover state colors
  hover: {
    light: "rgba(0, 0, 0, 0.04)",
    dark: "rgba(255, 255, 255, 0.08)",
  },
};

// Helper function to get color based on mode
export const getColor = (colorKey: string, mode: "light" | "dark") => {
  const colorPath = colorKey.split(".");
  let color = colors as any;

  for (const key of colorPath) {
    color = color[key];
  }

  if (typeof color === "object" && (color.light || color.dark)) {
    return color[mode];
  }

  return color;
};

// Theme-aware color getters
export const getBackgroundColor = (
  type: "default" | "paper" | "section",
  mode: "light" | "dark"
) => {
  return colors.background[type][mode];
};

export const getTextColor = (
  type: "primary" | "secondary",
  mode: "light" | "dark"
) => {
  return colors.text[type][mode];
};

export const getGradientBackground = (mode: "light" | "dark") => {
  const gradient = colors.background.gradient[mode];
  return `linear-gradient(180deg, ${gradient.start} 0%, ${gradient.end} 100%)`;
};
