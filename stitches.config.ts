import { createStitches } from "@stitches/react";

export const { css, styled } = createStitches({
  theme: {
    colors: {
      primary: "#007bff",
      secondary: "#6c757d",
      success: "#28a745",
      danger: "#dc3545",
      warning: "#ffc107",
      info: "#17a2b8",
      light: "#f8f9fa",
      dark: "#343a40",
    },
  },
  media: {
    bp1: "(max-width: 640px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)",
  },
});;
