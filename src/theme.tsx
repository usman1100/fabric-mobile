import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  cssVariables: true,
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#403D58",
    },
    secondary: {
      main: "#DBD56E",
    },
    text: {
      primary: "#403D58",
      secondary: "#F2EFEA",
    },
    background: {
      default: "#F2EFEA",
      paper: "#F2EFEA",
    },
  },
});
