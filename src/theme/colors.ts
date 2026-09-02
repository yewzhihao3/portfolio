export const colors = {
  // Primary brand colors (Modern Violet / Indigo Accent)
  primary: {
    main: "#8b5cf6",
    light: "#a78bfa",
    dark: "#6d28d9",
  },

  // Secondary colors
  secondary: {
    main: "#ec4899",
  },

  // Background colors
  background: {
    // Main page background
    default: {
      light: "#f8fafc",
      dark: "#09090b",
    },
    // Card/Paper background
    paper: {
      light: "#ffffff",
      dark: "#121218",
    },
    // Section background
    section: {
      light: "#f1f5f9",
      dark: "#0f0f14",
    },
    // Gradient backgrounds
    gradient: {
      light: {
        start: "rgba(248,250,252,1)",
        end: "rgba(241,245,249,1)",
      },
      dark: {
        start: "rgba(9,9,11,1)",
        end: "rgba(18,18,24,1)",
      },
    },
  },

  // Text colors
  text: {
    primary: {
      light: "#0f172a",
      dark: "#f8fafc",
    },
    secondary: {
      light: "#475569",
      dark: "#94a3b8",
    },
  },

  // Border colors
  border: {
    light: "rgba(0, 0, 0, 0.08)",
    dark: "rgba(255, 255, 255, 0.08)",
  },

  // Overlay colors for glassmorphism effects
  overlay: {
    light: "rgba(255, 255, 255, 0.85)",
    dark: "rgba(9, 9, 11, 0.85)",
    background: {
      light: "rgba(255, 255, 255, 0.85)",
      dark: "rgba(18, 18, 24, 0.85)",
    },
    border: {
      light: "rgba(0, 0, 0, 0.06)",
      dark: "rgba(255, 255, 255, 0.1)",
    },
    text: {
      light: "#0f172a",
      dark: "rgba(255, 255, 255, 0.9)",
    },
  },

  // Shadow colors
  shadow: {
    light: "rgba(139, 92, 246, 0.08)",
    dark: "rgba(0, 0, 0, 0.5)",
  },

  // Hover state colors
  hover: {
    light: "rgba(139, 92, 246, 0.05)",
    dark: "rgba(255, 255, 255, 0.06)",
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
