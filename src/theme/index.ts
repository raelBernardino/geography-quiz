import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    palette: {
      primary: {
        main: string;
        light: string;
        dark?: string;
        contrastText?: string;
      };
    };
  }
  interface PaletteOptions {
    palette?: {
      primary?: {
        main?: string;
        light?: string;
        dark?: string;
        contrastText?: string;
      };
    };
  }
}

interface Typography {
  typography?: {
    fontFamily: string;
    fontSize?: number;
    fontWeightLight?: number;
    fontWeightHeavy?: number;
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCD1B",
      light: "#FAF1D3",
      contrastText: "#7C684B",
    },
    secondary: {
      main: "#FFF7E8",
      light: "#BFAD93",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightLight: 300,
    fontWeightMedium: 700,
    h1: {
      fontSize: "1.75em",
      padding: 2,
    },
    h2: {
      fontSize: "1.25em",
      padding: 4,
    },
  },
});

export default theme;
