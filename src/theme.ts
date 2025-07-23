import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const lightTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {},
            },
          ],
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#4C7578",
      contrastText: "#eeeeee",
    },
    secondary: {
      main: "#76ABAE",
      contrastText: "#222222",
    },
    background: {
      default: "#EEEEEE",
      paper: "#ffffff",
    },
    text: {
      primary: "#4C7578",
      secondary: "#111111",
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "red",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {},
            },
          ],
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#76ABAE",
      contrastText: "#111111",
    },
    secondary: {
      main: "#4C7578",
      contrastText: "#222222",
    },
    background: {
      default: "#31363F",
      paper: "#222831",
    },
    text: {
      primary: "#76ABAE",
      secondary: "#eeeeee",
    },
  },
});
