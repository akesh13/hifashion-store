"use client";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    h1: {
      fontSize: "1.4rem",
    },
  },
  palette: {
    primary: {
      main: "#023020",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "18px",
        },
      },
    },
  },
});

export default theme;
