module.exports = {
  breakpoints: ["640px", "768px", "1024px", "1280px"],
  colors: {
    text: "#111",
    background: "#fff",
    primary: "#06f",
    secondary: "#f81",
    modes: {
      dark: {
        text: "#ededee",
        background: "#1a202c",
        primary: "#fb3640",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    hairline: 200,
    light: 300,
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: {
    sm: "0.8rem",
    lg: "1.2rem",
    xl: "1.5rem",
  },
  styles: {
    global: {
      "*": {
        m: 0,
        p: 0,
        listStyle: "none",
        border: "0 solid",
        borderColor: "border",
      },
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: "16px",
    },
  },

  // Variants
  text: {
    caps: {
      textTransform: "uppercase",
    },
  },
  button: {
    px: 3,
    py: 2,
    rounded: "5",
    color: "white",

    primary: {
      bg: "primary",
    },

    secondary: {
      bg: "secondary",
    },

    lg: {
      fontSize: "lg",
    },

    sm: {
      fontSize: "sm",
    },
  },
}
